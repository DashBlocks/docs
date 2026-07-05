---
slug: /url-parameters
hide_table_of_contents: true
---

# URL Parameters


:::note
## Only "hidden" URL parameters are listed here {#only-hidden-url-parameters-are-listed-here}
Dash will automatically store settings such as turbo mode, custom FPS, high quality pen, etc. in the URL, but some advanced options still need to be manually applied. This page only documents these advanced options.
:::


## Username {#username}

The `username` option controls the value of the username block.

https://dashblocks.org/#s443603478?username=ExampleUsername

## Custom extensions {#extension}

The `extension` option loads a custom extension from a URL. See [Custom Extensions](/development/custom-extensions).

<!-- Commented due to possible removal -->
<!--
## `scale` {#scale}

Controls the maximum relative scale of the player when in fullscreen mode.

https://dashblocks.org/fullscreen?scale=2
-->

## Disable compiler {#nocompile}

The `nocompile` option turns off the compiler. You probably shouldn't enable this.

https://dashblocks.org/?nocompile

## Project URL {#project_url}

The `project_url` option tells Dash to download project data from an arbitrary URL. Do not use together with a regular project ID.

https://dashblocks.org/?project_url=dashblocks.org/packager/example.sb3

https:// is implied if you don't include a protocol. http:// URLs generally will not work for security reasons. Note that the URL needs to be a direct download and must support CORS (`Access-Control-Allow-Origin: *`). [GitHub Pages](https://pages.github.com/) will do this automatically and is known to work well.
