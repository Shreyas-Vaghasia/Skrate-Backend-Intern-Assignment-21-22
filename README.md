# Skrate-Backend-Intern-Assignment-21-22

Libraries used :
express: Express is a fast and lightweight web framework for Node.js. Express is an essential part of the MERN stack.
mongoose: A Node.js framework which lets us access MongoDB in an object-oriented way.
# Usage
1.Fork the repo and then clone it or download it.

2.First install all dependencies:

# with npm
npm install

# or with yarn
yarn

3.Create a .env file and insert the following code. Replace values with yours!!
PORT=YOUR_PORT
MONGO_URI=YOUR MONGO_URI

4.Start the server
npm start [OR] yarn start
 
5.Now run the app

localhost:[PORT] (PORT=defined in .env)


# Examples of API calls
## 1. https://skrate-backend-assignment.herokuapp.com/users/all 
It returns a list of all Users with their UID as a JSON.
## 2. https://skrate-backend-assignment.herokuapp.com/users/new
It creates a new user when username is sent as json to the api and return UID as response
{
    "username":"shreyas123"
}

## 3.https://skrate-backend-assignment.herokuapp.com/meetings/all
Returns a list of all Meetings, with details of users involved & meeting UID.

## 4. https://skrate-backend-assignment.herokuapp.com/meetings/new
It accepts “uid1”, “uid2” & “date” as Body Parameters, and returns a Meeting UID on success.
{
    "uid1":"1",
    "uid2":"2",
    "date":"2016-05-18T16:00:00Z"
}
