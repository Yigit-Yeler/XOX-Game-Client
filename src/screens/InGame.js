import React, { useState } from 'react'
import styles from './styles/inGame.module.css'
import ReactDOMServer from "react-dom/server";
function InGame() {
    const [startCells, setStartCells] = useState(["", "", "", "", "", "", "", "", ""])
    const [a, setA] = useState('circle')
    const addGo = (e) => {
        const newCells = startCells.map((cell, index) => {
            if (index == e.target.id) {
                return a
            }
            else {
                return cell
            }

        });
        setStartCells(newCells)
        if (a == 'circle') {
            setA('cross')
        }
        else if (a == 'cross') {
            setA('circle')
        }

    }

    return (
        <div className={styles.main}>
            <div className={styles.gameBoard}>
                {
                    startCells.map((item, index) => {
                        return (
                            <div id={index} className={styles.square} onClick={(e) => addGo(e)} >
                                <div className={styles[item]}></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default InGame