import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";

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
    <>
      <SEOHead 
        title="Flexpandas - Work Smarter, Not Harder | Automation & Design Agency"
        description="Save 20+ hours every month with AI & automation. Flexpandas builds smart systems for lead follow-up, client onboarding, and business automation."
        path="/"
      />
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
            
            <div className="cta-group">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="cta-button btn-primary bg-primary text-primary-foreground hover:bg-primary/90 button-bounce pulse-glow"
                  data-testid="button-hero-book-audit"
                >
                  📞 Get My Free 20-Hour Savings Plan
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => scrollToSection('how-it-works')}
                className="cta-button border-border text-foreground hover:bg-muted hover-lift"
                data-testid="button-hero-see-how"
              >
                ⚡ See The Magic In Action
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <i className="fas fa-clock text-primary"></i>
                <span>30-min friendly call</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-gift text-primary"></i>
                <span>No sales pitch</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-chart-line text-primary"></i>
                <span>Get 2-3 specific ideas</span>
              </div>
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

      {/* Testimonials - Immediate Social Proof */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Join 200+ businesses saving 20+ hours monthly
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 testimonial-hover">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1">
                    {[1,2,3,4,5].map((star) => (
                      <i key={star} className="fas fa-star text-yellow-400 text-sm"></i>
                    ))}
                  </div>
                  <p className="text-foreground font-medium italic" data-testid="testimonial-hero-1">
                    "Flexpandas automated our lead flow and follow-ups — we saved 22 hours/month and closed 35% more deals."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">SM</span>
                    </div>
                    <div className="text-sm">
                      <div className="font-semibold text-foreground">Sarah Mitchell</div>
                      <div className="text-muted-foreground">Marketing Agency Owner</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 testimonial-hover">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1">
                    {[1,2,3,4,5].map((star) => (
                      <i key={star} className="fas fa-star text-yellow-400 text-sm"></i>
                    ))}
                  </div>
                  <p className="text-foreground font-medium italic" data-testid="testimonial-hero-2">
                    "Instead of hiring in-house designers, we get unlimited creative assets for a fixed monthly budget. Game changer!"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">MT</span>
                    </div>
                    <div className="text-sm">
                      <div className="font-semibold text-foreground">Mike Thompson</div>
                      <div className="text-muted-foreground">E-commerce Founder</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 testimonial-hover">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1">
                    {[1,2,3,4,5].map((star) => (
                      <i key={star} className="fas fa-star text-yellow-400 text-sm"></i>
                    ))}
                  </div>
                  <p className="text-foreground font-medium italic" data-testid="testimonial-hero-3">
                    "Video Panda helped us scale from 2 videos/week to 15. Our engagement tripled and we hit 100K followers!"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">LC</span>
                    </div>
                    <div className="text-sm">
                      <div className="font-semibold text-foreground">Lisa Chen</div>
                      <div className="text-muted-foreground">Content Creator</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex items-center justify-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <i className="fas fa-shield-alt text-primary"></i>
                <span className="text-sm text-muted-foreground">100% Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-clock text-primary"></i>
                <span className="text-sm text-muted-foreground">Setup in 48h</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-money-bill-wave text-primary"></i>
                <span className="text-sm text-muted-foreground">No hidden fees</span>
              </div>
            </div>
            
            {/* Social Proof CTA */}
            <div className="pt-12">
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 max-w-4xl mx-auto">
                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold text-foreground">
                    Want Results Like These? 🎯
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Join 200+ businesses already saving time and increasing revenue with our pandas. Book your free strategy call and get your personalized 20-hour savings plan.
                  </p>
                  <Link href="/contact">
                    <Button 
                      size="lg" 
                      className="bg-primary text-primary-foreground hover:bg-primary/90 button-bounce pulse-glow text-lg px-10 py-4 font-semibold shadow-xl"
                      data-testid="button-testimonials-cta"
                    >
                      🎁 Claim My Free Savings Plan
                    </Button>
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    ⚡ Get specific automation ideas in just 30 minutes • No commitments required
                  </p>
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
                className="cta-button bg-primary text-primary-foreground hover:bg-primary/90 transition-all transform hover:scale-105 text-lg px-8 py-4"
                data-testid="button-process-book-audit"
              >
                Book My Free Audit
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview - Panda Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Meet Your Panda Team 🐼
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the pandas that fit your business needs. They work together seamlessly or independently — whatever helps you grow faster.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Automation Panda */}
              <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary/50">
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground font-semibold">
                  Our Flagship
                </Badge>
                <CardContent className="p-8 space-y-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center text-3xl">
                    🤖
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4" data-testid="service-automation-panda-title">Automation Panda</h3>
                    <p className="text-muted-foreground mb-4 font-medium">Your tireless automation expert that never sleeps, never forgets, and saves you 20+ hours monthly.</p>
                    <ul className="space-y-3 text-muted-foreground" data-testid="service-automation-panda-features">
                      <li className="flex items-start space-x-2"><span className="text-primary font-bold">•</span><span>Workflow automation (CRM, lead routing, email, onboarding)</span></li>
                      <li className="flex items-start space-x-2"><span className="text-primary font-bold">•</span><span>AI chatbots for lead qualification & FAQs</span></li>
                      <li className="flex items-start space-x-2"><span className="text-primary font-bold">•</span><span>KPI dashboards & reporting</span></li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xl font-bold text-foreground" data-testid="service-automation-panda-price">Projects from $1,500</p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Design Panda */}
              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary/50">
                <CardContent className="p-8 space-y-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center text-3xl">
                    🎨
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4" data-testid="service-design-panda-title">Design Panda</h3>
                    <p className="text-muted-foreground mb-4 font-medium">Your creative companion delivering unlimited design requests on subscription.</p>
                    <ul className="space-y-3 text-muted-foreground" data-testid="service-design-panda-features">
                      <li className="flex items-start space-x-2"><span className="text-primary font-bold">•</span><span>Unlimited design requests each month</span></li>
                      <li className="flex items-start space-x-2"><span className="text-primary font-bold">•</span><span>Logos, social posts, landing pages, app/UI</span></li>
                      <li className="flex items-start space-x-2"><span className="text-primary font-bold">•</span><span>Flat monthly fee, no surprises</span></li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xl font-bold text-foreground" data-testid="service-design-panda-price">From $700/month</p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Video Panda */}
              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary/50">
                <CardContent className="p-8 space-y-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center text-3xl">
                    🎬
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4" data-testid="service-video-panda-title">Video Panda</h3>
                    <p className="text-muted-foreground mb-4 font-medium">Your content creation partner scaling your video output without the editing headaches.</p>
                    <ul className="space-y-3 text-muted-foreground" data-testid="service-video-panda-features">
                      <li className="flex items-start space-x-2"><span className="text-primary font-bold">•</span><span>Short-form (Reels/TikTok/YouTube Shorts)</span></li>
                      <li className="flex items-start space-x-2"><span className="text-primary font-bold">•</span><span>Long-form edits with captions & thumbnails</span></li>
                      <li className="flex items-start space-x-2"><span className="text-primary font-bold">•</span><span>Perfect for creators & brands scaling content</span></li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xl font-bold text-foreground" data-testid="service-video-panda-price">From $600/month</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-content space-y-4">
              <p className="text-lg font-semibold text-foreground">Ready to Save 20+ Hours Monthly?</p>
              <div className="cta-group">
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    className="cta-button btn-primary bg-primary text-primary-foreground hover:bg-primary/90 button-bounce"
                    data-testid="button-services-free-audit"
                  >
                    🚀 Start Saving Time Now
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button 
                    variant="outline"
                    size="lg" 
                    className="cta-button border-border text-foreground hover:bg-muted hover-lift"
                    data-testid="button-services-pricing"
                  >
                    💰 View Panda Pricing
                  </Button>
                </Link>
              </div>
            </div>
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
                  <i className="fas fa-dollar-sign text-2xl text-primary"></i>
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
              Book a free 30-minute audit call and let's show you where automation can save you hours every week.
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
    </>
  );
}
