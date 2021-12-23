## bopup
<img src="https://img.shields.io/badge/bopup-v%200.0.1-brightgreen"> <img src="https://img.shields.io/badge/Dowloads-10-orange">

### Component to create a popup:

♦ suitable for

- Pop-up forms
- Privacy Policy
- pop-up gallerys

 ### Install from NPM.

`npm i bopup`

### Import js

```javascript
import Bopup from "../../node_modules/bopup/dist/js/bopup.js";
```

### Import css

```javascript
@import '../../node_modules/bopup/dist/css/bopup.css';
```


### Add bopup HTML Layout

```html
<div class="bopup bopup_form">
  <!-- close-button -->
  <div class="bopup-close-button"></div>
  <!-- popup inner -->
  <div class="bopup-content-wrapper">
    <!-- content -->
  </div>
</div>
```

### Several popups

To create several popups, just add an extra class to the `<div class="bopup">`, <br> for example `<div class="bopup bopup_form">`

Add any content in to the` <div class="bopup-content-wrapper">`


create element that will trigger the popup.

##### Example

```html
<button class="btn">callback form</button>
```
```html
<span class="btn">callback form</span>
```
```html
<div class="btn">callback form</div>
```

### Initialize bopup
Finally, we need to initialize bopup in JS:

```javascript
let popupForm = new Bopup(
  document.querySelector('.btn'),
  document.querySelector('.bopup_form')
)
```

### css
```css
 .bopup-content-wrapper {
   background: #fff;
  }
```
