import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function DeleteAccount() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ourButton"
          className="h-12 w-[150px] self-end border-red-600 bg-red-600 hover:bg-red-700 hover:text-slate-100"
        >
          Delete Account
        </Button>
      </DialogTrigger>

      <DialogContent
        className="max-w-[500px] border-none bg-transparent px-5 pe-8"
        aria-describedby="dialog-description"
      >
        {' '}
        <DialogHeader className="hidden">
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <video
          src="/from-france.mp4"
          autoPlay
        ></video>
      </DialogContent>
    </Dialog>
  );
}
