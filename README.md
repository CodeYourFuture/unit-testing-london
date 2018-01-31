# unit-testing

## Before you start

### Forking & cloning
First step is to `fork` this repo to your account, then `clone` it locally.

After you do that, [`add a remote`](https://help.github.com/articles/adding-a-remote/) to point to CodeYourFuture repo, that will allow you to update you forked copy when we update the repo with more exercises.


Example command:
`git remote add cyf git@github.com:CodeYourFuture/unit-testing-london.git`

### Installing

Run `npm install`

## How to run the tests
To run the tests from the console, run the command: `npm test`.

To keep the tests running (auto updating when you save files), run the command: `npm test -- --watch` then press `a` to run all the tests and keep watching the files for changes. To quit the tests, type `q`.

## Exercises

Run `npm test -- --watch`.

You should have lots of failing tests. Implement each function in `src/functions.js` so all the unit tests pass when you run `npm test`.

## Tips
 - Don't copy and paste code. Write all code from beginning and make sure you understand what each line does.
 - If you are not sure what a method or function does Google it. `MDN` and `Stack Overflow` are great resources.
 - User the debugger to step through code execution and see what each line does if you are not sure.
