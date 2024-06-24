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
      <CardFooter className="flex gap-x-4">
        <p>Winners</p>
        {/* <p>{tournament.winners}</p> */}
      </CardFooter>
    </Card>
  );
}
