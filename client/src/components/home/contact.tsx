import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactInquirySchema, type InsertContactInquiry } from "@shared/schema";
import { Mail, Phone, MessageSquare, MapPin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export function Contact() {
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: undefined,
      inquiryType: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setIsSuccess(true);
      form.reset();
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for your inquiry. I will respond to you shortly.",
      });
      setTimeout(() => setIsSuccess(false), 5000);
    },
    onError: () => {
      toast({
        title: "Error Sending Message",
        description: "Please try again or contact us directly via email or phone.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: InsertContactInquiry) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4" data-testid="text-contact-title">
            Get In Touch
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-subtitle">
            Let's discuss how I can help you find the perfect antique pieces for your collection or establishment
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            <Card data-testid="card-contact-info">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4" data-testid="info-location">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Location</div>
                      <div className="text-sm text-muted-foreground">
                        Redbank Plains, Queensland, Australia
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4" data-testid="info-email-business">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Business Email</div>
                      <a 
                        href="mailto:michellescarlet455@gmail.com" 
                        className="text-sm text-primary hover:underline"
                      >
                        michellescarlet455@gmail.com
                      </a>
                      <div className="text-xs text-muted-foreground mt-1">Primary business inquiries</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4" data-testid="info-email-personal">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Personal Email</div>
                      <a 
                        href="mailto:michelletianna616@gmail.com" 
                        className="text-sm text-primary hover:underline"
                      >
                        michelletianna616@gmail.com
                      </a>
                      <div className="text-xs text-muted-foreground mt-1">Alternative contact</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4" data-testid="info-phone">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Phone / Text</div>
                      <a 
                        href="tel:0434654261" 
                        className="text-sm text-primary hover:underline"
                      >
                        0434 654 261
                      </a>
                      <div className="text-xs text-muted-foreground mt-1">
                        Text/SMS preferred. Calls welcome for business purposes.
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4" data-testid="info-whatsapp">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <SiWhatsapp className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">WhatsApp Business</div>
                      <a 
                        href="https://wa.me/61489925104" 
                        className="text-sm text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        0489 925 104
                      </a>
                      <div className="text-xs text-muted-foreground mt-1">WhatsApp only - business inquiries</div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t">
                  <p className="text-sm text-muted-foreground italic">
                    I respond to all inquiries promptly. Choose the communication method that works best for you.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card data-testid="card-contact-form">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Send an Inquiry</CardTitle>
            </CardHeader>
            <CardContent>
              {isSuccess ? (
                <div className="p-8 text-center" data-testid="message-success">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    Message Sent Successfully
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for your inquiry. I will respond to you shortly.
                  </p>
                  <Button onClick={() => setIsSuccess(false)} variant="outline" data-testid="button-send-another">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} data-testid="input-name" />
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
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your.email@example.com" {...field} data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} data-testid="input-phone" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="inquiryType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Inquiry Type *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-inquiry-type">
                                <SelectValue placeholder="Select inquiry type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="buying">Buying Antiques</SelectItem>
                              <SelectItem value="selling">Selling Antiques</SelectItem>
                              <SelectItem value="museum">Museum Partnership</SelectItem>
                              <SelectItem value="corporate">Corporate Inquiry</SelectItem>
                              <SelectItem value="retail">Retail Partnership</SelectItem>
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
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell me about your antique needs or inquiry..." 
                              className="min-h-[120px]"
                              {...field}
                              data-testid="input-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={contactMutation.isPending}
                      data-testid="button-submit-contact"
                    >
                      {contactMutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
