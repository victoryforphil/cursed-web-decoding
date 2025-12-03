import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join, basename } from 'path';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const filename = searchParams.get('filename');

  if (!filename) {
    return NextResponse.json(
      { error: 'Filename parameter is required' },
      { status: 400 }
    );
  }

  // Use basename to prevent directory traversal attacks
  const sanitizedFilename = basename(filename);
  
  // Additional validation: only allow alphanumeric, dots, dashes, and underscores
  if (!/^[a-zA-Z0-9._-]+$/.test(sanitizedFilename)) {
    return NextResponse.json(
      { error: 'Invalid filename format' },
      { status: 400 }
    );
  }
  
  try {
    const videoPath = join(process.cwd(), 'public', 'videos', sanitizedFilename);
    const videoBuffer = await readFile(videoPath);

    return new NextResponse(videoBuffer, {
      headers: {
        'Content-Type': 'video/mp4',
        'Content-Length': videoBuffer.length.toString(),
        'Accept-Ranges': 'bytes',
      },
    });
  } catch (error) {
    console.error('Error reading video file:', error);
    return NextResponse.json(
      { error: 'Video file not found' },
      { status: 404 }
    );
  }
}
