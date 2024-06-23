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

export default async function Homepage() {
  const tournaments = await prisma.tournament.findMany();
  console.log(tournaments);
  return (
    <div className="grid grid-cols-3 gap-4">
      {tournaments.map((tournament) => (
        <Card key={tournament.id}>
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
          <CardContent>
            <p>{tournament.country}</p>
          </CardContent>
          <CardFooter className="flex gap-x-4">
            <p>Winners</p>
            {/* <p>{tournament.winners}</p> */}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
