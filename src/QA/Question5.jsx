/**
 *
  問題：使用React創建一個簡單的計數器組件，具有增加和減少計數的按鈕
 * 
 */

import { useState } from 'react';

const Question5 = () => {
  const [total, setTotal] = useState(0);
  const calc = {
    plus: +1,
    minus: -1,
  };
  function onClickHandler(e) {
    if (e.target.tagName !== 'BUTTON') {
      return;
    }
    setTotal((prev) => prev + calc[e.target.name]);
  }

  return (
    <>
      <div>
        <h2>{total}</h2>
        <div onClick={onClickHandler}>
          <button className="calcBtn" name="plus">
            +
          </button>
          <button className="calcBtn" name="minus">
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default Question5;
