import React from 'react';
import styles from './Numbers.module.css';

const numbers = () => {
    const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0, 'C'];
    const numbersCom = numberArr.map(number => <div className={styles.eachNumber}>
                                                <button>{number}</button>
                                               </div>
                                    );
    
    return (
            [...numbersCom]
            );
}

export default numbers;