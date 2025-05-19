import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SearchIcon } from "lucide-react";

export function Search() {
  return (
    <section className="py-12 bg-accent/20">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">
              Find Your Next Great Read
            </h2>
            <p className="text-muted-foreground">
              Search our extensive collection of books, journals, and digital resources.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-grow">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search by title, author, or keyword" 
                className="pl-10 w-full"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="fiction">Fiction</SelectItem>
                  <SelectItem value="nonfiction">Non-Fiction</SelectItem>
                  <SelectItem value="children">Children's Books</SelectItem>
                  <SelectItem value="academic">Academic</SelectItem>
                  <SelectItem value="digital">Digital Resources</SelectItem>
                </SelectContent>
              </Select>
              
              <Button type="submit" className="whitespace-nowrap">
                Search
              </Button>
            </div>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2 justify-center text-sm">
            <span className="text-muted-foreground">Popular searches:</span>
            <Button variant="link" className="h-auto p-0">New Releases</Button>
            <Button variant="link" className="h-auto p-0">Award Winners</Button>
            <Button variant="link" className="h-auto p-0">Book Club Picks</Button>
            <Button variant="link" className="h-auto p-0">Bestsellers</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
