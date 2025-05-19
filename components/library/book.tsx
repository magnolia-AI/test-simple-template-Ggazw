import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BookProps {
  title: string;
  author: string;
  coverImage: string;
  description: string;
  available?: boolean;
}

export function Book({ title, author, coverImage, description, available = true }: BookProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group">
      <div className="relative aspect-[2/3] overflow-hidden">
        <Image 
          src={coverImage} 
          alt=""
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        {!available && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
            <span className="text-white font-semibold px-3 py-1 bg-red-600 rounded-md">Checked Out</span>
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg line-clamp-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{author}</p>
        <p className="text-sm line-clamp-2 mb-3">{description}</p>
        <Button 
          variant={available ? "default" : "outline"} 
          size="sm" 
          className="w-full"
          disabled={!available}
        >
          {available ? "Reserve" : "Join Waitlist"}
        </Button>
      </CardContent>
    </Card>
  );
}
