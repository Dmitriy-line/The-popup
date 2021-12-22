## tpopup
### Easy to use popup



♦ suitable for

* Pop-up forms
* Privacy Policy
* Other pop-ups


> ### Install from NPM.

>     npm i tpopup

### Import js
```javascript
import('../../node_modules/tpopup/dist/js/tpopup.js');
```

### Import css
```javascript
@import "../../node_modules/tpopup/dist/css/tpopup";
```

### HTML

To create several popups, just add an extra class to the  `<div class="tpopup">`, <br> for  example ``<div class="tpopup the_popup--privacy">``

You can put any content in to the`` <div class="tpopup-inner">``

### Html markup
```html
<div class="tpopup the_popup--privacy">
	<!-- close-button -->
	<div class="tpopup-close"></div>
	<!-- popup inner -->
		<div class="tpopup-inner">
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
assigne the variable to the trigger ellement and to the ``<div class="tpopup the_popup--privacy">``.
```javascript
let privacyCall = document.querySelector('.policy-call-btn');
 let privacyPopup = document.querySelector('.the_popup--privacy');

 privacyCall.addEventListener('click', modal( privacyCall, privacyPopup));
```
