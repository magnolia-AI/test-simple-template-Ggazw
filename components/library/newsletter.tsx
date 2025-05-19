import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Stay Updated with Our Library
          </h2>
          <p className="mb-8 text-primary-foreground/80">
            Subscribe to our newsletter to receive updates on new arrivals, events, and special promotions.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-primary-foreground text-primary" 
              required
            />
            <Button 
              type="submit" 
              variant="secondary"
              className="whitespace-nowrap"
            >
              Subscribe
            </Button>
          </form>
          
          <p className="mt-4 text-xs text-primary-foreground/70">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
