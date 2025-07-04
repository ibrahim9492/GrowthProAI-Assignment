import { useState } from "react";
import { BusinessForm } from "@/components/BusinessForm";
import { BusinessCard } from "@/components/BusinessCard";
import { businessApi } from "@/services/businessApi";
import { useToast } from "@/hooks/use-toast";

interface BusinessData {
  name: string;
  location: string;
  rating: number;
  reviews: number;
  headline: string;
}

export default function Dashboard() {
  const [businessData, setBusinessData] = useState<BusinessData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRegenerating, setIsRegenerating] = useState(false);
  const { toast } = useToast();

  const handleFormSubmit = async (formData: { name: string; location: string }) => {
    setIsLoading(true);
    
    try {
      const response = await businessApi.getBusinessData(formData);
      setBusinessData({
        ...formData,
        ...response
      });
      
      toast({
        title: "Success!",
        description: `Business insights generated for ${formData.name}`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch business data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegenerateHeadline = async () => {
    if (!businessData) return;
    
    setIsRegenerating(true);
    
    try {
      const newHeadline = await businessApi.regenerateHeadline(
        businessData.name,
        businessData.location
      );
      
      setBusinessData({
        ...businessData,
        headline: newHeadline
      });
      
      toast({
        title: "Headline Updated!",
        description: "New SEO headline generated successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to regenerate headline. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsRegenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              GrowthProAI
            </h1>
            <p className="text-muted-foreground mt-2">
              AI-Powered Local Business Analytics
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Business Form */}
          <BusinessForm onSubmit={handleFormSubmit} isLoading={isLoading} />
          
          {/* Business Data Card */}
          {businessData && (
            <div className="animate-in slide-in-from-bottom-4 duration-500">
              <BusinessCard
                data={businessData}
                onRegenerateHeadline={handleRegenerateHeadline}
                isRegenerating={isRegenerating}
              />
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>© 2025 GrowthProAI. Empowering local businesses with AI insights.</p>
        </div>
      </footer>
    </div>
  );
}