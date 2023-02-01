import { exception } from '../../jp-char-list';

const searchKatakana = new RegExp(/[ァ-ン]/g);

export const hiraganaCase = (input: string) =>
  input
    .replaceAll(searchKatakana, (text) => String.fromCharCode(text.charCodeAt(0) - 0x60))
    .replaceAll(exception.vu.katakana, exception.vu.hiragana);
