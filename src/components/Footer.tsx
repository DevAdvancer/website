import { Mail, Phone, MapPin, Linkedin, Twitter, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Container from "@/components/ui/Container";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/contact" }
  ];

  const services = [
    { name: "Educational Services", href: "/educational-services" },
    { name: "Software Solutions", href: "/software-solutions" },
    { name: "Virtual Assistance", href: "/virtual-assistance" },
    { name: "Legal Consulting", href: "/legal-consulting" }
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith('/#')) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(href.replace('/#', ''));
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      navigate(href);
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Univolve Consulting</h3>
              <p className="text-gray-300 leading-relaxed">
                Transforming businesses through expert consulting across education, technology, virtual assistance, and legal services.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-gray-300 text-sm">hello@univolveconsulting.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-gray-300 text-sm">+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-gray-300 text-sm">Kolkata, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigation(link.href)}
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigate(service.href)}
                    className="text-gray-300 hover:text-primary transition-colors text-sm text-left"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Stay Connected</h4>
            <p className="text-gray-300 text-sm mb-4">
              Follow us for the latest insights and updates.
            </p>

            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-lg hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-lg hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-lg hover:bg-primary transition-colors"
                aria-label="Website"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>

            <div className="space-y-3">
              <p className="text-gray-300 text-sm">
                Ready to transform your business?
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              >
                Get Started Today →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Univolve Consulting. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <button
                onClick={() => navigate('/privacy-policy')}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => navigate('/terms-of-service')}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Terms of Service
              </button>
              <button
                onClick={() => navigate('/cookie-policy')}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
