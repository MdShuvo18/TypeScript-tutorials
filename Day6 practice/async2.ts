{
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
      
    
    const fetchData = async () : Promise<User[]> =>{
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
            
            if(!res.ok) throw new Error("Failed to fetch data");
            const datas : User[] = await res.json();
            return datas;
            
        } catch (error) {
            return [];
        }
    }
    fetchData()
    .then(users => console.log(users));



    // re usable POST,GET,PUT
    
}