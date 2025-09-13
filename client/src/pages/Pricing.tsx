import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import SEOHead from "@/components/SEOHead";

export default function Pricing() {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <>
      <SEOHead 
        title="Pricing - Transparent Automation & Design Packages | Flexpandas"
        description="Simple pricing for automation (€1,500-€9,000), design subscriptions (€700-€2,000/mo), and video editing (€600-€2,000/mo). No hidden fees."
        path="/pricing"
      />
      <main className="pt-16">
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-8 mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              No hidden fees. No long contracts. Just clear packages that save you time and help you grow.
            </p>
            
            {/* Tool logos strip */}
            <div className="flex flex-wrap justify-center items-center gap-8 pt-8" data-testid="tool-logos">
              <div className="text-muted-foreground font-medium">Make.com</div>
              <div className="text-muted-foreground font-medium">HubSpot</div>
              <div className="text-muted-foreground font-medium">Pipedrive</div>
              <div className="text-muted-foreground font-medium">Figma</div>
              <div className="text-muted-foreground font-medium">CapCut</div>
            </div>
          </div>

          {/* Automation Packages */}
          <div className="space-y-16">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Automation & AI — Build once, save forever</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Starter */}
                <Card className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground" data-testid="automation-starter-title">Starter</h3>
                      <p className="text-muted-foreground">"Quick Wins"</p>
                      <div className="text-3xl font-bold text-foreground mt-4" data-testid="automation-starter-price">€1,500</div>
                    </div>
                    
                    <p className="text-muted-foreground">Best for small teams wanting to save time fast</p>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">Workflow audit (1-hour call + systems map)</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">3 core automations</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">1 dashboard</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">2 weeks of post-launch support</span>
                      </li>
                    </ul>
                    
                    <div className="border-t border-border pt-4">
                      <p className="text-muted-foreground">Timeline: 2 weeks</p>
                    </div>
                    
                    <Button 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                      data-testid="button-automation-starter"
                    >
                      Start My Quick Wins
                    </Button>
                  </CardContent>
                </Card>
                
                {/* Core (Most Popular) */}
                <Card className="relative border-2 border-primary hover:shadow-xl transition-shadow">
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                  
                  <CardContent className="p-8 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground" data-testid="automation-core-title">Core</h3>
                      <p className="text-muted-foreground">"Growth Engine"</p>
                      <div className="text-3xl font-bold text-foreground mt-4" data-testid="automation-core-price">€4,500</div>
                    </div>
                    
                    <p className="text-muted-foreground">Best for businesses ready to scale and stop losing leads</p>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">Workflow audit + strategy map</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">6–8 custom automations</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">1 AI chatbot</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">2 dashboards</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">4 weeks of post-launch support</span>
                      </li>
                    </ul>
                    
                    <div className="border-t border-border pt-4">
                      <p className="text-muted-foreground">Timeline: 4 weeks</p>
                    </div>
                    
                    <Button 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                      data-testid="button-automation-core"
                    >
                      Build My Growth Engine
                    </Button>
                  </CardContent>
                </Card>
                
                {/* Scale */}
                <Card className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground" data-testid="automation-scale-title">Scale</h3>
                      <p className="text-muted-foreground">"Full Ops System"</p>
                      <div className="text-3xl font-bold text-foreground mt-4" data-testid="automation-scale-price">€7,500–€9,000</div>
                    </div>
                    
                    <p className="text-muted-foreground">Best for growing teams wanting automation across whole customer journey</p>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">Deep-dive audit + full workflow blueprint</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">10–12 advanced automations</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">2 AI chatbots</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">3 dashboards</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">Training & documentation</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">8 weeks of post-launch support</span>
                      </li>
                    </ul>
                    
                    <div className="border-t border-border pt-4">
                      <p className="text-muted-foreground">Timeline: 6–8 weeks</p>
                    </div>
                    
                    <Button 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                      data-testid="button-automation-scale"
                    >
                      Build My Ops System
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center">
                <p className="text-muted-foreground" data-testid="care-plan-note">Need ongoing support? Add a Care Plan starting at €500/month.</p>
              </div>
            </div>

            {/* Design Subscriptions */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">On-demand design, whenever you need it</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Design Starter */}
                <Card className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground" data-testid="design-starter-title">Starter</h3>
                      <div className="text-3xl font-bold text-foreground mt-4" data-testid="design-starter-price">
                        €700<span className="text-lg font-normal text-muted-foreground">/mo</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">1 active request at a time</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">30 design hours/month</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">Logos, social posts, ads, landing page sections</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">48h turnaround per request</span>
                      </li>
                    </ul>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-border text-foreground hover:bg-muted transition-colors"
                      data-testid="button-design-starter"
                    >
                      Start Design Starter
                    </Button>
                  </CardContent>
                </Card>
                
                {/* Design Pro (Most Popular) */}
                <Card className="relative border-2 border-primary hover:shadow-xl transition-shadow">
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                  
                  <CardContent className="p-8 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground" data-testid="design-pro-title">Pro</h3>
                      <div className="text-3xl font-bold text-foreground mt-4" data-testid="design-pro-price">
                        €1,200<span className="text-lg font-normal text-muted-foreground">/mo</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">2 active requests at a time</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">50 design hours/month</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">Branding kits, website UI, app design, marketing campaigns</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">24–48h turnaround per request</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">Priority support</span>
                      </li>
                    </ul>
                    
                    <Button 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                      data-testid="button-design-pro"
                    >
                      Start Design Pro
                    </Button>
                  </CardContent>
                </Card>
                
                {/* Design Scale */}
                <Card className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground" data-testid="design-scale-title">Scale</h3>
                      <div className="text-3xl font-bold text-foreground mt-4" data-testid="design-scale-price">
                        €2,000<span className="text-lg font-normal text-muted-foreground">/mo</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">3 active requests at a time</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">80 design hours/month</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">Complex design projects, multi-page app/web design</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">24h turnaround per request</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">Dedicated account manager</span>
                      </li>
                    </ul>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-border text-foreground hover:bg-muted transition-colors"
                      data-testid="button-design-scale"
                    >
                      Start Design Scale
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Video Subscriptions */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Video content at scale, without the editing headaches</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Video Starter */}
                <Card className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground" data-testid="video-starter-title">Starter</h3>
                      <div className="text-3xl font-bold text-foreground mt-4" data-testid="video-starter-price">
                        €600<span className="text-lg font-normal text-muted-foreground">/mo</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">Up to 8 short-form videos/month</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">Captions, basic edits, branded style</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">72h turnaround</span>
                      </li>
                    </ul>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-border text-foreground hover:bg-muted transition-colors"
                      data-testid="button-video-starter"
                    >
                      Start Video Starter
                    </Button>
                  </CardContent>
                </Card>
                
                {/* Video Pro (Most Popular) */}
                <Card className="relative border-2 border-primary hover:shadow-xl transition-shadow">
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                  
                  <CardContent className="p-8 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground" data-testid="video-pro-title">Pro</h3>
                      <div className="text-3xl font-bold text-foreground mt-4" data-testid="video-pro-price">
                        €1,200<span className="text-lg font-normal text-muted-foreground">/mo</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">Up to 16 short-form videos/month + 1 long-form edit</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">Captions, hooks, branded templates, thumbnail design</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">48h turnaround</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">Priority editing queue</span>
                      </li>
                    </ul>
                    
                    <Button 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                      data-testid="button-video-pro"
                    >
                      Start Video Pro
                    </Button>
                  </CardContent>
                </Card>
                
                {/* Video Scale */}
                <Card className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground" data-testid="video-scale-title">Scale</h3>
                      <div className="text-3xl font-bold text-foreground mt-4" data-testid="video-scale-price">
                        €2,000<span className="text-lg font-normal text-muted-foreground">/mo</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">Up to 30 short-form videos/month + 2 long-form edits</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">Captions, animations, hooks, custom thumbnails</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">24–48h turnaround</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-foreground">Dedicated editor & account manager</span>
                      </li>
                    </ul>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-border text-foreground hover:bg-muted transition-colors"
                      data-testid="button-video-scale"
                    >
                      Start Video Scale
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Add-On Options */}
            <Card className="bg-muted/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Add-On Options</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Extra requests</h4>
                    <p className="text-2xl font-bold text-foreground" data-testid="addon-extra-price">
                      €150 <span className="text-sm font-normal text-muted-foreground">each</span>
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Strategy call</h4>
                    <p className="text-2xl font-bold text-foreground" data-testid="addon-strategy-price">
                      €200 <span className="text-sm font-normal text-muted-foreground">(30 min creative direction consult)</span>
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Quarterly prepay discount</h4>
                    <p className="text-2xl font-bold text-primary" data-testid="addon-discount">
                      -10% <span className="text-sm font-normal text-muted-foreground">when billed quarterly</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              </div>
              
              <div className="max-w-4xl mx-auto space-y-4">
                {[
                  {
                    id: "setup-time",
                    question: "How fast is setup?",
                    answer: "Automation projects typically take 2–6 weeks depending on scope. Design and video subscriptions start immediately after onboarding."
                  },
                  {
                    id: "unlimited-requests",
                    question: "What's included in \"unlimited design requests\"?",
                    answer: "One active request at a time with a queue system. You can submit as many requests as you want, and we'll work through them based on your plan's capacity."
                  },
                  {
                    id: "pause-cancel",
                    question: "Can I pause/cancel subscriptions?",
                    answer: "Yes, you can cancel or pause anytime with 14 days' notice. No long-term contracts or cancellation fees."
                  },
                  {
                    id: "tools-knowledge",
                    question: "Do I need to know any tools?",
                    answer: "No, we handle everything end-to-end. We work with your existing tools and adapt to your workflow preferences."
                  }
                ].map((faq) => (
                  <Collapsible key={faq.id} open={openFAQ === faq.id} onOpenChange={() => toggleFAQ(faq.id)}>
                    <Card>
                      <CollapsibleTrigger className="w-full text-left p-6 focus:outline-none" data-testid={`faq-${faq.id}`}>
                        <div className="flex justify-between items-center">
                          <h3 className="font-semibold text-foreground">{faq.question}</h3>
                          {openFAQ === faq.id ? (
                            <ChevronUp className="h-5 w-5 text-muted-foreground" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-6 pb-6">
                        <p className="text-muted-foreground" data-testid={`faq-${faq.id}-answer`}>{faq.answer}</p>
                      </CollapsibleContent>
                    </Card>
                  </Collapsible>
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-12 space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Ready to save time and scale faster?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Book a free 15-min audit call and let's find your quickest wins.
                </p>
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all transform hover:scale-105 text-lg px-8 py-4"
                    data-testid="button-pricing-cta"
                  >
                    Book My Free Audit
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
