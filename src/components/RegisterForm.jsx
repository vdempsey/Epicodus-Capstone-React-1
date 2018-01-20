import React from 'react';

function RegisterForm(){
  return (
    <form>
      <div>
        <label>Name</label><br/>
        <input type="text"></input>
      </div>
      <div>
        <label>User Name</label><br/>
        <input type="text"></input>
      </div>
      <div>
        <label>Password</label><br/>
        <input type="text"></input>
      </div>
      <div>
        <label>Your Motto</label><br/>
        <textarea></textarea>
      </div>
      <button>LOGIN</button>
    </form>
  );
}

export default RegisterForm;
