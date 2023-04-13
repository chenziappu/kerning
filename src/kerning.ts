export default function kerning(
  textElement: HTMLElement,
  kerningData: { [index: number]: number },
  direction: string = 'horizontal'
): void {
  const lines = textElement.innerText.split('\n');
  
  const property = direction === 'vertical'
    ? 'margin-top'
    : 'margin-left';

  let result = '';
  let index = 0;

  lines.forEach((paragraph, i) => {
    const chars = [...paragraph];

    chars.forEach((char) => {
      if (kerningData[index] === undefined) {
        result += `<span>${char}</span>`;
      } else {
        result += `<span style="${property}: ${kerningData[index]}em;">${char}</span>`;
      }
      index++;
    });

    if (i < lines.length - 1) result += '<br>';
  });

  textElement.innerHTML = result;
}