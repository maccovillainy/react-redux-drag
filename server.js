let express = require('express');
express()
  .use(express.static(__dirname + '/public'))
    .get('*', (req, res) => {
      res.sendFile(__dirname + '/public/index.html');
    })
      .listen(8080, ()=>console.log(8080));