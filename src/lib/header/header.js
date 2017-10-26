import React from 'react';
import './header.css';
module.exports = ({ title }) => (
  <header className="header">
    <h1 className="header__title">{title || 'TITLE'}</h1>
    <button id="butRefresh" className="headerButton" aria-label="Refresh"></button>
    <button id="butAdd" className="headerButton" aria-label="Add"></button>
  </header>
);