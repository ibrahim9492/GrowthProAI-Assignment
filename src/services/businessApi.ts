// Mock API service to simulate backend functionality
interface BusinessRequest {
  name: string;
  location: string;
}

interface BusinessResponse {
  rating: number;
  reviews: number;
  headline: string;
}

const headlines = [
  "Why {name} is {location}'s Best-Kept Secret in 2025",
  "The Ultimate Guide to {name}: {location}'s Premier Destination",
  "Discover Why {name} Dominates {location}'s Market This Year",
  "{name}: Revolutionizing {location} One Customer at a Time",
  "From Local Favorite to Regional Star: {name}'s {location} Success Story",
  "The {name} Experience: Setting New Standards in {location}",
  "Why Smart {location} Residents Choose {name} Every Time",
  "{name}: The Hidden Gem That's Transforming {location}",
  "Breaking: {name} Becomes {location}'s Most Talked-About Business",
  "The Science Behind {name}'s Success in {location}"
];

const generateRandomData = (name: string, location: string): BusinessResponse => {
  // Generate consistent but pseudo-random data based on name and location
  const seed = name.length + location.length;
  const rating = Number((4.0 + (seed % 10) * 0.05).toFixed(1));
  const reviews = Math.floor(50 + (seed * 23) % 500);
  
  const headlineTemplate = headlines[seed % headlines.length];
  const headline = headlineTemplate.replace(/{name}/g, name).replace(/{location}/g, location);
  
  return {
    rating,
    reviews,
    headline
  };
};

export const businessApi = {
  // Simulate POST /business-data
  async getBusinessData(request: BusinessRequest): Promise<BusinessResponse> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));
    
    return generateRandomData(request.name, request.location);
  },

  // Simulate GET /regenerate-headline
  async regenerateHeadline(name: string, location: string): Promise<string> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 500));
    
    // Get a different headline by using current timestamp as additional randomness
    const timestamp = Date.now();
    const index = (name.length + location.length + timestamp) % headlines.length;
    const headlineTemplate = headlines[index];
    
    return headlineTemplate.replace(/{name}/g, name).replace(/{location}/g, location);
  }
};