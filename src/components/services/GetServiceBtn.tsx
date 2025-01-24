'use client';

import { toast } from '@/hooks/use-toast';
import { Button } from '../ui/button';

export default function GetServiceBtn() {
  function handleClick() {
    toast({
      variant: 'default',
      title: 'Thanks for Taking the Service',
      description: 'A Privite channel will be opend with the owner soon',
    });
  }
  return (
    <Button
      variant="ourButton"
      onClick={handleClick}
    >
      Get Service Now
    </Button>
  );
}
