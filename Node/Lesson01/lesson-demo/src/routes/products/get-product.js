const fs = require('fs');
const path = require('path');
const products = path.resolve(__dirname, `../../db/products.json`);


const getProduct = (req, res) => {

    console.log(123);
    const image = fs.statSync(products);

    res.writeHead(200, {
        'Content-Type': 'text/javascript',
        'Content-Length': products
    });
    const readStream = fs.createReadStream(products);

    readStream.pipe(res);

};

module.exports = getProduct;