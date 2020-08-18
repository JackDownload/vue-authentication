const Cosmic = require('cosmicjs')();
const database = Cosmic.bucket({
  slug: 'cosmic-vueauth',
  // write_key: process.env.WRITE_KEY,
  // read_key: process.env.READ_KEY
  write_key: 'O0zDl8qTcS4ane0vZc62Y5II6B6CZz8Ug8YLTHs3fZ9q0Xe63W',
  read_key: '38gh1AVyiCu8SiL2jP9Jo6j2Zogn4QI1tId6ttaXfvqVdsPqQM'
})

module.exports = database
