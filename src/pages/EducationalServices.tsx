import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, GraduationCap, BookOpen, Users, Target, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import educationImage from "@/assets/education-service.jpg";
import Container from "@/components/ui/Container";

const EducationalServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: BookOpen,
      title: "Industry-Aligned Training Programs",
      description: "Customized bootcamps and courses for streams like B.Tech (CSE), Law, and others, curated by experienced professionals.",
      details: ["Data Science, Cybersecurity, Software Development & Full Stack Engineering", "Legal Tech & Emerging Law Domains", "Communication & Soft Skills, Career Grooming & Interview Preparation", "Progress tracking and reporting"]
    },
    {
      icon: Target,
      title: "University Partnerships",
      description: "We tie up with institutions to embed our programs into academic calendars or run parallel tracks that provide students with added credentials and exposure.",
      details: ["Higher placement rates", "Industry recognition", "Access to guest lectures, projects & internships", "Continuous improvement processes"]
    },
    {
      icon: Users,
      title: "Capstone Projects & Hackathons",
      description: "We guide students through real-world, outcome-based projects and organize hackathons that simulate industry problem-solving.",
      details: ["Real Client Use Cases", "Mentorship Support", "End-to-End Ownership", "Hackathon Hosting", "Rewards & Recognition"]
    },
    {
      icon: CheckCircle,
      title: "Faculty Enablement & Curriculum Design",
      description: "Workshops and toolkits to help faculty stay current with industry trends and revamp existing syllabi to be more relevant and practical",
      details: ["Faculty Development Programs", "Curriculum Modernisation", "Peer Learning Circles", "Feedback-Driven Iteration"]
    }
  ];

  const benefits = [
    "Improved learning outcomes and retention rates up to 40%",
    "Customized solutions tailored to your industry and culture",
    "Expert instructional design consultation with 15+ years experience",
    "Technology-enhanced learning experiences with modern tools",
    "Comprehensive progress tracking and real-time analytics",
    "Ongoing support and continuous optimization",
    "Scalable solutions that grow with your organization",
    "Compliance with international educational standards",
    "Mobile-friendly learning platforms for accessibility",
    "Integration with existing HR and LMS systems"
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
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">Educational Services</h1>
              </div>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Transform your organization's learning capabilities with our comprehensive educational consulting services.
                We design and implement training programs that drive real results.
              </p>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigate('/contact')}
                className="group"
              >
                Get Started Today
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="relative">
              <img
                src={educationImage}
                alt="Educational Services"
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
              Our Educational <span className="text-primary">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a comprehensive range of educational services designed to enhance learning outcomes and drive organizational success.
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
              Why Choose Our Educational Services?
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
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Educational Programs?</h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our educational consulting services can help your organization achieve its learning objectives.
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

export default EducationalServices;
