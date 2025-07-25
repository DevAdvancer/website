import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Globe,
  Linkedin,
  Twitter
} from "lucide-react";
import Container from "@/components/ui/Container";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", company: "", service: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      info: "hello@univolveconsulting.com",
      description: "Drop us a line anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+91 XXXXX XXXXX",
      description: "Mon-Fri from 8am to 5pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "Salt Lake City, Kolkata",
      description: "Kolkata, India"
    },
    {
      icon: Clock,
      title: "Working Hours",
      info: "Mon - Fri: 8AM - 5PM",
      description: "Weekend: By appointment"
    }
  ];

  const socialLinks = [
    { icon: Globe, label: "Website", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" }
  ];

  return (
    <section id="contact" className="py-12 lg:py-20 bg-background">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 animate-fade-in px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss how our expert consulting services can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="space-y-8 animate-slide-in">
            <div className="bg-gradient-card border border-border rounded-2xl p-4 sm:p-6 lg:p-8 shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your Name"
                      className="transition-all duration-300 focus:shadow-soft"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="yourname@gmail.com"
                      className="transition-all duration-300 focus:shadow-soft"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="text-sm font-medium text-foreground mb-2 block">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company"
                      className="transition-all duration-300 focus:shadow-soft"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="text-sm font-medium text-foreground mb-2 block">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="educational">Educational Services</option>
                      <option value="software">Software Solutions</option>
                      <option value="virtual">Virtual Assistance</option>
                      <option value="legal">Legal Consulting</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Tell us about your project and how we can help..."
                    className="transition-all duration-300 focus:shadow-soft resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full group"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Quick Benefits */}
            <div className="space-y-4 mb-8">
              <h4 className="text-lg font-semibold text-foreground">What happens next?</h4>
              {[
                "We'll review your message within 24 hours",
                "Schedule a free 30-minute consultation call",
                "Discuss your needs and propose solutions",
                "Receive a customized proposal"
              ].map((step, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-primary h-5 w-5 flex-shrink-0" />
                  <span className="text-muted-foreground">{step}</span>
                </div>
              ))}
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-card border border-border rounded-xl p-4 text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground mb-1 text-sm">Business Hours</h4>
                <div className="text-xs text-muted-foreground space-y-0.5">
                  <div>Mon - Fri: 8AM - 5PM</div>
                  <div>Weekend: By appointment</div>
                  <div className="text-primary font-medium">24/7 Emergency Support</div>
                </div>
              </div>

              <div className="bg-gradient-card border border-border rounded-xl p-4 text-center">
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground mb-1 text-sm">Response Time</h4>
                <div className="text-xs text-muted-foreground space-y-0.5">
                  <div>Email: Within 2 hours</div>
                  <div>Phone: Immediate</div>
                  <div className="text-primary font-medium">Same-day consultation</div>
                </div>
              </div>

              <div className="bg-gradient-card border border-border rounded-xl p-4 text-center">
                <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground mb-1 text-sm">Quick Response</h4>
                <p className="text-xs text-muted-foreground">
                  Get instant replies to urgent inquiries through our priority contact system.
                </p>
              </div>

              <div className="bg-gradient-card border border-border rounded-xl p-4 text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground mb-1 text-sm">Expert Support</h4>
                <p className="text-xs text-muted-foreground">
                  Direct access to our senior consultants for complex project discussions.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-card border border-border rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-foreground font-medium">{item.info}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-gradient-primary rounded-xl p-6 lg:p-8 text-white">
              <h4 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4">Connect With Us</h4>
              <p className="opacity-90 mb-4 lg:mb-6 text-sm lg:text-base">
                Follow us on social media for industry insights and company updates.
              </p>
              <div className="flex flex-wrap gap-3 lg:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="flex items-center space-x-2 p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors text-sm lg:text-base"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4 lg:h-5 lg:w-5" />
                    <span className="hidden sm:inline">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gradient-card border border-border rounded-xl p-6 lg:p-8 text-center">
              <MapPin className="h-10 lg:h-12 w-10 lg:w-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Our Location</h4>
              <p className="text-sm lg:text-base text-muted-foreground">
                Located in the heart of Kolkata, we're easily accessible and ready to meet in person.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
