'use server';

import prisma from '@/lib/prisma';
import { redirect } from 'next/navigation';

export async function createTournament(formData: FormData) {
  const name = formData.get('name')?.toString();
  const country = formData.get('country')?.toString();
  const type = formData.get('type')?.toString();
  const winners = formData.get('winners')?.toString();

  console.log(name, country, type, winners);

  if (!name || !country || !type || !winners) {
    return 'Invalid data';
  }

  const newTournament = await prisma.tournament.create({
    data: {
      name: name,
      country: country,
      type: type,
      // winners: winners,
    },
  });

  console.log(newTournament);
  redirect('/');
}
