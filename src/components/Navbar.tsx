import Link from 'next/link';
import { ModeToggle } from './theme-toggle-button';
import { buttonVariants } from './ui/button';

export default function Navbar() {
  return (
    <nav className="flex justify-between m-4">
      <h1>Home</h1>
      <div className="flex gap-x-2 items-center">
        <Link href="/new" className={buttonVariants({ variant: 'secondary' })}>
          Create Tournament
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
}
