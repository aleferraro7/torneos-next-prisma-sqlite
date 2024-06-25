import Link from 'next/link';
import { ModeToggle } from './theme-toggle-button';
import { buttonVariants } from './ui/button';
import Logo from './Logo';

export default function Navbar() {
  return (
    <nav className="flex justify-between m-4 py-5">
      <div>
        <Logo />
      </div>
      <div className="flex gap-x-2 items-center">
        <Link href="/new" className={buttonVariants({ variant: 'secondary' })}>
          Create Tournament
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
}
