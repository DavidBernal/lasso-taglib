require('marko/node-require').install();

var fs = require('fs');
var path = require('path');
var lasso = require('lasso');
var template = require('./src/index.marko');

lasso.configure('lasso-config.json');

var buildDir = path.join(__dirname, 'build');

try {
    fs.mkdirSync(buildDir);
} catch(e) {}

var outputHtmlFile = path.join(buildDir, 'index.html');

var out = fs.createWriteStream(outputHtmlFile, {encoding: 'utf8'})
    .on('close', function() {
        console.log(`HTML page successfully written to "${outputHtmlFile}"!`);
    });

template.render({}, out);
