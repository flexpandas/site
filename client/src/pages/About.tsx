import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <main className="pt-16">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8 mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground" data-testid="about-title">
              About Flexpandas 🐼
            </h1>
          </div>
          
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-muted-foreground" data-testid="about-intro">
              At Flexpandas, we believe small businesses and creators shouldn't waste time on work that software can do for them.
            </p>
            
            <p className="text-muted-foreground" data-testid="about-story">
              We started as a small remote team helping brands with design projects — logos, websites, social media graphics. Over time, we noticed the same pattern: clients were drowning in repetitive tasks, struggling to keep up with leads, and spending more time managing tools than serving customers.
            </p>
            
            <p className="text-muted-foreground" data-testid="about-expansion">
              So we expanded. Today, Flexpandas helps businesses save time and scale faster with:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl mx-auto flex items-center justify-center">
                    <i className="fas fa-robot text-2xl text-primary"></i>
                  </div>
                  <h3 className="font-semibold text-foreground" data-testid="service-automation-title">Automation & AI</h3>
                  <p className="text-muted-foreground text-sm" data-testid="service-automation-desc">
                    Systems that capture leads, follow up automatically, and run your business on autopilot
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl mx-auto flex items-center justify-center">
                    <i className="fas fa-palette text-2xl text-primary"></i>
                  </div>
                  <h3 className="font-semibold text-foreground" data-testid="service-design-title">Design Subscriptions</h3>
                  <p className="text-muted-foreground text-sm" data-testid="service-design-desc">
                    On-demand creative, without the cost of an in-house team
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl mx-auto flex items-center justify-center">
                    <i className="fas fa-video text-2xl text-primary"></i>
                  </div>
                  <h3 className="font-semibold text-foreground" data-testid="service-video-title">Video Editing Subscriptions</h3>
                  <p className="text-muted-foreground text-sm" data-testid="service-video-desc">
                    Consistent, branded content that keeps you visible everywhere
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <p className="text-muted-foreground" data-testid="about-team">
              Our team is small, flexible, and global — with automation experts, designers, and editors ready to plug in as your on-demand operations partner.
            </p>
            
            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4" data-testid="name-explanation-title">
                  Why the name Flexpandas?
                </h2>
                <p className="text-muted-foreground text-lg" data-testid="name-explanation">
                  Because we're flexible like bamboo — and as reliable as a panda who always shows up. 🐼
                </p>
              </CardContent>
            </Card>
            
            <div className="text-center pt-8">
              <div className="space-y-6">
                <p className="text-xl font-semibold text-foreground" data-testid="about-cta-text">
                  Work smarter, not harder. Let's build systems that give you back your time.
                </p>
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all transform hover:scale-105 text-lg px-8 py-4"
                    data-testid="button-about-cta"
                  >
                    Book a Free Audit
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
