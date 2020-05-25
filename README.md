This is a React app which uses the [TV Maze Api](https://www.tvmaze.com/api) to display details about some TV shows.

The TV show page displays the following information:

1. Show title
2. Show Description
3. Show cover image
4. Episode list. Every episode in the list links to a details page for that specific episode

The episode detail page contains:

1. Episode title
2. Episode Summary
3. Episode cover image

The app is designed with "mobile-first" approach in mind.

Possible features / improvements considered for the future:

1. Search functionality (user will be able to search for a show)
2. Ability to add shows to favorites (not persistent since this is only a front-end app)
3. More details about each show and episode (cast, duration, broadcaster etc)
4. More responsive layout
5. In terms of scalability and code maintenance, some components (especially ShowDetails.jsx) should be divided into smaller parts
6. As the app gets larger, use Typescript to ensure type safety
7. Testing
8. Using utility classes and variables for repetitive styling

Libraries and technologies used in the app are React, Redux, Axios, Sass/Scss, and Font Awesome.

To run the app locally:

1. clone the repo
2. npm install to install the dependencies
3. npm start to launch the app
