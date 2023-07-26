import React, {useEffect, useState} from 'react'
import "./User.css";

const User = () => {
    const [users, setUsers] = useState('')
    
    
    useEffect(() => {
        fetch("/users")
        .then ((r) => r.json())
        .then((data) =>setUsers(data))
    })
  return (
    <div>User</div>
  )
}

export default User