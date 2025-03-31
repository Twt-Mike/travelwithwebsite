
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger
} from '@/components/ui/sheet';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreditCard, Building2, Info, CheckCircle, Calendar } from 'lucide-react';

const currencies = [
  { code: 'GBP', symbol: '£', rate: 1, name: 'British Pound' },
  { code: 'USD', symbol: '$', rate: 1.31, name: 'US Dollar' },
  { code: 'EUR', symbol: '€', rate: 1.18, name: 'Euro' }
];

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(5, { message: "Phone number is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Date of birth is required (YYYY-MM-DD)" }),
  gender: z.enum(["male", "female", "other", "prefer-not-to-say"], {
    required_error: "Please select a gender option",
  }),
  medicalRequirements: z.string().optional(),
  dietaryRequirements: z.string().optional(),
  whatsapp: z.string().optional(),
  notes: z.string().optional(),
  termsAccepted: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions",
  }),
  paymentMethod: z.enum(["card", "bank"], {
    required_error: "Please select a payment method",
  }),
  paymentOption: z.enum(["deposit", "full"], {
    required_error: "Please select a payment option",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const BookingForm = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "United Kingdom (UK)",
      dateOfBirth: "",
      gender: undefined,
      medicalRequirements: "",
      dietaryRequirements: "",
      whatsapp: "",
      notes: "",
      termsAccepted: false,
      paymentMethod: undefined,
      paymentOption: undefined,
    },
  });
  
  const calculatePrice = (basePrice: number, currency: typeof currencies[0], isDeposit: boolean) => {
    const convertedPrice = basePrice * currency.rate;
    return isDeposit ? convertedPrice * 0.2 : convertedPrice; // 20% deposit
  };
  
  const formatPrice = (price: number, currency: typeof currencies[0]) => {
    return `${currency.symbol}${Math.round(price).toLocaleString()}`;
  };
  
  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    console.log("Form submission data:", data);
    
    // Here you would integrate with your payment processor (Stripe, etc.)
    // For now, we'll simulate a submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Booking submitted successfully! In a real implementation, you would be redirected to payment.");
    }, 1500);
  };

  const basePrice = 2200;
  const depositAmount = basePrice * 0.2;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mt-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-serif font-bold text-japan-indigo">
            Japan 11 Day Tour with OurTravelTreats
          </h3>
          <div className="flex gap-2">
            {currencies.map((currency) => (
              <button
                key={currency.code}
                onClick={() => setSelectedCurrency(currency)}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedCurrency.code === currency.code
                    ? "bg-japan-indigo text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {currency.code}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
          <div>
            <div className="text-3xl font-bold mb-1">
              {formatPrice(calculatePrice(basePrice, selectedCurrency, false), selectedCurrency)}
              <span className="text-sm text-gray-500 ml-2">per person</span>
            </div>
            <div className="text-sm text-gray-600">
              Deposit: {formatPrice(calculatePrice(depositAmount, selectedCurrency, false), selectedCurrency)}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2 text-sm bg-japan-pink/10 text-japan-pink px-3 py-1 rounded-full">
              <Calendar className="h-4 w-4" />
              <span>April 5-15, 2025</span>
            </div>
            <div className="flex items-center gap-2 text-sm bg-japan-green/10 text-japan-green px-3 py-1 rounded-full">
              <CheckCircle className="h-4 w-4" />
              <span>7 spots remaining</span>
            </div>
          </div>
        </div>
        
        <div className="mb-4 text-sm text-gray-600">
          Your 11 Day Japan Tour starting from Tokyo & finishing in Osaka! With OurTravelTreats
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg text-sm">
          <div className="font-medium mb-1">Payment Information:</div>
          <ul className="space-y-1">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
              <span>Deposit: {formatPrice(calculatePrice(depositAmount, selectedCurrency, false), selectedCurrency)} due today (Non-refundable)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
              <span>Final Payment: {formatPrice(calculatePrice(basePrice - depositAmount, selectedCurrency, false), selectedCurrency)} due by 1 August 2025</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
              <span>You will receive an invoice via email for the final payment</span>
            </li>
          </ul>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="link" className="text-japan-indigo p-0 h-auto my-2">
                <Info className="h-4 w-4 mr-1" /> View Terms & Conditions
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-xl overflow-y-auto">
              <SheetHeader className="mb-4">
                <SheetTitle className="text-xl font-serif">Terms & Conditions</SheetTitle>
                <SheetDescription>
                  Please read the following terms and conditions carefully
                </SheetDescription>
              </SheetHeader>
              <div className="text-sm space-y-4 overflow-y-auto max-h-[80vh]">
                <div>
                  <h3 className="font-bold mb-1">TRAVEL WITH – BOOKING TERMS & CONDITIONS</h3>
                  <p className="text-gray-600">
                    These Terms and Conditions govern the relationship between you and Travel With ("the Company"). 
                    By booking a tour, you agree to be bound by these Terms and Conditions that outline, among other things, 
                    the cancellation policy, liability limitations, and data protection measures.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold mb-1">1. THE CONTRACT</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>By booking, you accept these Terms and Conditions on behalf of yourself and all named participants.</li>
                    <li>A contract is formed when the Company confirms the booking.</li>
                    <li>The Company reserves the right to decline any booking.</li>
                    <li>Clients must be 18 years or older to participate.</li>
                    <li>By booking on behalf of others, you confirm that you have obtained their consent and accept full responsibility for payments, communications, and compliance with these Terms.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold mb-1">2. DEPOSITS & PAYMENTS</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>A non-refundable deposit of 20% is required at booking.</li>
                    <li>Full payment is due 10 weeks before the tour start date.</li>
                    <li>Bookings within 10 weeks of departure require full payment at booking.</li>
                    <li>Refunds:
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Deposits are non-refundable.</li>
                        <li>Cancellations more than 10 weeks before departure: Refund minus deposit & processing fees.</li>
                        <li>Cancellations within 10 weeks of departure: No refunds.</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                
                {/* Additional sections would continue here */}
                <div className="text-center text-gray-500 italic">
                  Full terms and conditions document continues...
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-japan-indigo">Payment Options</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div 
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  form.watch("paymentMethod") === "card" 
                    ? "border-japan-indigo bg-japan-indigo/5" 
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => form.setValue("paymentMethod", "card")}
              >
                <div className="flex items-center gap-3">
                  <div className={`rounded-full p-2 ${
                    form.watch("paymentMethod") === "card" 
                      ? "bg-japan-indigo/10" 
                      : "bg-gray-100"
                  }`}>
                    <CreditCard className={`h-5 w-5 ${
                      form.watch("paymentMethod") === "card" 
                        ? "text-japan-indigo" 
                        : "text-gray-500"
                    }`} />
                  </div>
                  <div>
                    <div className="font-medium">Credit/Debit Card</div>
                    <div className="text-sm text-gray-500">Via Stripe (3% processing fee)</div>
                  </div>
                </div>
              </div>
              
              <div 
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  form.watch("paymentMethod") === "bank" 
                    ? "border-japan-indigo bg-japan-indigo/5" 
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => form.setValue("paymentMethod", "bank")}
              >
                <div className="flex items-center gap-3">
                  <div className={`rounded-full p-2 ${
                    form.watch("paymentMethod") === "bank" 
                      ? "bg-japan-indigo/10" 
                      : "bg-gray-100"
                  }`}>
                    <Building2 className={`h-5 w-5 ${
                      form.watch("paymentMethod") === "bank" 
                        ? "text-japan-indigo" 
                        : "text-gray-500"
                    }`} />
                  </div>
                  <div>
                    <div className="font-medium">Bank Transfer</div>
                    <div className="text-sm text-gray-500">No processing fees</div>
                  </div>
                </div>
              </div>
            </div>
            
            {form.formState.errors.paymentMethod && (
              <p className="text-red-500 text-sm">{form.formState.errors.paymentMethod.message}</p>
            )}
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-japan-indigo">Payment Amount</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div 
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  form.watch("paymentOption") === "deposit" 
                    ? "border-japan-indigo bg-japan-indigo/5" 
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => form.setValue("paymentOption", "deposit")}
              >
                <div className="flex items-center gap-3">
                  <div className="font-medium">Pay Deposit Only</div>
                  <div className="text-sm bg-japan-pink text-white px-2 py-0.5 rounded">Recommended</div>
                </div>
                <div className="text-lg font-bold mt-2">
                  {formatPrice(calculatePrice(depositAmount, selectedCurrency, false), selectedCurrency)}
                </div>
                <div className="text-sm text-gray-500">Due today (20% of total)</div>
              </div>
              
              <div 
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  form.watch("paymentOption") === "full" 
                    ? "border-japan-indigo bg-japan-indigo/5" 
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => form.setValue("paymentOption", "full")}
              >
                <div className="flex items-center gap-3">
                  <div className="font-medium">Pay Full Amount</div>
                </div>
                <div className="text-lg font-bold mt-2">
                  {formatPrice(calculatePrice(basePrice, selectedCurrency, false), selectedCurrency)}
                </div>
                <div className="text-sm text-gray-500">Full payment due today</div>
              </div>
            </div>
            
            {form.formState.errors.paymentOption && (
              <p className="text-red-500 text-sm">{form.formState.errors.paymentOption.message}</p>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-japan-indigo">Personal Information</h4>
              
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Your first name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Your last name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email address *</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email address" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                    <FormDescription>
                      We'll send your booking confirmation to this email.
                    </FormDescription>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone number *</FormLabel>
                    <FormControl>
                      <Input placeholder="Your phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country / Region *</FormLabel>
                    <FormControl>
                      <Input placeholder="Your country" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of Birth *</FormLabel>
                    <FormControl>
                      <Input placeholder="YYYY-MM-DD" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender *</FormLabel>
                    <div className="grid grid-cols-2 gap-4">
                      <div 
                        className={`border rounded-lg p-3 cursor-pointer text-center transition-all ${
                          field.value === "male" 
                            ? "border-japan-indigo bg-japan-indigo/5" 
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => form.setValue("gender", "male")}
                      >
                        Male
                      </div>
                      <div 
                        className={`border rounded-lg p-3 cursor-pointer text-center transition-all ${
                          field.value === "female" 
                            ? "border-japan-indigo bg-japan-indigo/5" 
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => form.setValue("gender", "female")}
                      >
                        Female
                      </div>
                      <div 
                        className={`border rounded-lg p-3 cursor-pointer text-center transition-all ${
                          field.value === "other" 
                            ? "border-japan-indigo bg-japan-indigo/5" 
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => form.setValue("gender", "other")}
                      >
                        Other
                      </div>
                      <div 
                        className={`border rounded-lg p-3 cursor-pointer text-center transition-all ${
                          field.value === "prefer-not-to-say" 
                            ? "border-japan-indigo bg-japan-indigo/5" 
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => form.setValue("gender", "prefer-not-to-say")}
                      >
                        Prefer not to say
                      </div>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-japan-indigo">Additional Information</h4>
              
              <FormField
                control={form.control}
                name="medicalRequirements"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Medical Requirements (optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Please let us know about any medical conditions or requirements"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="dietaryRequirements"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dietary Requirements (optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Please let us know about any allergies or dietary preferences"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="whatsapp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>WhatsApp Contact for Groupchat (optional)</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your WhatsApp number"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This will be used for our community groupchat prior to the tour for any questions or updates!
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Order Notes (optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Notes about your order, e.g. special notes for delivery."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          
          <FormField
            control={form.control}
            name="termsAccepted"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 bg-gray-50">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    I have read and agree to the Terms & Conditions. *
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            size="lg" 
            className="w-full bg-japan-pink hover:bg-japan-pink/90 text-white" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : form.watch("paymentOption") === "deposit" 
              ? `Pay Deposit (${formatPrice(calculatePrice(depositAmount, selectedCurrency, false), selectedCurrency)})` 
              : `Pay Full Amount (${formatPrice(calculatePrice(basePrice, selectedCurrency, false), selectedCurrency)})`
            }
          </Button>
          
          <div className="text-center text-sm text-gray-500">
            By clicking above, you agree to our terms and your booking will be confirmed after payment.
          </div>
        </form>
      </Form>
    </div>
  );
};

export default BookingForm;
