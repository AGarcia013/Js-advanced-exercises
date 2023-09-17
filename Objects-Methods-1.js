const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}
for (let key of Object.keys(person)) {
  let value = key + "/" + person[key]
  console.log(value)
}

// Print values of person using Object.keys