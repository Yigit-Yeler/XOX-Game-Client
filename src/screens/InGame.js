import React, { useEffect, useState } from 'react'
import styles from './styles/inGame.module.css'
import ReactDOMServer from "react-dom/server";
import SocketIO from 'socket.io-client'
function InGame() {
    const socket = SocketIO('http://localhost:5000', { transports: ['websocket', 'polling', 'flashsocket'] })

    const [startCells, setStartCells] = useState(["", "", "", "", "", "", "", "", ""])
    const [a, setA] = useState('circle')
    const addGo = (e) => {
        const newCells = startCells.map((cell, index) => {
            if (index == e.target.id && cell == "") {
                return a
            }
            else {
                return cell
            }

        });
        setStartCells(newCells)

        // Tam burda sockete id ve circle biligisni gönder
        if (a == 'circle') {
            setA('cross')
        }
        else if (a == 'cross') {
            setA('circle')
        }

    }

    useEffect(() => {

        socket.on('haber', (data) => {
            console.log(data)
        })

        return () => {
            socket.off("haber").off();
        }
    }, [])

    const click = () => {
        socket.emit('joinGame');
    }

    const inRoom = () => {
        socket.emit('inRoom');
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
            <button onClick={click}>Bas</button>
            <button onClick={inRoom}>Rooma Gönder</button>
        </div>
    )
}

export default InGame