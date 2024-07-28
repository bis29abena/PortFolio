import Role from "@/models/Roles";
import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { fName, lName, mName, email, password } = await request.json();

  await connect();

  try {
    const emailExist = await User.findOne({ email: email });
    if (emailExist !== null) {
      return new NextResponse("Email already exist", {
        status: 200,
        statusText: "Error",
      });
    }
    if (password !== null) {
      var hashPassword = await bcrypt.hash(password, 10);
    } else {
      return new NextResponse("Password field is not availabe", {
        status: 204,
      });
    }

    const query = Role.findOne();
    query.where("Name").equals("User");
    const role = await query.exec();

    const newUser = new User({
      firstName: fName,
      lastName: lName,
      middleName: mName,
      email: email,
      password: hashPassword,
      role: role._id,
    });

    await newUser.save();

    return new NextResponse("User Has been Created Successfully", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse("User was not created", { status: 500 });
  }
};
