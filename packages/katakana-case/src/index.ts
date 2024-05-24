import { exception } from "../../internal/jp-char-list";

const searchHiragana = new RegExp(/[ぁ-ん]/g);

export const katakanaCase = (input: string) =>
  input
    .replaceAll(searchHiragana, (text) =>
      String.fromCharCode(text.charCodeAt(0) + 0x60),
    )
    .replaceAll(exception.vu.hiragana, exception.vu.katakana);
