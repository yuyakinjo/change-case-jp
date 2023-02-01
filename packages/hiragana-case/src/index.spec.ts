import { hiraganaCase } from '.';

export const allHiraganas = `あいうえお,かきくけこ,さしすせそ,たちつてと,なにぬねの,はひふへほ,まみむめも,やゆよ,らりるれろ,わゐゑを,ん,ぁぃぅぇぉ,っ,ゃゅょ,がぎぐげご,ざじずぜぞ,だぢづでど,ばびぶべぼ,ぱぴぷぺぽ,ゔ`;
export const allKatakanas = `アイウエオ,カキクケコ,サシスセソ,タチツテト,ナニヌネノ,ハヒフヘホ,マミムメモ,ヤユヨ,ラリルレロ,ワヰヱヲ,ン,ァィゥェォ,ッ,ャュョ,ガギグゲゴ,ザジズゼゾ,ダヂヅデド,バビブベボ,パピプペポ,ヴ`;

describe('hiraganaCase', () => {
  it('converts katakana to hiragana', () => {
    const input = 'コンニチハ';
    const expected = 'こんにちは';
    expect(hiraganaCase(input)).toBe(expected);
  });

  it('handles mixed hiragana and katakana text', () => {
    const input = 'ヒラガナトカタカナ';
    const expected = 'ひらがなとかたかな';
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
