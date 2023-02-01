const searchKatakana = new RegExp(/[ァ-ン]/g);
const exception = { vu: { katakana: 'ヴ', hiragana: 'ゔ' } };

export const hiraganaCase = (input: string) =>
  input
    .replaceAll(searchKatakana, (text) => String.fromCharCode(text.charCodeAt(0) - 0x60))
    .replaceAll(exception.vu.katakana, exception.vu.hiragana);
