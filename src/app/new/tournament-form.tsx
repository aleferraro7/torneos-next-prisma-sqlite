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

export function TournamentForm() {
  async function createTournament(formData: FormData) {
    'use server';
    const name = formData.get('name');
    const country = formData.get('country');
    const type = formData.get('type');

    console.log(name, country, type);
  }

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
                  <SelectItem value="major">Major</SelectItem>
                  <SelectItem value="p1">P1</SelectItem>
                  <SelectItem value="p2">P2</SelectItem>
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
