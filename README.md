# react-redux-starter
basic webpack builder with react, redux, and babel in webpack config.  babel should have es2015, es6, and stage-2 in it.

run command: npm run dev-server

http://localhost:8080/

gulp is also added, currently there is a run sequencer installed, 
so in this case if you run
gulp build it will do the sass command and then copy index over.

note there are two commands used here.  npm run dev-server still handles the react.js specific things, and gulp build will handle the files and anything not to do specifically with react.