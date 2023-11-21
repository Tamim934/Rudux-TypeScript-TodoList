# npm i
# json-server --watch db.json
## npm run dev
   
  
 # Redux Todo List 
The Redux Todo List is a simple yet powerful application that demonstrates the core concepts of Redux, a predictable state container for JavaScript apps.

## Overview
The Redux Todo List is a basic task management app. It allows users to add tasks (todos), mark them as completed, and filter the list of tasks based on their completion status. The state of the application is managed using Redux, which ensures that the state transitions are predictable and easy to understand.

## How it Works
Add Todo: Users can add a new todo by typing in the input field and pressing enter. This dispatches an ADD_TODO action with the text of the new todo. The todo reducer handles this action by creating a new todo object and adding it to the current state.

Toggle Todo: Users can toggle the completion status of a todo by clicking on it. This dispatches a TOGGLE_TODO action with the id of the clicked todo. The todo reducer handles this action by flipping the completed field of the corresponding todo.

Filter Todos: Users can filter the list of todos by clicking on one of the filter links (‘All’, ‘Active’, ‘Completed’). This dispatches a SET_VISIBILITY_FILTER action with the selected filter. The visibilityFilter reducer handles this action by setting the current filter to the selected one.

## Code Structure
The code is structured based on the recommended Redux project structure:

actions/: This directory contains the action creators, which are functions that return an action.

reducers/: This directory contains the reducers, which are functions that take the current state and an action, and return a new state.

components/: This directory contains the React components that make up the UI of the application.

containers/: This directory contains the container components, which connect the Redux store to the React components.

index.js: This is the entry point of the application. It creates the Redux store, sets up the root reducer, and renders the root component.

## Running the App
To run the app, follow these steps:

## Clone the repository.
Navigate to the project directory.
Install the dependencies with npm install.
Start the development server with npm start.
Open http://localhost:3000 in your browser.
Conclusion
The Redux Todo List is a great example of how Redux can be used to manage the state of a React application. It demonstrates the use of actions, reducers, and the Redux store, and shows how these concepts can be used together to build a robust application. Happy coding! 🚀
