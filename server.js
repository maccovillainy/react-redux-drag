let express = require('express');
express()
  .use(express.static(process.cwd() + '/public'))
  .get('*', (req, res) => {
    console.log('awdw')
    res.sendFile(process.cwd() + '/public/index.html')
})
  .listen(8080, ()=>console.log(8080));