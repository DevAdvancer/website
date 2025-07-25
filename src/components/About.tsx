import { Button } from "@/components/ui/button";
import { Users, Target, Award, TrendingUp, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Container from "@/components/ui/Container";

const About = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: Users, value: "50+", label: "Expert Consultants" },
    { icon: Target, value: "100+", label: "Projects Completed" },
    { icon: Award, value: "98%", label: "Client Satisfaction" },
    { icon: TrendingUp, value: "5+", label: "Years Experience" }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for the highest quality in every project, ensuring exceptional results for our clients."
    },
    {
      title: "Innovation",
      description: "We embrace cutting-edge solutions and creative approaches to solve complex business challenges."
    },
    {
      title: "Integrity",
      description: "We maintain the highest ethical standards and build trust through transparent communication."
    },
    {
      title: "Partnership",
      description: "We work as an extension of your team, committed to your long-term success and growth."
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-12 lg:py-20 bg-black text-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
            About <span className="text-primary">UNIVOLVE CONSULTING</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We are a dynamic consulting firm dedicated to helping businesses evolve and thrive in an ever-changing market.
            Our multidisciplinary approach combines deep expertise with innovative thinking to deliver transformational results.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center border p-4 lg:p-6 rounded-xl shadow-card hover:shadow-hover transition-all duration-300 hover:transform hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s`, borderColor: '#D78D42' }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary-deep/20 rounded-lg">
                  <stat.icon className="h-8 w-8 text-primary-deep" />
                </div>
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-xs lg:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          <div className="space-y-4 lg:space-y-6 animate-slide-in">
            <h3 className="text-2xl lg:text-3xl font-bold text-white">Our Mission</h3>
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              To empower businesses with innovative consulting solutions that drive sustainable growth, operational excellence,
              and competitive advantage. We believe in the power of collaboration and strategic thinking to transform challenges into opportunities.
            </p>
            <div className="space-y-3 lg:space-y-4">
              <h4 className="text-lg lg:text-xl font-semibold text-white">What Sets Us Apart:</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-deep rounded-full flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm lg:text-base">Multidisciplinary expertise across four key domains</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-deep rounded-full flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm lg:text-base">Customized solutions tailored to your unique needs</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-deep rounded-full flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm lg:text-base">Proven methodology with measurable results</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4 lg:space-y-6 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl lg:text-3xl font-bold text-white">Our Vision</h3>
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              To be the trusted partner for businesses seeking transformation and growth. We envision a future where every
              organization can achieve its full potential through strategic consulting and innovative solutions.
            </p>
            <div className="bg-gray-900/50 p-4 lg:p-6 rounded-xl border border-gray-700">
              <h4 className="text-base lg:text-lg font-semibold text-white mb-3 lg:mb-4">Why Choose Univolve?</h4>
              <p className="text-gray-200 text-sm lg:text-base">
                We don't just provide advice – we partner with you to implement lasting change. Our team combines industry
                expertise with fresh perspectives to deliver solutions that work in the real world.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-8 lg:mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-8 lg:mb-12">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center space-y-3 lg:space-y-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-lg lg:text-xl font-bold text-primary-deep">{value.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <Button
            variant="hero"
            size="lg"
            onClick={() => navigate('/contact')}
            className="group"
          >
            Start Your Transformation Journey
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default About;
