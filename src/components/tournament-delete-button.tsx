import { Button } from './ui/button';
import { removeTournament } from '@/actions/tournament-actions';

export function TournamentButtonDelete({
  tournamentId,
}: {
  tournamentId: number;
}) {
  return (
    <form action={removeTournament}>
      <input type="hidden" name="tournamentId" value={tournamentId} />
      <Button variant="destructive">Delete</Button>
    </form>
  );
}
