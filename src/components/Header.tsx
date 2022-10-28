import React from 'react';
import '../styles/header.scss';
import logo from '../assets/ic_logo.svg';
import person from '../assets/ic_person.svg';

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt=''/>
        <span>Wrench CRM</span>
        </div>
      <div className='person'>
        <img src={person} alt=''/>
        <span>Имя Фамилия</span>
        </div>
    </div>
  )
}