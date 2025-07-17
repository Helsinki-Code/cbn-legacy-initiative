import { Heart, Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import cbnLogo from '@/assets/cbn-logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Subscribe for Newsletter</h3>
            <p className="text-gray-300 mb-6">Stay updated with our latest activities and events</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white text-gray-900"
              />
              <Button variant="cta" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img src={cbnLogo} alt="CBN Trust" className="h-10 w-10" />
                <div>
                  <h3 className="text-lg font-bold">CBN TRUST</h3>
                  <p className="text-xs text-gray-400">WE WORK THE TALK!</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Inspired by the visionary leadership of Chandrababu Naidu, CBN Trust is dedicated to bringing 
                socio-economic change in Andhra Pradesh through education, healthcare, and community development.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-gray-300 hover:text-secondary transition-colors">About Us</Link></li>
                <li><Link to="/our-work" className="text-gray-300 hover:text-secondary transition-colors">Our Work</Link></li>
                <li><Link to="/events" className="text-gray-300 hover:text-secondary transition-colors">Events</Link></li>
                <li><Link to="/gallery" className="text-gray-300 hover:text-secondary transition-colors">Gallery</Link></li>
                <li><Link to="/news" className="text-gray-300 hover:text-secondary transition-colors">Latest News</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-secondary transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Our Programs */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Our Programs</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Education Support</a></li>
                <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Healthcare Services</a></li>
                <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Rural Development</a></li>
                <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Disaster Relief</a></li>
                <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Women Empowerment</a></li>
                <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Youth Development</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact Info</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 mt-1 text-secondary flex-shrink-0" />
                  <p className="text-gray-300">
                    CBN Trust Office,<br />
                    Amaravati, Andhra Pradesh<br />
                    India - 522020
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-secondary" />
                  <p className="text-gray-300">+91 9999999999</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-secondary" />
                  <p className="text-gray-300">info@cbntrust.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-sm">
            <p className="text-gray-400">
              Copyright © 2024 CBN Trust. All rights reserved.
            </p>
            <p className="text-gray-400 flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> for humanity
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;