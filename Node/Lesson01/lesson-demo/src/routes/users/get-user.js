const fs = require('fs');
const path = require('path');

const usersPath = path.resolve(__dirname, '../../db/users.json');

const getUser = (req, res) => {
  fs.readFile(usersPath, (err, data) => {
    if (err) throw err;
    const users = JSON.parse(data);

    console.log(`users`, users);

    res.writeHead(200, {
      body: { users }
    });

    const readStream = fs.createReadStream(usersPath);

    readStream.pipe(res);
  });


};

module.exports = getUser;