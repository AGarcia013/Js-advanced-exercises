const order = {
  customer:{
    name: "Alex",
    adress: {
      street: "C/ Azucena",
      
    }
  }
};

//if (order && order.customer && order.customer.address && !order.customer.address.city) {
 // console.log('City is required');
//}

if (!order?.customer?.adress?.city){
console.log("City is required")} else {
console.log(order.customer.adress["city"])
}

// Así, si city no está definida, devuelve City is required, si city está definida, imprime el valor de city.
