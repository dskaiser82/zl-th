# What Can You Make

-- Added Typescript to front-end
-- Updated packages and compllers as needed to support typescript
-- Upodated store to use newer configureStore where thunk middleware is included by default
-- Added React Router for front-end, and included historyApiFallback to webpack config for react routes to not conflict with node routes (if node doesn't find a route fallback to index.html where react router will handle the route)

TODO Next
Recipe Card
Whgich links oiut to /recipe/detai;

> > New Back-end needed

## Installation

Run:

    yarn

This will install all packages and get it ready to start.

## Development

To bring up locally run:

    yarn start

This will start the backend, run webpack, and handle request proxying for the front end.

Navigate to [localhost:3000](http://localhost:3000) to see the frontend running!

## working on the frontend

navigate to `/frontend` in your `editor`, all of the code lives in the `src/` folder.

## working on the backend

navigate to `/backend` in your `editor`, all of the code lives in the `src/` folder.

## vs code

if using vs code, [follow this](https://yarnpkg.com/getting-started/editor-sdks/#vscode) to get the dev env _juuuuuust_ **right**.

### debug

head to the `RUN` tab (the play button w/ a bug) and select `debug` and hit play. this will auto attach the node debugger in vsc to the backend for you.

## Bonus (one of)

1. add ci/cd using travis, circleCI, etc...
1. containerize the application
1. add deployments using heroku, digital ocean, etc...
1. add integration tests using puppeteer, webdriver, playwright, etc...
