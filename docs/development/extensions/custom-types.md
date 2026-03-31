---
hide_table_of_contents: true
---

# Custom types

:::warning
The writing of this page has not been finished!
:::

Custom types are Scratch type represented by a instance of [JavaScript class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) that allow to visually represent their contents inside the results of block execution, variable and list monitors. They can be saved in a project file using a serializer and recreated using a deserializer.

## Constructing

```js
class MyCustomType {
  customId = "extensionwithcustomtype_customtype";
```

This is a JavaScript class. `customId` field declared with unique ID of custom type. The name of the class doesn't matter, but we suggest making it somehow based on the type's ID.

## toMonitorContent()

```js
  toMonitorContent () {
    let el = document.createElement("span");
    el.textContent = "Custom type representation in variable monitor";
    return el;
  }
```

This function will be called when Dash tries to represent the content of custom type in variable monitor. It must return an [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element).

## toReporterContent()

```js
  toReporterContent () {
    let el = document.createElement("span");
    el.textContent = "Custom type representation in result of block execution";
    return el;
  }
```

This function will be called when Dash tries to represent the content of custom type in result of block execution. It must return an Element.

## toReporterJSONItem()

```js
  toReporterJSONItem () {
    let el = document.createElement("i");
    el.textContent = "nested custom type";
    return el;
  }
```

This function will be called when Dash tries to represent the content of custom type as element of an array or object inside the result of block execution. It must return an Element.

## toListItem()

```js
  toListItem () {
    let el = document.createElement("i");
    el.textContent = "nested custom type";
    return el;
  }
```

This function will be called when Dash tries to represent the content of custom type as element of a list monitor, an array or object displayed in the variable monitor. It must return an Element.

## toListEditor()

```js
  toListEditor () {
    return "nested custom type";
  }
```

This function will be called when Dash tries to represent the content of custom type as editable element of a list monitor, an array or object displayed in the variable monitor. It must return a string. We suggest making it return the same text content as the toListItem() function.

## Registering serializer and deserializer

```js
// ...
  class ExtensionWithCustomType {
    constructor () {
      Scratch.vm.runtime.registerSerializer(
        "extensionwithcustomtype_customtype",
        function (obj) {
          return "This is a serialized value";
        },
        function (serialized) {
          return new MyCustomType();
        },
      )
    }
    getInfo () {
      return { /* ... */ };
    }
  }
// ...
```

This registers the serializer and deserializer of custom type.
- The first argument is a ID. It must be identical to the custom type ID.
- The second argument is a serializer function. This also can be a [generator function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*).
- The third argument is a deserializer function. This also can be a generator function.

:::warning
Registering serializer and deserializer of custom type only supported in unsandboxed extensions.
:::
