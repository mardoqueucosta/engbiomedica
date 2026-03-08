import { describe, it, expect } from 'vitest';
import { removeDiacritics } from '@/lib/normalize';

describe('removeDiacritics', () => {
  it('remove acentos agudos', () => {
    expect(removeDiacritics('é')).toBe('e');
    expect(removeDiacritics('á')).toBe('a');
    expect(removeDiacritics('ú')).toBe('u');
    expect(removeDiacritics('ó')).toBe('o');
    expect(removeDiacritics('í')).toBe('i');
  });

  it('remove cedilha', () => {
    expect(removeDiacritics('ç')).toBe('c');
    expect(removeDiacritics('Ç')).toBe('C');
  });

  it('remove til', () => {
    expect(removeDiacritics('ã')).toBe('a');
    expect(removeDiacritics('õ')).toBe('o');
  });

  it('remove acentos circunflexos', () => {
    expect(removeDiacritics('ê')).toBe('e');
    expect(removeDiacritics('ô')).toBe('o');
    expect(removeDiacritics('â')).toBe('a');
  });

  it('remove acento grave', () => {
    expect(removeDiacritics('à')).toBe('a');
  });

  it('preserva strings sem acentos', () => {
    expect(removeDiacritics('hello world')).toBe('hello world');
    expect(removeDiacritics('abc123')).toBe('abc123');
  });

  it('retorna string vazia para entrada vazia', () => {
    expect(removeDiacritics('')).toBe('');
  });

  it('normaliza palavras completas em PT-BR', () => {
    expect(removeDiacritics('Regulamentação')).toBe('Regulamentacao');
    expect(removeDiacritics('pós-graduação')).toBe('pos-graduacao');
    expect(removeDiacritics('Engenharia Biomédica')).toBe('Engenharia Biomedica');
    expect(removeDiacritics('manutenção')).toBe('manutencao');
    expect(removeDiacritics('índice')).toBe('indice');
  });

  it('preserva maiúsculas e minúsculas', () => {
    expect(removeDiacritics('AÇÃO')).toBe('ACAO');
    expect(removeDiacritics('Área')).toBe('Area');
  });

  it('preserva caracteres especiais não-diacríticos', () => {
    expect(removeDiacritics('R$ 5.000,00')).toBe('R$ 5.000,00');
    expect(removeDiacritics('100% completo!')).toBe('100% completo!');
    expect(removeDiacritics('e-mail@teste.com')).toBe('e-mail@teste.com');
  });

  it('normaliza múltiplos diacríticos na mesma string', () => {
    const input = 'ação, regulação, certificação e inovação';
    const expected = 'acao, regulacao, certificacao e inovacao';
    expect(removeDiacritics(input)).toBe(expected);
  });
});
