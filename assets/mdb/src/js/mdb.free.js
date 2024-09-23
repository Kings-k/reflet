// BOOTSTRAP CORE COMPONENTS
import Alert from './bootstrap/src/alert.js';
import Button from './bootstrap/src/button.js';
import Carousel from './bootstrap/src/carousel.js';
import Collapse from './bootstrap/src/collapse.js';
import Modal from './bootstrap/src/modal.js';
import Popover from './bootstrap/src/popover.js';
import ScrollSpy from './bootstrap/src/scrollspy.js';
import Tab from './bootstrap/src/tab.js';
import Tooltip from './bootstrap/src/tooltip.js';
import Toast from './bootstrap/src/toast.js';

// MDB FREE COMPONENTS
import Input from './free/input.js';
import Dropdown from './free/dropdown.js';
import Ripple from './free/ripple.js';

// AUTO INIT
[...document.querySelectorAll('[data-toggle="tooltip"]')].map((tooltip) => new Tooltip(tooltip));
[...document.querySelectorAll('[data-toggle="popover"]')].map((popover) => new Popover(popover));
[...document.querySelectorAll('.toast')].map((toast) => new Toast(toast));

export {
  Alert,
  Button,
  Carousel,
  Collapse,
  Dropdown,
  Input,
  Modal,
  Popover,
  Ripple,
  ScrollSpy,
  Tab,
  Toast,
  Tooltip,
};
