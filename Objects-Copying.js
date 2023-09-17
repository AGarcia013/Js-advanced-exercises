const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = "Simon"
// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);

// En javascript cuando estableces que un objeto es igual a otro, estás haciendo una copia del objeto que apunta al mismo punto de la memoria.
//Estas creando una referencia al mismo objeto, cuando modificas algo dentro de cualquiera de los dos, se modifica en el punto de la memoria al que ambos apuntan.
