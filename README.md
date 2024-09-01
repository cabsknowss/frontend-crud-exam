# Front End Developer CRUD Test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Kenneth Cabobos (Instruction)

- Layout of the website was changed based on my preference
- Since footer is not included in the instruction, I removed it
- styles/base,
  - \_base.scss = CSS Reset
  - \_utility.scss = CSS Utility Classes
  - \_variables.scss = CSS Variables
- styles/components
  - \_actionmodal.scss = Add, Edit, Delete Modal Styling
  - \_button.scss = All the button related styling
  - \_form.scss = Form styling for Add and Edit Modal
  - \_messagemodal.scss = After submitting, there will be popup modal
  - \_profilemodal.scss = When the row is clicked on table, a modal will popup showing user's details
  - \_table.scss = All the table styling related
- styles/layout
  - \_app.scss = Layout of the website
  - \_pagemain.scss = Content of the website (right section)
  - \_pagenav.scss = Sidebar of the website (left section)
- styles/pages
  - \_home.scss = Styling related to home page
  - \_user.scss = Styling related to user page
- users/modals
  - AddUserModal.js = modal for adding a user
  - DeleteUserModal.js = modal for confirming a user deletion
  - EditUserModal.js = modal for editing user's details
  - ProfileModal.js = modal for viewing user's details
  - ErrorModal.js = callback function for catch during api fetch
  - SuccessModal.js = modal when the submit is success
- All the modals I used are in views/users/modals
- User Data is fetched on views/users/index.js
- The table on the user page is at views/users/UserTable.js

## Environments

Node: v16.18.1\
NPM: 8.19.2

## Tasks

You are tasked to create a simple page with Users Table for the administrator site using React. Basically, you need to build a CRUD for User Management using same project below. The exam will have a set of instructions for you to follow, please read.

NOTE: The exam should be based on the sample code.

### A user should be able to do the following functionalities:

- [x] View home page or dashboard with your personal information (basic introduction)
- [x] View the list of users
- [x] Create a user
- [x] View the profile of the user
- [x] Update a user
- [x] Delete a user

### Instructions

- Should have 2 directories `/` and `/users`
- Use react-create-app, SCSS or LESS
- You can showcase your ReactJS coding skills without relying too much on any libraries, toolkits or plugins.
- Do not use any frameworks, please use the given react app build for you to start. Except for ant design or reactstrap you may use it to make your app look good.
- Please be strict on using coding standards, follow airbnb’s coding style guide (https://github.com/airbnb/javascript)
- As for writing code and design patterns, if you want to modify or upgrade it's all yours. Show us what you got in terms of coding structure and best practices.
- There will be API for you to use and make things work on your end, it will be provided down below.

### Requirements

#### 1. Home

- Directory: `/` (root)
- Content: {yourName}, {email}

#### 2. Users

- Directory: `/users`
- Functions: View listing, Update user, Create user, Delete user

#### 3. Users Listing Table

- Please create a "Add User" button above the table
- Should have 10 rows per page
- Columns: ID, Avatar, Email, First Name, Last Name, Actions Button (Edit, Delete)

#### 4. Create User Modal (Can be shown by Create button or icon)

- Modal title: Edit User
- Should have a form and input fields that will submit the personal information of the user to be added
- Adds a row data that contains ID, avatar (placeholder), email, first name and last name
- Submit input fields - email, first name and last name (skip avatar)
- Should have a submit and cancel button with a functionality to handle on close and create.

#### 5. Edit User Modal (Can be shown by Edit Button)

- Modal title: Edit User
- Should have a form and input fields that will submit the personal information of the user to be updated by its ID
- Editable input fields - email, first name and last name (skip avatar)
- Should have a submit and cancel button with a functionality to handle on close and update.

#### 6. Delete User Modal (Can be shown by Delete Button)

- Modal title: Delete User
- Should display a static view of the selected user
- Displace ID, avatar, email, first name and last name
- Should have a submit and cancel button with a functionality to handle on close and delete

### Optionals

- Decorate the page beautifully.
- Add validation and error handlers on submit (Create, Update, Delete)
- Use of async and await / Promises
- Handle open and close modals using route
  - Open create user modal: `/users/create`
  - Open edit user modal: `/users/{id}/edit`
  - Open delete user modal: `/users/{id}/delete`

### APIs (Document: REQ | RES API)

#### Get the list of users

```
Method: GET
URL: https://reqres.in/api/users?page=1
```

#### Get user by ID

```
Method: GET
URL: https://reqres.in/api/users/{id}
```

#### Create user

```
Method: POST
URL: https://reqres.in/api/users
```

#### Update user by ID

```
Method: PUT
URL: https://reqres.in/api/users/{id}
```

#### Delete user by ID

```
Method: DELETE
URL: https://reqres.in/api/users/{id}
```

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
