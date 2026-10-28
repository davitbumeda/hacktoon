import { createFileRoute } from '@tanstack/react-router';
import { Registration, pageHead } from '@/components/hacktoon';
export const Route = createFileRoute('/cadastrar-organizador')({
  head: () => pageHead('Cadastro de organizador', 'Comece a organização do próximo grande evento.'),
  component: () => <Registration organizer />,
});
