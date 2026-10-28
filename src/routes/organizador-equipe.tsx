import { createFileRoute } from '@tanstack/react-router';
import { OrganizerTeam, pageHead } from '@/components/hacktoon';
export const Route = createFileRoute('/organizador-equipe')({
  head: () => pageHead('Equipe do evento', 'Monte sua equipe de organização do hackathon.'),
  component: OrganizerTeam,
});
