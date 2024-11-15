const postRequest = async <T>(url: string, body?: { [key: string]: any }): Promise<T> => {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body), // Send body as JSON
      });
  
      if (!res.ok) {
        throw new Error(`Failed to post data: ${res.statusText}`);
      }
  
      const data: T = await res.json();
      return data;
      
    } catch (error) {
      console.error("Error in postRequest:", (error as Error).message);
      throw error;
    }
  };
  
  // Example of how to call POST
  const createUser = async () => {
    try {
      const newUser = {
        name: "New User",
        username: "newuser",
        email: "newuser@example.com",
      };
      const user = await postRequest<User>("url", newUser);
      console.log("Created User:", user);
    } catch (error) {
      console.error("Error creating user:", (error as Error).message);
    }
  };
  
//   createUser();

  //==============with record ======================
  const postRequest1 = async <T>(url: string, body?: Record<string, any>): Promise<T> => {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body), // Send body as JSON
      });
  
      if (!res.ok) {
        throw new Error(`Failed to post data: ${res.statusText}`);
      }
  
      const data: T = await res.json();
      return data;
      
    } catch (error) {
      console.error("Error in postRequest:", (error as Error).message);
      throw error;
    }
  };
  
  // Example of how to call POST
  const createUser1 = async () => {
    try {
      const newUser: Record<string, any> = {
        name: "New User",
        username: "newuser",
        email: "newuser@example.com",
      };
      const user = await postRequest<User>("url", newUser);
      console.log("Created User:", user);
    } catch (error) {
      console.error("Error creating user:", (error as Error).message);
    }
  };
  
  createUser1();
  
  

  //===========in React==========
  /*
  //npm install @tanstack/react-query

  
  import { useMutation } from '@tanstack/react-query';

// Generic function for POST request
const postData = async <T>(url: string, data: T): Promise<T> => {
  
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(`Failed to POST data: ${res.statusText}`);
  }

  return res.json();
};

// Reusable custom hook for POST requests
const usePostData = <T>(url: string) => {
  return useMutation<T, Error, T>({
    mutationFn: (data: T) => postData<T>(url, data), // Call the postData function
  });
};

export { usePostData };

  */