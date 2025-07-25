import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Container from "@/components/ui/Container";

const CookiePolicy = () => {
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
                Cookie Policy
              </h1>
              <p className="text-muted-foreground text-lg">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">What Are Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  Cookies are small text files that are stored on your computer or mobile device when you visit our website. They help us provide you with a better experience by remembering your preferences and improving our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  Univolve Consulting uses cookies for the following purposes:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Essential functionality and security</li>
                  <li>Remembering your preferences and settings</li>
                  <li>Analyzing website traffic and usage patterns</li>
                  <li>Improving our website performance</li>
                  <li>Providing personalized content and experiences</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Types of Cookies We Use</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Essential Cookies</h3>
                    <p className="text-muted-foreground">
                      These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Performance Cookies</h3>
                    <p className="text-muted-foreground">
                      These cookies help us understand how visitors interact with our website by collecting information anonymously.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Functional Cookies</h3>
                    <p className="text-muted-foreground">
                      These cookies enable enhanced functionality and personalization, such as remembering your preferences.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  We may use third-party services that set cookies, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Google Analytics for website analytics</li>
                  <li>Social media platforms for content sharing</li>
                  <li>Marketing platforms for advertising purposes</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Managing Your Cookie Preferences</h2>
                <p className="text-muted-foreground mb-4">
                  You can control and manage cookies in several ways:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Use browser settings to block or delete cookies</li>
                  <li>Opt-out of third-party advertising cookies</li>
                  <li>Use private/incognito browsing mode</li>
                  <li>Contact us to discuss your preferences</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Please note that disabling certain cookies may affect the functionality of our website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about our Cookie Policy, please contact us at:
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

export default CookiePolicy;
