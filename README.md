# Cognitus Solutions Information Database

This repository powers the Cognitus Solutions Information Database, a simple staff access hub for official Cognitus systems.

## Current systems

- Cognitus Academy: https://silly-cheese.github.io/cognitus-academy/
- Cognitus Pay: https://silly-cheese.github.io/cognitus-pay/
- Cognitus Careers: https://silly-cheese.github.io/cognitus-careers/#/

## How to add more systems

Open `script.js` and add another object to the `systems` array:

```js
{
  name: "System Name",
  status: "Category",
  icon: "SN",
  url: "https://example.com/",
  description: "Short description of what this system is used for.",
  tags: ["Tag One", "Tag Two"]
}
```

The page automatically updates the system count, search results, cards, and copy buttons.

## Files

- `index.html` - main page structure
- `style.css` - black and white Cognitus styling
- `script.js` - system links, search, and copy-link behavior

## GitHub Pages

This site is designed for GitHub Pages. In repository settings, publish from the `main` branch and root folder.
