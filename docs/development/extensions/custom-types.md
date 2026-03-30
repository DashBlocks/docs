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

This is a [JavaScript class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) with a declared `customId` field. The name of the class doesn't matter, but we suggest making it somehow based on the type's name.

## toMonitorContent()

## toReporterContent()

## toReporterJSONItem()

## toListItem()

## toListEditor()
