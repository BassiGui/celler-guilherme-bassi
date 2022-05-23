# Beer Celler 🍺

A project with the purpose to control a beer cellar

<p align="center">
 <a href="#features">Features</a> •
 <a href="#prerequisite">Prerequisites</a> • 
 <a href="#-technology">Technology</a> • 
 <a href="#architecture">Architecture</a> •
 <a href="#run">Run the Web site</a> •  
 <a href="#versions">Versions</a> •  
 <a href="#author">Author</a>
</p>

<h4 align="center"> 
	✅  Beer Celler  🚀  Version 1...  ✅
</h4>

## Features

- [x] Upload a beer
- [x] Delete a Beer
- [x] Update a Beer
- [x] Preview a Beer details
- [x] Filter a Beer by name
- [x] Sort a beer list by name
- [ ] Sort a beer list by Date

## Prerequisite

Before start, you will need to install some settings in your computer, like:
[Node.js](https://nodejs.org/en/), You will also need a good editor to see the code, I recomend [VSCode](https://code.visualstudio.com/)

## 🛠 Technology

These are the technologies that I have used in this project:

- [MockAPI](https://mockapi.io/)
- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [Axios](https://axios-http.com/docs/intro)
- [React Router](https://v5.reactrouter.com/web/guides/quick-start)

## Architecture

### `GitHub`

In GitHub I used 3 kinds of "enviroment":
I´ve decided to use 3 types of "enviroments"

### `master`

Master is used for a production enviroment, all the final versions are here

### `stage`

Stage is a test environment. When we finalize the functionality we merge the development code to the stage for testers validate the new feature.

### `develop`

Develop is used for a development environment and all the new features are created in this branch.

### Code Architecture

For this project I’ve decide to start with the UI to have a better solution and view from all components together. To control the URL I’ve inserted the React-Router-Dom to make the navigation of the website.
After that, I’ve started to create the functionalities and for data control I’ve used MockAPI to simulate a request from an API. And then, I’ve integrated Axios into my code for the API communication.

## Versions

- NodeJs v18.1.0

## Run

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Author

Guilherme Bassi

- [Linkedin](https://www.linkedin.com/in/guilhermebassi/)
