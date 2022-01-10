# Example for adding custom fonts into UI app

This example show how you can add custom fonts inside UI app in Avid MediaCentral | Cloud UX.

> :warning: **Disclaimer**: Customizing app title font is not supported!

> This example is built using Avid cloudux-starter-kit v. 2.1.13 [cloudux-starter-kit](https://www.npmjs.com/package/cloudux-starter-kit).
Please follow the [Quick Start](http://developer.avid.com/quickStart.html) and [UI Plugins](http://developer.avid.com/mcux_ui_plugin/clux-api/plugins/index.html) to get up to speed on how to use the example below.

## Prerequisites
To run this application you will need following things:

1. running MediaCentral | Cloud UX machine
2. [node.js and npm](https://nodejs.org)

## How to run example
1. Before running

Configure package.json file:

```text 
"alias": "your-avid-app-id",
"secret": "your-app-secret-from-myavid-com"
```

Configure connection in project.config.json:

```text
"connection": {
    "hostIp": "your-mediacentral-cloudux-machine-address",
	"hostPort": "",
	"proxyPort": "443"
}
```

From plugin folder in cli type:

```text
npm install
npm start
```

Go to https://localhost/ in browser to see the app.

## Structure of the plugin

Specify your custom font inside /src/app/font.sass with **@font-face** CSS at-rule:
```
@font-face 
    font-family: 'CaviarDreams'
    src: url('../fonts/CaviarDreams.ttf') format('truetype')
    src: url('../fonts/CaviarDreams.woff') format('woff')
```
Apply the font to the text inside src/app/index.scss:
```
.test {
    font-size: 32px;
    font-style: normal;
    font-weight: normal;
    font-family: "CaviarDreams";
}
```

### How to use CloudUX plugin
Appearance of the plugin:

![image](/uploads/843fa65419c4d32940063b728452e4d8/image.png)
