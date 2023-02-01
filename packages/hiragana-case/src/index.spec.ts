import { hiraganaCase } from '.';
import { allHiraganas, allKatakanas } from '../../jp-char-list';

describe('hiraganaCase', () => {
  it('converts katakana to hiragana', () => {
    const input = 'コンニチハ';
    const expected = 'こんにちは';
    expect(hiraganaCase(input)).toBe(expected);
  });

  it('handles mixed hiragana and katakana text', () => {
    const input = 'ハッピーラッキーこんにちはベイビー';
    const expected = 'はっぴーらっきーこんにちはべいびー';
    expect(hiraganaCase(input)).toBe(expected);
  });

  it('returns empty string for empty input', () => {
    const input = '';
    const expected = '';
    expect(hiraganaCase(input)).toBe(expected);
  });

  it('returns alphabet input', () => {
    const input = 'alphabet';
    const expected = 'alphabet';
    expect(hiraganaCase(input)).toBe(expected);
  });

  it('replace all katakanas to hiraganas', () => {
    const input = allKatakanas;
    const expected = allHiraganas;
    expect(hiraganaCase(input)).toBe(expected);
  });
});
