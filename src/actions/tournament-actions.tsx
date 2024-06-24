'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
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

export async function removeTournament(formData: FormData) {
  'use server';
  const tournamentId = formData.get('tournamentId')?.toString();

  if (!tournamentId) {
    return;
  }

  await prisma.tournament.delete({
    where: {
      id: parseInt(tournamentId),
    },
  });

  revalidatePath('/');
}

export async function updateTournament(formData: FormData) {
  const id = formData.get('id')?.toString();
  const name = formData.get('name')?.toString();
  const country = formData.get('country')?.toString();
  const type = formData.get('type')?.toString();

  if (!id || !name || !country || !type) {
    return 'Invalid data';
  }

  await prisma.tournament.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name: name,
      country: country,
      type: type,
    },
  });

  redirect('/');
}
