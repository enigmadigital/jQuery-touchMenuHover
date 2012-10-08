Izilla jQuery Touch Menu Hover
==============================

###  Allows ULs (or any element of your choice) that open on li:hover to open on tap/click on mobile platforms such as iOS, Android, WP7 etc

WebKit browsers on iOS are the only major mobile browsers that (sometimes?) open child ULs when tapped; every other platform just follows the link. With this plugin, the click/tap event is intercepted allowing the menu to be opened. Tapping the link again will follow it. Depending on the styles applied, tapping anywhere else on the document will try to close the menu.

Additionally, no mobile browsers natively handle nested lists where the child ULs are wrapped in another element such as a DIV (for "mega menus"), so this plugin handles that, too.

The plugin has 3 default options which can be overwritten as required:

```
'childTag': 'ul'   // Sets which element contains the child lists. Defaults to UL. If not UL, forceiOS is set to true, regardless
'closeElement': '' // An additional selector that will close any open list when clicked/tapped. Doesn't work on iOS when childTag is set to UL
'forceiOS': false  // iOS sometimes handles these menus fine so let it try
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