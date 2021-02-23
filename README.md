# Coach Me

## Code Climate

![](https://api.codeclimate.com/v1/badges/436b4f75e35a44e9b259/maintainability)
![](https://api.codeclimate.com/v1/badges/436b4f75e35a44e9b259/test_coverage)

# API Documentation

#### Backend delpoyed at Heroku: https://coach-me-labs.herokuapp.com/

## Getting started

To get the server running locally:

- Clone this repo
- **npm install** to install all required dependencies
- **num run server** to start the local server
- **npm run test** to start server using testing environment

### Backend framework goes here

- Point One
- Point Two
- Point Three
- Point Four

## 2️⃣ Endpoints

#### Authenticaton & Registration Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/organizatoins/:orgId` | owners         | Returns the information for an organization. |
| PUT    | `/organizatoins/:orgId` | owners         | Modify an existing organization.             |
| DELETE | `/organizations/:orgId` | owners         | Delete an organization.                      |

#### Client Routes

| Method                       | Endpoint                   | Access Control       | Description                                  |
| ---------------------------- | -------------------------- | -------------------- | -------------------------------------------- |
| GET                          | `/client/:clientID`        | client and coach     | Account/Bio information for a single client  |
| PUT                          | `/client/:clientID`        | client               | Modify selected client biographical data     |
| DELETE                       | `/client/:clientID`        | client               | Delete a client.                             |
| ------                       | -----------------------    | -------------------- | -------------------------------------------- |
| \*                           | `/client/:clientID/data`   | Client Health Data   | \*                                           |
| ------                       | -----------------------    | -------------------- | -------------------------------------------- |
| GET                          | `/`                        | client and coach     | Returns the health data for a single client  |
| POST                         | `/`                        | client               | Submit Health Metric Data                    |
| PUT                          | `/:recordID`               | client               | Update Health Metric Data Record Insertion   |
| Delete                       | `/:recordID`               | client               | Delete Health Metric Data Record Insertion   |
| ------                       | -----------------------    | -------------------- | -------------------------------------------- |
| `/client/:clientID/sessions` | Client-Coach Session Notes | \*                   |
| ------                       | -----------------------    | -------------------- | -------------------------------------------- |
| GET                          | `/`                        | client and coach     | Returns all session notes for client         |
| GET                          | `/:sessionID`              | client and coach     | Returns session notes for a single session   |

#### Coach Routes

| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/users/current`        | all users           | Returns info for the logged in user.               |
| GET    | `/users/org/:userId`    | owners, supervisors | Returns all users for an organization.             |
| GET    | `/users/:userId`        | owners, supervisors | Returns info for a single user.                    |
| POST   | `/users/register/owner` | none                | Creates a new user as owner of a new organization. |
| PUT    | `/users/:userId`        | owners, supervisors |                                                    |
| DELETE | `/users/:userId`        | owners, supervisors |                                                    |

# Data Model

#### CLIENT

---

```
{
  id: UUID
  first_name: STRING
  last_name: STRING
  email: STRING
  profile_pic_id: STRING
  created_at: TIMESTAMP
  height: INTEGER
  sex: STRING
  gender: STRING
  med_list: TEXT
}
```

#### USERS

---

```
{
  id: UUID
  organization_id: UUID foreign key in ORGANIZATIONS table
  first_name: STRING
  last_name: STRING
  role: STRING [ 'owner', 'supervisor', 'employee' ]
  email: STRING
  phone: STRING
  cal_visit: BOOLEAN
  emp_visit: BOOLEAN
  emailpref: BOOLEAN
  phonepref: BOOLEAN
}
```

## Actions

🚫 This is an example, replace this with the actions that pertain to your backend

`getOrgs()` -> Returns all organizations

`getOrg(orgId)` -> Returns a single organization by ID

`addOrg(org)` -> Returns the created org

`updateOrg(orgId)` -> Update an organization by ID

`deleteOrg(orgId)` -> Delete an organization by ID
<br>
<br>
<br>
`getUsers(orgId)` -> if no param all users

`getUser(userId)` -> Returns a single user by user ID

`addUser(user object)` --> Creates a new user and returns that user. Also creates 7 availabilities defaulted to hours of operation for their organization.

`updateUser(userId, changes object)` -> Updates a single user by ID.

`deleteUser(userId)` -> deletes everything dependent on the user

## Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:

🚫 These are just examples, replace them with the specifics for your app

_ STAGING_DB - optional development db for using functionality not available in SQLite
_ NODE\*ENV - set to "development" until ready for "production"

- JWT*SECRET - you can generate this by using a python shell and running import random''.join([random.SystemRandom().choice('abcdefghijklmnopqrstuvwxyz0123456789!@#\$%^&amp;*(-_=+)') for i in range(50)])
  _ SENDGRID_API_KEY - this is generated in your Sendgrid account \* stripe_secret - this is generated in the Stripe dashboard

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Frontend Documentation](🚫link to your frontend readme here) for details on the fronend of our project.
🚫 Add DS iOS and/or Andriod links here if applicable.
