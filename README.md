# dom-input-select
Selects text on an HTMLInputElement.

```
npm add dom-input-select
```

```js
import domInputSelect from 'dom-input-select'

const onClick = (e) => domInputSelect(e.target)

document.querySelector('input#my-input')
  .addEventListener('click', onClick)
```

(as seen in [react-autoselect](https://github.com/AndersDJohnson/react-autoselect))
