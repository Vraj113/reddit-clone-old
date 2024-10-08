import { getLinkPreview } from "link-preview-js";
import { NextResponse } from "next/server";

export async function PUT(req) {
  const body = await req.json();
  const link = body?.link;

  console.log(link);

  try {
    const previewData = await getLinkPreview(link);

    return NextResponse.json(previewData);
  } catch (err) {
    console.error("Error fetching link preview:", err);
    return NextResponse.json({ error: "Failed to fetch preview" });
  }
}
