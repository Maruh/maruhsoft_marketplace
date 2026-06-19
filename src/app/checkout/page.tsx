'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Stepper } from '@/components/ui/stepper';
import { Alert } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CreditCard, DollarSign } from 'lucide-react';

const steps = ['Shipping', 'Payment', 'Review', 'Confirmation'];

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [formData, setFormData] = React.useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Checkout</h1>

      {/* Stepper */}
      <Stepper steps={steps} currentStep={currentStep} className="mb-12" />

      {/* Shipping Step */}
      {currentStep === 0 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Shipping Information</h2>
          <div className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <div className="grid grid-cols-2 gap-4">
              <Input
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
              <Input
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>
            <Input
              placeholder="Address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
            <div className="grid grid-cols-3 gap-4">
              <Input
                placeholder="City"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              />
              <Input
                placeholder="State"
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              />
              <Input
                placeholder="ZIP Code"
                value={formData.zip}
                onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
              />
            </div>
          </div>
        </div>
      )}

      {/* Payment Step */}
      {currentStep === 1 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Payment Method</h2>
          <Alert type="info" message="Digital products are delivered instantly after payment" />
          <Tabs defaultValue="card" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="card" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Credit Card
              </TabsTrigger>
              <TabsTrigger value="paypal" className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                PayPal
              </TabsTrigger>
            </TabsList>
            <TabsContent value="card" className="space-y-4 mt-6">
              <Input placeholder="Card Number" />
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="MM/YY" />
                <Input placeholder="CVC" />
              </div>
            </TabsContent>
            <TabsContent value="paypal">
              <p className="text-muted-foreground py-4">You will be redirected to PayPal</p>
            </TabsContent>
          </Tabs>
        </div>
      )}

      {/* Review Step */}
      {currentStep === 2 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Review Order</h2>
          <div className="bg-muted rounded-lg p-6 space-y-4">
            <div className="flex justify-between">
              <span>React Template</span>
              <span>$79.99</span>
            </div>
            <div className="flex justify-between">
              <span>Tailwind UI Kit x2</span>
              <span>$79.98</span>
            </div>
            <div className="border-t border-border pt-4 flex justify-between font-bold">
              <span>Total</span>
              <span>$159.97</span>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Step */}
      {currentStep === 3 && (
        <div className="text-center space-y-6">
          <div className="text-6xl">✓</div>
          <h2 className="text-2xl font-bold">Order Confirmed!</h2>
          <p className="text-muted-foreground">
            Your order has been received. Check your email for download links.
          </p>
          <Button onClick={() => window.location.href = '/'}>Back to Home</Button>
        </div>
      )}

      {/* Navigation */}
      <div className="flex gap-4 mt-12">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={currentStep === 0}
        >
          Back
        </Button>
        <Button
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
          className="flex-1"
        >
          {currentStep === steps.length - 1 ? 'Complete' : 'Next'}
        </Button>
      </div>
    </div>
  );
}
