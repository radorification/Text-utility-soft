import React from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      {darkMode ? <p>Dark Mode is enabled</p> : <p>Dark Mode is disabled</p>}
    </div>
  );
};