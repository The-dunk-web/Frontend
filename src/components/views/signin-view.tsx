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
import SigninForm from '../auth/SigninForm';

export default function SigninFormView() {
  return (
    <Card className="w-[550px] rounded-none border-none bg-stone-950/80 tracking-wider text-stone-100">
      <CardHeader className="text-center">
        <CardTitle className={`${press_start_2p.className} text-md tracking-wider text-red-600`}>
          Welcome back
        </CardTitle>
        <CardDescription className="text-stone-100">
          The darkness remembers you. Reclaim what’s yours.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SigninForm />
      </CardContent>
      <CardFooter className="mt-2 justify-self-center">
        <p>
          Not part of the shadows yet? Sign up{' '}
          <Link
            className="font-semibold text-red-600 hover:border-b-2 hover:border-red-600"
            href="./sign-up"
          >
            Here
          </Link>{' '}
        </p>
      </CardFooter>
    </Card>
  );
}
