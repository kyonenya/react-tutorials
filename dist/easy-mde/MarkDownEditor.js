import React, { useState } from 'react';
import SimpleMDE from 'react-simplemde-editor';
//import 'easymde/dist/easymde.min.css';
export const MarkDownEditor = () => {
    const [text, setText] = useState('');
    const [instance, setInstance] = useState(null);
    return (React.createElement(SimpleMDE
    // @ts-ignore EasyMDEの型定義が壊れてる。togglePreview()はstaticメソッドなのだが、prototype拡張をしてインスタンスのメソッドに見せているため
    , { 
        // @ts-ignore EasyMDEの型定義が壊れてる。togglePreview()はstaticメソッドなのだが、prototype拡張をしてインスタンスのメソッドに見せているため
        getMdeInstance: (i) => setInstance(i), onChange: (txt) => {
            setText(txt);
            console.log(instance);
        } }));
};
