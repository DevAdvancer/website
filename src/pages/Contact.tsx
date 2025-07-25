import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Container from "@/components/ui/Container";

const ContactPage = () => {
  const faqs = [
    {
      question: "What services does Univolve Consulting offer?",
      answer: "We offer comprehensive consulting services across four key domains: Educational Services (curriculum development, training programs), Software Solutions (custom development, digital transformation), Virtual Assistance (administrative support, project management), and Legal Consulting (business law, compliance)."
    },
    {
      question: "How long does a typical consulting project take?",
      answer: "Project timelines vary based on scope and complexity. Small consulting engagements may take 2-4 weeks, while comprehensive transformation projects can span 3-12 months. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer: "Yes, we work with startups, SMEs, and large enterprises. Our solutions are tailored to meet the specific needs and budget constraints of each client, regardless of their size."
    },
    {
      question: "What is your approach to client projects?",
      answer: "We follow a collaborative approach that includes: initial consultation and needs assessment, strategic planning and solution design, implementation with ongoing support, and post-project evaluation and optimization."
    },
    {
      question: "How do you ensure project success?",
      answer: "We ensure success through proven methodologies, regular communication, measurable KPIs, dedicated project managers, and continuous quality assurance. We maintain a 98% client satisfaction rate."
    },
    {
      question: "Can you provide references from previous clients?",
      answer: "Absolutely! We can provide case studies and references upon request. Our portfolio includes 500+ successful projects across various industries with documented results and client testimonials."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Contact />

        {/* FAQ Section */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <Container>
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about our consulting services and process.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="bg-white rounded-lg border border-gray-200 px-4 sm:px-6 mb-2"
                    >
                      <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary-deep text-sm sm:text-base">
                        {faq.question}
                    </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Container>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
