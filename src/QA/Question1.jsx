/*
JavaScript: 字串反轉
function reverseString(str) {
  // 實作你的解答	
}

console.log(reverseString("Hello")); // 預期輸出: "olleH”
*/

import { useState } from 'react';

const Question1 = () => {
  const [text, setText] = useState('');
  const reverseText = reverseString(text);

  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  console.log(reverseString('Hello'));
  return (
    <>
      <label>
        <input
          type="text"
          value={text}
          placeholder="輸入文字"
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <div className="reverse_text">
        <p>{reverseText}</p>
      </div>
    </>
  );
};

export default Question1;
