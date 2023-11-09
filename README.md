# To-Do List Application

This is the front-end repository for a To-Do List application where users can create, view, edit, and delete tasks.

## Prerequisites

Before running this project, make sure the backend service is up and running. Follow the instructions in the backend repository's `README.md` to get the server started.

## Getting Started

To get the front-end running locally:

- Clone this repo
- `npm install i` to install all required dependencies
- `npm run start` to start the local server (this project uses create-react-app)

The application should now be running on [http://localhost:3000](http://localhost:3000).

## Application Structure

- `Home.jsx`: The home page of the application. It displays a welcome message and a list of tasks. It also includes a button to navigate to the To-Do List page where you can manage tasks.
- `Tasks.jsx`: This page allows you to create new tasks and manage existing ones. You can edit task names or delete tasks as needed.
- `App.css`: The CSS file for basic styling of the application.

## Navigation

The application includes a navigation bar at the top that allows you to return to the home page at any time. On the home page, there is a button labeled "To-do Page" which takes you to the page for task management.

## Task Management

On the To-Do List page, you can:

- **Create a Task**: Enter a task name in the input field and click the "Create Task" button.
- **Edit a Task**: Click the "Edit" button next to any task to change its name. After editing, click away from the input field to save the changes automatically.
- **Delete a Task**: Click the "Delete" button next to any task to remove it from the list.

## Backend Integration

The front-end application interacts with the backend through a set of API services defined in `services/task.js`. Make sure the backend URL configured in the services matches the running backend server's URL.
