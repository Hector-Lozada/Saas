"use client";
import { useEffect } from 'react';

// Declare the `paypal` property on the `window` object to avoid TypeScript errors
declare global {
  interface Window {
    paypal: {
      Buttons: any; // You can be more specific here if you know the shape of the object
    };
  }
}

interface PayPalButtonProps {
  planId: string;
}

export const PayPalButton = ({ planId }: PayPalButtonProps) => {
  const loadPayPalScript = () => {
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=AdLkCu2aI5PoKPZFDp1A4jWjStkWIzbGmBwb_RFNSeYK0QacewwVSiqzyhCYOeJlc_C8k9XVW1AVTLZ4&vault=true&intent=subscription";
    script.async = true;
    script.onload = () => {
      window.paypal.Buttons({
        style: {
          shape: 'pill',
          color: 'black',
          layout: 'vertical',
          label: 'subscribe',
        },
        createSubscription: function (data: any, actions: any) {
          return actions.subscription.create({
            plan_id: planId,
          });
        },
        onApprove: function (data: any, actions: any) {
          alert(`Suscripción completada. ID: ${data.subscriptionID}`);
        },
      }).render(`#paypal-button-container-${planId}`);
    };
    document.body.appendChild(script);
  };

  useEffect(() => {
    loadPayPalScript();
  }, [planId]);

  return <div id={`paypal-button-container-${planId}`}></div>;
};
