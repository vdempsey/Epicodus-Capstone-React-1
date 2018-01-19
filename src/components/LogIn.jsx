import React from 'react';

function LogIn(){
  return (
    <form>
      <style jsx>{`
        @import url('.././fonts/BebasNeue Bold.ttf');

        button {
          font-family: 'BebasNeue';
        }

        ::-webkit-input-placeholder {
          color: #b5b5b5;
        }

      `}</style>
      <input type="text" placeholder="Enter your user name"></input>
      <input type="text" placeholder="Enter your password"></input>
      <button>LOGIN</button>
    </form>
  );
}

export default LogIn;
