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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
      </div>

      <div className="w-full max-w-[1400px] 1680:max-w-[1600px] mx-auto px-2 sm:px-3 lg:px-4 1680:px-8 relative z-10 top-8 md:top-10">
        <div className="grid lg:grid-cols-3 gap-3 lg:gap-12 xl:gap-24 1680:gap-32 items-center w-full">
          {/* Left Content */}
          <div className="space-y-5 sm:space-y-4 lg:space-y-6 1680:space-y-8 animate-fade-in order-1 lg:order-1 text-center lg:text-left col-span-1 lg:pl-2 xl:pl-3 1680:pl-8">
            <div className="space-y-4 sm:space-y-3 lg:space-y-4 1680:space-y-6">
              <h1 className="text-4xl sm:text-3xl md:text-4xl xl:text-5xl 1680:text-7xl font-bold leading-tight">
                <span className="text-white">UNIVOLVE</span>
                <br />
                <span className="text-primary bg-gradient-primary bg-clip-text text-transparent drop-shadow-lg">
                  CONSULTING
                </span>
              </h1>
              <p className="text-lg sm:text-base md:text-lg xl:text-xl 1680:text-3xl text-gray-300 leading-relaxed max-w-md 1680:max-w-xl mx-auto lg:mx-0">
                Univolve Consulting delivers world-class solutions across education, technology, virtual assistance, and legal services to accelerate your business growth.
              </p>
            </div>

            {/* Value Propositions */}
            <div className="space-y-4 lg:space-y-3 1680:space-y-6">
              {[
                "Expert team with proven track record across industries",
                "Customized solutions designed for your unique challenges",
                "End-to-end support from strategy to implementation"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 lg:space-x-3 1680:space-x-6">
                  <div className="p-2 sm:p-1 1680:p-3 bg-primary rounded-full flex-shrink-0">
                    <CheckCircle className="text-black h-5 w-5 sm:h-3 sm:w-3 xl:h-4 xl:w-4 1680:h-7 1680:w-7" />
                  </div>
                  <span className="text-gray-300 text-lg sm:text-sm lg:text-base xl:text-lg 1680:text-2xl">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-3 1680:gap-6 pt-3 lg:pt-4 1680:pt-8 justify-center lg:justify-start">
              <Button
                variant="hero"
                size="sm"
                onClick={goToContact}
                className="group text-lg sm:text-sm xl:text-base 1680:text-2xl font-semibold px-6 sm:px-4 xl:px-5 1680:px-10 py-3 sm:py-2 xl:py-2.5 1680:py-5 shadow-gold hover:shadow-gold transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-3 sm:ml-2 h-5 w-5 sm:h-4 sm:w-4 xl:h-5 xl:w-5 1680:h-8 1680:w-8 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={goToContact}
                className="border-primary text-primary hover:bg-primary hover:text-black text-lg sm:text-sm xl:text-base 1680:text-2xl font-semibold px-6 sm:px-4 xl:px-5 1680:px-10 py-3 sm:py-2 xl:py-2.5 1680:py-5 group"
              >
                <Play className="mr-3 sm:mr-2 h-5 w-5 sm:h-4 sm:w-4 xl:h-5 xl:w-5 1680:h-8 1680:w-8 group-hover:scale-110 transition-transform" />
                Watch Our Story
              </Button>
            </div>
          </div>

          {/* Right Content - Image Carousel */}
          <div className="relative animate-slide-in order-2 lg:order-2 w-full px-0 xl:px-6 1680:px-10 lg:col-span-2 flex justify-end">
            <div className="w-full">
              <Carousel setApi={setCarouselApi} className="w-full mb-4 sm:mb-2 xl:mb-4 1680:mb-10">
                <CarouselContent className="ml-0">
                  {carouselImages.map((img, idx) => (
                    <CarouselItem key={img.caption} className="pl-0">
                      <div className="relative w-full h-[340px] sm:h-[180px] md:h-[300px] xl:h-[400px] 1680:h-[540px] 2xl:h-[420px]">
                        <img
                          src={img.image}
                          alt={img.alt}
                          className="w-full h-full object-cover rounded-2xl sm:rounded-xl xl:rounded-2xl 1680:rounded-3xl shadow-elegant border-2 border-primary/20 transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl sm:rounded-xl xl:rounded-2xl 1680:rounded-3xl"></div>
                        <div className="absolute bottom-4 left-4 sm:bottom-2 sm:left-2 xl:bottom-4 xl:left-4 1680:bottom-10 1680:left-10 bg-black/60 backdrop-blur-sm p-3 sm:p-2 xl:p-3 1680:p-6 rounded-lg">
                          <span className="text-white font-semibold text-lg sm:text-xs xl:text-sm 1680:text-2xl">{img.caption}</span>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 sm:left-1 xl:left-2 1680:left-10" />
                <CarouselNext className="right-4 sm:right-1 xl:right-2 1680:right-10" />
              </Carousel>

              {/* Small Service Icons Below Carousel - Hidden on Mobile/Tablet */}
              <div className="hidden xl:flex justify-center gap-0 px-0 mt-4 sm:mt-2 1680:mt-10 rounded-xl overflow-hidden">
                {serviceData.map((service, idx) => {
                  const Icon = service.icon;
                  const isActive = selectedIndex === idx;
                  return (
                    <button
                      key={service.label}
                      onClick={() => handleServiceBoxClick(idx, service.route)}
                      className={cn(
                        "flex flex-col items-start p-4 sm:p-2 xl:p-3 1680:p-8 flex-1 min-w-0 border-none transition-none shadow-md",
                        isActive
                          ? "bg-primary text-black"
                          : "bg-white text-black",
                        "text-lg sm:text-xs xl:text-sm 1680:text-xl"
                      )}
                    >
                      <Icon className={cn(
                        "h-7 w-7 sm:h-5 sm:w-5 xl:h-6 xl:w-6 1680:h-10 1680:w-10 mb-2 sm:mb-1 xl:mb-2 1680:mb-4",
                        isActive ? "text-white/90" : "text-black/80"
                      )} />
                      <span className={cn(
                        "font-bold mb-1 sm:mb-0.5 text-left",
                        isActive ? "text-white" : "text-black"
                      )}>
                        {service.label}
                      </span>
                      <span className={cn(
                        "text-base sm:text-[10px] xl:text-xs 1680:text-lg text-left opacity-80 leading-tight",
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
