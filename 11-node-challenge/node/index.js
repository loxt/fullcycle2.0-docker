const express = require('express')
const app = express()
const mysql = require('mysql')
const faker = require('faker')

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'fullcycle',
})

connection.query(`INSERT INTO peoples (name)
                  VALUES ('${faker.name.findName()}')`)

app.get('/', (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' })
  response.write('<h1>Full Cycle Rocks!</h1>')

  connection.query(`INSERT INTO peoples (name)
                    VALUES ('${faker.name.findName()}')`)

  connection.query('select * from peoples', function (err, rows) {
    for (let i = 0; i < rows.length; i++) {
      const peopleName = rows[i].name
      response.write(`- ${peopleName}<br/>`)
    }
    response.end()
  })

})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
