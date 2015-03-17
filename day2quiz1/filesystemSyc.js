var fileMessage = 'Lorem Ipsum is simply dummy text of the printing';
var fs = require('fs');
var path = '';  // Current working directory.
var fileName = 'synchronousLipsum.txt';
var fullFilePath = path + fileName;

if (fs.existsSync(fullFilePath)) {
    fs.unlink(fullFilePath, function (err) {
        if (err) response.errors.push("Erorr : " + err);
        console.log('successfully deleted : '+ fullFilePath );
    });
}

fs.writeFile('synchronousLipsum.txt', fileMessage, function (err) {
    if (err) throw err;
    console.log('It\'s saved!');
});

fs.readFile('synchronousLipsum.txt', function (err, data) {
    if (err) throw err;
    console.log(data);
});