import React, { useState, useEffect } from 'react'
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function NavBar() {
    let login = () => {
        let form = document.querySelector('label')
        let button = document.querySelector('button')
        form.classList.remove('connexion')
        form.classList.add('dblock')
        button.classList.remove('btn')
        button.classList.add('btn2')
    }
    let log = () => {
        let id = document.querySelector('input')
        let msgBvn = document.querySelectorAll('h1')[1]
        msgBvn.innerText = `Bienvenu ${id.value}`
        msgBvn.classList.add('bienvenu')
        let form = document.querySelector('label')
        let button = document.querySelectorAll('button')[1]
        button.classList.remove('deco')
        button.classList.add('deco2')
        form.classList.remove('dblock')
        form.classList.add('connexion')
        id.value =''
        if (id.value == '') {
            
        }
    }
    let logout = () =>{
        let deco = document.querySelectorAll('button')[1]
        let msgBvn = document.querySelectorAll('h1')[1]
        let button = document.querySelector('button')
        deco.classList.remove('deco2')
        deco.classList.add('deco')
        msgBvn.classList.remove('bienvenu')
        msgBvn.innerText =''
        button.classList.remove('btn2')
        button.classList.add('btn')
    }
    return (
        <header>
            <nav>
                <h1 className='titre'>TimeSheet</h1>
                <button className='btnNav' onClick={login}><FontAwesomeIcon icon='power-off' /></button>
                <button className='deco' onClick={logout}><FontAwesomeIcon icon='power-off' /></button>
                <label className='connexion'>
                    ID :&nbsp;
                    <input className='user' type='text' placeholder='Crabe'></input>
                    &nbsp;&nbsp;Mdp :&nbsp;
                    <input className='user' type='password' placeholder='*****'></input>
                    &nbsp;
                    <button className='btn-grad' type='submit' onClick={log}>Log in</button>
                </label>
            </nav>
            <h1></h1>
        </header>
    )
}
