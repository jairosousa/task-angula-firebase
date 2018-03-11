// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBT_5E2cgmX6KQGHuD8G9Jl4mxcH-kgCAE",
    authDomain: "jns-angular-task.firebaseapp.com",
    databaseURL: "https://jns-angular-task.firebaseio.com",
    projectId: "jns-angular-task",
    storageBucket: "jns-angular-task.appspot.com",
    messagingSenderId: "125202477856"
  }
};
