import React, { Component } from 'react';
import axe from 'axe-core';

class AxePopover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      results: null,
    };
  }

  componentDidMount() {
    const element = this.getAuditElement();
    if (element) {
      this.runAudit(element);
    }
  }

  /**
   * @returns {Object}
   */
  getAuditElement() {
    const frame = document.getElementsByName('cms-preview-iframe')[0];
    let element = null;

    if (frame) {
      element = frame.contentWindow.document;
    }

    return element;
  }

  runAudit(element) {
    axe.run(element, {
      iframes: true,
    }, (error, results) => {
      this.setState(() => ({
        error,
        results,
      }));
    });
  }

  renderItem(item) {
    const itemStyles = {
      padding: '1rem',
    };
    return (
      <div key={item.id} style={itemStyles}>{item.help}</div>
    );
  }

  renderViolations() {
    const { results } = this.state;
    let items = null;

    if (typeof results === 'undefined' || !results) {
      return null;
    }

    items = results.violations.map((item) => this.renderItem(item));

    return (
      <div>{items}</div>
    );
  }

  renderIncomplete() {
    const { results } = this.state;
    let items = null;

    if (typeof results === 'undefined' || !results) {
      return null;
    }

    items = results.incomplete.map((item) => this.renderItem(item));

    return (
      <div>{items}</div>
    );
  }

  /**
   * @returns {Object}
   */
  render() {
    const popoverStyles = {
      position: 'absolute',
      bottom: '42px',
      left: '0',
      width: '250px',
      backgroundColor: '#f7f8fa',
      border: '1px solid #ccc',
      borderBottom: '1px solid #f7f8fa',
    };

    return (
      <div style={popoverStyles}>
        {this.renderViolations()}
        {this.renderIncomplete()}
      </div>
    );
  }
}

export default AxePopover;
