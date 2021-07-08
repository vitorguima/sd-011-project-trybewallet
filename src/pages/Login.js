import React from 'react'
import { connect } from 'react-redux'

export const Login = (props) => {

  return (
    <div className="Login">
      <img src={} alt={} />
      <input type="email" id="email" placeholder="Email" data-testid="email-input" />
      <input type="password" id="password" placeholder="password" data-testid="password-input" />
      <button>Entrar</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
