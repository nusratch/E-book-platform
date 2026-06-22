import Hero from "@/components/home/Hero";
import FeaturedEbooks from "@/components/home/FeaturedEbooks";

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