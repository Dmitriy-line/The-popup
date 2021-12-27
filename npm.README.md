## bopup

<img src="https://img.shields.io/badge/bopup-v%200.0.7-brightgreen"> <img src="https://img.shields.io/badge/Dowloads-250-orange">

# <a href=" https://dmitriy-line.github.io/bopup-demo/"> <b style="text-transform:uppercase;">Demonstration Page</b> </a><br>
### Component to create a popup:

♦ suitable for

- Pop-up forms
- Privacy Policy
- pop-up gallerys

### Install from NPM.

`npm i bopup`

### Import js

```javascript
import bopup from "../../node_modules/bopup/dist/js/bopup.js";
```

### Import css

```javascript
@import '../../node_modules/bopup/dist/css/bopup.css';
```

### Add bopup HTML Layout

```html
<!-- popup container -->
<div class="bopup">
  <!-- close-popup-button -->
  <div class="bopup-close-button"></div>
  <!-- popup wrapper -->
  <div class="bopup-content-wrapper">
    <!--popup content -->
    <!-- any block or content -->
  </div>
</div>
```

### Several popups

To create several popups, just add an extra class to the `<div class="bopup">`, <br> for example `<div class="bopup bopup_form">`

Add any content in to the` <div class="bopup-content-wrapper">`

create element that will trigger the popup.

##### Example

```html
<button class="btn">button</button>
```

```html
<span class="span">span</span>
```

```html
<div class="div">div</div>
```

### Initialize bopup

Finally, you need to initialize bopup in JS:

```javascript
bopup(document.querySelector('.btn'), document.querySelector('.bopup'));
```

### css

```css
.bopup-content-wrapper {
  background: #fff;
}
```
