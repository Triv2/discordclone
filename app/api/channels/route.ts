import { currentProfile } from "@/lib/current-profile";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
) {
  try {
    const profile = await currentProfile();
    const { name, type } = await req.json();
    const { searchParams } = new URL(req.url);

    const serverId= searchParams.get('serverId');

  } catch (error){
    console.log("[CHANNELS_POST]", error);
    return new NextResponse("Internal Error", {status: 500});
  }
}