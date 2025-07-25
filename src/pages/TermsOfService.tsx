import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Container from "@/components/ui/Container";

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-16">
        <Container>
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>

          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Terms of Service
              </h1>
              <p className="text-muted-foreground text-lg">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground mb-4">
                  By accessing and using Univolve Consulting services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Services Description</h2>
                <p className="text-muted-foreground mb-4">
                  Univolve Consulting provides professional consulting services in the following areas:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Educational Services and Training Programs</li>
                  <li>Software Solutions and Digital Transformation</li>
                  <li>Virtual Assistance and Administrative Support</li>
                  <li>Legal Consulting and Compliance Services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Client Responsibilities</h2>
                <p className="text-muted-foreground mb-4">
                  As a client, you agree to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Cooperate in good faith during the consulting process</li>
                  <li>Pay all fees according to the agreed payment terms</li>
                  <li>Respect intellectual property rights</li>
                  <li>Maintain confidentiality of proprietary information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Payment Terms</h2>
                <p className="text-muted-foreground mb-4">
                  Payment terms will be specified in individual service agreements. Generally:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Invoices are due within 30 days of receipt</li>
                  <li>Late payments may incur additional charges</li>
                  <li>Services may be suspended for non-payment</li>
                  <li>Refunds are subject to the specific terms of each engagement</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground mb-4">
                  Univolve Consulting's liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Termination</h2>
                <p className="text-muted-foreground mb-4">
                  Either party may terminate services with written notice as specified in the service agreement. Termination does not relieve either party of obligations incurred prior to termination.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms of Service, contact us at:
                  <br />
                  Email: legal@univolveconsulting.com
                  <br />
                  Phone: +1 (555) 123-4567
                </p>
              </section>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
