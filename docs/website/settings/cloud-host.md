---
slug: /cloud-host
hide_table_of_contents: true
---

# Custom Cloud Variable Server

The "Custom Cloud Variable Server" option lets you change the cloud variable server that Dash will connect to, for example:

`wss://clouddata.turbowarp.org`

Inclusion of `ws://` or `wss://` is optional but recommended. `wss://clouddata.turbowarp.org` is the default cloud data server used by Dash, so this example doesn't actually change anything. Insecure ws:// servers may not work because Dash uses HTTPS.

It is not possible to use this to connect to Scratch's cloud variable server as it requires account credentials which Dash can't support.
