import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                We save businesses <span className="text-primary">20+ hours</span> every month with AI & automation
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Stop wasting time on repetitive tasks. From lead follow-up to client onboarding, Flexpandas builds smart systems that run your business on autopilot — so you can focus on growth.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all transform hover:scale-105 text-lg px-8 py-4"
                  data-testid="button-hero-book-audit"
                >
                  Book a Free Audit
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => scrollToSection('how-it-works')}
                className="border-border text-foreground hover:bg-muted transition-colors text-lg px-8 py-4"
                data-testid="button-hero-see-how"
              >
                See How It Works
              </Button>
            </div>
            
            <div className="pt-8">
              <div className="max-w-4xl mx-auto bg-gradient-to-br from-muted to-muted/50 rounded-2xl p-12 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-3xl animate-float" data-testid="hero-video-panda">🐼</div>
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
                    <i className="fas fa-play text-3xl text-primary"></i>
                  </div>
                  <h3 className="text-xl font-semibold" data-testid="hero-video-title">Workflow Demo Video</h3>
                  <p className="text-muted-foreground" data-testid="hero-video-description">See how we automate your business processes in real-time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Still stuck doing things manually?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-destructive/10 rounded-full mx-auto flex items-center justify-center">
                  <i className="fas fa-exclamation-triangle text-2xl text-destructive"></i>
                </div>
                <h3 className="font-semibold text-foreground" data-testid="problem-leads">Leads slipping through the cracks</h3>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-destructive/10 rounded-full mx-auto flex items-center justify-center">
                  <i className="fas fa-clock text-2xl text-destructive"></i>
                </div>
                <h3 className="font-semibold text-foreground" data-testid="problem-data">Hours lost copying data between tools</h3>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-destructive/10 rounded-full mx-auto flex items-center justify-center">
                  <i className="fas fa-user-times text-2xl text-destructive"></i>
                </div>
                <h3 className="font-semibold text-foreground" data-testid="problem-followup">Inconsistent client follow-up</h3>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-destructive/10 rounded-full mx-auto flex items-center justify-center">
                  <i className="fas fa-eye-slash text-2xl text-destructive"></i>
                </div>
                <h3 className="font-semibold text-foreground" data-testid="problem-visibility">No clear visibility on performance</h3>
              </div>
            </div>
            
            <div className="bg-primary/10 rounded-2xl p-8 max-w-4xl mx-auto">
              <p className="text-xl font-semibold text-foreground" data-testid="solution-promise">
                With Flexpandas, your systems never forget, never miss a follow-up, and never waste a minute. 🐼
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              How It Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-6 relative">
                <div className="w-20 h-20 bg-primary rounded-full mx-auto flex items-center justify-center text-primary-foreground font-bold text-2xl">
                  1
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground" data-testid="step-audit-title">Audit</h3>
                  <p className="text-muted-foreground" data-testid="step-audit-description">We map your current workflow and uncover quick wins</p>
                </div>
                <div className="hidden md:block absolute top-10 right-0 transform translate-x-1/2">
                  <i className="fas fa-arrow-right text-primary text-xl"></i>
                </div>
              </div>
              
              <div className="text-center space-y-6 relative">
                <div className="w-20 h-20 bg-primary rounded-full mx-auto flex items-center justify-center text-primary-foreground font-bold text-2xl">
                  2
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground" data-testid="step-build-title">Build</h3>
                  <p className="text-muted-foreground" data-testid="step-build-description">We design and launch automations using tools like Make, HubSpot, Pipedrive, and AI chatbots</p>
                </div>
                <div className="hidden md:block absolute top-10 right-0 transform translate-x-1/2">
                  <i className="fas fa-arrow-right text-primary text-xl"></i>
                </div>
              </div>
              
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-primary rounded-full mx-auto flex items-center justify-center text-primary-foreground font-bold text-2xl">
                  3
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground" data-testid="step-care-title">Care</h3>
                  <p className="text-muted-foreground" data-testid="step-care-description">We monitor, maintain, and optimize so your systems keep running smoothly</p>
                </div>
              </div>
            </div>
            
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all transform hover:scale-105 text-lg px-8 py-4"
                data-testid="button-process-book-audit"
              >
                Book My Free Audit
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Our Services
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Automation & AI */}
              <Card className="relative overflow-hidden hover:shadow-xl transition-shadow">
                <Badge className="absolute top-4 right-4 bg-primary/10 text-primary hover:bg-primary/20">
                  Flagship
                </Badge>
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <i className="fas fa-robot text-2xl text-primary"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3" data-testid="service-automation-title">Automation & AI</h3>
                    <ul className="space-y-2 text-muted-foreground" data-testid="service-automation-features">
                      <li>• Workflow automation (CRM, lead routing, email, onboarding)</li>
                      <li>• AI chatbots for lead qualification & FAQs</li>
                      <li>• KPI dashboards & reporting</li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-lg font-semibold text-foreground" data-testid="service-automation-price">Projects from €1,500</p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Design Subscription */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <i className="fas fa-palette text-2xl text-primary"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3" data-testid="service-design-title">Design-as-a-Subscription</h3>
                    <ul className="space-y-2 text-muted-foreground" data-testid="service-design-features">
                      <li>• Unlimited design requests each month</li>
                      <li>• Logos, social posts, landing pages, app/UI</li>
                      <li>• Flat monthly fee, no surprises</li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-lg font-semibold text-foreground" data-testid="service-design-price">From €700/month</p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Video Editing */}
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <i className="fas fa-video text-2xl text-primary"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3" data-testid="service-video-title">Video Editing-as-a-Subscription</h3>
                    <ul className="space-y-2 text-muted-foreground" data-testid="service-video-features">
                      <li>• Short-form (Reels/TikTok/YouTube Shorts)</li>
                      <li>• Long-form edits with captions & thumbnails</li>
                      <li>• Perfect for creators & brands scaling content</li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-lg font-semibold text-foreground" data-testid="service-video-price">From €600/month</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Link href="/pricing">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all transform hover:scale-105 text-lg px-8 py-4"
                data-testid="button-services-pricing"
              >
                See Packages & Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Real impact, fast results
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[1,2,3,4,5].map((star) => (
                        <i key={star} className="fas fa-star text-yellow-400"></i>
                      ))}
                    </div>
                  </div>
                  <p className="text-foreground italic" data-testid="testimonial-1">
                    "Flexpandas helped us automate our lead flow and follow-ups — we saved 22 hours/month and closed more deals."
                  </p>
                  <div className="text-sm text-muted-foreground" data-testid="testimonial-1-author">
                    — Sarah M., Marketing Agency Owner
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[1,2,3,4,5].map((star) => (
                        <i key={star} className="fas fa-star text-yellow-400"></i>
                      ))}
                    </div>
                  </div>
                  <p className="text-foreground italic" data-testid="testimonial-2">
                    "Instead of hiring in-house designers, we get all our creative assets done quickly on a fixed budget."
                  </p>
                  <div className="text-sm text-muted-foreground" data-testid="testimonial-2-author">
                    — Mike T., E-commerce Founder
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Flexpandas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Why Choose Flexpandas 🐼
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                  <i className="fas fa-users text-2xl text-primary"></i>
                </div>
                <h3 className="font-semibold text-foreground" data-testid="why-flexible">Friendly, flexible team that adapts to your tools</h3>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                  <i className="fas fa-lightbulb text-2xl text-primary"></i>
                </div>
                <h3 className="font-semibold text-foreground" data-testid="why-simple">Simple, clear deliverables (no jargon, no overwhelm)</h3>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                  <i className="fas fa-euro-sign text-2xl text-primary"></i>
                </div>
                <h3 className="font-semibold text-foreground" data-testid="why-affordable">Affordable, transparent pricing</h3>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                  <i className="fas fa-rocket text-2xl text-primary"></i>
                </div>
                <h3 className="font-semibold text-foreground" data-testid="why-specialists">SMB specialists helping creators, agencies, and DTC brands grow faster</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-12 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground" data-testid="final-cta-title">
              Ready to stop wasting time and start scaling?
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="final-cta-description">
              Book a free 15-minute audit call and let's show you where automation can save you hours every week.
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all transform hover:scale-105 text-lg px-8 py-4"
                data-testid="button-final-cta"
              >
                Book My Free Audit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
