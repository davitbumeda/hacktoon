import { createFileRoute } from '@tanstack/react-router';
import { Selection, pageHead } from '@/components/hacktoon';
export const Route = createFileRoute('/criar-conta')({
  head: () => pageHead('Criar conta', 'Escolha participar ou organizar o próximo hackathon.'),
  component: Selection,
});
