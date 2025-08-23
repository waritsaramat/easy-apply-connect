import FeatureCard from "./FeatureCard";
import { 
  Building2, 
  Users, 
  Target, 
  BarChart3, 
  UserCheck, 
  Zap,
  Shield,
  Calendar
} from "lucide-react";

const EmployerFeatures = () => {
  const features = [
    {
      icon: Building2,
      title: "Organization Setup",
      description: "Complete company registration and role management system",
      features: [
        "Legal entity verification",
        "Multi-role user permissions",
        "Flexible billing & subscriptions",
        "Department management"
      ],
      gradient: "primary" as const
    },
    {
      icon: Target,
      title: "Culture Profile",
      description: "AI-powered organizational culture fingerprinting",
      features: [
        "Online culture assessment",
        "Multiple profile support",
        "Job position linking",
        "Team-specific profiles"
      ],
      gradient: "secondary" as const
    },
    {
      icon: Users,
      title: "Job Management",
      description: "Streamlined job posting and candidate pipeline",
      features: [
        "Direct posting or ATS integration",
        "Culture profile matching",
        "Recruiter assignment",
        "Hiring manager collaboration"
      ],
      gradient: "accent" as const
    },
    {
      icon: UserCheck,
      title: "AREE Score System",
      description: "Intelligent candidate ranking and insights",
      features: [
        "Automated candidate scoring",
        "Skill & culture fit analysis",
        "Stay probability prediction",
        "Explainable AI decisions"
      ],
      gradient: "primary" as const
    },
    {
      icon: Zap,
      title: "Collaboration Tools",
      description: "Seamless team workflow and feedback system",
      features: [
        "Recruiter-manager handoffs",
        "Real-time feedback",
        "Interview scheduling",
        "Calendar integration"
      ],
      gradient: "secondary" as const
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Data-driven hiring insights and ROI tracking",
      features: [
        "Time-to-hire metrics",
        "Cost-per-hire analysis",
        "Retention forecasting",
        "Diversity & bias monitoring"
      ],
      gradient: "accent" as const
    }
  ];

  return (
    <section id="employers" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            For <span className="gradient-text">Employers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive recruitment tools designed for HR professionals, recruiters, and hiring managers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-card rounded-xl p-6 shadow-medium border">
            <Shield className="w-8 h-8 text-primary" />
            <div className="text-left">
              <h4 className="font-semibold">Integration Center</h4>
              <p className="text-sm text-muted-foreground">
                Connect with ATS, HRIS, Payroll systems • API & Webhook support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployerFeatures;