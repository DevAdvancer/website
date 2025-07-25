import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Code, Cloud, Smartphone, Database, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import softwareImage from "@/assets/software-service.jpg";
import Container from "@/components/ui/Container";

const SoftwareSolutions = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Bespoke software solutions tailored to your business needs, built with modern technologies and best practices. Full-stack development with scalable architecture.",
      details: ["Full-stack web applications", "Mobile app development", "API design and integration", "Database architecture", "Security implementation", "Performance optimization"]
    },
    {
      icon: Cloud,
      title: "Digital Transformation",
      description: "Comprehensive digital transformation strategies to modernize your business operations and processes. End-to-end digitalization of business workflows.",
      details: ["Process automation", "Legacy system modernization", "Workflow optimization", "Digital strategy consulting", "Change management", "ROI measurement and tracking"]
    },
    {
      icon: Smartphone,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and applications that grow with your business requirements. Enterprise-grade cloud architecture and migration services.",
      details: ["Cloud migration strategy", "Multi-cloud deployment", "Serverless architecture", "Container orchestration", "Auto-scaling solutions", "Disaster recovery planning"]
    },
    {
      icon: Database,
      title: "Technical Consulting",
      description: "Expert technical guidance to help you make informed decisions about technology investments and strategies. Strategic technology roadmap development.",
      details: ["Technology assessment", "Architecture reviews", "Performance audits", "Security evaluations", "Cost optimization", "Technology roadmap planning"]
    }
  ];

  const benefits = [
    "Scalable and maintainable software architecture with 99.9% uptime",
    "Modern technology stack implementation with latest frameworks",
    "Agile development methodology with 2-week sprint cycles",
    "Cloud-first approach for maximum flexibility and cost efficiency",
    "Comprehensive testing and quality assurance with automated pipelines",
    "Ongoing maintenance and support with 24/7 monitoring",
    "DevOps integration for continuous deployment",
    "Security-first development with vulnerability assessments",
    "Cross-platform compatibility and mobile responsiveness",
    "Performance optimization and load testing"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero text-white">
        <Container>
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="mb-8 bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">Software Solutions</h1>
              </div>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Accelerate your digital transformation with our cutting-edge software development and technology consulting services.
                We build solutions that scale with your business.
              </p>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigate('/contact')}
                className="group"
              >
                Start Your Project
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="relative">
              <img
                src={softwareImage}
                alt="Software Solutions"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-primary/20 rounded-2xl"></div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Technology <span className="text-primary">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From custom software development to digital transformation, we deliver technology solutions that drive business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-2xl p-8 shadow-2xl border border-white/20 bg-white/10 backdrop-blur-md hover:shadow-3xl hover:scale-[1.03] transition-all duration-300 group relative overflow-hidden"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-secondary/20 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              Why Choose Our Software Solutions?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <Container className="text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Modernize Your Technology?</h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our software solutions can transform your business operations and drive digital innovation.
          </p>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => navigate('/contact')}
            className="group"
          >
            Schedule a Consultation
            <ArrowLeft className="ml-2 h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default SoftwareSolutions;
