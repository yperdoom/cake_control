const api = require('./routes');

api.listen(4004, () => {
  console.log('server up with port 4004')
});