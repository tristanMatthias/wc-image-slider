# Web Component - Image slider

This repo is a very basic tutorial on creating custom elements.
It describes a basic image slider that loops over it's children, displaying
one image at a time with a fade effect.

## Installation
Clone the repo, then run `yarn` or `npm install` in the project.

## Building
Run `yarn build` or `npm run build` to compile the component.

## Testing
Run `yarn start` or `npm start` to run a local webpack server. You can access
it at `localhost:8080`

## Usage
In your html, include the JS file, then add a `<image-slider>` tag with your
images nested inside. The component will automatically loop over them
