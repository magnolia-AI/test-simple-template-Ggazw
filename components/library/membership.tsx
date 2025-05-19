'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

type MembershipTier = {
  id: number
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean
}

const membershipTiers: MembershipTier[] = [
  {
    id: 1,
    name: "Scholar",
    price: "50",
    description: "Essential access for the curious mind",
    features: [
      "Access to main collection",
      "Monthly reading events",
      "Online reservation system",
      "2 guest passes per year",
      "Digital archives access"
    ]
  },
  {
    id: 2,
    name: "Literati",
    price: "50",
    description: "Enhanced access for the dedicated reader",
    features: [
      "Full collection access",
      "Priority reservations",
      "Exclusive author events",
      "6 guest passes per year",
      "Private reading rooms",
      "Extended borrowing periods"
    ],
    popular: true
  },
  {
    id: 3,
    name: "Patron",
    price: "50",
    description: "Premium access for the discerning collector",
    features: [
      "Complete collection access",
      "Rare manuscripts viewing",
      "Private curator tours",
      "Unlimited guest passes",
      "24/7 library access",
      "Personal librarian service",
      "Annual collector's edition"
    ]
  }
]

export function Membership() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight mb-4">
            Exclusive Membership
          </h2>
          <p className="text-muted-foreground">
            Join our distinguished community of readers, scholars, and literary enthusiasts. 
            Our membership is offered by application only to maintain our intimate and 
            intellectually stimulating environment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {membershipTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="">
                {tier.popular && (
                  <div className="absolute -top-3 left-0 right-0 flex justify-center">
                    <span className="bg-primary text-primary-foreground text-xs font-medium py-1 px-3 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="font-serif text-3xl font-bold mb-6">
                    {tier.price} <span className="text-sm font-normal text-muted-foreground">/ year</span>
                  </div>
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant={tier.popular ? "default" : "outline"} 
                    className="w-full"
                  >
                    Apply Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
