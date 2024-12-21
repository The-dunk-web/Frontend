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
import SignupForm from '../auth/SignupForm';

export default function SignupFormView() {
  return (
    <Card className="w-[550px] rounded-none border-none bg-stone-950/80 tracking-wider text-stone-100">
      <CardHeader className="text-center">
        <CardTitle className={`${press_start_2p.className} text-md tracking-wider text-red-600`}>
          Join the Shadows
        </CardTitle>
        <CardDescription className="text-stone-100">Your Data Belongs to Us Now.</CardDescription>
      </CardHeader>
      <CardContent>
        <SignupForm />
      </CardContent>
      <CardFooter className="mt-2 justify-self-center">
        <p>
          One of us? Log in{' '}
          <Link
            className="font-semibold text-red-600 hover:border-b-2 hover:border-red-600"
            href="./sign-in"
          >
            Here
          </Link>{' '}
          and dive deeper.
        </p>
      </CardFooter>
    </Card>
  );
}
