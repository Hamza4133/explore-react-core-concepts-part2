import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend'
export default function Friends(){
    
    const [friends, setFriends] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])

    return (
        <h3 className='box'>
            Friends: {friends.length}
            {
                friends.map(friend=>
                <Friend friend={friend}></Friend>)
            }
        </h3>
    )
}

/**
 * 1. state to hold data
 * 2. use effect with dependency array
 * 3. useFetch to load data
 * 4. set loaded data to the state 
 * 5. display data on the component
 */