# Deno.js

## What is Deno?

Deno is a JavaScript Runtime based on Chrome's V8 JavaScript Engine, which allows you to run JavaScript outside of the browser.

- Deno supports JavaScript and TypeScript
- Deno supports URL imports and modern JavaScript features (eg. Promises)
- Deno is "secure by default" and requires explicit execution permissions

## Pros and Cons - Deno vs Node

### Node

- CON: Only JavaScript, modern JS features are missing, custom module system, no script permissions
- PRO: Established, highly active ecosystem, used by thousands of (big) companies, huge base of maintainers, production-proven

### Deno

- CON: Pretty new, small ecosystem, not used in production by major companies yet, smaller base of maintainers, not really used in production yet
- PRO: TypeScript support, modern JS features, URL imports, script permissions

### Conclusion

If you don't need all the Deno enhancements, use Node

## Basics

Homepage and Instructions: https://deno.land

### Install with Homebrew (MacOS)

    $ brew install deno

Check Install:

    $ deno --version

### Deno REPL

    $ deno

### Run a File

    $ deno run <filename>

Re-fetch remote files with reload:

    $ deno run --reload <filename>

### VSCode Support

Download extension: Deno from denoland

You must enable Deno on a project level, so add a .vscode/settings.json to your main project directory enabling it:

    {
        "deno.enable": true,
    }

### Permissions - Secure by Default

Give Deno permissions by adding flags.

For example, give Deno permission to write a file:

    $ deno run --allow-write <filename>

For example, give Deno permission to write a specific file:

    $ deno run --allow-write=<filename_to_write_to> <filename_to_run>

For example, give Deno permission to read a file:

    $ deno run --allow-read <filename>

## Deno Core, Standard Library and Third Party

### Deno Namespace APIs

- stable and maintained by Core Team
- built-into Deno, no installation or imports required
- only a small set of low-level core functionalities
- Example: Deno.writeFile()
- https://doc.deno.land/builtin/stable

### Standard Library

- unstable and maintained by Core Team
- needs to be imported into scripts to be used
- builds up on core, low-level functionalities to provide easier-to-use functionalities
- https://deno.land/std@0.77.0

### 3rd Party Libraries

- stability differs and maintained by community teams
- needs to be imported into scripts to be used
- builds up on core, low-level functionalities to provide easier-to-use functionalities
- https://deno.land/x

## Deploy to Heroku

1.  Create a Procfile with the following:

        web: deno run --allow-net --allow-write --allow-read --allow-plugin --allow-env --unstable --no-check app.ts

2.  On the Heroku Dashboard, create a new application
3.  On the new application, go to the Settings page
4.  Click the Add buildpack button
5.  Enter the following URL in the input box:

        https://github.com/chibat/heroku-buildpack-deno.git

6.  Add your environment variables to under Settings -> Config Vars

7.  Log in to heroku

        $ heroku login

8.  Initialize Heroku git with your app

        $ heroku git:remote -a <your-app-name>

9.  Commit your code

        $ git add .
        $ git commit -am 'commit message'
        $ git push heroku master

10. Logs for server

        $ heroku logs --tail
