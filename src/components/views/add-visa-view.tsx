import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { press_start_2p } from '@/constants/fonts';
import AddVisaForm from '../auth/AddVisaForm';

export default function AddVisaView() {
  return (
    <Card className="w-[550px] rounded-none border-none bg-stone-950/80 tracking-wider text-stone-100">
      <CardHeader className="text-center">
        <CardTitle className={`${press_start_2p.className} text-md tracking-wider text-red-600`}>
          Add Card
        </CardTitle>
        <CardDescription className="text-stone-100">we guarantee your security</CardDescription>
      </CardHeader>
      <CardContent>
        <AddVisaForm />
      </CardContent>
    </Card>
  );
}
