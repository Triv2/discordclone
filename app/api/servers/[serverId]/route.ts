import { NextResponse } from "next/server"

export async function PATCH (
  req: Request,
  { params }: { params: { serverId: string } },
){
  try{
    const profile = await current
  } catch(error) {
    console.log("[SERVER_ID_PATCH]", error)
    return new NextResponse("Intenal Error", {status: 500});
  }
}