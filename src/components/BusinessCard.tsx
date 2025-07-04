import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Sparkles, RefreshCw, TrendingUp } from "lucide-react";

interface BusinessData {
  name: string;
  location: string;
  rating: number;
  reviews: number;
  headline: string;
}

interface BusinessCardProps {
  data: BusinessData;
  onRegenerateHeadline: () => void;
  isRegenerating: boolean;
}

export function BusinessCard({ data, onRegenerateHeadline, isRegenerating }: BusinessCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : i < rating
            ? "fill-yellow-400/50 text-yellow-400"
            : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <Card 
      className={`bg-gradient-card border-border/50 shadow-card backdrop-blur-sm transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary shadow-glow">
          <TrendingUp className="h-8 w-8 text-background" />
        </div>
        <CardTitle className="text-xl font-bold text-foreground">
          {data.name}
        </CardTitle>
        <Badge variant="secondary" className="mx-auto text-xs">
          {data.location}
        </Badge>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Google Rating Section */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2">
            <div className="flex">{renderStars(data.rating)}</div>
            <span className="text-2xl font-bold text-foreground">{data.rating}</span>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4" />
            <span className="text-sm">{data.reviews.toLocaleString()} reviews</span>
          </div>
        </div>

        {/* SEO Headline Section */}
        <div className="space-y-4 p-4 rounded-lg bg-accent/50 border border-border/50">
          <div className="flex items-center gap-2 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            AI-Generated SEO Headline
          </div>
          
          <p className="text-foreground font-medium leading-relaxed">
            "{data.headline}"
          </p>
          
          <Button
            onClick={onRegenerateHeadline}
            disabled={isRegenerating}
            variant="outline"
            size="sm"
            className="w-full border-primary/20 hover:bg-primary/10 transition-smooth"
          >
            {isRegenerating ? (
              <div className="flex items-center gap-2">
                <RefreshCw className="h-4 w-4 animate-spin" />
                Regenerating...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <RefreshCw className="h-4 w-4" />
                Regenerate SEO Headline
              </div>
            )}
          </Button>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 rounded-lg bg-primary/10 border border-primary/20">
            <div className="text-lg font-bold text-primary">A+</div>
            <div className="text-xs text-muted-foreground">SEO Score</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-primary/10 border border-primary/20">
            <div className="text-lg font-bold text-primary">92%</div>
            <div className="text-xs text-muted-foreground">Visibility</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}