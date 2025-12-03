'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useVideoDecoder } from '@/hooks/useVideoDecoder';

export function VideoPlayer() {
  const [videoUrl, setVideoUrl] = useState('/api/videos?filename=sample.mp4');
  const [frameNumber, setFrameNumber] = useState(0);

  const { canvasRef, isLoading, error, decodeFrame } = useVideoDecoder({
    videoUrl,
    frameNumber,
  });

  const handleDecodeFrame = () => {
    decodeFrame();
  };

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Web Video Frame Decoder</CardTitle>
        <CardDescription>
          Extract and display a specific frame from an H264/MP4 video using Web Codecs API
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Video URL Input */}
        <div className="space-y-2">
          <label htmlFor="video-url" className="text-sm font-medium">
            Video URL
          </label>
          <Input
            id="video-url"
            type="text"
            placeholder="Enter video URL or path"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
          />
          <p className="text-xs text-muted-foreground">
            Use /api/videos?filename=your-video.mp4 to serve from public/videos/
          </p>
        </div>

        {/* Frame Number Input */}
        <div className="space-y-2">
          <label htmlFor="frame-number" className="text-sm font-medium">
            Frame Number
          </label>
          <Input
            id="frame-number"
            type="number"
            min="0"
            placeholder="Enter frame number (e.g., 0, 30, 60)"
            value={frameNumber}
            onChange={(e) => setFrameNumber(parseInt(e.target.value) || 0)}
          />
          <p className="text-xs text-muted-foreground">
            Frame number to extract (0-indexed)
          </p>
        </div>

        {/* Decode Button */}
        <Button 
          onClick={handleDecodeFrame} 
          disabled={isLoading || !videoUrl}
          className="w-full"
        >
          {isLoading ? 'Decoding...' : 'Decode Frame'}
        </Button>

        {/* Error Display */}
        {error && (
          <div className="p-4 rounded-md bg-destructive/10 border border-destructive/20">
            <p className="text-sm text-destructive font-medium">Error: {error}</p>
          </div>
        )}

        {/* Canvas Display */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Frame Output</label>
          <div className="border rounded-lg overflow-hidden bg-black">
            <canvas
              ref={canvasRef}
              width={960}
              height={540}
              className="w-full h-auto"
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Canvas displays the decoded frame at 960x540 resolution
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
