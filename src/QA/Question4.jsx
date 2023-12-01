/**
 * 

問題：在React中，如何根據條件渲染兩種不同的內容？

範例：

function ConditionalRendering({ isLoggedIn }) {
  // 實作你的條件渲染
}


 * 
 */

import { useState } from 'react';
import ConditionRendering from './ConditionRendering';

const Question4 = () => {
  // (1)透過if...else條件是判斷isLoggedIn變化，變更內容
  // (2) 使用switch根據case來變換要顯示的內容
  // (3) 建立新的元件，在元件裡用if...return 決定要顯示的內容
  // (4) 使用{!isLogging && } or {isLoggedIn && }
  // (5) 使用三元運算子

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <label>
        <button onClick={() => setIsLoggedIn((prev) => !prev)}>
          {isLoggedIn ? 'LogOut' : 'LogIn'}
        </button>
      </label>
      <ConditionRendering isLoggedIn={isLoggedIn} />
    </>
  );
};

export default Question4;
