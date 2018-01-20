import React from 'react';

function LogIn(){
  const inputFields = {
    height: '33px',
    marginRight: '10px',
    width: '160px',
    border: 'none',
    display: 'none'
  };
  const formStyle = {
    display: 'flex'
  }
  return (
    <form style={formStyle}>
      <style jsx>{`
        @import url('.././fonts/BebasNeue Bold.ttf');

        button {
          font-family: 'BebasNeue';
          padding: 8px 20px;
          font-size: 17px;
          letter-spacing: 0.5px;
          background-color: #D6DE23;
          color: #404040;
          border: none;
          outline: none;
          width: 100px;
        }

        ::-webkit-input-placeholder {
          color: #b5b5b5;
          text-align: center;
        }

      `}</style>
    <input type="text" placeholder="Enter your user name" style={inputFields}></input>
      <input type="text" placeholder="Enter your password" style={inputFields}></input>
      <button>LOGIN</button>
    </form>
  );
}

export default LogIn;
