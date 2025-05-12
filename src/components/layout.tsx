
import { Navigation } from "@/components/ui/navigation";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import  logofooter from '../assets/logo/logo-footer.png'
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  ArrowUp
} from "lucide-react";
import { Link } from "react-router-dom";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
      
      <footer className="bg-gray-900 text-white py-16 mt-20 border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-6">
            
                <img src={logofooter}/>
           
              <p className="text-gray-400 text-center">Leading the outdoor advertising revolution across India since 2008.</p>
              {/* <div className="flex space-x-4">
                {[
                  { icon: <Facebook size={20} />, name: "Facebook" },
                  { icon: <Twitter size={20} />, name: "Twitter" },
                  { icon: <Instagram size={20} />, name: "Instagram" },
                  { icon: <Linkedin size={20} />, name: "LinkedIn" },
                ].map((social) => (
                  <a 
                    key={social.name} 
                    href="#" 
                    aria-label={social.name}
                    className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors text-gray-400 hover:text-white"
                  >
                    {social.icon}
                  </a>
                ))}
              </div> */}
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"><span className="mr-2">•</span>About Us</Link></li>
                <li><Link to="/solutions" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"><span className="mr-2">•</span>Solutions</Link></li>
                <li><Link to="/projects" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"><span className="mr-2">•</span>Projects</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"><span className="mr-2">•</span>Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Our Solutions</h4>
              <ul className="space-y-4">
                <li><a href="/solutions" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"><span className="mr-2">•</span>LED Screens</a></li>
                <li><a href="/solutions" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"><span className="mr-2">•</span>Hoardings & Billboards</a></li>
                <li><a href="/solutions" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"><span className="mr-2">•</span>Bus Shelter Advertising</a></li>
                <li><a href="/solutions" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"><span className="mr-2">•</span>Transit Media</a></li>
                <li><a href="/solutions" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"><span className="mr-2">•</span>Digital Marketing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center">
                  <MapPin className="mr-3 text-blue-400" size={18} />
                  <p>721/26, 3rd Floor, 38th Cross,<br/>18th Main Jayanagar, Bangalore</p>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-3 text-blue-400" size={18} />
                  <p>97408 82799</p>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-3 text-blue-400" size={18} />
                  <p>info@benakaautomation.com</p>
                </div>
                
              </div>
               <div className="flex space-x-4 mt-4">
                {[
                  { icon: <Facebook size={20} />, name: "Facebook" },
                  { icon: <Twitter size={20} />, name: "Twitter" },
                  { icon: <Instagram size={20} />, name: "Instagram" },
                  { icon: <Linkedin size={20} />, name: "LinkedIn" },
                ].map((social) => (
                  <a 
                    key={social.name} 
                    href="#" 
                    aria-label={social.name}
                    className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors text-gray-400 hover:text-white"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">&copy; {new Date().getFullYear()} Benaka Automation Pvt. Ltd. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
        
        {/* Scroll to top button */}
        <button 
          onClick={scrollToTop}
          className="absolute bottom-8 right-8 p-3 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="text-white" />
        </button>
      </footer>
    </div>
  );
};
