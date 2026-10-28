import { describe, expect, it } from 'vitest';
import { flow, passwordsMatch } from '@/lib/signup-flow';

describe('Requested signup paths', () => {
  it('returns account selection to home', () => {
    expect(flow.selection.back).toBe('/');
  });
  it('takes participant registration to the participant profile', () => {
    expect(flow.participant.next).toBe('/participante-perfil');
    expect(flow.profile.back).toBe('/cadastrar-participante');
  });
  it('takes organizer registration to verification', () => {
    expect(flow.organizer.next).toBe('/verificacao');
    expect(flow.verification.back).toBe('/cadastrar-organizador');
  });
  it('takes verification to the organizer team screen', () => {
    expect(flow.verification.next).toBe('/organizador-equipe');
    expect(flow.team.back).toBe('/verificacao');
  });
  it('returns both signup roles to account selection', () => {
    expect(flow.participant.back).toBe('/criar-conta');
    expect(flow.organizer.back).toBe('/criar-conta');
  });
  it('returns login to home', () => {
    expect(flow.login.back).toBe('/');
  });
  it('rejects mismatched password confirmation', () => {
    expect(passwordsMatch('a-password', 'different')).toBe(false);
    expect(passwordsMatch('a-password', 'a-password')).toBe(true);
  });
});