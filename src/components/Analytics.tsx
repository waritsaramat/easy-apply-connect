import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Users, 
  Shield,
  ArrowRight
} from "lucide-react";

const Analytics = () => {
  const metrics = [
    {
      icon: Clock,
      title: "Time-to-Hire",
      value: "50%",
      description: "Reduction in hiring time",
      color: "text-primary"
    },
    {
      icon: DollarSign,
      title: "Cost-per-Hire",
      value: "40%",
      description: "Lower recruitment costs",
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "Retention Rate",
      value: "85%",
      description: "12-month retention rate",
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "Bias Reduction",
      value: "90%",
      description: "More diverse hiring",
      color: "text-primary"
    }
  ];

  return (
    <section id="analytics" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Data-Driven <span className="gradient-text">Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your recruitment with actionable insights and proven ROI
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <Card key={index} className="gradient-card border-0 shadow-medium text-center group hover:shadow-strong transition-smooth">
              <CardContent className="p-6">
                <metric.icon className={`w-8 h-8 ${metric.color} mx-auto mb-4 group-hover:scale-110 transition-bounce`} />
                <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                  {metric.value}
                </div>
                <h4 className="font-semibold mb-1">{metric.title}</h4>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Advanced Analytics Dashboard</h3>
              <p className="text-muted-foreground">
                Get real-time insights into your recruitment performance with comprehensive 
                analytics that help you make data-driven decisions.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <BarChart3 className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium">Performance Metrics</h4>
                  <p className="text-sm text-muted-foreground">
                    Track time-to-hire, cost-per-hire, and quality metrics
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <TrendingUp className="w-5 h-5 text-secondary mt-1" />
                <div>
                  <h4 className="font-medium">Predictive Analytics</h4>
                  <p className="text-sm text-muted-foreground">
                    Forecast retention rates and identify high-potential candidates
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-accent mt-1" />
                <div>
                  <h4 className="font-medium">Bias Detection</h4>
                  <p className="text-sm text-muted-foreground">
                    Ensure fair and diverse hiring practices with AI monitoring
                  </p>
                </div>
              </div>
            </div>

            <Button variant="hero" className="group">
              View Demo Dashboard
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
            </Button>
          </div>

          <div className="relative">
            <Card className="gradient-card border-0 shadow-strong p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">ROI Calculator</h4>
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Current hiring cost</span>
                    <span className="font-medium">$15,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">With AREE</span>
                    <span className="font-medium text-secondary">$9,000</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Savings per hire</span>
                      <span className="font-bold text-accent text-lg">$6,000</span>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <p className="text-sm text-muted-foreground">
                    Annual savings for 50 hires: <span className="font-bold text-accent">$300,000</span>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;