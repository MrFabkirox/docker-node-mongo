const express = require('express')
const app = express()

app.get('/', (req, res) => {
  try {

    console.log('res, simplefastapps / docker-node-mongo')
    console.log('__1_______________________________')
    console.log(res)
    console.log('__2_______________________________')
    console.log('res, simplefastapps / docker-node-mongo')

    res.send('simplefastapps / docker-node-mongo')

  } catch (err) {

    console.log('err, simplefastapps / docker-node-mongo')
    console.log('__3_______________________________')
    console.log(err)
    console.log('__4_______________________________')
    console.log('err, simplefastapps / docker-node-mongo')

  }
})
// const port = 3000
const port = process.env.PORT || 3000

app.listen(port, () => console.log('server running on 3000'))