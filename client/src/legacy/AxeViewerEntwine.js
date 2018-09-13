import jQuery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { loadComponent } from 'lib/Injector';

/**
 * Uses entwine to inject the AxeViewer React component into the DOM, when used
 * outside of a React context e.g. in the CMS
 */
jQuery.entwine('ss', ($) => {
  $('.js-injector-boot .axe-viewer__placeholder').entwine({
    onmatch() {
      const context = {};
      const AxeViewerComponent = loadComponent('AxeViewer', context);

      ReactDOM.render(
        <AxeViewerComponent />,
        this[0]
      );
    },

    onunmatch() {
      ReactDOM.unmountComponentAtNode(this[0]);
    }
  });
});
