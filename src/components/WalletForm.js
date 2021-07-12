import React, { Component } from 'react';
import FormInputs from './FormInputs';
import FormSelects from './FormSelects';

class HeaderForm extends Component {
  render() {
    return (
      <form>
        <FormInputs />
        <FormSelects />
      </form>
    );
  }
}

export default HeaderForm;
