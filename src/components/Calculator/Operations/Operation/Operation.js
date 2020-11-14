import React from 'react';
import styles from './Operation.module.css';

const operation = (props) => {
    return <div className={styles.eachOp}>
            <button>{props.op}</button>
           </div>
}

export default operation;