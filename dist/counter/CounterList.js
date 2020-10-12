import React from 'react';
import { Counter } from './Counter';
/**
 * コンポーネントをループで一括生成する（16.）
 * @params counters
 * @render Counter(counter)
 */
export const CounterList = (props) => {
    const counters = props.counters.map((counter) => {
        return React.createElement(Counter, { counter: counter, 
            // ユニークなkeyが必要、ループで処理するコンポーネントには
            key: counter.id, countUp: props.countUp });
    });
    return React.createElement("ul", null, counters);
};
