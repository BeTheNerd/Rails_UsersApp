import React from "react";

const Users = (props) => {
  return ( 
  <div>
    <h2>Users Page</h2>
    
    {props.users.map((user) => {
      return <p key={user.id}>{user.id} 
      {user.name} {user.phone} {user.email}</p>
    })}
  </div>
  );
};

export default Users;