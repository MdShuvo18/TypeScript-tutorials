interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: {
      street: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    company: {
      name: string;
      catchPhrase: string;
    };
  }
  
  const getRequest = async <T>(url: string, params?: Record<string, string>): Promise<T[]> => {
    try {
      const queryString = params ? '?' + new URLSearchParams(params).toString() : '';
      const res = await fetch(url + queryString, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.statusText}`);
      }
  
      const datas : T[] = await res.json();
      return datas;
      
    } catch (error) {
      console.error("Error in getRequest:", (error as Error).message);
      throw error; 
    }
  };
  
  // Way 1: Fetch without query parameters
  const getDatasWithoutParam = async () => {
    try {
      const users = await getRequest<User[]>("https://jsonplaceholder.typicode.com/users");
      console.log("Users (without params):", users);
    } catch (error) {
      console.error("Error fetching users without params:", (error as Error).message);
    }
  };
  
  // Way 2: Fetch with query parameters
  const getDatasWithParam = async () => {
    try {
      const params = {
        id: "1", // Query parameters must be strings
      };
      const users = await getRequest<User>("https://jsonplaceholder.typicode.com/users", params);
      console.log("Users (with params):", users);
    } catch (error) {
      console.error("Error fetching users with params:", (error as Error).message);
    }
  };
  
  // Execute both ways
  // getDatasWithoutParam();
//   getDatasWithParam();



//===========================without Record===================
const getRequest1 = async <T>(url: string, params?: { [key: string]: string }): Promise<T[]> => {
  try {
    // If params are provided, convert them to a query string using URLSearchParams
    const queryString = params ? '?' + new URLSearchParams(params).toString() : '';
    
    const res = await fetch(url + queryString, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const datas: T[] = await res.json();
    return datas;
    
  } catch (error) {
    console.error("Error in getRequest:", (error as Error).message);
    throw error;
  }
};

// Example of how to call it without Record
const getDatasWithParam1 = async () => {
  try {
    const params = {
      id: "1", // Query parameters must be strings
    };
    const users = await getRequest<User[]>("https://jsonplaceholder.typicode.com/users", params);
    console.log("Users (with params):", users);
  } catch (error) {
    console.error("Error fetching users with params:", (error as Error).message);
  }
};

getDatasWithParam1();

  