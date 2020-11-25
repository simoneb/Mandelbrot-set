# Mandelbrot set generator
![a Mandelbrot set and some options](screenshots/screenshot.png?raw=true)

## Fetures
* Draggable canvas
* Zoom slider
* Dark mode by default
* Colors

### What do the colors mean?
The colors represent how many iterations a pixel has undertaken before
it exploded to infinity. Red (lower hue values) means the program didn't
need many iterations until it found out it isn't in the set. Pink
(higher hue values) means it took many iterations.

## Building
After cloning, run `npm i` to install the dependencies. Then, you can
run `npm run dev` to run a dev server or run `npm run build` to create
a ready to publish bundle.

## License
This project is licensed under [GPLv3 or later](LICENSE).
