# Alecto - Landing Page

`alecto-landing` is a website built on the basis of a free .psd template as part of an additional task on the Bootcamp Kodilla Full Stack Developer course.

## Installation

No installation is necessary. Just clone the repository and open `index.html` in your browser.

```
git clone git@github.com:jerzy-jarczynski/alecto-landing.git
```

### For developers

There is a package.json file in the repository containing task-runner. Dependencies can be installed in the standard way using npm:

```
npm install
```

Then you can run task watch on localhost:3000 with automatic refreshing of changes in the browser and conversion of SASS to CSS.

```
npm run watch
```

NOTE: There are differences in size of layout while running just index.html and localhost:3000. At the moment I don't know how to fix this.

## Release

To place the project on the server, copy directories and files from the list:
- `index.html`
- `css` directory with content
- `images` directory with content
- `js` directory with content
- `vendor` directory with content

## Used technologies

`HTML`, `CSS/SASS`, `RWD`,  `JavaScript`

I only use Javascript to toggle the active class to handle the hamburger and menu and the search form drop-down. In addition, I connected the svg-convert to animate the colors of the icons on the page.

The most interesting is the Meet our team section, where I used continuous animation and 3D transformation on the hover of the element.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Demo

You can see living demo without cloning or downloading the repo:

1. CodePen:

[https://codepen.io/jerzyjarczynski/pen/zYJOOmG](https://codepen.io/jerzyjarczynski/pen/zYJOOmG)

2. My personal domain:

[https://alecto.jarczynski-dev.pl/](https://alecto.jarczynski-dev.pl/)