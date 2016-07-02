# Popup for any website (WordPress)
To use include this js file inside the <head> tag.
```html
<script src="popup.js"></script>
```
### Opening the popup call
```javascript
_popUp.open();
```

### Closing the popup manually
```javascript
_popUp.close();
```
By default the popup window will close after pressing ESC or clicking on the overlay behind the frame.

### Popup settings
```javascript
_popUp.open({
  'bgcolor': 'red',
  'opacity': '0.1',
  'content': '<div>This is the content of your popup.</div>'
});
```

### More examples
Put the example code before </head> tag.

Opening the popup on window load
```javascript
<script>
window.addEventListener('load', function() {
    _popUp.open();
});
</script>
```

Opening the popup after load + few seconds
```javascript
<script>
var secondsUntilLoad = 3000;
window.addEventListener('load', function() {
    setTimeout(function(){
        _popUp.open();
    },secondsUntilLoad);
});
</script>
```
