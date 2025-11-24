import dynamic from "next/dynamic";

const Team = dynamic(() => import("./computer/Team"), { ssr: false });
const About = dynamic(() => import("./computer/About"), { ssr: false });
const FAQ = dynamic(() => import("./computer/FAQ"), { ssr: false });

const Hero: React.FC = () => {
  return (
    <main className="mt-[250vw] min-h-screen bg:mt-[60vw]">
      <About />
      <Team />
      <FAQ />
    </main>
  );
};

export default Hero;