{
     // Type Annotations
    // Primitive type
     let age : number = 12;
     const first : string = "This is our ts file";
     let isActive : boolean = true;
     let has : any = 1;
     let un : undefined = undefined;
     let nl : null = null



     function  add ( a: number , b : number): number{
        return a + b;
     }



     type User = {id:number ; name: string}
     let user: User = {id: 1, name: "Emon"};
}