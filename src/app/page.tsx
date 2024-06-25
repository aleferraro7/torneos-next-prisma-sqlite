import { Badge } from '@/components/ui/badge';
import clsx from 'clsx';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import prisma from '@/lib/prisma';
import TournamentCard from '@/components/TournamentCard';

export const dynamic = 'force-dynamic';

export default async function Homepage() {
  const tournaments = await prisma.tournament.findMany();
  console.log(tournaments);
  return (
    <div className="grid grid-cols-3 gap-4">
      {tournaments.map((tournament) => (
        <TournamentCard tournament={tournament} key={tournament.id} />
      ))}
    </div>
  );
}
