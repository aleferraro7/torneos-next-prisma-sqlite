import * as React from 'react';

import { Button, buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  createTournament,
  updateTournament,
} from '@/actions/tournament-actions';
import { Tournament } from '@prisma/client';
import Link from 'next/link';

export function TournamentForm({ tournament }: { tournament: Tournament }) {
  const functionAction = tournament?.id ? updateTournament : createTournament;

  return (
    <form action={functionAction}>
      <input type="hidden" name="id" value={tournament?.id} />
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create Tournament</CardTitle>
          <CardDescription>Create padel tournament here</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                name="name"
                id="name"
                placeholder="Name of your project"
                defaultValue={tournament?.name}
              />
            </div>
            <div>
              <Label htmlFor="country">Country</Label>
              <Input
                name="country"
                id="country"
                placeholder="Country of the Tournament"
                defaultValue={tournament?.country}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="type">Type</Label>
              <Select name="type" defaultValue={tournament?.type}>
                <SelectTrigger id="type">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="MAJOR">Major</SelectItem>
                  <SelectItem value="P1">P1</SelectItem>
                  <SelectItem value="P2">P2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="type">Winners</Label>
              <Select name="winners" defaultValue={tournament?.winners}>
                <SelectTrigger id="winners">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="Tapia - Coello">Tapia - Coello</SelectItem>
                  <SelectItem value="Chingotto - Galan">
                    Chingotto - Galan
                  </SelectItem>
                  <SelectItem value="Stupa - Di Nenno">
                    Stupa - Di Nenno
                  </SelectItem>
                  <SelectItem value="Navarro - Lebron">
                    Navarro - Lebron
                  </SelectItem>
                  <SelectItem value="Garrido - Yanguas">
                    Garrido - Yanguas
                  </SelectItem>
                  <SelectItem value="Nieto - Sanz">Nieto - Sanz</SelectItem>
                  <SelectItem value="Other couple">Other couple</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/" className={buttonVariants({ variant: 'secondary' })}>
            Cancel
          </Link>
          <Button type="submit">
            {tournament?.id ? 'Update Tournament' : 'Create Tournament'}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
