import kerning from "kerning";

const textElement = document.querySelector('.my-text');
const kerningData = {
  2: -0.02,
  6: -0.03
};

kerning(textElement, kerningData);
