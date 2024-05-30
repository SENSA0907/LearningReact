import React, { useState } from "react";

import styles from "./booleanUseState.module.css";

const BooleanUseState = () => {
  const [isLight, setIsLight] = useState(false);
  const [theme, setTheme] = useState('light');
  const [showToggle, setShowToggle] = useState(true);
  return (
    <div>
      <div className={isLight ? styles.light : styles.dark}>some content</div>
      <div className={theme === 'light' ? styles.light : styles.dark}>Theme</div>
      {showToggle === true ? (
        <button
          onClick={() => {
            setIsLight(!isLight);
          }}
        >
          Switch Theme
        </button>
      ) : null}
      <button onClick={() => { setTheme('light')}}>Light Theme</button>
      <button onClick={() => { setTheme('dark')}}>Dark Theme</button>
    </div>
  );
};

export default BooleanUseState;
