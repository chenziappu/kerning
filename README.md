# @roukara/kerning

This library provides a function for applying kerning to text within an HTML element. Kerning is the process of adjusting the spacing between characters in a font to create a visually pleasing result. By adding extra space between certain characters, we can improve the legibility and aesthetics of text.

<br>

## Install

```sh
npm install @roukara/kerning
```
```js
import kerning from '@roukara/kerning';
```
or
```html
<script src="https://unpkg.com/@roukara/kerning"></script>
```

<br>

## Usage

This takes in three arguments:<br>
1. `textElement`(require): An HTML element that contains the text to be kerned.
2. `kerningData`(require): An object that maps character indices to kerning values. The kerning value specifies the amount of space that should be added to the left of the character at the corresponding index.
3. `direction`(optional): An optional string argument that specifies the direction of the kerning. It can be either `'horizontal'` (default) or `'vertical'`.

```js
const textElement = document.querySelector('.my-text');
const kerningData = {
  1: 0.02,
  3: -0.01,
  7: 0.05,
  // etc.
};
kerning(textElement, kerningData);
```

The kerning function will modify the text within the textElement by adding <span> elements with `margin-left` or `margin-top` styles for each character with a defined kerning value.
Note that the kerning values are specified in `em` units, which are relative to the font size of the text.

<br>

## License

[ISC License](http://opensource.org/licenses/ISC)

<br>
