import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EmployerFeatures from "@/components/EmployerFeatures";
import CandidateFeatures from "@/components/CandidateFeatures";
import Analytics from "@/components/Analytics";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <EmployerFeatures />
        <CandidateFeatures />
        <Analytics />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
