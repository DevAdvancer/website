import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Headphones, Clock, Users, FileText, CheckCircle, Building } from "lucide-react";
import { useNavigate } from "react-router-dom";
import virtualImage from "@/assets/virtual-service.jpg";
import Container from "@/components/ui/Container";

const VirtualAssistance = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: FileText,
      title: "Administrative & Back-Office Virtual Assistance",
      description: "From managing calendars, emails, and documents to handling data entry, CRM updates, and client follow-ups — we take care of the time-consuming tasks so you don’t have to.",
      details: [
        "Calendar & email management",
        "Personal assistant tasks (booking, research, errands)",
        "Data entry & database maintenance",
        "CRM management",
        "Travel planning & meeting coordination",
        "Back-office support tasks like reporting, file organization, and internal communications",
        "Coordinating with vendors, partners, or internal teams",
        "Expense tracking and categorization",
        "Generating basic financial reports (via tools like QuickBooks, Xero, or Wave)",
        "Generating weekly/monthly reports (sales, performance, expenses)"
      ]
    },
    {
      icon: Headphones,
      title: "Customer Service Virtual Assistance",
      description: "We provide friendly, timely, and professional customer support on your behalf — ensuring your clients feel valued and heard at every touchpoint. Support that speaks your brand’s language.",
      details: [
        "Responding to customer emails and support tickets",
        "Answering phone calls",
        "Live chat support on websites",
        "Escalating complaints to appropriate internal contacts",
        "Conducting customer satisfaction surveys or follow-ups",
        "Updating customer information and notes in CRMs (HubSpot, Zoho, Salesforce, etc.)",
        "Recommending process improvements based on customer feedback",
        "Account creation or login help",
        "Refund or cancellation assistance"
      ]
    },
    {
      icon: Users,
      title: "Social Media Management Virtual Assistance",
      description: "We manage your social media from content planning to publishing and engagement. Whether you're a small business owner or a growing brand, we ensure your voice is heard and your audience stays connected.",
      details: [
        "Designing branded graphics, reels, stories, and posts",
        "Researching trends and competitor activity",
        "Scheduling posts on platforms like Facebook, Instagram, Twitter, LinkedIn, Pinterest, or TikTok",
        "Responding to comments and DM",
        "Managing spam or inappropriate content",
        "Tracking post performance (likes, reach, engagement, followers, etc.)",
        "Influencer outreach and hastag research",
        "Social bio optimization",
        "Creating highlight covers, profile banners, and more"
      ]
    },
    {
      icon: Clock,
      title: "Cold Calling & Lead Generation Virtual Assistance",
      description: "We help businesses identify, reach, and engage with potential clients through strategic outreach and follow-up. From list building to initial outreach and appointment setting, we handle the heavy lifting so your sales team can focus on closing deals.",
      details: [
        "Making outbound calls to potential leads based on your target audience",
        "Delivering scripts or value pitches professionally",
        "Transferring warm leads to the sales team or scheduling callbacks",
        "Logging call results and updating CRM or spreadsheets",
        "Feedback-Driven Iteration",
        "Building and updating lead lists with contact details (emails, phone numbers, etc.)",
        "Updating lead and contact records in CRM (HubSpot, Zoho, Salesforce, etc.)",
        "Introducing products/services and gathering interest",
      ]
    }
  ];

  const benefits = [
    "Reduce operational costs by up to 60% compared to in-house staff",
    "Access to skilled professionals worldwide with diverse expertise",
    "24/7 support availability across multiple time zones",
    "Scalable solutions that grow with your business needs",
    "Improved focus on core business activities and strategy",
    "Enhanced productivity and efficiency through streamlined processes",
    "No overhead costs for equipment, office space, or benefits",
    "Flexible engagement models from part-time to full-time support",
    "Quick onboarding and immediate productivity",
    "Quality assurance with performance monitoring and reporting"
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
                  <Headphones className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">Virtual Assistance</h1>
              </div>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Streamline your operations with our professional virtual assistance services.
                Focus on what matters most while we handle the administrative tasks.
              </p>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigate('/contact')}
                className="group"
              >
                Get Support Today
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="relative">
              <img
                src={virtualImage}
                alt="Virtual Assistance"
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
              Virtual <span className="text-primary">Support</span> Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional virtual assistance services designed to improve efficiency and reduce operational overhead.
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
              Why Choose Our Virtual Assistance?
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
        <Container>
          <h3 className="text-3xl font-bold mb-4">Ready to Streamline Your Operations?</h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Discover how our virtual assistance services can help you focus on growing your business while we handle the rest.
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

export default VirtualAssistance;
