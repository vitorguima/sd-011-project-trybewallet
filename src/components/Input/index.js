import React from 'react';

export default class Input extends React.Component {
  render() {
    const { ...attributes } = this.props;
    const { onChange } = attributes;

    return <input { ...attributes } onChange={ ({ target }) => onChange(target) } />;
  }
}
