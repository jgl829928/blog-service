const mongoose = require ('mongoose');

let url = 'mongodb://127.0.0.1:27017/blog';
mongoose.connect (url, {
    user: '',
    pass: '',
    useNewUrlParser: true
});

mongoose.connection.on ('connected', function (s) {
    console.log ('连接到mongodb成功');
});
mongoose.connection.on ('error', function (e) {
    console.log (e);
});

module.exports = mongoose;