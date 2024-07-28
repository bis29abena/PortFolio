import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { email, password } = await request.json();

  try {
    if (email !== null) {
      const user = await User.findOne({ email: email });

      if (user) {
        const correctPassword = await bcrypt.compare(password, user.password);

        if (correctPassword) {
          return new NextResponse(JSON.stringify(user), { status: 201 });
        } else {
          return new NextResponse("Password is incorrect", { status: 200 });
        }
      } else {
        return new NextResponse("User not found", { status: 200 });
      }
    }
  } catch (error) {
    return new NextResponse("An error Occured", { status: 500 });
  }
};
