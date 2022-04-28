# PomoPets

**PomoPets** is an incentivized Pomodoro timer. Begin your focus session with a mysterious, hatchable egg and upon completing your focus session, you are rewarded with a cute digital pet!

A [Lighthouse Labs](https://www.lighthouselabs.ca/) project by [Justin Lam](https://github.com/justinklam), [Rhea Azarraga](https://github.com/Rheaazarraga), and [Arushi Katyal](https://github.com/katy-arushi).

## **Access the deployed app [here](https://pomopets.netlify.app/)!**
[![Netlify Status](https://api.netlify.com/api/v1/badges/67ad81cc-40c5-4e28-9b80-d7b56fe77794/deploy-status)](https://app.netlify.com/sites/pomopets/deploys)

## Features

- ⭐ Allows users to choose and name their own digital pets
- ⭐ Has a Pomodoro timer that has 25 minute focus sessions and 5 minute breaks
- ⭐ Users can start and reset the timer as they wish
- ⭐ Users can choose their area of focus for the timer
- ⭐ Statistics page tracks number of Pomodoro sessions completed by area of focus
- ⭐ Dark Mode
- ⭐ Deployed on Netlify and Heroku

## Future Features

- Integrate Spotify
- Unlock new pets based on number of Pomodoro sessions completed
- Adding more page themes
- Responsive design for app to be used on any device
- Audio notification when focus session is completed

## Screenshots

#### Homepage 
!["pomopets homepage"](https://github.com/justinklam/pomopets/blob/main/pomo-react/public/screenshots/home.png?raw=true)
#### Homepage (Dark Mode)
!["pomopets homepage dark mode"](https://github.com/justinklam/pomopets/blob/main/pomo-react/public/screenshots/homedark.png?raw=true)

#### Choose your PomoPet
!["pomopets pets"](https://github.com/justinklam/pomopets/blob/main/pomo-react/public/screenshots/pomopets%20pets.png?raw=true)
#### Choose your PomoPet (Dark Mode)
!["pomopets pets dark mode"](https://github.com/justinklam/pomopets/blob/main/pomo-react/public/screenshots/pets%20dark.png?raw=true)

#### Timer
!["pomopets timer"](https://github.com/justinklam/pomopets/blob/main/pomo-react/public/screenshots/timer.png?raw=true)
#### Timer (Dark Mode)
!["pomopets timer dark mode"](https://github.com/justinklam/pomopets/blob/main/pomo-react/public/screenshots/timerdark.png?raw=true)

#### Statistics
!["pomopets stats](https://github.com/justinklam/pomopets/blob/main/pomo-react/public/screenshots/stats.png?raw=true)
#### Statistics (Dark Mode)
!["pomopets stats dark mode"](https://github.com/justinklam/pomopets/blob/main/pomo-react/public/screenshots/statsdark.png?raw=true)

## Getting Started
### Setting up the Client
1. Go to pomo-react: `cd pomo-react`
2. Update proxy in the package.json with the port you used for the server
   - `"proxy": "http://localhost:3030",`
3. Install dependencies: `npm i`
4. Run the app: `npm start`

## Dependencies
### Client-side
    "@faker-js/faker": "^6.0.0-alpha.7",
    "axios": "^0.25.0",
    "bootstrap": "^5.1.3",
    "chart.js": "^3.7.1",
    "lodash": "^4.17.21",
    "react": "^17.0.2",
    "react-bootstrap": "^2.1.2",
    "react-calendar": "^3.7.0",
    "react-chartjs-2": "^4.0.1",
    "react-circular-progressbar": "^2.0.4",
    "react-dom": "^17.0.2",
    "react-router-dom": "^6.2.1",
    "react-scripts": "5.0.0",
    "sass": "^1.49.7",
    "web-vitals": "^2.1.4"
