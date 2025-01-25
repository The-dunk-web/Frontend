'use client';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { CreateVisaFormSchema, CreateVisaFormType } from '@/types/schema/create-visa-form-schema';
import { toast } from '@/hooks/use-toast';

export default function AddVisaForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateVisaFormType>({
    resolver: zodResolver(CreateVisaFormSchema),
  });

  async function onSubmit(formData: FieldValues) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders/connect-visa-card`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          cvv: formData.cardCVV,
        }),
        credentials: 'include',
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(`${data.message}`);
      }

      toast({
        className: 'border-green-500 bg-green-500 text-slate-100',
        title: 'Success',
        description: data.message,
      });
    } catch (err: unknown) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: (err as Error).message,
      });
    }
    reset();
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5 grid items-center gap-1.5 tracking-wider">
        <Label htmlFor="cardNumber">Card Number</Label>
        <Input
          className="h-12 rounded-none border-2 autofill:bg-transparent"
          type="text"
          id="cardNumber"
          placeholder="1234 5678 9123 4567"
          {...register('cardNumber')}
        />
        {errors?.cardNumber && <p className="text-red-600">{errors.cardNumber.message}</p>}
      </div>

      <div className="flex items-center gap-5">
        <div className="mb-5 grid w-full items-center gap-1.5 tracking-wider">
          <Label htmlFor="expiryDate">Expiry date</Label>
          <Input
            className="h-12 rounded-none border-2 autofill:bg-transparent"
            type="text"
            id="expiryDate"
            placeholder="MM/YY"
            {...register('expiryDate')}
          />
          {errors?.expiryDate && <p className="text-red-600">{errors.expiryDate.message}</p>}
        </div>

        <div className="mb-5 grid w-full items-center gap-1.5 tracking-wider">
          <Label htmlFor="cardCVV">CVC/CVV</Label>
          <Input
            className="h-12 rounded-none border-2 autofill:bg-transparent"
            type="text"
            id="cardCVV"
            placeholder="CVC"
            {...register('cardCVV')}
          />
          {errors?.cardCVV && <p className="text-red-600">{errors.cardCVV.message}</p>}
        </div>
      </div>
      <div className="mb-5 grid items-center gap-1.5 tracking-wider">
        <Label htmlFor="nameOnCard">Name on Card (optional)</Label>
        <Input
          className="h-12 rounded-none border-2 autofill:bg-transparent"
          type="text"
          id="nameOnCard"
          placeholder="Name on card"
          // {...register('nameOnCard')}
        />
        {/* {errors?.nameOnCard && <p className="text-red-600">{errors.nameOnCard.message}</p>} */}
      </div>
      <Button
        disabled={isSubmitting}
        className="h-12 w-full rounded-none border-2 bg-transparent font-bold text-stone-100 hover:bg-stone-100 hover:text-stone-950"
      >
        {isSubmitting ? 'Loading...' : 'Add Card'}
      </Button>
    </form>
  );
}
