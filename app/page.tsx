import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Speak from "@/components/Speak";

export default function Home() {
  return (
    <main className="relative bg-[#000000] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
        <Speak />
        <Footer />
      </div>
    </main>
  );
}
