import { useState } from 'react';

const ConditionRendering = ({ isLoggedIn }) => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <p>{isLoggedIn ? '已登入' : '未登入'}</p>
      </div>
    </>
  );
};

export default ConditionRendering;
