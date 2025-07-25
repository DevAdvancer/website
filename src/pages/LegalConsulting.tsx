import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Scale, Shield, FileCheck, Building, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import legalImage from "@/assets/legal-service.jpg";
import Container from "@/components/ui/Container";

const LegalConsulting = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Shield,
      title: "Business Compliance",
      description: "Comprehensive compliance consulting to ensure your business meets all regulatory requirements and industry standards. Proactive compliance management to prevent legal issues.",
      details: ["Regulatory compliance audits", "Industry standards assessment", "Compliance policy development", "Employee training programs", "Ongoing compliance monitoring", "Risk assessment and mitigation"]
    },
    {
      icon: FileCheck,
      title: "Contract Review",
      description: "Thorough contract analysis and review services to protect your interests and minimize legal risks. Expert evaluation of all contractual obligations.",
      details: ["Contract drafting and negotiation", "Terms and conditions review", "Risk assessment and mitigation", "Amendment and modification support", "Dispute resolution clauses", "Performance monitoring frameworks"]
    },
    {
      icon: Building,
      title: "Regulatory Affairs",
      description: "Expert guidance on regulatory matters to navigate complex legal landscapes and maintain compliance. Strategic regulatory planning and implementation.",
      details: ["Regulatory strategy development", "Government liaison and communication", "License and permit applications", "Regulatory change management", "Compliance reporting systems", "Industry best practices implementation"]
    },
    {
      icon: Scale,
      title: "Legal Documentation",
      description: "Professional preparation and review of legal documents to ensure accuracy and legal validity. Comprehensive documentation services for all business needs.",
      details: ["Corporate governance documents", "Employment agreements and policies", "Intellectual property documentation", "Privacy and data protection policies", "Terms of service and privacy policies", "Legal opinion letters and memoranda"]
    }
  ];

  const benefits = [
    "Expert legal guidance from experienced professionals with 20+ years experience",
    "Risk mitigation and compliance assurance with proactive monitoring",
    "Cost-effective legal solutions compared to traditional law firms",
    "Proactive legal strategy development to prevent issues before they arise",
    "Comprehensive contract protection with detailed risk analysis",
    "Regulatory compliance expertise across multiple industries",
    "Quick response times for urgent legal matters",
    "Ongoing legal support and relationship management",
    "Industry-specific expertise and best practices",
    "Transparent pricing with no hidden fees or surprises"
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
                  <Scale className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">Legal Consulting</h1>
              </div>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Protect your business with expert legal guidance and compliance consulting.
                We help you navigate complex legal requirements with confidence.
              </p>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigate('/contact')}
                className="group"
              >
                Get Legal Advice
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="relative">
              <img
                src={legalImage}
                alt="Legal Consulting"
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
              Legal <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive legal consulting services to protect your business interests and ensure regulatory compliance.
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
              Why Choose Our Legal Consulting?
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
          <h3 className="text-3xl font-bold mb-4">Need Legal Guidance for Your Business?</h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our legal consulting services can protect and advance your business interests.
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

export default LegalConsulting;
