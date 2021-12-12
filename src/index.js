import dayjs from 'dayjs';
import ReactDOM from 'react-dom';
import React from 'react';

ReactDOM.render(
    <div> echo645 {dayjs().format('YYYY-MM-DD HH:mm:ss.SSS')}</div>
, document.querySelector('#app'));

console.log('setup', dayjs().format('YYYY-MM-DD HH:mm:ss.SSS'));
console.log('setup123d');