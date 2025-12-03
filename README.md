# Cursed Web Decoding

A proof-of-concept web application demonstrating the usage of Web Video/Media Decoding APIs to extract and display specific frames from H264 (MP4) media files served via HTTP.

## Overview

This Next.js application showcases how to:
- Serve video files through a custom API route
- Accept frame numbers and video URLs from the user
- Decode and display specific frames from H264/MP4 videos (placeholder implementation)
- Use modern web technologies for video processing in the browser

## Features

- **Next.js 16** with TypeScript and App Router
- **Shadcn UI** components with Tailwind CSS for a modern, accessible interface
- **API Route** (`/api/videos`) for serving static video content
- **Video Player UI** with inputs for frame number and video URL
- **Canvas** element for displaying decoded frames
- **Custom Hook** (`useVideoDecoder`) - placeholder for Web Codecs API integration

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn UI
- **Package Manager**: npm (bun intended but has compatibility issues on some systems)

## Getting Started

### Prerequisites

- Node.js 20+ installed
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/victoryforphil/cursed-web-decoding.git
cd cursed-web-decoding
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Adding Video Files

1. Place your H264/MP4 video files in the `public/videos/` directory
2. Access them via the API route: `/api/videos?filename=your-video.mp4`
3. Enter the URL in the Video Player UI

## Project Structure

```
cursed-web-decoding/
├── app/
│   ├── api/
│   │   └── videos/          # API route for serving videos
│   │       └── route.ts
│   ├── globals.css          # Global styles with Shadcn theming
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page with VideoPlayer
├── components/
│   ├── ui/                  # Shadcn UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── input.tsx
│   └── VideoPlayer.tsx      # Main video player component
├── hooks/
│   └── useVideoDecoder.ts   # Placeholder hook for frame decoding logic
├── lib/
│   └── utils.ts             # Utility functions (cn helper)
├── public/
│   └── videos/              # Place your video files here
└── package.json
```

## Usage

1. **Add a video file**: Place an MP4/H264 video in `public/videos/` (e.g., `sample.mp4`)
2. **Enter the video URL**: Use `/api/videos?filename=sample.mp4` in the Video URL input
3. **Set frame number**: Enter the frame number you want to extract (0-indexed)
4. **Decode**: Click the "Decode Frame" button to process the request

**Note**: The current implementation is a placeholder. The actual Web Codecs API integration for frame decoding is pending implementation.

## API Routes

### GET `/api/videos`

Serves video files from the `public/videos/` directory.

**Query Parameters:**
- `filename` (required): Name of the video file to serve

**Example:**
```
GET /api/videos?filename=sample.mp4
```

**Response:**
- Success: Returns the video file with appropriate headers
- Error: Returns 400 if filename is missing, 404 if file not found

## Future Implementation

The `useVideoDecoder` hook is currently a placeholder. The full implementation will:

1. Fetch video files via HTTP
2. Use the [VideoDecoder API](https://developer.mozilla.org/en-US/docs/Web/API/VideoDecoder) from Web Codecs
3. Decode frames sequentially until reaching the specified frame number
4. Render the decoded frame to the canvas element
5. Support byte-perfect frame extraction

## Development

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

### Start Production Server

```bash
npm run start
```

## Contributing

This is a proof-of-concept project. Contributions are welcome to implement the full Web Codecs API integration.

## License

See LICENSE file for details.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Web Codecs API](https://developer.mozilla.org/en-US/docs/Web/API/WebCodecs_API)
- [Shadcn UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
