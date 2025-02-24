

export function fetchAllProductsByFilter(filter, sort, pagination) {
  //filter={"category":["beauty","laptops"]}
  //sort={_sort:"price",_order:"desc"};
  //pagination={_page:1,_per_page:10}

  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`; //category=beauty&
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
      `http://localhost:8080/products?` + queryString
    );
    const products = await response.json();
    const data = products.data;
    const totalItems = 102;
    resolve({ data: { products: data, totalItems: +totalItems } });
  });
}

export function fetchProductById(id) {
  console.log(id)
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products/"+id);
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchAllCategories() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/categories");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchAllBrands() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/brands");
    const data = await response.json();
    resolve({ data });
  });
}


export function createProduct(product) {
  console.log(product)
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/products/',{
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
    const response = await fetch('http://localhost:8080/products/'+update.id,{
      method:"PATCH",
      body:JSON.stringify(update),
      headers:{'content-type':'application/json'},
    }) 
    const data = await response.json()
    resolve({data})
  }
  );
}