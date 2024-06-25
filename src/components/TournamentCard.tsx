import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import clsx from 'clsx';
import { Tournament } from '@prisma/client';
import { Badge } from './ui/badge';
import { TournamentButtonDelete } from './tournament-delete-button';
import Link from 'next/link';
import { buttonVariants } from './ui/button';

export default function TournamentCard({
  tournament,
}: {
  tournament: Tournament;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between mb-2">
        <CardTitle>{tournament.name}</CardTitle>
        <Badge
          className={clsx({
            'bg-yellow-500': tournament.type === 'MAJOR',
            'bg-blue-500': tournament.type === 'P1',
            'bg-green-500': tournament.type === 'P2',
          })}
        >
          {tournament.type}
        </Badge>
      </CardHeader>
      <CardContent className="mt-4">
        <p>{tournament.country}</p>
      </CardContent>
      <CardContent className="mt-4 flex justify-between">
        <p>Winners</p>
        <p>{tournament.winners}</p>
      </CardContent>
      <CardFooter className="flex justify-end gap-x-4">
        <TournamentButtonDelete tournamentId={tournament.id} />
        <Link
          href={`/tournaments/${tournament.id}/edit`}
          className={buttonVariants({ variant: 'secondary' })}
        >
          Edit
        </Link>
      </CardFooter>
    </Card>
  );
}
