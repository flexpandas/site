import { Link } from "wouter";
import { Check, Download, Play, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import CalendarBooking from "@/components/CalendarBooking";
import SEOHead from "@/components/SEOHead";

export default function Contact() {
  return (
    <>
      <SEOHead 
        title="Contact Flexpandas - Get Your Free Automation Audit | Flexpandas"
        description="Ready to save 20+ hours every month? Book your free automation audit call. Contact Flexpandas for automation, design, and video editing services."
        path="/contact"
      />
      <main className="pt-16">
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-8 mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground" data-testid="contact-title">Ready to Meet Your Pandas? 🐼</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="contact-subtitle">
              Ready to save 20+ hours every month? Let's talk about how your panda team can transform your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Book Audit Section */}
            <div className="space-y-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6" data-testid="audit-title">Book Your Free Audit 🐼</h2>
                  
                  <div className="space-y-4 mb-6">
                    <h3 className="font-semibold text-foreground">What to expect:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3" data-testid="audit-expectation-1">
                        <Check className="w-4 h-4 text-primary mt-1" />
                        <span className="text-muted-foreground">30-minute friendly conversation (no sales pitch)</span>
                      </li>
                      <li className="flex items-start space-x-3" data-testid="audit-expectation-2">
                        <Check className="w-4 h-4 text-primary mt-1" />
                        <span className="text-muted-foreground">Quick assessment of your current workflows</span>
                      </li>
                      <li className="flex items-start space-x-3" data-testid="audit-expectation-3">
                        <Check className="w-4 h-4 text-primary mt-1" />
                        <span className="text-muted-foreground">2-3 specific automation opportunities we'd implement</span>
                      </li>
                      <li className="flex items-start space-x-3" data-testid="audit-expectation-4">
                        <Check className="w-4 h-4 text-primary mt-1" />
                        <span className="text-muted-foreground">Clear next steps if you want to move forward</span>
                      </li>
                    </ul>
                  </div>
                  
                  <CalendarBooking />
                </CardContent>
              </Card>

              {/* Which Panda Section */}
              <Card className="hover:shadow-lg transition-shadow border-primary/20">
                <CardContent className="panda-selector-section">
                  <h2 className="text-2xl font-bold text-foreground mb-6" data-testid="which-panda-title">
                    Which Panda Do You Need? 🤔
                  </h2>
                  <p className="text-muted-foreground mb-6">Choose your biggest challenge and we'll recommend the right panda:</p>
                  
                  <div className="space-y-4">
                    <Link href="/contact?service=automation">
                      <Button 
                        variant="ghost"
                        className="w-full text-left h-auto justify-start panda-option"
                        data-testid="panda-automation"
                      >
                        <div className="panda-option-content">
                          <span className="panda-option-icon">🤖</span>
                          <div className="panda-option-text">
                            <h3 className="panda-option-title">"I'm losing leads and wasting time on repetitive tasks"</h3>
                            <p className="panda-option-cta">→ Meet Automation Panda (Book free audit)</p>
                          </div>
                        </div>
                      </Button>
                    </Link>
                    
                    <Link href="/contact?service=design">
                      <Button 
                        variant="ghost"
                        className="w-full text-left h-auto justify-start panda-option"
                        data-testid="panda-design"
                      >
                        <div className="panda-option-content">
                          <span className="panda-option-icon">🎨</span>
                          <div className="panda-option-text">
                            <h3 className="panda-option-title">"I need consistent design work but can't afford a full-time designer"</h3>
                            <p className="panda-option-cta">→ Meet Design Panda (Start at $700/month)</p>
                          </div>
                        </div>
                      </Button>
                    </Link>
                    
                    <Link href="/contact?service=video">
                      <Button 
                        variant="ghost"
                        className="w-full text-left h-auto justify-start panda-option"
                        data-testid="panda-video"
                      >
                        <div className="panda-option-content">
                          <span className="panda-option-icon">🎬</span>
                          <div className="panda-option-text">
                            <h3 className="panda-option-title">"I want to create more video content but editing takes forever"</h3>
                            <p className="panda-option-cta">→ Meet Video Panda (Start at $600/month)</p>
                          </div>
                        </div>
                      </Button>
                    </Link>
                    
                    <Link href="/contact?service=consultation">
                      <Button 
                        variant="ghost"
                        className="w-full text-left h-auto justify-start panda-option bg-muted/50 hover:bg-muted border border-muted-foreground/20"
                        data-testid="panda-unsure"
                      >
                        <div className="panda-option-content">
                          <span className="panda-option-icon">🐼</span>
                          <div className="panda-option-text">
                            <h3 className="panda-option-title">"I'm not sure which panda team I need"</h3>
                            <p className="panda-option-cta text-muted-foreground">→ Book a free 30-min discovery call</p>
                          </div>
                        </div>
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form Section */}
            <div className="space-y-8">
              <ContactForm />

              {/* Resources Section */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6" data-testid="resources-title">Free Resources</h2>
                  <p className="text-muted-foreground mb-6">Learn before you buy:</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3" data-testid="resource-checklist">
                      <Download className="w-4 h-4 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Free Automation Checklist</h3>
                        <p className="text-sm text-muted-foreground">10 tasks you can automate today</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3" data-testid="resource-tutorials">
                      <Play className="w-4 h-4 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Weekly tutorials</h3>
                        <p className="text-sm text-muted-foreground">On TikTok, LinkedIn, and YouTube</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3" data-testid="resource-templates">
                      <FileText className="w-4 h-4 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Template library</h3>
                        <p className="text-sm text-muted-foreground">Free Make.com automation templates</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="cta-button w-full border-border text-foreground hover:bg-muted transition-colors"
                    data-testid="button-download-resources"
                    onClick={() => window.open("https://www.notion.so/Flexpandas-Free-Resource-272b72b23edf80b68a3cec3c622a74ca?source=copy_link", "_blank")}
                  >
                    Download Free Resources
                  </Button>
                </CardContent>
              </Card>

              {/* Social Media Section */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6" data-testid="social-title">Follow Our Journey</h2>
                  <p className="text-muted-foreground mb-6" data-testid="social-description">
                    Automation tutorials, behind-the-scenes, client success stories
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      variant="ghost" 
                      className="flex items-center space-x-2 px-4 py-2 bg-muted hover:bg-muted/70 transition-colors"
                      data-testid="social-tiktok"
                    >
                      <i className="fab fa-tiktok text-foreground"></i>
                      <span className="text-foreground">TikTok</span>
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      className="flex items-center space-x-2 px-4 py-2 bg-muted hover:bg-muted/70 transition-colors"
                      data-testid="social-linkedin"
                    >
                      <i className="fab fa-linkedin text-foreground"></i>
                      <span className="text-foreground">LinkedIn</span>
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      className="flex items-center space-x-2 px-4 py-2 bg-muted hover:bg-muted/70 transition-colors"
                      data-testid="social-youtube"
                    >
                      <i className="fab fa-youtube text-foreground"></i>
                      <span className="text-foreground">YouTube</span>
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      className="flex items-center space-x-2 px-4 py-2 bg-muted hover:bg-muted/70 transition-colors"
                      data-testid="social-instagram"
                    >
                      <i className="fab fa-instagram text-foreground"></i>
                      <span className="text-foreground">Instagram</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
