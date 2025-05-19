'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

type Book = {
  id: number
  title: string
  author: string
  cover: string
  category: string
}

const featuredBooks: Book[] = [
  {
    id: 1,
    title: "The Secret History",
    author: "Donna Tartt",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1287",
    category: "Fiction"
  },
  {
    id: 2,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1776",
    category: "Non-Fiction"
  },
  {
    id: 3,
    title: "The Goldfinch",
    author: "Donna Tartt",
    cover: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1288",
    category: "Fiction"
  },
  {
    id: 4,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1287",
    category: "Psychology"
  },
  {
    id: 5,
    title: "The Overstory",
    author: "Richard Powers",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1298",
    category: "Fiction"
  },
  {
    id: 6,
    title: "Educated",
    author: "Tara Westover",
    cover: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?q=80&w=1290",
    category: "Memoir"
  },
]

export function FeaturedBooks() {
  const [hoveredBook, setHoveredBook] = useState<number | null>(null)

  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight mb-4">
              Featured Collection
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Discover our carefully curated selection of literary masterpieces, rare editions, and thought-provoking works available exclusively to our members.
            </p>
          </div>
          <Button variant="link" className="mt-4 md:mt-0">
            View Full Collection →
          </Button>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {featuredBooks.map((book) => (
              <CarouselItem key={book.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <motion.div 
                  whileHover={{ y: -10 }}
                  onMouseEnter={() => setHoveredBook(book.id)}
                  onMouseLeave={() => setHoveredBook(null)}
                  className="h-full"
                >
                  <Card className="h-full overflow-hidden border-0 shadow-lg">
                    <CardContent className="p-0 h-full flex flex-col">
                      <div className="relative h-[400px] overflow-hidden">
                        <img 
                          src={book.cover} 
                          alt={book.title}
                          className="w-full h-full object-cover transition-transform duration-500 ease-out"
                          style={{
                            transform: hoveredBook === book.id ? 'scale(1.05)' : 'scale(1)'
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
                          <span className="text-xs font-medium text-primary/80 mb-2">
                            {book.category}
                          </span>
                          <h3 className="font-serif text-xl font-bold text-white mb-1">
                            {book.title}
                          </h3>
                          <p className="text-white/80 text-sm">
                            by {book.author}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-8">
            <CarouselPrevious className="static" />
            <CarouselNext className="static" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
