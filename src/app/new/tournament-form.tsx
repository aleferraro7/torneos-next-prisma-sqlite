import * as React from 'react';

import { Button } from '@/components/ui/button';
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
import { createTournament } from '@/actions/tournament-actions';

export function TournamentForm() {
  return (
    <form action={createTournament}>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create Tournament</CardTitle>
          <CardDescription>Create padel tournament here</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input name="name" id="name" placeholder="Name of your project" />
            </div>
            <div>
              <Label htmlFor="country">Country</Label>
              <Input
                name="country"
                id="country"
                placeholder="Country of the Tournament"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="type">Type</Label>
              <Select name="type">
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
              <Select name="winners">
                <SelectTrigger id="winners">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="TapiaCoello">Tapia - Coello</SelectItem>
                  <SelectItem value="ChingottoGalan">
                    Chingotto - Galan
                  </SelectItem>
                  <SelectItem value="StupaDiNenno">Stupa - Di Nenno</SelectItem>
                  <SelectItem value="NavarroLebron">
                    Navarro - Lebron
                  </SelectItem>
                  <SelectItem value="GarridoYanguas">
                    Garrido - Yanguas
                  </SelectItem>
                  <SelectItem value="NietoSanz">Nieto - Sanz</SelectItem>
                  <SelectItem value="OtherCouple">Other couple</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button type="submit">Create</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
