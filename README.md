# change-case-jp

![Test](https://github.com/yuyakinjo/change-case-jp/actions/workflows/test.yml/badge.svg)

> ひらがな ← → カタカナ

Convert from hiragana to katakana or vice versa.

## Installation

```bash
npm i change-case-jp
```

## Usage

```typescript
import { hiraganaCase } from 'change-case-jp';

hiraganaCase('ドラえもん');
// => "どらえもん"
```

## Examples

- hiraganaCase

```typescript
hiraganaCase('ドラえもん');
// => "どらえもん"
```

- hiraganaCase

```typescript
katakanaCase('ドラえもん');
// => "ドラエモン"
```

## All List

```typescript
hiraganaCase(
  'アイウエオ,カキクケコ,サシスセソ,タチツテト,ナニヌネノ,ハヒフヘホ,マミムメモ,ヤユヨ,ラリルレロ,ワヰヱヲ,ン,ァィゥェォ,ッ,ャュョ,ガギグゲゴ,ザジズゼゾ,ダヂヅデド,バビブベボ,パピプペポ,ヴ',
);
// => あいうえお,かきくけこ,さしすせそ,たちつてと,なにぬねの,はひふへほ,まみむめも,やゆよ,らりるれろ,わゐゑを,ん,ぁぃぅぇぉ,っ,ゃゅょ,がぎぐげご,ざじずぜぞ,だぢづでど,ばびぶべぼ,ぱぴぷぺぽ,ゔ
```

## Running Tests

To run tests, run the following command

```bash
pnpm run test
```

## License

MIT
