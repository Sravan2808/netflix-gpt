# Netflix GPT

- Create React App
- Configure Tailwind CSS
- Header
- Routing of App
- Login Form
- Sign up Form
- Form Validation
- UseRef Hook
- Firebase Setup
- Deploying our app to production
- Steps for Deployment :

0. Install firebase CLI - npm install -g firebase-toolsn -
1. Firebase Logifirebase login
2. Initilize firebase - firebase init ,then select Hosting
3. Deploy command - firebase deploy

- Create SignUp User Account
- Implement Sign In user Api
- Created Redux Store with UserSlice
- Implemented Sign Out
- Update Profile 
- BugFix : Sign Up user displayName and profile picture update
- BugFix : if the user is not logged in Redirect / browser to login Page and vice-versa
- unsubscribed to the onAuthStateChanged callback
- Add hardcoded values to the constants file. 
- Register TMDB API & create an app & get access token
- Get Data from TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- Create movieSlices
- Update Store with movies Data
- Planning for MainContainer & Secondary Container
- Fetch Data for Trailer Video
- Update Store with  Trailer Video Data
- Embedded the Youtube video and make it autoplay and mute
- Tailwind Classes to make Main Container look awesome



# Features

- Login/SignUp
  - Sign In /Sign up Form
  - redirect to Browser Page
- Browse (after authentication)

  - Header
  - Main Movie
    - Trailer in Background
    - Title & Description
    - MovieSuggestions
      -MovieLists \* n

- NetflixGPT
  - Search Bar
  - Movie Suggestions
