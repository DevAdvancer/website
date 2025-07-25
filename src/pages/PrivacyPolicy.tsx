import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Container from "@/components/ui/Container";

const PrivacyPolicy = () => {
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
                Privacy Policy
              </h1>
              <p className="text-muted-foreground text-lg">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  At Univolve Consulting, we collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Contact us for consulting services</li>
                  <li>Request information about our services</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Participate in surveys or provide feedback</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide, maintain, and improve our consulting services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Communicate with you about services, offers, and events</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Information Sharing</h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and safety</li>
                  <li>With trusted service providers who assist in our operations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
                <p className="text-muted-foreground mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
                <p className="text-muted-foreground mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>File a complaint with regulatory authorities</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at:
                  <br />
                  Email: privacy@univolveconsulting.com
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

export default PrivacyPolicy;
