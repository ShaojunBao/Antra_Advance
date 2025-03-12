// Component's name always start with Captial letter
// Has to use 'any' for the props, probably because we are using typescript now
export default function Profile(props : any){
    const{name,age,email} = props;
      
    return(
        <div>
        <h2>Name: {name}</h2>
        <h3>Age: {age}</h3>
        <h3>Email: {email}</h3>
        </div>
        
    )
}