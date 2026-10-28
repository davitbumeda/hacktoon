import { createFileRoute } from '@tanstack/react-router';
import { Registration, pageHead } from '@/components/hacktoon';
export const Route = createFileRoute('/cadastrar-participante')({
  head: () => pageHead('Cadastro de participante', 'Comece seu cadastro e transforme ideias em projetos.'),
  component: Registration,
});
