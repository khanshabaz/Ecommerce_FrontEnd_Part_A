export function createOrder(order) {
  return new Promise(async (resolve) =>{
    const response = await fetch('/orders',{
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
      `/orders?` + queryString
    );
    const data = await response.json();
    const totalOrders = await response.headers.get("X-Total-Count");
    console.log(data);
    console.log(totalOrders);

    resolve({ data: { orders: data, totalOrders: +totalOrders } });
  });
}


export function updateOrder(order) {
  return new Promise(async (resolve) =>{
    const response = await fetch('/orders/'+order.id,{
      method:"PATCH",
      body:JSON.stringify(order),
      headers:{'content-type':'application/json'},
    }) 
    const data = await response.json()
    resolve({data})
  }
  );
}