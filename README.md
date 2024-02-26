# What Can You Make

## Post Send Updates
- Bump the styled-components version to current version
- Add light mode /  dark mode via Styled compoments Theme Provider and Redux state
- Add css variables from Zeal site
- Create Top Nav to "mimic" Zeal's Top Nav and Add a Theme Button to toggle the theme
- Style pages to utilize new dark/light theme and theme variables

![zeal-th-update](https://github.com/dskaiser82/zl-th/assets/1254851/482c2304-d917-42ff-9dad-6975e5dd5c25)


Note: reviewers be sure to yarn install as packages have been updated

## Enhancements and Features

## Enhancements

- **TypeScript Integration**: Transitioned the front-end codebase to TypeScript to leverage strong typing and improve code maintainability.

- **Dependency Updates**: Upgraded various packages and compilers to ensure compatibility with TypeScript and to streamline development workflows.

- **Store Configuration**: Adopted `configureStore` from Redux Toolkit for our state management needs, which includes Thunk middleware out-of-the-box.

- **Routing**: Integrated React Router for enhanced front-end navigation. Also included `historyApiFallback` in the webpack configuration to handle potential routing conflicts between Node.js and React Router.

- **Database Seeding**: Improved the database seeding process to remove duplicate ingredients, maintaining data integrity and uniformity.

## Features

- **Home Page**: Fixed search functionality, enabling users to search for recipes by name or ingredients. Added Card component to see recipes.

- **Recipe Details**: Implemented the ability to retrieve recipes by a unique ID, providing detailed views for each recipe.

## Caveats

- **TypeScript Adoption**: Some parts of the codebase may still need further typing and refinement.

- **CSS**: We used styled-components, but also had inline css for this demo. In a Prod codebase, we would likely keep inline styles to a min.

## Screen Capture

  ![zl-th-demo](https://github.com/dskaiser82/zl-th/assets/1254851/559d1968-3b9d-4db3-810c-58bd2cfbb2e0)






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
