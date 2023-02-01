import { katakanaCase } from '.';
import { allHiraganas, allKatakanas } from '../../jp-char-list';

describe('katakanaCase', () => {
  it('converts hiragana to katakana', () => {
    const input = 'こんにちは';
    const expected = 'コンニチハ';
    expect(katakanaCase(input)).toBe(expected);
  });

  it('handles mixed hiragana and katakana text', () => {
    const input = 'ハッピーラッキーこんにちはベイビー';
    const expected = 'ハッピーラッキーコンニチハベイビー';
    expect(katakanaCase(input)).toBe(expected);
  });

  it('returns empty string for empty input', () => {
    const input = '';
    const expected = '';
    expect(katakanaCase(input)).toBe(expected);
  });

  it('returns alphabet input', () => {
    const input = 'alphabet';
    const expected = 'alphabet';
    expect(katakanaCase(input)).toBe(expected);
  });

  it('replace all katakanas to hiraganas', () => {
    const input = allHiraganas;
    const expected = allKatakanas;
    expect(katakanaCase(input)).toBe(expected);
  });
});
