import Hero from "@/components/home/Hero";
import FeaturedEbooks from "@/components/home/FeaturedEbooks";
import TopWriters from "@/components/home/TopWriters";
import Genres from "@/components/home/Genres";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedEbooks />
      <TopWriters />
      <Genres />
    </>
  );
}