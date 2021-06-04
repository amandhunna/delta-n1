**To run app**

- firstly do `npm i`

- Create a file Keys.js which contains all the API Keys and essential config info.

then

- to run in development and main app mode run `npm run dev`
- to run in development and test components mode run `npm run testComponent`
  else run `npm start`

**Folder Structure**

client (react app)
|
+-- src
| |
| +-- Keys ( Stores all the Important API keys, config data - which is not to be exposed to the user)
| |
| +-- config (to include all configrations of the app based on its environmet)
| | +-- main.js (include core config of the app
| | +-- addon configs you can add here
| |
| +-- constants (this keeps the keys that are dependant on the backend or value that should remain consistant accross the platform like ROLES)
| | +-- main.js (include core contants of the app
| | +-- addon configs you can add here
| |
| +-- context (includes the context of react pages/components)
| | +-- GlobalContext.js ( declare global context of app)
| | +-- addon context you can add here
| |
| +-- helper (contain util function)
| | +-- BaseHelper.js (a class of util methods)
| | +-- addon helpers you can add here
| |
| +-- pages (this includes view pages of our app
| | +-- Login
| | | +-- Login.js
| | | +-- context.js (if required, in case of complex onboarding)
| | | +-- helper.js ( extending helper/BaseHelper)
| | | +-- login.css (if css required and using bootstrap)
| | | +-- loginStyle.js (if css required and using style components)
| | | +-- index.js (exporting wholde component)
| | |
| | +-- Cart page (follow the login page directory stucture)
| | +-- Edit profile page (follow the login page directory stucture)
| |
| +-- App.css (includes general css which is consistant throughout the app and need be cached)
| +-- index.css (includes normalize css, not sure is it required if using bootrap )
| |
| +-- logger.js (includes proxy based console, helpful to toggle consoles in production)
| |
| +-- TestComponent.js (a special file where we can build and test components)
| +-- App.js (entry point of application)
| |
| +-- App.test.js (for future use)
| +-- reportWebVitals.js (for future use)
| +-- setUpTest.js (for future use)
|
+-- .gitignore
+-- package-lock.json
+-- package.json
+-- README.md

```

```
