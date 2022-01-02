# IT Logger API

This API/Server is built using following **MERN** Skills:-

1. [Nodejs](https://nodejs.org/en/) - **Node.js®** is a JavaScript runtime built on Chrome's V8 JavaScript engine.

2. [Expressjs](http://expressjs.com/) - **Express** is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

3. [MongoDB](https://www.mongodb.com/) - Whether you’re pushing the boundaries of customer experience or building mission-critical applications, **MongoDB** is the data foundation for any industry.

4. [Expressjs Validtor](https://express-validator.github.io/docs/) - **Express-validator** is a set of express.js middlewares that wraps validator.js validator and sanitizer functions.

5. [Config](https://www.npmjs.com/package/config) - **Config** lets you define a set of default parameters, and extend them for different deployment environments (development, qa, staging, production, etc.).

It is a Node/Express/MongoDB REST API for Logs that will also use JWT authentication.

It is the API ONLY. The fullstack app will be available soon.

## Getting Started

```
  Open the config/default.json file and add your mongoURI.
```

```bash
  npm install
  npm run server # Runs on http://localhost:5000
```

# API Usage & Endpoints

## Register a User [POST /api/users]

- Request: Add user and request JSON web token

  - Headers

        Content-type: application/json

  - Body

            {
              "name": "",
              "email": "",
              "password": ""
            }

- Response: 200 (application/json)

  - Body

          {
            "token": ""
          }

## Get Logs [GET /api/Logs]

- Request: Get all Logs from the database.

  - Headers

* Response: 200 (application/json)

  - Body

          {
            "Logs": []
          }

## Add New Log [POST /api/Logs]

- Request: Create a new Log

  - Headers

        Content-type: application/json

  - Body

            {
              "name": "",
              "log": "",
              "priority": "" [normal or medium or high]
            }

- Response: 200 (application/json)

  - Body

          {
            "Log": {}
          }

## Update Log [PUT /api/Logs/:id]

- Request: Update existing Log

  - Parameters

    - id: 1 (number) - An unique identifier of the Log.

  - Headers

        Content-type: application/json

  - Body

            {
              "name": "",
              "log": "",
              "priority": "" [normal or medium or high]
            }

- Response: 200 (application/json)

  - Body

          {
            "Log": {}
          }

## Delete Logs [DELETE /api/logs/:id]

- Request: Delete existing log

  - Parameters

    - id: 1 (number) - An unique identifier of the log.

  - Headers

        {}

* Response: 200 (application/json)

  - Body

          {
            "msg": "Log has been Deleted."
          }
