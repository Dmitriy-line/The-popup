## The-popup
### Easy to use popup



♦ suitable for

* Pop-up forms
* Privacy Policy
* Other pop-ups


> ### Install from NPM.

>     npm i the-popup

### Import js
```javascript
import('../../node_modules/the-popup/dist/js/the-popup.js');
```

### Import css
```javascript
@import "../../node_modules/the-popup/dist/css/the-popup";
```

### HTML

To create several popups, just add an extra class to the  `<div class="the-popup">`, <br> for  example ``<div class="the-popup the_popup--privacy">``

You can put any content in to the`` <div class="the-popup-inner">``

### Html markup
```html
<div class="the-popup the_popup--privacy">
	<!-- close-button -->
	<div class="the-popup-close"></div>
	<!-- popup inner -->
		<div class="the-popup-inner">
			<!-- content -->
			<h2 class="privacy__title">privacy policy</h2>
            <p>Any content.</p>
		</div>
 </div>
```
create an element that will trigger the popup, and assign any class to it.
##### Example
```html
<span class="policy-call-btn">privacy policy</span>
```

### js  
assigne the variable to the trigger ellement and to the ``<div class="the-popup the_popup--privacy">``.
```javascript
let privacyCall = document.querySelector('.policy-call-btn');
 let privacyPopup = document.querySelector('.the_popup--privacy');

 privacyCall.addEventListener('click', modal( privacyCall, privacyPopup));
```
