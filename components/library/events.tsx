import { CalendarIcon, MapPinIcon, UsersIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  maxAttendees?: number;
}

const upcomingEvents: Event[] = [
  {
    id: "1",
    title: "Author Meet & Greet: Sarah Johnson",
    description: "Join us for an evening with bestselling author Sarah Johnson as she discusses her latest novel.",
    date: "June 15, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "Main Reading Room",
    attendees: 42,
    maxAttendees: 75
  },
  {
    id: "2",
    title: "Children's Story Hour",
    description: "A weekly reading session for children ages 4-8 with interactive activities.",
    date: "May 25, 2025",
    time: "10:30 AM - 11:30 AM",
    location: "Children's Section",
    attendees: 18,
    maxAttendees: 25
  },
  {
    id: "3",
    title: "Book Club: Classic Literature",
    description: "This month we're discussing 'Pride and Prejudice' by Jane Austen.",
    date: "June 2, 2025",
    time: "7:00 PM - 8:30 PM",
    location: "Study Room B",
    attendees: 15,
    maxAttendees: 20
  }
];

export function Events() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">Upcoming Events</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our community for exciting literary events, workshops, and gatherings.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="line-clamp-1">{event.title}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <CalendarIcon className="h-4 w-4" />
                  {event.date} • {event.time}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3 text-sm mb-3">{event.description}</p>
                <div className="flex items-center text-sm text-muted-foreground gap-4">
                  <div className="flex items-center gap-1">
                    <MapPinIcon className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <UsersIcon className="h-4 w-4" />
                    <span>
                      {event.attendees}/{event.maxAttendees || '∞'}
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Register</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline">View All Events</Button>
        </div>
      </div>
    </section>
  );
}
