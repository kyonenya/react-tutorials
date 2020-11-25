import React, { useState, useEffect } from 'react';

export const Example = () => {
  const [count, setCount] = useState(0);
  
  // 副作用フック
  // componentDidMountやcomponentDidUpdateに似ている
  // 毎回のレンダー後に呼ばれる（初回マウント後と更新後を区別しない）
  useEffect(() => {
    document.title = `${count}回クリックされた`;
  });
  
  return (
    <div>
      <p>{count}回クリックしました</p>
      <button
        onClick={() => setCount(count + 1)}
      >
        クリックしてね
      </button>
    </div>
 );
};
