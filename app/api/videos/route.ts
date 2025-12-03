import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const filename = searchParams.get('filename');

  if (!filename) {
    return NextResponse.json(
      { error: 'Filename parameter is required' },
      { status: 400 }
    );
  }

  // Sanitize filename to prevent directory traversal
  const sanitizedFilename = filename.replace(/[^a-zA-Z0-9._-]/g, '');
  
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
