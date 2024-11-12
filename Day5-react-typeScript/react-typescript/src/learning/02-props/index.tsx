
type ComponentProps ={
    name:string;
    id:number
    age?: number
}
const Component2 = ({name, id} :ComponentProps) => {
    return (
        <div>
            <h1>{name}</h1>
            <h1>{id}</h1>
        </div>
    );
};

export default Component2;