const db = require('./database')

const Query = {
  persons: () => db.persons
}

const Person = {
  posts: (person) => db.posts.filter(p => p.userID === person.id)
}

module.exports = {
  Query,
  Person
}