# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

- install Docker
- verify that Docker is ready by running the following commands:

```
docker -v
docker-compose -v
```

- run the following command from your project root directory to start applications:

```
docker-compose up
```

- verify that backend is up and running by going to this url in your browser:
  http://localhost:3000/api/ping

- verify that frontend is up and running by going to this url http://localhost:3001/register and create user account
