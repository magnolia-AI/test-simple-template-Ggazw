import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-medium">The Athenaeum</h3>
            <p className="text-slate-400 text-sm">
              A sanctuary for literary minds since 1895. Our exclusive membership provides access to rare collections and intellectual discourse.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Explore</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/collection" className="hover:text-white transition-colors">Collection</Link></li>
              <li><Link href="/events" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link href="/membership" className="hover:text-white transition-colors">Membership</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Visit Us</h4>
            <address className="not-italic text-slate-400 text-sm space-y-2">
              <p>42 Berkeley Square</p>
              <p>Mayfair, London W1J 5AW</p>
              <p>United Kingdom</p>
              <p className="pt-2">+44 20 7123 4567</p>
              <p className="text-slate-300">info@athenaeum.com</p>
            </address>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Connect</h4>
            <div className="flex space-x-4">
              <Link href="https://twitter.com" className="hover:text-slate-300 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="https://instagram.com" className="hover:text-slate-300 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="https://facebook.com" className="hover:text-slate-300 transition-colors">
                <Facebook size={20} />
              </Link>
            </div>
            <div className="mt-6">
              <h5 className="text-sm font-medium mb-2">Opening Hours</h5>
              <p className="text-slate-400 text-sm">Monday to Friday: 9am - 9pm</p>
              <p className="text-slate-400 text-sm">Saturday: 10am - 6pm</p>
              <p className="text-slate-400 text-sm">Sunday: 12pm - 5pm</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} The Athenaeum. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/terms" className="text-slate-500 text-sm hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="text-slate-500 text-sm hover:text-white transition-colors">Privacy</Link>
            <Link href="/cookies" className="text-slate-500 text-sm hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
