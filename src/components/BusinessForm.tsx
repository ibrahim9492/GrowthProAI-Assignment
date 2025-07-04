import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Building2, MapPin, Sparkles } from "lucide-react";

interface BusinessFormProps {
  onSubmit: (data: { name: string; location: string }) => void;
  isLoading: boolean;
}

export function BusinessForm({ onSubmit, isLoading }: BusinessFormProps) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [errors, setErrors] = useState<{ name?: string; location?: string }>({});

  const validateForm = () => {
    const newErrors: { name?: string; location?: string } = {};
    
    if (!name.trim()) {
      newErrors.name = "Business name is required";
    }
    
    if (!location.trim()) {
      newErrors.location = "Location is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit({ name: name.trim(), location: location.trim() });
    }
  };

  return (
    <Card className="bg-gradient-card border-border/50 shadow-card backdrop-blur-sm">
      <CardHeader className="text-center pb-6">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary">
          <Sparkles className="h-8 w-8 text-background" />
        </div>
        <CardTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Business Analytics Dashboard
        </CardTitle>
        <p className="text-muted-foreground">
          Get AI-powered insights for your local business
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="business-name" className="text-sm font-medium">
              Business Name
            </Label>
            <div className="relative">
              <Building2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="business-name"
                type="text"
                placeholder="e.g., Cake & Co"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-10 transition-smooth border-border/50 focus:border-primary"
                disabled={isLoading}
              />
            </div>
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="location" className="text-sm font-medium">
              Location
            </Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="location"
                type="text"
                placeholder="e.g., Mumbai"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-10 transition-smooth border-border/50 focus:border-primary"
                disabled={isLoading}
              />
            </div>
            {errors.location && (
              <p className="text-sm text-destructive">{errors.location}</p>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-primary hover:opacity-90 transition-smooth text-background font-semibold"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                Analyzing Business...
              </div>
            ) : (
              "Get Business Insights"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}