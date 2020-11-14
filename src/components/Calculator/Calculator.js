import React, { Component } from 'react';
import styles from './Calculator.module.css';
import Numbers from './Numbers/Numbers';
import Operations from './Operations/Operations';

class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            calculatedValue: 0
        }
    }

    inputChangeHandler  = event => {
        this.setState({ inputValue: event.target.value });
    }

    render() {
        return (<main className={styles.mainContainer}>
                   <div className={styles.innerContainer}>
                        <div className={styles.calcValueContainer}>
                            <p className={styles.valuePara}>{this.state.calculatedValue}</p>
                        </div>
                        <div className={styles.calcBtnContainer}>
                            <div className={styles.numbersContainer}>
                                <Numbers />
                            </div>
                            <div className={styles.opsContainer}>
                                <Operations />
                            </div>
                            <div className={styles.resultContainer}>
                                <button>=</button>
                            </div>    
                        </div>
                   </div>        
                </main>)
    }
}

export default Calculator;