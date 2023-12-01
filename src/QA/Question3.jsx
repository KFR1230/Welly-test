/**
 * 問題：重構這段程式碼並說明原因

function formatName(firstName, lastName) {
  let formattedName = '';

  if (firstName) {
    formattedName += firstName;
  }

  if (lastName) {
    formattedName += ' ' + lastName;
  }

  return formattedName;
}

 * 
 */

import { useState } from 'react';

const Question3 = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const formattedName = formatName1(firstName, lastName);
  //使用三元運算子可以把程式碼簡化成一條，比較容易於閱讀。
  function formatName1(firstName, lastName) {
    return (firstName ? firstName : '') + (lastName ? ' ' + lastName : '');
  }
  //如果要保存formattedName變數，將if條件式更改為邏輯運算子&&，會比較容易閱讀。
  function formatName2(firstName, lastName) {
    let formattedName = '';

    firstName && (formattedName += firstName);
    lastName && (formattedName += ' ' + lastName);

    return formattedName;
  }

  //我會傾向於使用formatName1，盡量減少變數宣告，直接將結果回傳。

  return (
    <>
      <div>
        <input
          type="text"
          value={firstName}
          className="firstName"
          placeholder="firstName"
          style={{ marginBottom: '10px' }}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          value={lastName}
          className="lastName"
          placeholder="lastName"
          onChange={(e) => setLastName(e.target.value)}
        />
        <p className="formattedName">{formattedName}</p>
      </div>
    </>
  );
};

export default Question3;
