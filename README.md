#The Gallery: 

##Part I: _Components_

> Welcome to The Gallery!


In this first part of a **two-part** project, I’ll 
- assemble an image gallery for the Met Museum’s art collection. 


This gallery showcases a stunning array of artworks and invites interaction by 
- displaying existing comments for each piece and 
- allowing users to contribute their thoughts through a comment feature.

Throughout this project, I’ll 
1. practice my understanding of _Server Components_ and _Client Components_
2. utilize _Suspense Boundaries_ to create a seamless web application

APIs used:
1. The Metropolitan Museum of Art Collection API

##Part II: _The Gallery: Data Fetching_
In this project, I’ll practice my knowledge of data fetching in Next.js by completing a browsing feature for the Artwork Viewer application.

To complete the browsing feature, I’ll need to:

- create a _cached_ data fetching utility function that executes on the server
- create a Post component to fetch and render an artwork image
- create a Search component to search for related artwork images
- modify the **/browse** page to display _<SearchBar>_ and _<Post>_ elements
- progressively render _<Post>_ elements

In the project directory:

- the app pages and segments are defined in _**/app**_
- components are defined in /components
- application data are located in /data
- utility functions and helpers are defined in /lib

> To start the application by running, I'll use **npm run dev**
The initial state of the /browse segment displays a friendly message.