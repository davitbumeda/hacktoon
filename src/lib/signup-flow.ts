export const flow = {
  selection: { path: '/criar-conta', back: '/' },
  participant: { path: '/cadastrar-participante', back: '/criar-conta', next: '/participante-perfil' },
  profile: { path: '/participante-perfil', back: '/cadastrar-participante' },
  organizer: { path: '/cadastrar-organizador', back: '/criar-conta', next: '/verificacao' },
  verification: { path: '/verificacao', back: '/cadastrar-organizador', next: '/organizador-equipe' },
  team: { path: '/organizador-equipe', back: '/verificacao' },
  login: { path: '/entrar', back: '/' },
} as const;

export function passwordsMatch(password: string, confirmation: string) {
  return password === confirmation;
}