import React, { useState, useEffect } from 'react';
export const Example = () => {
    const [count, setCount] = useState(0);
    // 副作用フック
    // componentDidMountやcomponentDidUpdateに似ている
    // 毎回のレンダー後に呼ばれる（初回マウント後と更新後を区別しない）
    useEffect(() => {
        document.title = `${count}回クリックされた`;
    });
    return (React.createElement("div", null,
        React.createElement("p", null,
            count,
            "\u56DE\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3057\u305F"),
        React.createElement("button", { onClick: () => setCount(count + 1) }, "\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u306D")));
};
