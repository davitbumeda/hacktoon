import { createFileRoute } from '@tanstack/react-router';
import { Login, pageHead } from '@/components/hacktoon';
export const Route = createFileRoute('/entrar')({
  head: () => pageHead('Entrar', 'Acesse sua conta HACKTOON e continue sua ideia.'),
  component: Login,
});
