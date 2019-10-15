const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');
    console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.writeFile('newfile.txt', 'Add some text!', (err) => {
    if (err) {
      return console.error(err);
    }
    console.log("File saved");
  });
};


module.exports.mkdir = () => {
  fs.mkdir('./newfolder', (err) => {
    if (err) {
      return console.error(err);
    }
    console.log("Folder created");
  });
};
