import React from 'react';
/**
 *
 * @params counter
 */
export const Counter = (props) => {
    console.log(props.counter);
    return React.createElement("li", { style: { backgroundColor: props.counter.color }, 
        // 17. 親要素からstate更新スイッチを受け取ってイベントに紐付ける
        onClick: () => props.countUp(props.counter) },
        props.counter.id,
        "\uFF1A",
        props.counter.count);
};
// 子コンポーネントはstateを持つ必要がないので関数コンポーネントにした
