# Git It Done - Backend

### *created for General Assembly's SEI Course*

full-stack workflow & project management web application, built by [Asher Schulman](https://github.com/asher-schulman), [Peiyi Shi](https://github.com/pys12 ), and [Handsome Vang](https://github.com/handwidhtv8) as a group project for General Assembly's Full-Stack Software Engineering Bootcamp.
***
**Problem:** unable to keep track of to-do work when it involves multiple people. tracking work and smaller parts of a larger process become almost impossible, with back to back to back emails and calls to revise and get information on what is done/need to be done. a need for asyncronouse workflows and communication beyond emails

**Solution:** create an app that allows users to sign up and create "workspaces" where they can add other users to collaborate in the sam workspace. the base functionality will be workspaces where any user in said workspace can perform CRUD operations on to-do items created in said workspace.

**Stack Used:** MERN (MongoDB, Express, React.js, & Node.js)

[Frontend Application](https://asher-schulman.github.io/git-it-done/) |
[Backend & API](https://git-it-done-backend.cyclic.app/api) |
[Figma Wireframes](https://www.figma.com/file/miNyJ54BnuxIeKtkcWINQd/Git-It-Done?node-id=0%3A1)
* * *
## Requirements
1. List itembuild a full-stack MERN application
2. 	List itemone of the following 3
	- authorization sign-up/login functionality and authorization flow
	- pull from a third party API (either client-side or server-side)
	- have 2+ models
	- have related models
3. List itemdeploy via heroku
4. List itemcommits made frequently by all group members, and a way to track progress group workflow
5. List iteminclude a README.md file with summary of project and tech stack used, problems, user stories, notes, etc
* * *
## Features
- Login with Google
- Fully functional CRUD app for Workspaces
- Ability to CRUD Tasks within Workspaces
- Able to set statuses for Workspaces, that then coorespond to Tasks
- Search bar to query for Tasks
* * *
## Future Features
- Full User authentication, taking the Google User and writing that User to our DB, offering a creation of Users in our Database to connect workspaces and tasks to
- More fields for tasks and workspaces, flagging and statuses overhaul
- Ability to display your username or userId, and invite by username/id to workspaces to allow for collaboration (this has to be done manually for now)
- Drag-and-drop features to allow for quicker movement of tasks to different statuses and/or workspaces
* * *
## Challenges: Next Time...
- Working with Git was difficult. We ended up creating branches for each member as well as a master branch. Each group member was then able to work and when done with a feature, push up to their own branch. We could then do a pull request between a group member's branch and the master branch during meetings, and keep a really clean and working master branch. We messed up a few times, but having some kind of git cheatsheet was valuable.
- KISS. The more we do start to finish projects, the more we wish we would've sat with ideas or whiteboarding longer before jumping into the code. We had some complexity creep, and could have done a much better job at defining what our MVP was and working towards only that. We got excited for features and started working on things before baseline features were complete.
- Working together was tough for communication and workflow. This was the first time all of us were using github for a group project, so there were times multiple of us were working on the same code, not knowingthe other group member was doing the same thing.
- Authentication. We ended up having to semi put this on hold. We are able to login with Google in the front end with local storage. That's how the app know to only show workspaces and tasks that you own. However, we were'nt able to fully complete the User login lifecycle. We'd like to implement a signup/login that cheack for/creates a new User model in our database that writes google login data to our database. Then when people login, it's actually attaching everything to a User in the database.
