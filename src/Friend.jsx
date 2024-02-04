export default function Friend ({friend}){
    console.log(friend)
const {name,email,phone,website,company} = friend
const {catchPhrase} = company
    return (
        <div className="box">
            <h3>Name : {name} </h3>
            <p>email: {email}</p>
            <p>Website: {website} </p>
            <p>phone: {phone} </p>
            <p>company name : {catchPhrase} </p>
        </div>
    )
}