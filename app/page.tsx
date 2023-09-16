import Introduction from "@/components/card/Slider";
import VideoCard from "@/components/card/VideoCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Introduction />
      <VideoCard />
    </main>
  );
}
