import React from 'react';
import { render } from 'react-dom';
import { Reacteroids } from './Reacteroids';
import {PlayerIGN} from './PlayerIGN/PlayerIGN';
import style from './style.css';

render(<Reacteroids />, document.getElementById('root'));
render(<PlayerIGN/>);