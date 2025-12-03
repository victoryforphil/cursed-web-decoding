'use client';

import { useRef, useState, useCallback } from 'react';

interface UseVideoDecoderProps {
  videoUrl: string;
  frameNumber: number;
}

interface UseVideoDecoderReturn {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  isLoading: boolean;
  error: string | null;
  decodeFrame: () => Promise<void>;
}

/**
 * Custom hook for decoding a specific frame from an H264/MP4 video
 * This is a placeholder implementation - actual decoding logic will use Web Codecs API
 * 
 * @param videoUrl - URL to the video file
 * @param frameNumber - The frame number to decode and display
 * @returns Object containing canvas ref, loading state, error state, and decode function
 */
export function useVideoDecoder({ videoUrl, frameNumber }: UseVideoDecoderProps): UseVideoDecoderReturn {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const decodeFrame = useCallback(async () => {
    if (!videoUrl) {
      setError('No video URL provided');
      return;
    }

    if (frameNumber < 0) {
      setError('Frame number must be non-negative');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // PLACEHOLDER: This is where the actual frame decoding logic will go
      // Future implementation will:
      // 1. Fetch the video file via HTTP
      // 2. Use VideoDecoder from Web Codecs API
      // 3. Decode frames until reaching the specified frame number
      // 4. Render the frame to the canvas

      console.log('Placeholder: Decoding frame', frameNumber, 'from', videoUrl);
      
      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, 500));

      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          // Placeholder: Draw a simple pattern to indicate the hook is working
          ctx.fillStyle = '#1a1a1a';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = '#ffffff';
          ctx.font = '16px monospace';
          ctx.textAlign = 'center';
          ctx.fillText(
            `Placeholder: Frame ${frameNumber}`,
            canvas.width / 2,
            canvas.height / 2 - 10
          );
          ctx.fillText(
            'Web Codecs API implementation pending',
            canvas.width / 2,
            canvas.height / 2 + 20
          );
        }
      }

      setIsLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to decode frame');
      setIsLoading(false);
    }
  }, [videoUrl, frameNumber]);

  return {
    canvasRef,
    isLoading,
    error,
    decodeFrame,
  };
}
