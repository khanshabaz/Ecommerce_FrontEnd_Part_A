

export function fetchAllProductsByFilter(filter, sort, pagination) {
  //filter={"category":["beauty","laptops"]}
  //sort={_sort:"price",_order:"desc"};
  //pagination={_page:1,_per_page:10}

  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
    
      queryString += `${key}=${categoryValues}&`; //category=beauty&
    }
  }

  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`; //_sort=rating&_order=desc
  }

  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`; //_page=2&_per_page=10
  }
  return new Promise(async (resolve) => {
    const response = await fetch(
      `/products?` + queryString
    );
    
    const data = await response.json();
    const totalItems = await response.headers.get("X-Total-Count")
    resolve({ data: { products: data, totalItems: +totalItems } });
  });
}

export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch("/products/"+id);
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchAllCategories() {
  return new Promise(async (resolve) => {
    const response = await fetch("/categories");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchAllBrands() {
  return new Promise(async (resolve) => {
    const response = await fetch("/brands");
    const data = await response.json();
    resolve({ data });
  });
}


export function createProduct(product) {
  return new Promise(async (resolve) =>{
    const response = await fetch('/products/',{
      method:"POST",
      body:JSON.stringify(product),
      headers:{'content-type':'application/json'},
    }) 
    const data = await response.json()
    resolve({data})
  }
  );
}



export function updateProduct(update) {
  return new Promise(async (resolve) =>{
    const response = await fetch('/products/'+update.id,{
      method:"PATCH",
      body:JSON.stringify(update),
      headers:{'content-type':'application/json'},
    }) 
    const data = await response.json()
    resolve({data})
  }
  );
}