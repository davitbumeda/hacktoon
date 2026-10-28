import { createFileRoute } from '@tanstack/react-router';
import { Verification, pageHead } from '@/components/hacktoon';
export const Route = createFileRoute('/verificacao')({
  head: () => pageHead('Verificação do organizador', 'Confirme seu acesso como organizador.'),
  component: Verification,
});
