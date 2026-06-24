/**
 * Splits the text content of a DOM element into individual character <span>s,
 * wrapped in word-level <span>s so whitespace is preserved.
 *
 * @param {HTMLElement} el  - The element whose text to split
 * @returns {{ chars: HTMLElement[], words: HTMLElement[], revert: () => void }}
 */
export function splitTextIntoChars(el) {
  const originalHTML = el.innerHTML;
  const text = el.textContent || '';

  // Split into words, map each word into char spans
  const words = text.split(' ');
  const wordEls = [];
  const charEls = [];

  const fragment = document.createDocumentFragment();

  words.forEach((word, wi) => {
    const wordSpan = document.createElement('span');
    wordSpan.className = 'split-word';
    wordSpan.style.cssText = 'display:inline-block; overflow:hidden; vertical-align:bottom;';

    word.split('').forEach((char) => {
      const charSpan = document.createElement('span');
      charSpan.className = 'split-char';
      charSpan.textContent = char;
      charSpan.style.cssText = 'display:inline-block;';
      wordSpan.appendChild(charSpan);
      charEls.push(charSpan);
    });

    fragment.appendChild(wordSpan);
    wordEls.push(wordSpan);

    // Add space between words (except last)
    if (wi < words.length - 1) {
      const space = document.createElement('span');
      space.style.cssText = 'display:inline-block; width:0.28em;';
      space.innerHTML = '&nbsp;';
      fragment.appendChild(space);
    }
  });

  el.innerHTML = '';
  el.appendChild(fragment);

  return {
    chars: charEls,
    words: wordEls,
    revert: () => {
      el.innerHTML = originalHTML;
    },
  };
}
