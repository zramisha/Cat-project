const baseEndpoints = {
    auth: "/api/v1/auth",
    cats: "/api/v1/cats",
    users: "/api/v1/users"
  }
  
  
  
  
  
  export const mainApiEndpoints = {
      auth: {
          login: `${baseEndpoints.auth}/login`,
          register: "/register",
      },
      cats: {
          getAll: `${baseEndpoints.cats}`,
          createOne: `${baseEndpoints.cats}`,
          getOne: `${baseEndpoints.cats}`,
          deleteOne: `${baseEndpoints.cats}`,
          updateOne: `${baseEndpoints.cats}`
      },
      users: {
          createOne: `${baseEndpoints.users}`,
          getAll: `${baseEndpoints.users}`,
          getOne: `${baseEndpoints.users}`,
          deleteOne: `${baseEndpoints.users}`,
          updateOne: `${baseEndpoints.users}`,
          
      },
      
  }