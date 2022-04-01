//INSTALAR
//npm install qrcode-reader jimp

var Jimp = require("jimp");
var fs = require('fs')
var qrCode = require('qrcode-reader');

// Read the image and create a buffer
// (Here image.png is our QR code)
var buffer = fs.readFileSync(__dirname + '/image.png');

// Parse the image using Jimp.read() method
const read = (err, image)=>{
    if (err) {
        console.error(err);
    }
    // Creating an instance of qrcode-reader module
    let qrcode = new qrCode();
    qrcode.callback = function(err, value) {
        if (err) {
            console.error(err);
        }
        // Printing the decrypted value
        console.log(value.result);
        return value.result
    };
    // Decoding the QR code
    qrcode.decode(image.bitmap);
}

Jimp.read(buffer, read);
