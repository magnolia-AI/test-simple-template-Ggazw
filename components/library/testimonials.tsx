"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
 
interface Testimonial {
  id: number;
  quote: string;
  author: string;
  title: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "The Athenarum has been my intellectual sanctuary for over a decade. The rare manuscript collection is unparalleled.",
    author: "Professor Eleanor Harwick",
    title: "Oxford University"
  },
  {
    id: 2,
    quote: "As a writer, having access to The Athenarum's first editions and quiet reading rooms has been invaluable to my creative process.",
    author: "Jonathan Mercer",
    title: "Award-winning Novelist"
  },
  {
    id: 3,
    quote: "The curated events and discussions have introduced me to perspectives I would never have encountered elsewhere. Truly a cultural treasure.",
    author: "Dr. Sophia Chen",
    title: "Literary Historian"
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight">Member Testimonials</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Discover what our distinguished members have to say about their experience at The Athenarum.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-lg bg-white overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <Quote className="text-slate-300 mb-6" size={48} />
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id}
                    className={}
                  >
                    <blockquote className="text-xl md:text-2xl font-serif text-slate-800 italic">
                      {testimonial.quote}
                    </blockquote>
                    <div className="mt-6">
                      <p className="font-medium text-slate-900">{testimonial.author}</p>
                      <p className="text-sm text-slate-600">{testimonial.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



