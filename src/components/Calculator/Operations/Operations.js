import React from 'react';
import Operation from './Operation/Operation';

const operations = () => {
    const opsArr = ['+', '-', '*', '/'];
    const ops = opsArr.map(op => <Operation op={op} />)
  
    return [...ops]
}

export default operations;