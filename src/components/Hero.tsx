import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle, Play, Monitor, Users, Briefcase, Gavel } from "lucide-react";
import heroImage from "@/assets/hero-consulting.jpg";
import meetingImage from "@/assets/meeting-room.jpg";
import workspaceImage from "@/assets/workspace.jpg";
import handshakeImage from "@/assets/handshake.jpg";
import { cn } from "@/lib/utils";

const serviceData = [
  {
    label: "Software Solutions",
    icon: Monitor,
    bg: "bg-white",
    highlight: "bg-[#E4B281]",
    text: "text-[#E4B281]",
    route: "/software-solutions",
    title: "Software Solutions",
    description: "Custom software and digital solutions.",
  },
  {
    label: "Educational Services",
    icon: Users,
    bg: "bg-white",
    highlight: "bg-[#E4B281]",
    text: "text-[#E4B281]",
    route: "/educational-services",
    title: "Educational Services",
    description: "Innovative learning and training programs.",
  },
  {
    label: "Virtual Assistance",
    icon: Briefcase,
    bg: "bg-white",
    highlight: "bg-[#E4B281]",
    text: "text-[#E4B281]",
    route: "/virtual-assistance",
    title: "Virtual Assistance",
    description: "Professional remote support for your business.",
  },
  {
    label: "Legal Consulting",
    icon: Gavel,
    bg: "bg-white",
    highlight: "bg-[#E4B281]",
    text: "text-[#E4B281]",
    route: "/legal-consulting",
    title: "Legal Consulting",
    description: "Expert legal advice and compliance services.",
  },
];

const Hero = () => {
  const navigate = useNavigate();
  const [carouselApi, setCarouselApi] = useState<any>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const goToContact = () => {
    navigate('/contact');
  };

  useEffect(() => {
    if (!carouselApi) return;
    const onSelect = () => {
      setSelectedIndex(carouselApi.selectedScrollSnap());
    };
    carouselApi.on("select", onSelect);
    return () => carouselApi.off("select", onSelect);
  }, [carouselApi]);

  useEffect(() => {
    if (!carouselApi) return;
    const interval = setInterval(() => {
      if (carouselApi.canScrollNext()) {
        carouselApi.scrollNext();
      } else {
        carouselApi.scrollTo(0);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselApi]);

  const handleServiceBoxClick = (idx: number, route?: string) => {
    if (carouselApi) {
      carouselApi.scrollTo(idx);
    }
    setSelectedIndex(idx);
    if (route) {
      navigate(route);
    }
  };

  const carouselImages = [
    {
      image: heroImage,
      alt: "Professional consulting team",
      caption: "Software Solutions",
    },
    {
      image: meetingImage,
      alt: "Strategic business meeting",
      caption: "Educational Services",
    },
    {
      image: workspaceImage,
      alt: "Modern workspace solutions",
      caption: "Virtual Assistance",
    },
    {
      image: handshakeImage,
      alt: "Successful business partnership",
      caption: "Legal Consulting",
    },
  ];

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
      </div>

      <div className="w-full max-w-[1750px] mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-5 lg:gap-24 xl:gap-48 items-center min-h-[90vh]">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in order-1 lg:order-1 text-center lg:text-left col-span-1 lg:pl-3 xl:pl-4">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className="text-white">UNIVOLVE</span>
                <br />
                <span className="text-primary bg-gradient-primary bg-clip-text text-transparent drop-shadow-lg">
                  CONSULTING
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Univolve Consulting delivers world-class solutions across education, technology, virtual assistance, and legal services to accelerate your business growth.
              </p>
            </div>

            {/* Value Propositions */}
            <div className="space-y-3 lg:space-y-4">
              {[
                "Expert team with proven track record across industries",
                "Customized solutions designed for your unique challenges",
                "End-to-end support from strategy to implementation"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 lg:space-x-4">
                  <div className="p-1 bg-primary rounded-full flex-shrink-0">
                    <CheckCircle className="text-black h-4 w-4 lg:h-5 lg:w-5" />
                  </div>
                  <span className="text-gray-300 text-base sm:text-lg lg:text-xl">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-4 lg:pt-6 justify-center lg:justify-start">
              <Button
                variant="hero"
                size="lg"
                onClick={goToContact}
                className="group text-lg lg:text-xl font-semibold px-6 lg:px-8 py-3 lg:py-4 shadow-gold hover:shadow-gold transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={goToContact}
                className="border-primary text-primary hover:bg-primary hover:text-black text-lg lg:text-xl font-semibold px-6 lg:px-8 py-3 lg:py-4 group"
              >
                <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Our Story
              </Button>
            </div>
          </div>

          {/* Right Content - Image Carousel */}
          <div className="relative animate-slide-in order-2 lg:order-2 w-full px-0 xl:px-12 lg:col-span-2 flex justify-end">
            <div className="w-full">
              <Carousel setApi={setCarouselApi} className="w-full mb-4 lg:mb-6">
                <CarouselContent className="ml-0">
                  {carouselImages.map((img, idx) => (
                    <CarouselItem key={img.caption} className="pl-0">
                      <div className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[550px]">
                        <img
                          src={img.image}
                          alt={img.alt}
                          className="w-full h-full object-cover rounded-2xl lg:rounded-3xl shadow-elegant border-2 border-primary/20 transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl lg:rounded-3xl"></div>
                        <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 bg-black/60 backdrop-blur-sm p-3 lg:p-4 rounded-lg">
                          <span className="text-white font-semibold text-sm lg:text-base xl:text-lg">{img.caption}</span>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 lg:left-4" />
                <CarouselNext className="right-2 lg:right-4" />
              </Carousel>

              {/* Small Service Icons Below Carousel - Hidden on Mobile/Tablet */}
              <div className="hidden xl:flex justify-center gap-0 px-0 mt-4 rounded-xl overflow-hidden">
                {serviceData.map((service, idx) => {
                  const Icon = service.icon;
                  const isActive = selectedIndex === idx;
                  return (
                    <button
                      key={service.label}
                      onClick={() => handleServiceBoxClick(idx, service.route)}
                      className={cn(
                        "flex flex-col items-start p-4 flex-1 min-w-0 border-none transition-none shadow-md",
                        isActive
                          ? "bg-primary text-black"
                          : "bg-white text-black",
                      )}
                    >
                      <Icon className={cn(
                        "h-7 w-7 mb-2",
                        isActive ? "text-white/90" : "text-black/80"
                      )} />
                      <span className={cn(
                        "text-lg font-bold mb-1 text-left",
                        isActive ? "text-white" : "text-black"
                      )}>
                        {service.label}
                      </span>
                      <span className={cn(
                        "text-sm text-left opacity-80 leading-tight",
                        isActive ? "text-white" : "text-black"
                      )}>
                        {service.description}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
