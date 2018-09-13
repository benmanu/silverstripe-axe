import React, { Component } from 'react';
import axe from 'axe-core';
import AxePopover from '../AxePopover/AxePopover';

class AxeViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  /**
   * @returns {Object}
   */
  renderPopover() {
    const { isOpen } = this.state;

    if (!isOpen) {
      return null;
    }

    return (
      <AxePopover />
    );
  }

  /**
   * @returns {Object}
   */
  render() {
    return (
      <div style={{ position: 'relative' }}>
        { this.renderPopover() }
        <a
          role="presentation"
          className="btn action btn-outline-primary"
          onClick={this.handleClick}
        >A11y</a>
      </div>
    );
  }
}

export { AxeViewer as Component };

export default AxeViewer;
