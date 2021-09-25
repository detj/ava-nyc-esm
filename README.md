# ava nyc es module issue

A minimal reproduction for the issue [nyc#1353](https://github.com/istanbuljs/nyc/issues/1353) that [nyc](https://github.com/istanbuljs/nyc) doesn't seem to instrument ES module code as expected.

## How to use

After cloning the project, run these commands to reproduce:

1. `npm install`
2. `npm run test`

At this point, you will see the following output.

```
  2 tests passed
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |       0 |        0 |       0 |       0 |
----------|---------|----------|---------|---------|-------------------
```

## Environment

Original reproduction environment.

```
node@14.17.6
nyc@15.1.0
ava@3.15.0
```
