var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


var dbUrl = 'mongodb://172.17.0.3:27017/chat'; // modify your ip/port
mongoose.connect(dbUrl , (err) => { 
   console.log('mongodb connected',err);
});
var Message = mongoose.model('Message',{ name : String, message : String});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(__dirname));
http.listen(80, () => {
  console.log('server is running on port', http.address().port);
});

io.on('connection', function(socket) {
 console.log('a user is connected');
});

app.get('/messages', (req, res) => {
  console.log('http get received.');
  Message.find({},(err, messages)=> {
    res.send(messages);
  }).sort({_id:-1}).limit(5);
});
app.post('/messages', (req, res) => {
  console.log('http post received.');  
  var message = new Message(req.body);
  message.save((err) =>{
    if(err)
      sendStatus(500);
    io.emit('message', req.body);
    res.sendStatus(200);
  })
});
