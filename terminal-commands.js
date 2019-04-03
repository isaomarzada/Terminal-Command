const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = (fileName) => {
  fs.writeFile(fileName, 'Message',(err) => {
    if (err){
      return console.log(`you have an error: ${err}`);
    }
    console.log(fileName + ' was created');
  });
};

module.exports.mkdir = (dir) => {
fs.mkdir(dir, (err) => {
  if (err) {
    return console.log(`You have an error: ${err}`);
  }
  console.log(`The directory ${dir} was created`);
 });
};
