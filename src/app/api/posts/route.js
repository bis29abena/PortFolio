import Post from "@/models/Post";
import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

//Get List Of Post
export const GET = async (req) => {
  //get the url from the req params
  const url = new URL(req.url);

  //extract the params from the url
  const email = url.searchParams.get("email");

  await connect();

  try {
    const user = await User.findOne({ email: email });

    const posts = await Post.find(user && { userId: user.id });
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse(err, { status: 500 });
  }
};

//Create a Post
export const POST = async (req) => {
  const { title, desc, image, content, email } = await req.json();

  await connect();

  try {
    const user = await User.findOne({ email: email });

    if (user) {
      const newPost = await new Post({
        title: title,
        desc: desc,
        image: image,
        content: content,
        userId: user.id,
      });

      await newPost.save();

      return new NextResponse("Post Created Successfully", { status: 201 });
    } else {
      return new NextResponse("User is not aunthenticated", { status: 200 });
    }
  } catch (error) {
    return new NextResponse("An Error Occured while creating the post", {
      status: 500,
    });
  }
};
