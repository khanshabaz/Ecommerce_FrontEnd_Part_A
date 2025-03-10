export function createUser(userData) {
    return new Promise(async (resolve) =>{
      const response = await fetch('/auth',{
        method:"POST",
        body:JSON.stringify(userData),
        headers:{'content-type':'application/json'},
      }) 
      const data = await response.json()
      resolve({data})
    }
    );
  }

  export function checkUser(loginInfo) {

    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginInfo), 
        });
  
        if (response.ok) {
          const data = await response.json();
          resolve({data});
        } else {
          const error = await response.text();
          reject(error);
        }
      } catch (error) {
        reject(error);
      }
    });
  }
  

  export function signOut() {
    return new Promise(async (resolve) =>{
      resolve({data:"success"});
    }
    );
  }
  
