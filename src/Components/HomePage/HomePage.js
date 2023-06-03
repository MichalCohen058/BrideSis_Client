import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>ברוכים הבאים לדף הבית</h1>
      <ul>
        <li>
          <Link to="/register">הירשם</Link>
        </li>
        <li>
          <Link to="/login">התחברות</Link>
        </li>
        <li>
        <Link to="/fillQuestionnaire">שאלון רישום</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
