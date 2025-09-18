import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  businessType: z.string().optional(),
  message: z.string().min(10, "Please provide more details (minimum 10 characters)"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      businessType: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      if (data.success) {
        setIsSubmitted(true);
        form.reset();
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });
      } else {
        toast({
          title: "Error sending message",
          description: data.message || "Please try again later.",
          variant: "destructive",
        });
      }
    },
    onError: (error) => {
      console.error("Contact form error:", error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly at hello@flexpandas.com",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-2xl p-8 shadow-lg text-center space-y-4">
        <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
          <i className="fas fa-check text-2xl text-primary"></i>
        </div>
        <h2 className="text-2xl font-bold text-foreground">Thank you! 🐼</h2>
        <p className="text-muted-foreground">
          We've received your message and will get back to you within 24 hours.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)} 
          variant="outline"
          data-testid="button-send-another"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-foreground mb-6" data-testid="form-title">Send Us a Message</h2>
      <p className="text-muted-foreground mb-6">For general inquiries or questions:</p>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-center space-x-3">
          <i className="fas fa-envelope text-primary"></i>
          <span className="text-foreground" data-testid="contact-email">hello@flexpandas.com</span>
        </div>
        <div className="flex items-center space-x-3">
          <i className="fas fa-clock text-primary"></i>
          <span className="text-muted-foreground" data-testid="response-time">Response time: Within 24 hours</span>
        </div>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your name" 
                    {...field} 
                    data-testid="input-name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    {...field} 
                    data-testid="input-email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="businessType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger data-testid="select-business-type">
                      <SelectValue placeholder="Select your business type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="agency">Marketing Agency</SelectItem>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="saas">SaaS</SelectItem>
                    <SelectItem value="creator">Content Creator</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us about your biggest business challenge..." 
                    className="min-h-[120px]" 
                    {...field} 
                    data-testid="textarea-message"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            disabled={mutation.isPending}
            data-testid="button-submit-contact"
          >
            {mutation.isPending ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
