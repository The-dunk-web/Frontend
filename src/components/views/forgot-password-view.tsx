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
import ForgotPasswordForm from '../auth/ForgotPasswordForm';

export default function ForgotPasswordView() {
  return (
    <Card className="w-[550px] rounded-none border-none bg-stone-950/80 tracking-wider text-stone-100">
      <CardHeader className="text-center">
        <CardTitle className={`${press_start_2p.className} text-md tracking-wider text-red-600`}>
          Idiot
        </CardTitle>
        <CardDescription className="text-stone-100">
          No worries, we’ll help you get back in
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ForgotPasswordForm />
      </CardContent>
      <CardFooter className="mt-2 justify-self-center">
        <p>
          The memory returns? Into the Darkness{' '}
          <Link
            className="font-semibold text-red-600 hover:border-b-2 hover:border-red-600"
            href="./sign-in"
          >
            Here
          </Link>{' '}
        </p>
      </CardFooter>
    </Card>
  );
}
