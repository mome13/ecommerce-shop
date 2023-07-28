import { Button } from '@/components/ui/button';
import { UserButton } from "@clerk/nextjs";

export default function page() {
  return (
    <div className='flex h-screen justify-center items-center'>
      <Button size='default' variant='outline'>
        Mehran
      </Button>

      <UserButton afterSignOutUrl="/"/>
    </div>
  );
}
