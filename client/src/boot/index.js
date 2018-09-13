/* global window */
import Injector from 'lib/Injector';
import AxeViewer from '../components/AxeViewer/AxeViewer';

window.document.addEventListener('DOMContentLoaded', () => {
  Injector.component.registerMany({
    AxeViewer,
  });
});
