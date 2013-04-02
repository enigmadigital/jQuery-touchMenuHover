Izilla jQuery Touch Menu Hover
==============================

###  Allows ULs (or any element of your choice) that open on li:hover to open on tap/click on mobile platforms such as iOS, Android, WP7, WP8, BlackBerry, Bada, WebOS, 3DS & WiiU

WebKit browsers on iOS are the only major mobile browsers that (sometimes?) open child ULs when tapped; every other platform just follows the link. With this plugin, the click event is intercepted allowing the menu to be opened. Tapping the link again will follow it. Tapping anywhere else on the document will try to close the menu.

Additionally, no mobile browsers natively handle nested lists where the child ULs are wrapped in another element such as a DIV (for "mega menus"), so this plugin handles that, too.

The plugin has 4 default options which can be overwritten as required:

```
childTag: 'ul'   // Sets which element contains the child lists. Defaults to UL. If not UL, forceiOS is set to true, regardless
closeElement: '' // An additional selector that will close any open list when clicked/tapped
forceiOS: false  // iOS sometimes handles these menus fine so let it try
openClass: 'tmh-open' // The class added to parent links when selected
```

---

**Usage:**

Basic

`$('parent-ul-selector').touchMenuHover();`

Force iOS to use the plugin

```
$('parent-ul-selector').touchMenuHover({
	'forceiOS': true
});
```

Customising to use DIVs as the list wrapper and also bind a close-click event to #nav

```
$('parent-ul-selector').touchMenuHover({
	'childTag': 'div',
	'closeElement': '#nav'
});
```

To enable BlackBerry support, you need to also "open" the fly-out menu with the `openClass`, e.g.:

```
li:hover > ul, a.tmh-open + ul {
	left: auto;
}
```

---

Demo: http://www.izilla.com.au/git/jquery.izilla.touchMenuHover.html

---

Minified with YUI Compressor: http://www.refresh-sf.com/yui/