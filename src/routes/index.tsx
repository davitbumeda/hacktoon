import { createFileRoute } from '@tanstack/react-router';
import { Home, pageHead } from '@/components/hacktoon';
export const Route = createFileRoute('/')({
  head: () => pageHead('Início', 'Anime suas ideias e encontre seu próximo hackathon.'),
  component: Home,
});
