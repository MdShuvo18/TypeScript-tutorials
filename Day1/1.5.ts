{
    //Generic array
    type genericArray<T> = Array<T>;
    let numberArr: number[] = [1, 2, 3, 4];
    let numberArr1: genericArray<number> = [1, 2, 3, 4];

    let boolArr: boolean[] = [true, false, true];
    let boolArr1: genericArray<boolean> = [true, false, true];

    let strArr: string[] = ["Emon", "Arifin", "Shuvo", "Nahia"];
    let strArr1: genericArray<string> = ["Emon", "Arifin", "Shuvo", "Nahia"];


    //Generic in object
    interface User<T> {
        id: number,
        name: string,
        password: T
    }

    const user: User<string> = {
        id: 12,
        name: "Emon",
        password: "sdf12345"
    }





}