'use client'

import { Hero } from '@/components/library/hero'
import { Search } from '@/components/library/search'
import { FeaturedBooks } from '@/components/library/featured-books'
import { Events } from '@/components/library/events'
import { Membership } from '@/components/library/membership'
import { Testimonials } from '@/components/library/testimonials'
import { Newsletter } from '@/components/library/newsletter'

export default function Home() {
  return (
    <div className="min-h-full">
      <Hero />
      <Search />
      <FeaturedBooks />
      <Events />
      <Membership />
      <Testimonials />
      <Newsletter />
    </div>
  )
}
