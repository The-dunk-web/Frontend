import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { press_start_2p } from '@/constants/fonts';
import Link from 'next/link';
import ResetPasswordForm from '../auth/ResetPasswordForm';

export default function ResetPasswordView() {
  return (
    <Card className="w-[550px] rounded-none border-none bg-stone-950/80 tracking-wider text-stone-100">
      <CardHeader className="text-center">
        <CardTitle className={`${press_start_2p.className} text-md tracking-wider text-red-600`}>
          Reset Password
        </CardTitle>
        <CardDescription className="text-stone-100">I Bet You'll Recall It Soon</CardDescription>
      </CardHeader>
      <CardContent>
        <ResetPasswordForm />
      </CardContent>
    </Card>
  );
}
