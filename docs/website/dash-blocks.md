---
slug: /blocks
hide_table_of_contents: true
---

# Dash Blocks (Extension)

Dash has a section of blocks that allows you to use certain features previously not accessible to Scratch projects.

## How to use {#usage}

Open the extension library by clicking the button in the bottom left of the editor (same place where you find things like "pen"), then choose "Dash Blocks":

![](./assets/dash-blocks-library.png)

## is compiled? and is Dash? {#is-compiled}

![is compiled?](./assets/is-compiled.svg)

See https://scratch.mit.edu/projects/414716080/

These blocks are "compatible" with Scratch because they're actually just modified argument reporters.

:::warning
Every block beyond this warning is **incompatible** with Scratch. Projects that use them **cannot** be uploaded to the Scratch website. If you don't use any Dash exclusive blocks, then there should be no issue with making your project in Dash and uploading it to Scratch.
:::

## last key pressed {#last-key-pressed}

![last key pressed](./assets/last-key-pressed.svg)

It tells you the last key that was pressed. It's intended to be used something like this:

![when any key pressed, do something with last key pressed](./assets/how-to-use-last-key-pressed.svg)

## mouse button down? {#mouse-button-down}

![primary mouse button down?](./assets/mouse-button-down.svg)

It's like "mouse down?" but lets you check each individual button. Keep in mind that due to how Scratch interprets mouse input, it's possible for a block like "is primary mouse button down?" to report true while the standard "mouse down?" reports false.

 * (0) primary is usually left click
 * (1) middle is usually scroll wheel
 * (2) secondary is usually right click (running this block once will disable right click on the stage)

## Blocks included directly in Dash

### Open website

Opens a website, you can choose it to open in this tab, a new tab or a new window

### Sound blocks

Stop sound, play sound for x seconds, etc.

### Starts/ends with

Checks if a string starts/ends with another string
