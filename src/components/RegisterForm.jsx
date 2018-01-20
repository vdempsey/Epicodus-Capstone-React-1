import React from 'react';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Open Sans :300,400,700', 'sans-serif']
  }
});

function RegisterForm(){
  const registerFormStyle = {
    width: '400px',
    margin: '20px auto',
    textAlign: 'center',
    boxSizing: 'boarder-box'
  };
  const inputFields = {
    height: '33px',
    marginRight: '10px',
    width: '160px',
    border: '1px solid #b5b5b5',
  };
  const labelStyle = {
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: '300',
    textAlign: 'right',
    width: '120px',
    padding: '10px',
    marginBottom: '5px',
    display: 'inline-block'
  };
  const textAreaStyle = {
    width: '160px',
    padding: '0'
  };
  return (
    <form style={registerFormStyle}>
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
      <div>
        <label style={labelStyle}>Name</label>
        <input style={inputFields} type="text"></input>
      </div>
      <div>
        <label style={labelStyle}>User Name</label>
        <input style={inputFields} type="text"></input>
      </div>
      <div>
        <label style={labelStyle}>Password</label>
        <input style={inputFields} type="text"></input>
      </div>
      <div>
        <label style={labelStyle}>Your Motto</label>
        <textarea style={textAreaStyle}></textarea>
      </div>
      <button>REGISTER</button>
    </form>
  );
}

export default RegisterForm;
