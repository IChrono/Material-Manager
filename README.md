# Material Manager

Material Manager is a desktop application designed for organizing and managing large collection of digital materials.<br>
With Material Manager, you can currently:<br>

- Browse all materials within a folder and its subfolders (see the "installation and use guide" section for requirements and operation details)<br>
- Filter materials by category, metadata, or both<br><br>

### STACK

Regarding the chosen stack, I took the opportunity to work with the following technologies:

- React
- TypeScript
- Tailwind CSS
- Electron

### KEY FEATURES

Key features of Material Manager include:

- <b>Efficient Organization:</b> Easily navigate and manage large collections of materials with intuitive filtering options.
- <b>Customizable Metadata:</b> Assign and search materials using custom metadata, enhancing organization and searchability.
- <b>Integration with Popular Tools:</b> Seamlessly integrates with tools like Substance Designer for enhanced material creation workflows.
- <b>Responsive UI:</b> Built using React and TypeScript, ensuring a modern and responsive user interface.
- <b>Cross-Platform Compatibility:</b> Utilizes Electron to support Windows, macOS, and Linux platforms.

### IMPLEMENTATION IDEAS:

- Tool for create .json and prev.jpg files from the app
- Tool for manipulate .json file from the app
- Possibility to search with multiple keywords

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

<br>

## Project Setup

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```

<br>

## Installation and use guide

**REQUIREMENTS**

1. Windows OS, MacOS or Linux
1. A folder (root) containing the materials. Each material folder within the root must have: A file with the metadata in .json format An image for the material preview in .jpg or .png format named prev -> example: prev.jpg or prev.png The textures or the material's mdl file.

![](/ReadmeImgs/Aspose.Words.a8aeb1a3-cabe-4b6f-a743-bb0e90b4d094.001.jpeg)

3. .json files must have at least the name property:

`  `"id": "",

`  `"name": "GMG003", <--------------

`  `"revision": "yes",

`  `"status": "released",

`  `"color_family": "gunmetal gray",

`  `"material_family": "metal",

`  `"mechanical_treatment": "brushed",

`  `"gloss": "matte",

`  `"transparency": "transparent",

`  `"tactile": "smooth",

`  `"effect": "metallic",

`  `"manufacturer": "",

`  `"original_cycle": "GMG+2022",

`  `"production_date": "",

`  `"reserved": "",

`  `"type": "BMR 500",

`  `"sustainability": ,

`  `"price": "€€€",

}

**INSTALLATION ()**

1\. Once you have build the .exe file, run it and follow the instructions **FUNCTIONING**

1. Load the material library using the button ![ref1]

![](/ReadmeImgs/Aspose.Words.a8aeb1a3-cabe-4b6f-a743-bb0e90b4d094.004.jpeg)

2. Upon pressing the button ![ref1], a dialog window will open. Select the folder (root) that contains all the materials.

![](/ReadmeImgs/Aspose.Words.a8aeb1a3-cabe-4b6f-a743-bb0e90b4d094.005.jpeg)

3. If the material loading is successful, a list of materials will appear on the screen.

![](/ReadmeImgs/Aspose.Words.a8aeb1a3-cabe-4b6f-a743-bb0e90b4d094.006.jpeg)

4. Once you locate the material in the materials section, simply click on it to open the folder containing it.

![](/ReadmeImgs/Aspose.Words.a8aeb1a3-cabe-4b6f-a743-bb0e90b4d094.007.png)

5. Searching materials:

There are three ways for filtering materials **Category filter on the sidebar**

![](/ReadmeImgs/Aspose.Words.a8aeb1a3-cabe-4b6f-a743-bb0e90b4d094.008.jpeg)

**Keyword filter on the search bar**

![](/ReadmeImgs/Aspose.Words.a8aeb1a3-cabe-4b6f-a743-bb0e90b4d094.009.jpeg)

**Category filter + keyword filter**

You can apply both filters simultaneously

![](/ReadmeImgs/Aspose.Words.a8aeb1a3-cabe-4b6f-a743-bb0e90b4d094.010.jpeg)

[ref1]: /ReadmeImgs/Aspose.Words.a8aeb1a3-cabe-4b6f-a743-bb0e90b4d094.003.png
