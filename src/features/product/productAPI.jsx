export function fetchAllProducts() {
    return new Promise(async (resolve) =>{
      const response = await fetch('http://localhost:8080/products') 
      const data = await response.json()
      resolve({data})
    }
    );
  }


  export function fetchAllProductsByFilter({filter}) {
    console.log(filter)
    return new Promise(async (resolve) =>{
      const response = await fetch('http://localhost:8080/products?category=furniture') 
      const data = await response.json()
      resolve({data})
    }
    );
  }




  export function fetchAllCategories() {
    return new Promise(async (resolve) =>{
      const response = await fetch('http://localhost:8080/categories') 
      const data = await response.json()
      resolve({data})
    }
    );
  }


  export function fetchAllBrands() {
    return new Promise(async (resolve) =>{
      const response = await fetch('http://localhost:8080/brands') 
      const data = await response.json()
      resolve({data})
    }
    );
  }