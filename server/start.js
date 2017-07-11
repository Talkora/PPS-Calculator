'use strict'

const express = require('express');
const app = express();
const { resolve } = require('path');

// Create a basic server to serve the web application and bundle.js.
// This server runs in Node.js and uses the Express Library to serve up files.

// Serve up static files from ../public
app.use(express.static(resolve(__dirname, '..', 'public')))

// Serve up Materialize files
app.use('/materialize', express.static(resolve(__dirname, '..', 'node_modules/materialize-css/dist')))

// Serve up JQuery files
app.use('/jquery', express.static(resolve(__dirname, '..', 'node_modules/jquery/dist')))

// Serve up Font-awesome
app.use('/font-awesome', express.static(resolve(__dirname, '..', 'node_modules/font-awesome')))

// Serve up index.html on request
app.get('/*', (req, res) => {
  res.sendFile(resolve(__dirname, '../public/index.html'));
})

// Initial server listening on env port or 1337
const port = process.env.PORT || 1337;
app.listen(
  port,
  () => {
    console.log(`Now listening on port ${port}`);
  }
);
