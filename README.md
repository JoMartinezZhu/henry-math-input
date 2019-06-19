# math-input

## Description from original Khan project

Khan Academy's new expression editor for the mobile web. Used in the [Perseus](https://github.com/khan/perseus) exercise framework to power math input and expression editing on small screens.

Built with [React](https://github.com/facebook/react), [Redux](https://github.com/reactjs/redux), [MathQuill](https://github.com/mathquill/mathquill), [Aphrodite](https://github.com/khan/aphrodite), and more.

![](https://cloud.githubusercontent.com/assets/1309177/15994911/d1acd29e-30c5-11e6-9707-6bef8e69114f.gif)

**Disclaimer**: `math-input` is under active development and, in fact, is yet to be fully rolled out across [khanacademy.org](https://www.khanacademy.org/). Its API could (and most likely will) change substantially in the near future!

## Supported Features

- Multiple keypad configurations, so as to accommodate for a range of possible input types (i.e., fractions/mixed numbers and algebraic expressions).
- Multi-page keypads, with swipeable page navigation.
- Touch-and-drag interactions (as supported by the stock iOS and Android keypads).
- A draggable cursor with a detached handle, for fine-grained control on touch devices.
- Custom state transitions for the editing experience, to streamline expression entry.

![](https://cloud.githubusercontent.com/assets/1309177/15994912/d2b60cdc-30c5-11e6-8eb4-9086d76f327c.gif)

## Additional changes and Demo

- Click is supported (implemented as touchStart+touchEnd) so now it works in non-mobile browsers
- there is not a hard-coding to a "root" div, but one or many divs of class "math-input"
- value is accesible via an attribute in the containing div, so values can be used in later forms or read from other javascript code

A live demo is available via [GitHub Pages](https://f-alonso-vendrell.github.io/math-input/). 

Note that, in this version, there is no need to enable mobile emulation mode in order to use the keypad in a desktop browser.

To run the demo locally, clone the repo, `npm install`, `npm run watch`, and open the `index.html` page. The local behaviors can similarly be customized via the editor @ `custom.html`.

## License

[MIT License](http://opensource.org/licenses/MIT)
