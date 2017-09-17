This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This is a basic project for creating a chrome extension in using reactJS


A chrome extension needs to be static files that get packed up. Again easy to do, just run npm run build and the resulting build folder contains exactly what you need.

Copy following format to manifest.json file
```
{
  "manifest_version": 2,

  "name": "Demo React-Chrome extension",
  "description": "This extension shows how to run a React app as a Chrome extension",
  "version": "1.0",

  "browser_action": {
    "default_icon": "logo_small.png",
    "default_popup": "index.html"
  }
}
```
