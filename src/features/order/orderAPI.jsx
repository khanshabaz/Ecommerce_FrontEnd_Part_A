export function createOrder(order) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/orders',{
      method:"POST",
      body:JSON.stringify(order),
      headers:{'content-type':'application/json'},
    }) 
    const data = await response.json()
    resolve({data})
  }
  );
}

export function fetchAllOrders(pagination) {

  //pagination={_page:1,_per_page:10}

  let queryString = "";
 
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`; 
  }
  return new Promise(async (resolve) => {
    const response = await fetch(
      `http://localhost:8080/orders?` + queryString
    );
    const orders = await response.json();
    const data = orders.data;
    const totalOrders = 10;
    resolve({ data: { orders: data, totalItems: +totalOrders } });
  });
}


export function updateOrder(order) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/orders/'+order.id,{
      method:"PATCH",
      body:JSON.stringify(order),
      headers:{'content-type':'application/json'},
    }) 
    const data = await response.json()
    resolve({data})
  }
  );
}