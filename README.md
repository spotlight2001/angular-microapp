# Micro Apps with Web Components and Angular Elements

This example consists of three Angular projects that demonstrate how to use Web Components/ Angular Elements to implement a shell that loads micro apps:

- **shell (/src):** Shell loading micro apps
- **client-a (/projects/client-a)**: Demo micro app
- **client-b (/projects/client-b)**: Another demo micro app

## Install Dependencies

```
npm install
```

## Everything together

on development:

```
npm run shell
npm run client-a
npm run client-b
```

in browser:
```
http://localhost:8200
```

with standalone server:
```
npm run build
npm start
```


# Open issues?

## Debugging

In "serve" mode, how can I include js.map

## JWT

How to create a securityContext in web component to use the JWT without manual handover

Will the cookie be used in PA environment?

How to deal with that on localhost? static JWT? (on FTZ/DEV expired JWTs are ok)

# History

## Angular Update v6 -> v7

```
npx ng update @angular/cli@v7-lts @angular/core@v7-lts @angular-extensions/elements@7x-versions
```

## Update ngx-build-plus from v1.1.0 -> angular 7 compatible version

remove ngx-build-plus from package.json, delete node_modules

```
npx ng add ngx-build-plus@^7
```

```
npx ng add @angular-devkit/build-angular@v7-lts
```

update failed for me


npm ls ...
