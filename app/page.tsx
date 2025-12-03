import { VideoPlayer } from '@/components/VideoPlayer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto py-8 px-4">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">
              Cursed Web Decoding
            </h1>
            <p className="text-muted-foreground">
              Proof of concept: Extract byte-perfect frames from H264/MP4 videos in the browser
            </p>
          </div>
          
          <VideoPlayer />
          
          <div className="text-center text-sm text-muted-foreground max-w-2xl">
            <p>
              This demo uses the Web Codecs API to decode specific frames from H264 video files.
              Place your video files in <code className="bg-muted px-1 py-0.5 rounded">public/videos/</code> and
              access them via the API route.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
