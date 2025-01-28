// export function fetchAllProducts() {
//   return new Promise(async (resolve) => {
//     const response = await fetch("http://localhost:8080/products");
//     const data = await response.json();
//     resolve({ data });
//   });
// }

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
    const totalItems = 100;
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
