/////////////////////////
// DEPENDENCIES
/////////////////////////
require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const mongoose = require('mongoose')
const port = process.env.PORT || 8000;
const database = require("./database");

const taskRouter = require("./routes/api/tasks");
const userRouter = require("./routes/api/users");
const workspaceRouter = require("./routes/api/workspaces.js");

/////////////////////////
// The Application Object
/////////////////////////
const app = express();

/////////////////////////
// MIDDLEWARE
/////////////////////////
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

/////////////////////////
// Routers
/////////////////////////
// url endpoints for us to communicate with our API
app.use("/api/tasks", taskRouter);
// app.use('/api/users', userRouter)
app.use("/api/workspaces", workspaceRouter);

/////////////////////////
// API Endpoints
/////////////////////////
// database like .findById() CRUD operations
// test route that sends some json data to make sure server is working
app.get("/", async (req, res) => {
	try {
		res.redirect("/api");
	} catch (err) {
		res.status(400).json(err);
	}
});

app.get("/api", async (req, res) => {
	try {
		res.status(200).json(
			await {
				response: "Welcome to Git It Done's API",
				instructions:
					"Use the routes below to get specific data. This API will have 3 routers, and includes full CRUD operations as well as robust database queries. All api URLs take in :id params at the end as well as additional parameters. See the raw code in /routes/api for more URLs and parameters",
				users: "NOT CURRENTLY FUNCTIONAL. /api/users - returns an array of all users",
				workspaces: "/api/workspaces - returns as array of all workspaces",
				tasks: "/api/tasks - returns as array of all tasks",
				tasksInSpecificWorkspace: "/api/workspaces/:id/alltasks",
			}
		);
	} catch (err) {
		res.status(400).json(err);
	}
});

// used to sync database info with frontend
// app.get('/sync', (req, res) => {
//     Task.find((err, data) => {
//         if (err) {
//             res.status(500).send(err)
//         } else {
//             res.status(200).send(data)
//         }
//     })
// })

function databaseConnection() {
	/////////////////////////
	// Database
	/////////////////////////
	database.connectDB();
	/////////////////////////
	// Listener
	/////////////////////////
	app.listen(port, () => {
		console.log(`the backend server is running on port ${port}`);
	});
}
databaseConnection();
