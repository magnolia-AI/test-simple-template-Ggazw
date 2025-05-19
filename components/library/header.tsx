'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 10)
    })
  }

  return (
    <header className={}>
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold tracking-tighter">Athenaeum</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/collection" className="text-sm font-medium hover:text-primary transition-colors">
            Collection
          </Link>
          <Link href="/events" className="text-sm font-medium hover:text-primary transition-colors">
            Events
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/membership" className="text-sm font-medium hover:text-primary transition-colors">
            Membership
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" size="sm">Login</Button>
          </Link>
          <Link href="/apply">
            <Button variant="default" size="sm">Apply for Membership</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-6 mt-10">
              <Link href="/collection" className="text-lg font-medium hover:text-primary transition-colors">
                Collection
              </Link>
              <Link href="/events" className="text-lg font-medium hover:text-primary transition-colors">
                Events
              </Link>
              <Link href="/about" className="text-lg font-medium hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/membership" className="text-lg font-medium hover:text-primary transition-colors">
                Membership
              </Link>
              <div className="flex flex-col gap-3 mt-4">
                <Link href="/login">
                  <Button variant="outline" className="w-full">Login</Button>
                </Link>
                <Link href="/apply">
                  <Button variant="default" className="w-full">Apply for Membership</Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
