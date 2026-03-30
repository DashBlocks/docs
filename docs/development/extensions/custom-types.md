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
    el.textContent = "Visual representation of custom type in result of block execution";
    return el;
  }
```

Returns an [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) representing the content of custom type in result of block execution.

## toReporterContent()

## toReporterJSONItem()

## toListItem()

## toListEditor()

## Registering serializer and deserializer

```js
// ...
  class MyExtension {
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
