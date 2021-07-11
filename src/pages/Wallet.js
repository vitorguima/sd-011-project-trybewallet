import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Form from '../components/Form';
import Table from '../components/Table';
import EditForm from '../components/EditForm';

class Wallet extends React.Component {
  render() {
    const { editing } = this.props;
    return (
      <div>
        <Header />
        {console.log(editing)}
        { editing ? <EditForm /> : <Form />}
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  editing: state.wallet.editing,
});

Wallet.propTypes = {
  editing: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Wallet);
