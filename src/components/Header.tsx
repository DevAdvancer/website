import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Container from "@/components/ui/Container";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(href.replace('#', ''));
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(href.replace('#', ''));
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <Container className="py-3 lg:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 lg:space-x-3">
            <img
              src="/UnivolveConsultancy.png"
              alt="Univolve Consulting Logo"
              className="h-8 lg:h-10 w-auto"
            />
            <div className="text-lg lg:text-xl font-bold text-foreground">
              UNIVOLVE CONSULTING
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigate('/')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors"
              >
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {isServicesOpen && (
                <div
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-0 w-56 bg-background border border-border rounded-lg shadow-lg py-2 z-50"
                >
                  <button
                    onClick={() => navigate('/educational-services')}
                    className="w-full text-left px-4 py-2 hover:bg-secondary transition-colors"
                  >
                    Educational Services
                  </button>
                  <button
                    onClick={() => navigate('/software-solutions')}
                    className="w-full text-left px-4 py-2 hover:bg-secondary transition-colors"
                  >
                    Software Solutions
                  </button>
                  <button
                    onClick={() => navigate('/virtual-assistance')}
                    className="w-full text-left px-4 py-2 hover:bg-secondary transition-colors"
                  >
                    Virtual Assistance
                  </button>
                  <button
                    onClick={() => navigate('/legal-consulting')}
                    className="w-full text-left px-4 py-2 hover:bg-secondary transition-colors"
                  >
                    Legal Consulting
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavigation('#about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => handleNavigation('/contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            <Button variant="hero" size="sm" onClick={() => handleNavigation('/contact')} className="hidden lg:inline-flex px-6 py-2 font-medium">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <nav className="py-4 space-y-2 border-t border-border">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => { navigate('/'); setIsMenuOpen(false); }}
                className="text-left text-foreground hover:text-primary transition-colors py-2 px-2 rounded-md hover:bg-muted/50"
              >
                Home
              </button>

              {/* Mobile Services */}
              <div className="space-y-1">
                <div className="text-foreground font-medium py-2 px-2">Services</div>
                <button
                  onClick={() => { navigate('/educational-services'); setIsMenuOpen(false); }}
                  className="w-full text-left text-muted-foreground hover:text-primary transition-colors py-2 pl-6 pr-2 rounded-md hover:bg-muted/50"
                >
                  Educational Services
                </button>
                <button
                  onClick={() => { navigate('/software-solutions'); setIsMenuOpen(false); }}
                  className="w-full text-left text-muted-foreground hover:text-primary transition-colors py-2 pl-6 pr-2 rounded-md hover:bg-muted/50"
                >
                  Software Solutions
                </button>
                <button
                  onClick={() => { navigate('/virtual-assistance'); setIsMenuOpen(false); }}
                  className="w-full text-left text-muted-foreground hover:text-primary transition-colors py-2 pl-6 pr-2 rounded-md hover:bg-muted/50"
                >
                  Virtual Assistance
                </button>
                <button
                  onClick={() => { navigate('/legal-consulting'); setIsMenuOpen(false); }}
                  className="w-full text-left text-muted-foreground hover:text-primary transition-colors py-2 pl-6 pr-2 rounded-md hover:bg-muted/50"
                >
                  Legal Consulting
                </button>
              </div>

              <button
                onClick={() => handleNavigation('#about')}
                className="text-left text-foreground hover:text-primary transition-colors py-2 px-2 rounded-md hover:bg-muted/50"
              >
                About
              </button>
              <button
                onClick={() => handleNavigation('/contact')}
                className="text-left text-foreground hover:text-primary transition-colors py-2 px-2 rounded-md hover:bg-muted/50"
              >
                Contact
              </button>
              <div className="pt-2">
                <Button variant="hero" onClick={() => handleNavigation('/contact')} className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
