const searchHiragana = new RegExp(/[ぁ-ん]/g);
const exception = { vu: { katakana: 'ヴ', hiragana: 'ゔ' } };

export const katakanaCase = (input: string) =>
  input
    .replaceAll(searchHiragana, (text) => String.fromCharCode(text.charCodeAt(0) + 0x60))
    .replaceAll(exception.vu.hiragana, exception.vu.katakana);
