import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { press_start_2p } from '@/constants/fonts';

export default function DeleteAccount() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (!showVideo) {
      const timer = setTimeout(() => {
        setShowVideo(true);
      }, 15000);
      return () => clearTimeout(timer);
    }
  }, [showVideo]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ourButton"
          className="h-12 w-[150px] self-end border-red-600 bg-red-600 hover:bg-red-700 hover:text-slate-100"
          onClick={() => setShowVideo(false)}
        >
          Delete Account
        </Button>
      </DialogTrigger>

      <DialogContent
        className="max-w-[500px] border-none bg-transparent px-5 pe-8"
        aria-describedby="dialog-description"
      >
        <DialogHeader className="hidden">
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        {!showVideo ? (
          <DialogDescription
            className={`${press_start_2p.className} animate-pulse text-center text-2xl font-bold text-red-600`}
          >
            Account deletion? Nice try! You&apos;re stuck here forever—like a catchy song in your
            head. 🎵🤪 Hahaha!
          </DialogDescription>
        ) : (
          <video
            src="/from-france.mp4"
            autoPlay
            loop
            playsInline
          ></video>
        )}
      </DialogContent>
    </Dialog>
  );
}
