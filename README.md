# dungeon-run-test
This is being used to test out react jest and enzyme, and used for learning how to test and use various enzyme commands such as shallow.

- npm install
- npm run dev-server

for testing
- npm run jest-test

http://localhost:8080/

gotchas to watch out for
- make sure that the react-test-renderer runs the same version as the react you are using or you will get instabilities 
- create-react-app seems to be more stringent on what it allows for file structure so use base jest command
- if there is an argument about enzyme adapter not being available, note the setupTests.js in tests folder as well as the setupFiles param in package.json
- to go with the above also note the collectCoverageFrom param in package json for where the tests live.  I prefer the tests living separately from the use files.