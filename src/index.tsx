/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import Bookshelf from './App';

render(() => <Bookshelf name="Sejden"/>, document.getElementById('root') as HTMLElement);
