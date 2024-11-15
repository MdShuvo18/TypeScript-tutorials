const putRequest = async <T>(url: string, body?: { [key: string]: any }): Promise<T> => {
    try {
      const res = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body), // Send updated data in the body
      });
  
      if (!res.ok) {
        throw new Error(`Failed to update data: ${res.statusText}`);
      }
  
      const data: T = await res.json();
      return data;
      
    } catch (error) {
      console.error("Error in putRequest:", (error as Error).message);
      throw error;
    }
  };
  
  // Example of how to call PUT
  const updateUser = async () => {
    try {
      const updatedUser = {
        name: "Updated User",
        username: "updateduser",
        email: "updateduser@example.com",
      };
      const user = await putRequest<User>("url", updatedUser);
      console.log("Updated User:", user);
    } catch (error) {
      console.error("Error updating user:", (error as Error).message);
    }
  };
  
//   updateUser();



// =================with Record =================
const putRequest1 = async <T>(url: string, body?: Record<string, any>): Promise<T> => {
    try {
      const res = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body), // Send updated data in the body
      });
  
      if (!res.ok) {
        throw new Error(`Failed to update data: ${res.statusText}`);
      }
  
      const data: T = await res.json();
      return data;
      
    } catch (error) {
      console.error("Error in putRequest:", (error as Error).message);
      throw error;
    }
  };
  
  // Example of how to call PUT
  const updateUser1 = async () => {
    try {
      const updatedUser: Record<string, any> = {
        name: "Updated User",
        username: "updateduser",
        email: "updateduser@example.com",
      };
      const user = await putRequest<User>("url", updatedUser);
      console.log("Updated User:", user);
    } catch (error) {
      console.error("Error updating user:", (error as Error).message);
    }
  };
  
  updateUser1();
  

  
