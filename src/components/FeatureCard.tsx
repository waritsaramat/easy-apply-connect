import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  gradient?: "primary" | "secondary" | "accent";
}

const FeatureCard = ({ icon: Icon, title, description, features, gradient = "primary" }: FeatureCardProps) => {
  const gradientClass = {
    primary: "gradient-hero",
    secondary: "bg-secondary",
    accent: "bg-accent"
  }[gradient];

  return (
    <Card className="gradient-card border-0 shadow-medium hover:shadow-strong transition-smooth hover:scale-[1.02] group">
      <CardContent className="p-6 space-y-4">
        <div className={`w-14 h-14 ${gradientClass} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce`}>
          <Icon className="w-7 h-7 text-primary-foreground" />
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
        </div>

        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2 text-sm">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;