import FeatureCard from "./FeatureCard";
import { 
  UserPlus, 
  FileText, 
  Brain, 
  MousePointer, 
  TrendingUp, 
  Smartphone,
  Award,
  MessageSquare
} from "lucide-react";

const CandidateFeatures = () => {
  const features = [
    {
      icon: UserPlus,
      title: "Profile & Registration",
      description: "Quick signup with AI-powered profile creation",
      features: [
        "Multi-platform login options",
        "AI resume parsing",
        "Skills & experience auto-fill",
        "eKYC verification system"
      ],
      gradient: "secondary" as const
    },
    {
      icon: Brain,
      title: "Smart Assessments",
      description: "Comprehensive evaluation for better matching",
      features: [
        "Culture fit personality tests",
        "Technical skill assessments",
        "Behavioral analysis",
        "Engagement tracking"
      ],
      gradient: "primary" as const
    },
    {
      icon: Award,
      title: "AREE Score Insights",
      description: "Personal performance analytics and guidance",
      features: [
        "Profile completeness score",
        "Skill gap analysis",
        "Improvement recommendations",
        "Development roadmap"
      ],
      gradient: "accent" as const
    },
    {
      icon: MousePointer,
      title: "Talent Passport",
      description: "One-click application system for multiple companies",
      features: [
        "Single profile, multiple applications",
        "Application status tracking",
        "Interview notifications",
        "Offer management"
      ],
      gradient: "primary" as const
    },
    {
      icon: TrendingUp,
      title: "Career Development",
      description: "AI-powered career coaching and growth tools",
      features: [
        "Resume optimization coach",
        "Cover letter generator",
        "Skill development suggestions",
        "Career path mapping"
      ],
      gradient: "secondary" as const
    },
    {
      icon: Smartphone,
      title: "Mobile Experience",
      description: "Seamless mobile-first user interface",
      features: [
        "Mobile-optimized design",
        "Push notifications",
        "Multi-language support",
        "Real-time updates"
      ],
      gradient: "accent" as const
    }
  ];

  return (
    <section id="candidates" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            For <span className="gradient-text">Job Seekers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering candidates with AI-driven insights and tools for career success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="mt-16 bg-card rounded-2xl p-8 shadow-medium border text-center">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <MessageSquare className="w-12 h-12 text-primary mx-auto" />
              <h3 className="text-2xl font-bold">Talent Passport Benefits</h3>
              <p className="text-muted-foreground">
                Apply to multiple companies instantly, get real feedback, and track your career journey
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">3x</div>
                  <div className="text-sm text-muted-foreground">Faster Applications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">95%</div>
                  <div className="text-sm text-muted-foreground">Profile Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandidateFeatures;