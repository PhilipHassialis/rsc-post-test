import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  return NextResponse.json({ message: "all ok post" });
}

export async function GET(req: NextRequest) {
  return NextResponse.json({ message: "all ok get" });
}
