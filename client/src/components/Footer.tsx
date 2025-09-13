import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl" data-testid="footer-logo-panda">🐼</span>
              <span className="text-xl font-bold text-foreground" data-testid="footer-logo-text">Flexpandas</span>
            </div>
            <p className="text-muted-foreground" data-testid="footer-tagline">Work smarter, not harder</p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services</h3>
            <div className="space-y-2">
              <Link 
                href="/" 
                className="block text-muted-foreground hover:text-foreground transition-colors"
                data-testid="footer-link-automation"
              >
                Automation & AI
              </Link>
              <Link 
                href="/pricing" 
                className="block text-muted-foreground hover:text-foreground transition-colors"
                data-testid="footer-link-design"
              >
                Design Subscriptions
              </Link>
              <Link 
                href="/pricing" 
                className="block text-muted-foreground hover:text-foreground transition-colors"
                data-testid="footer-link-video"
              >
                Video Editing
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <div className="space-y-2">
              <Link 
                href="/about" 
                className="block text-muted-foreground hover:text-foreground transition-colors"
                data-testid="footer-link-about"
              >
                About
              </Link>
              <Link 
                href="/pricing" 
                className="block text-muted-foreground hover:text-foreground transition-colors"
                data-testid="footer-link-pricing"
              >
                Pricing
              </Link>
              <Link 
                href="/contact" 
                className="block text-muted-foreground hover:text-foreground transition-colors"
                data-testid="footer-link-contact"
              >
                Contact
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="footer-social-tiktok"
                aria-label="TikTok"
              >
                <i className="fab fa-tiktok text-xl"></i>
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="footer-social-instagram"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="footer-social-linkedin"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="footer-social-youtube"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
            <p className="text-sm text-muted-foreground" data-testid="footer-social-description">
              Weekly automation tutorials - learn before you buy
            </p>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center space-y-2">
          <p className="text-muted-foreground" data-testid="footer-copyright">
            &copy; 2024 Flexpandas — Work smarter, not harder.
          </p>
          <p className="text-sm text-muted-foreground" data-testid="footer-response-time">
            We typically respond within 2-4 hours during business hours (9 AM - 6 PM CET)
          </p>
        </div>
      </div>
    </footer>
  );
}
