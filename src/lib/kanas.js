const kanas = [
  { romanji: 'a', hiragana: 'あ', katakana: 'ア' },
  { romanji: 'i', hiragana: 'い', katakana: 'イ' },
  { romanji: 'u', hiragana: 'う', katakana: 'ウ' },
  { romanji: 'e', hiragana: 'え', katakana: 'エ' },
  { romanji: 'o', hiragana: 'お', katakana: 'オ' },
  { romanji: 'ba', hiragana: 'ば', katakana: 'バ' },
  { romanji: 'bi', hiragana: 'び', katakana: 'ビ' },
  { romanji: 'bu', hiragana: 'ぶ', katakana: 'ブ' },
  { romanji: 'be', hiragana: 'べ', katakana: 'ベ' },
  { romanji: 'bo', hiragana: 'ぼ', katakana: 'ボ' },
  { romanji: 'da', hiragana: 'だ', katakana: 'ダ' },
  { romanji: 'di', hiragana: 'ぢ', katakana: 'ヂ' },
  { romanji: 'du', hiragana: 'づ', katakana: 'ヅ' },
  { romanji: 'de', hiragana: 'で', katakana: 'デ' },
  { romanji: 'do', hiragana: 'ど', katakana: 'ド' },
  { romanji: 'ga', hiragana: 'が', katakana: 'ガ' },
  { romanji: 'gi', hiragana: 'ぎ', katakana: 'ギ' },
  { romanji: 'gu', hiragana: 'ぐ', katakana: 'グ' },
  { romanji: 'ge', hiragana: 'げ', katakana: 'ゲ' },
  { romanji: 'go', hiragana: 'ご', katakana: 'ゴ' },
  { romanji: 'ha', hiragana: 'は', katakana: 'ハ' },
  { romanji: 'hi', hiragana: 'ひ', katakana: 'ヒ' },
  { romanji: 'fu', hiragana: 'ふ', katakana: 'フ' },
  { romanji: 'he', hiragana: 'へ', katakana: 'ヘ' },
  { romanji: 'ho', hiragana: 'ほ', katakana: 'ホ' },
  { romanji: 'ka', hiragana: 'か', katakana: 'カ' },
  { romanji: 'ki', hiragana: 'き', katakana: 'キ' },
  { romanji: 'ku', hiragana: 'く', katakana: 'ク' },
  { romanji: 'ke', hiragana: 'け', katakana: 'ケ' },
  { romanji: 'ko', hiragana: 'こ', katakana: 'コ' },
  { romanji: 'ma', hiragana: 'ま', katakana: 'マ' },
  { romanji: 'mi', hiragana: 'み', katakana: 'ミ' },
  { romanji: 'mu', hiragana: 'む', katakana: 'ム' },
  { romanji: 'me', hiragana: 'め', katakana: 'メ' },
  { romanji: 'mo', hiragana: 'も', katakana: 'モ' },
  { romanji: 'na', hiragana: 'な', katakana: 'ナ' },
  { romanji: 'ni', hiragana: 'に', katakana: 'ニ' },
  { romanji: 'nu', hiragana: 'ぬ', katakana: 'ヌ' },
  { romanji: 'ne', hiragana: 'ね', katakana: 'ネ' },
  { romanji: 'no', hiragana: 'の', katakana: 'ノ' },
  { romanji: 'pa', hiragana: 'ぱ', katakana: 'パ' },
  { romanji: 'pi', hiragana: 'ぴ', katakana: 'ピ' },
  { romanji: 'pu', hiragana: 'ぷ', katakana: 'プ' },
  { romanji: 'pe', hiragana: 'ぺ', katakana: 'ペ' },
  { romanji: 'po', hiragana: 'ぽ', katakana: 'ポ' },
  { romanji: 'ra', hiragana: 'ら', katakana: 'ラ' },
  { romanji: 'ri', hiragana: 'リ', katakana: 'リ' },
  { romanji: 'ru', hiragana: 'る', katakana: 'ル' },
  { romanji: 're', hiragana: 'れ', katakana: 'レ' },
  { romanji: 'ro', hiragana: 'ろ', katakana: 'ロ' },
  { romanji: 'sa', hiragana: 'さ', katakana: 'サ' },
  { romanji: 'shi', hiragana: 'し', katakana: 'シ' },
  { romanji: 'su', hiragana: 'す', katakana: 'ス' },
  { romanji: 'se', hiragana: 'せ', katakana: 'セ' },
  { romanji: 'so', hiragana: 'そ', katakana: 'ソ' },
  { romanji: 'ta', hiragana: 'た', katakana: 'タ' },
  { romanji: 'chi', hiragana: 'ち', katakana: 'チ' },
  { romanji: 'tsu', hiragana: 'つ', katakana: 'ツ' },
  { romanji: 'te', hiragana: 'て', katakana: 'テ' },
  { romanji: 'to', hiragana: 'と', katakana: 'ト' },
  { romanji: 'wa', hiragana: 'わ', katakana: 'ワ' },
  { romanji: 'wo', hiragana: 'を', katakana: 'ヲ' },
  { romanji: 'ya', hiragana: 'や', katakana: 'ヤ' },
  { romanji: 'yu', hiragana: 'ゆ', katakana: 'ユ' },
  { romanji: 'yo', hiragana: 'よ', katakana: 'ヨ' },
  { romanji: 'za', hiragana: 'ざ', katakana: 'ザ' },
  { romanji: 'ji', hiragana: 'じ', katakana: 'ジ' },
  { romanji: 'zu', hiragana: 'ず', katakana: 'ズ' },
  { romanji: 'ze', hiragana: 'ぜ', katakana: 'ゼ' },
  { romanji: 'zo', hiragana: 'ぞ', katakana: 'ゾ' },
  { romanji: 'n', hiragana: 'ん', katakana: 'ン' },
];

export const shuffle = (array) => {
  let currentIndex = array.length; let
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return [...array, { romanji: 'start', hiragana: '始める', katakana: '始める' }];
};

export default kanas;
