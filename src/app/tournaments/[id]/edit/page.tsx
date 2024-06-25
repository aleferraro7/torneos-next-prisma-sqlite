import { TournamentForm } from '@/app/new/tournament-form';
import prisma from '@/lib/prisma';
import { redirect } from 'next/navigation';

export default async function TournamentPageEdit({
  params,
}: {
  params: { id: string };
}) {
  const tournament = await prisma.tournament.findFirst({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!tournament) {
    redirect('/');
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <TournamentForm tournament={tournament} />
    </div>
  );
}
