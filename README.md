# Deno.js

## What is Deno?

Deno is a JavaScript Runtime based on Chrome's V8 JavaScript Engine, which allows you to run JavaScript outside of the browswer.

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

## Install

Homepage and Instructions: https://deno.land

### Install with Homebrew (MacOS)

    $ brew install deno
