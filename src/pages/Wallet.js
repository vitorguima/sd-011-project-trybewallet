import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header';
import Form from '../components/Form';

export const Wallet = (props) => {
  return (
    <div className="Wallet">
      <Header />
      <Form />
    </div>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet)
