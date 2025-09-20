import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar } from "lucide-react";

interface CalendarBookingProps {
  calendarUrl?: string;
}

export default function CalendarBooking({ calendarUrl = "https://cal.com/flexpandas/30min" }: CalendarBookingProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          size="lg"
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200 group" 
          data-testid="button-calendar-booking"
        >
          <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
          Book Your Free Audit Call
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-foreground">
            Book Your Free 30-Minute Audit Call 🐼
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-4 flex-1 w-full min-h-[50vh] h-[70vh] md:h-[75vh] relative">
          {/* Loading skeleton */}
          {isLoading && (
            <div className="absolute inset-0 bg-muted/50 animate-pulse rounded-md flex items-center justify-center">
              <div className="text-muted-foreground">Loading calendar...</div>
            </div>
          )}
          
          {/* Cal.com embed */}
          <iframe
            src={calendarUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Book a meeting with Flexpandas"
            className="rounded-md"
            data-testid="calendar-widget"
            loading="lazy"
            onLoad={() => setIsLoading(false)}
            onError={() => setIsLoading(false)}
          />
        </div>
        
        <div className="mt-4 p-4 bg-muted/30 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            <strong>Note:</strong> Schedule your free 30-minute business automation audit. We'll analyze your current processes and identify opportunities to save you 20+ hours per month.
          </p>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => window.open(calendarUrl, '_blank')}
            data-testid="button-open-calendar-new-tab"
          >
            Open in New Tab
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}