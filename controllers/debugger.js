//debugger

const config = require('../config.js');
const fs = require('fs');
const colors = require('colors/safe');
const endOfLine = require('os').EOL;

const controller = {};

const typeToColor = {
  error: 'red', //error color is red
  warning: 'yellow',//warning is yellow
  normal: 'grey',// normal is grey
};

const isDebugEnv = process.env.DEBUG === 'true';

controller.debug = function (type, text) {
  const color = typeToColor[type];
  const coloredOutput = colors[color](text);

  if (isDebugEnv) {
    console.log(coloredOutput);
  }

  fs.appendFile(config.logFilePath, coloredOutput + endOfLine, (err) => {
    if (err) {
      console.log(colors[typeToColor.error](err));// log error, warning or normal
    }
  });
};

module.exports = controller;
