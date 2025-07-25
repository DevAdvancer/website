import { Button } from "@/components/ui/button";

import { ArrowRight, GraduationCap, Code, Headphones, Scale } from "lucide-react";
import { useNavigate } from "react-router-dom";
import educationImage from "@/assets/education-service.jpg";
import softwareImage from "@/assets/software-service.jpg";
import virtualImage from "@/assets/virtual-service.jpg";
import legalImage from "@/assets/legal-service.jpg";
import Container from "@/components/ui/Container";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: GraduationCap,
      title: "Educational Services",
      description: "Comprehensive training programs, curriculum development, and educational consulting to enhance learning outcomes and institutional effectiveness.",
      image: educationImage,
      features: ["Custom Training Programs", "Curriculum Design", "Educational Technology", "Performance Assessment"],
      route: "/educational-services"
    },
    {
      icon: Code,
      title: "Software Solutions",
      description: "End-to-end software development, digital transformation, and technology consulting to modernize your business operations.",
      image: softwareImage,
      features: ["Custom Software Development", "Digital Transformation", "Cloud Solutions", "Technical Consulting"],
      route: "/software-solutions"
    },
    {
      icon: Headphones,
      title: "Virtual Assistance",
      description: "Professional virtual support services to streamline operations, manage administrative tasks, and improve business efficiency.",
      image: virtualImage,
      features: ["Administrative Support", "Customer Service", "Project Management", "Data Management"],
      route: "/virtual-assistance"
    },
    {
      icon: Scale,
      title: "Legal Consulting",
      description: "Expert legal guidance for business compliance, contract management, and regulatory affairs to protect your interests.",
      image: legalImage,
      features: ["Business Compliance", "Contract Review", "Regulatory Affairs", "Legal Documentation"],
      route: "/legal-consulting"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-12 lg:py-20 bg-background">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">
            Our <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer specialized consulting services across four key areas to help your business achieve sustainable growth and success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {services.map((service, index) => (
            <div key={index} className="group bg-gradient-card border border-border rounded-2xl p-4 sm:p-6 lg:p-8 shadow-card hover:shadow-hover transition-all duration-300 hover:transform hover:scale-105 animate-scale-in">
              {/* Service Image */}
              <div className="relative mb-4 lg:mb-6 overflow-hidden rounded-xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-32 sm:h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Service Content */}
              <div className="space-y-3 lg:space-y-4">
                <div className="flex items-center space-x-2 lg:space-x-3">
                  <div className="p-2 lg:p-3 bg-primary/10 rounded-lg">
                    <service.icon className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground">{service.title}</h3>
                </div>

                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Feature List */}
                <div className="space-y-1.5 lg:space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-xs lg:text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="professional"
                  className="w-full group mt-4 lg:mt-6"
                  onClick={() => navigate(service.route)}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-3 w-3 lg:h-4 lg:w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary rounded-2xl p-6 lg:p-12 text-white animate-fade-in">
          <h3 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4">Ready to Transform Your Business?</h3>
          <p className="text-base lg:text-lg opacity-90 mb-6 lg:mb-8">
            Get started with a free consultation and discover how our expertise can drive your success.
          </p>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => navigate('/contact')}
            className="group"
          >
            Schedule Free Consultation
            <ArrowRight className="ml-2 h-3 w-3 lg:h-4 lg:w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Services;
