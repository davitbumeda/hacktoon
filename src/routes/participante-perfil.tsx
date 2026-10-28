import { createFileRoute } from '@tanstack/react-router';
import { Profile, pageHead } from '@/components/hacktoon';
export const Route = createFileRoute('/participante-perfil')({
  head: () => pageHead('Perfil do participante', 'Escolha suas habilidades e preferências de equipe.'),
  component: Profile,
});
