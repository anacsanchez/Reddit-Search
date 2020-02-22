## Reddit  Search

A web app that connects to the Reddit API to display the newest search results based on user input.

## Built with:
* React - UI
* Node.js - Server
* [markdown-to-jsx](https://github.com/probablyup/markdown-to-jsx) - render markdown in Reddit posts

## Link
[https://anacsanchez.com/reddit-search](https://anacsanchez.com/reddit-search)

## Features

* Expand/collapse content on-click.
* Loading statuses and a Javascript fallback.
* Spoiler warning preview text.

## Installation

You can run this app with npm or Docker.

### Instructions: Docker

To run this container you'll need Docker installed:

* [Docker Website](https://docs.docker.com/get-docker/)

In a terminal, clone this repo and enter the directory.

1. Enter this command:
```
docker build .
```
2. Wait for the build process to complete.

3. Copy the image tag that appears in the final '**Successfully built**' message.

4. Enter the following command but replace **IMAGE_TAG** with the image tag you copied in the last step.

```
docker container run --publish 6060:6060 -d --name reddit-search IMAGE_TAG
```

The site will be running on http://localhost:6060

### Instructions: npm

1. Clone this repo and enter the project directory.

2. Enter the following command:
```
npm install
```
3a. To run in production:
```
npm run start
```
3b. To run in development:
```
npm run start-dev
```

The app will be running on localhost:6060 by default.

