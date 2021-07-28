import React from "react";
import LoginForm from "../../components/LoginForm";

const Login = ({setIsLogin}) => {
  // const { wellcomeMessage } = props
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '25vh'}}>
      <LoginForm setIsLogin={setIsLogin}/>
    </div>
  );
};

export default Login;
