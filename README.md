# GitHub Release Monitor - Analysis 

A tool to keep track of releases made by GitHub repos.   This repository contains an example setup that can be used to create an app.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Tools used

* React framework
* Okto kit to fetch data 
* Localstorage


## Getting Started

All of the below dependencies can be installed using: yarn install or npm install

Start development by creating a react app using: `yarn start or npm start`

# MVP
* user is able to search through for github organizations' repositories
* user can click on a repository to reveal the latest release information 
  * this will pin the repo as a card in the Watch List panel and
* when user is adding onto watch panel it constantly checks for a new available release for all pinned repos. 
  * repos will light green if there's a new update available prompting user to click on it to click to view new info. 
* user can click on card to make it seen, changes styling back to default styled card
* user can remove card from panel
* user can refresh page/app and watchlist will retain all uncleared cards. 

# Known bugs
* Need to handle errors of repos with no releases
* Not Mobile Friendly

## Future Release
* Styling
* Responsiveness
* Able to add more info to cards, and able to change 