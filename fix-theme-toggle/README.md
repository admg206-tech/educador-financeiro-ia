# Theme toggle: why this change

This branch fixes the theme toggle so that:

- Theme initializes from localStorage when present
- Otherwise respects system preference (prefers-color-scheme)
- Applies the html.dark class synchronously to avoid flicker and ensure components read the correct theme on first render

No behavior changes expected beyond making the toggle immediate and preserving preference.
