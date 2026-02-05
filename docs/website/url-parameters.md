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

https://dashblocks.github.io/#443603478?username=ExampleUsername

## Cloud host {#cloud_host}

The `cloud_host` option lets you change the cloud variable server that Dash will connect to, for example:

https://dashblocks.github.io/#12785898?cloud_host=wss://clouddata.turbowarp.org

Inclusion of `ws://` or `wss://` is optional but recommended. `wss://clouddata.turbowarp.org` is the default cloud data server used by Dash, so this example doesn't actually change anything. Insecure ws:// servers may not work because Dash uses HTTPS.

It is not possible to use this to connect to Scratch's cloud variable server as it requires account credentials which Dash can't support.

## Custom extensions {#extension}

The `extension` option loads a custom extension from a URL. See [Custom Extensions](/development/custom-extensions).

<!-- Commented due to possible removal -->
<!--
## `scale` {#scale}

Controls the maximum relative scale of the player when in fullscreen mode.

https://dashblocks.github.io/fullscreen?scale=2
-->

## Disable compiler {#nocompile}

The `nocompile` option turns off the compiler. You probably shouldn't enable this.

https://dashblocks.github.io/?nocompile

## Project URL {#project_url}

The `project_url` option tells Dash to download project data from an arbitrary URL. Do not use together with a regular project ID.

https://dashblocks.github.io/?project_url=dashblocks.github.io/packager/example.sb3

https:// is implied if you don't include a protocol. http:// URLs generally will not work for security reasons. Note that the URL needs to be a direct download and must support CORS (`Access-Control-Allow-Origin: *`). [GitHub Pages](https://pages.github.com/) will do this automatically and is known to work well.
