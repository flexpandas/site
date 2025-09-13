import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <main className="pt-16">
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-8 mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground" data-testid="contact-title">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="contact-subtitle">
              Ready to save 20+ hours every month? Let's talk about how Flexpandas can transform your business operations.
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
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-muted-foreground">15-minute friendly conversation (no sales pitch)</span>
                      </li>
                      <li className="flex items-start space-x-3" data-testid="audit-expectation-2">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-muted-foreground">Quick assessment of your current workflows</span>
                      </li>
                      <li className="flex items-start space-x-3" data-testid="audit-expectation-3">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-muted-foreground">2-3 specific automation opportunities we'd implement</span>
                      </li>
                      <li className="flex items-start space-x-3" data-testid="audit-expectation-4">
                        <i className="fas fa-check text-primary mt-1"></i>
                        <span className="text-muted-foreground">Clear next steps if you want to move forward</span>
                      </li>
                    </ul>
                  </div>
                  
                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors py-4 text-lg font-semibold"
                    data-testid="button-book-audit"
                  >
                    Book Free Audit Call
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Start Section */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6" data-testid="quick-start-title">Not Sure Where to Start?</h2>
                  <p className="text-muted-foreground mb-6">Choose your biggest pain point:</p>
                  
                  <div className="space-y-4">
                    <Button 
                      variant="ghost"
                      className="w-full text-left p-4 bg-muted/50 hover:bg-muted h-auto justify-start"
                      data-testid="quick-start-leads"
                    >
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">"I'm losing leads"</h3>
                        <p className="text-sm text-muted-foreground">→ Book automation audit</p>
                      </div>
                    </Button>
                    
                    <Button 
                      variant="ghost"
                      className="w-full text-left p-4 bg-muted/50 hover:bg-muted h-auto justify-start"
                      data-testid="quick-start-design"
                    >
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">"I need consistent design work"</h3>
                        <p className="text-sm text-muted-foreground">→ Start with Design Starter (€700/month)</p>
                      </div>
                    </Button>
                    
                    <Button 
                      variant="ghost"
                      className="w-full text-left p-4 bg-muted/50 hover:bg-muted h-auto justify-start"
                      data-testid="quick-start-video"
                    >
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">"I need video content regularly"</h3>
                        <p className="text-sm text-muted-foreground">→ Start with Video Starter (€600/month)</p>
                      </div>
                    </Button>
                    
                    <Button 
                      variant="ghost"
                      className="w-full text-left p-4 bg-muted/50 hover:bg-muted h-auto justify-start"
                      data-testid="quick-start-unsure"
                    >
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">"I'm not sure what I need"</h3>
                        <p className="text-sm text-muted-foreground">→ Book free 15-min chat</p>
                      </div>
                    </Button>
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
                      <i className="fas fa-download text-primary mt-1"></i>
                      <div>
                        <h3 className="font-semibold text-foreground">Free Automation Checklist</h3>
                        <p className="text-sm text-muted-foreground">10 tasks you can automate today</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3" data-testid="resource-tutorials">
                      <i className="fas fa-play text-primary mt-1"></i>
                      <div>
                        <h3 className="font-semibold text-foreground">Weekly tutorials</h3>
                        <p className="text-sm text-muted-foreground">On TikTok, LinkedIn, and YouTube</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3" data-testid="resource-templates">
                      <i className="fas fa-file-alt text-primary mt-1"></i>
                      <div>
                        <h3 className="font-semibold text-foreground">Template library</h3>
                        <p className="text-sm text-muted-foreground">Free Make.com automation templates</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full mt-6 border-border text-foreground hover:bg-muted transition-colors"
                    data-testid="button-download-resources"
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
  );
}
