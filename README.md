# fitCommit

A fitness tracking application to empower gym goers beyond their limits. https://fitcommit.cyclic.app/ (Cyclic has ended its services)

This project was jointly developed by: Joey (frontend), Bobby (auth pages), Jonathan (backend)

## Project Brief

**MVP**

- Built with MongoDB, Express.js, React.js, Node.js, Chart.js and Tailwind
- Initially deployed using cyclic (cyclic has ended its services)

**TimeFrame**

- 1 week

**Features**

- Login/Register screen complete with JWToken and Bcrypt
- Storing of each user's past workouts and future workout plans
- Users can track their fitness progress per exercise
- Users can get recommendations for other exercises for specific musle groups
- Logout function

<br>

<br>

## Technologies and Tools used

- MongoDB
- Express.js
- React.js
- Node.js
- Chart.js
- Tailwind
- Git & Github

<br>

## Description

Gym goers can utilise fitCommit to plan their workouts with the Calendar feature, view their most recent exercise workout routines and keep track of their progress chart by tracking their maximum weight lifted per exercise. The additional Roulette features allows recommendations of new exercises for users who wish to try something new later on in their user lifetime on the application.

## Key Learnings

- Learning to structure backend data. Including creating fixed data enums for specific components to reduce the load when running the application
- Learning to utilise Bcrypt and JWToken for login and authentication feature
- As a group effort, it helped me understand the difference between efficiently developing my responsibilities in comparison to developing efficiently cross developers to help the overall team
- Using modals to declutter UI

<br>

## Analysis of Code

**Backend Controller Function**
![Backend Controller Function.js File](https://github.com/johnww15/fitcommit/blob/main/public/10_Function.png?raw=true)

- By including the Regular Expression, sorting and limiting functions into the controller function, we were able to reduce the amount of data transformation required in the frontend during the development phase.
- This was a learning lesson for us as a team as we intially spent too much time altering the data that was pulled in the frontend

  <br>

## Screenshots of Application

**Login Account Screen**
![Login Screen](https://github.com/johnww15/fitcommit/blob/main/public/01_Login.png?raw=true)

**Register Account Screen**
![Register Account Screen](https://github.com/johnww15/fitcommit/blob/main/public/02_Register.png?raw=true)

**New Entry Screen**
![New Entry Screen](https://github.com/johnww15/fitcommit/blob/main/public/03_NewEntry.png?raw=true)

- Users can fill this form with the specific details of an exercise and choose to add it as a workout they have completed in the past or a workout they are planning to do in the future.
- The form will record the data and it will be shown on the calendar (as shown below)

**Calendar Screen**
![Calendar Screen](https://github.com/johnww15/fitcommit/blob/main/public/04_Calendar.png?raw=true)

1. Side Navigation Bar
2. Calendar

- Calendar is interactable
- Dark green circles indicate workouts completed in the past. These results will also show on progress charts (shown below)
- Light green circles indicate workouts planned to be completed in the future

3. Quick overview of past workout routines

- A quick visual summary of the most recent completed workouts for users to plan their next workout accordingly

**Workout Plans Modal**
![Workout Plans Modal](https://github.com/johnww15/fitcommit/blob/main/public/05_Plans.png?raw=true)

- When a date with a light green circle is clicked, a modal will appear showing the workouts planned on that date.
- Users may choose to click "Edit" to make alteration to the entry (shown below)

**Edit Plans Modal**
![Edit Plans Modal](https://github.com/johnww15/fitcommit/blob/main/public/06_EditPlans.png?raw=true)

- If users edit the plans, the calendar will render in real time to reflect the changes

**Progress Charts**
![Progress Charts](https://github.com/johnww15/fitcommit/blob/main/public/07_Progress.png?raw=true)

- A graphic representation of the maximum weight lifted by the user in chronological order
- Users may use this to track the maximum weight they have lifted in different exercises

**Recommendations Screen**
![Recommendations Screen](https://github.com/johnww15/fitcommit/blob/main/public/08_Recommendations.png?raw=true)

- For the more adventurous, the application has a "Recommendations" feature where users may input a body part they wish to work on and the application will recommend some exercises for it
- Users may then choose to create an entry for a future workout plan or to include into a seperate "Favourites" list for future reference (shown below)

**Favourites List**
![Favourites List](https://github.com/johnww15/fitcommit/blob/main/public/09_Favourites.png)

- Similar to the Recommendations Screen, users can look at their saved workouts and quickly create entries for future workout plans
- Users can also remove specific exercises from the list if they wish to do so

<br>

## Summary

This was my first attempt at working on a full-stack development project in a team. While I primarily focused on the development of the backend infrastructure, we eventually came together to resolve and develop all parts of the projects collaboratively after the initial development stages.

There were 2 key learning points for me :

1.  The communication as well as the structuring of data required between a backend and front end development.

- While I was familiar with the backend structure early on, many tweaks and changes had to be made at later stages due to the lack of understanding between "an efficient backend structure" and a "practical backend structure" which helps the front end developer with their work. Eventually, a compromise was made with certain backend changes as well as a clear and concise explanation of the data structure for the front end developer to plan out their code appropriately.

2. A clean data structure reduces the work on the front end

- By consolidating as much of the filtering, sorting and minimising the pulls on the backend, the frontend development was made much easier by reducing the amount of data that was pulled.
