import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                AI-Powered{" "}
                <span className="gradient-text">Recruitment</span>{" "}
                Platform
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Connect exceptional talent with great companies using AREE's intelligent matching system. 
                Reduce hiring time, improve culture fit, and predict success.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Get Started Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-12 h-12 gradient-hero rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">Smart Matching</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <Target className="w-6 h-6 text-secondary-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">Culture Fit</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-accent-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">Analytics</p>
              </div>
            </div>
          </div>

          <div className="relative lg:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={heroImage} 
                alt="AREE Platform interface showing recruitment analytics and candidate matching"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 gradient-hero opacity-20"></div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-medium border">
              <div className="text-2xl font-bold text-primary">85%</div>
              <div className="text-sm text-muted-foreground">Better Culture Fit</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card rounded-xl p-6 shadow-medium border">
              <div className="text-2xl font-bold text-secondary">50%</div>
              <div className="text-sm text-muted-foreground">Faster Hiring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;