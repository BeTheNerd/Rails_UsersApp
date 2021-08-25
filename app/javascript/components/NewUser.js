import React from 'react'

const NewUser = () => {
  return(
    <div>
      <p>Form here</p>
      <form action='/users' method='post'>
        <p>Name:</p>
        <input name='user[name]'/>
        <p>Age:</p>
        <input name='user[age]'/>
        <p>Phone:</p>
        <input name='user[phone]'/>
        <p>Email:</p>
        <input name='user[email]'/>
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default NewUser