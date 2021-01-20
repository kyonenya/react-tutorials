import React, { useState } from 'react';
import SimpleMDE from 'react-simplemde-editor';
//import 'easymde/dist/easymde.min.css';
export const MarkDownEditor = () => {
    const [text, setText] = useState('');
    return (React.createElement(SimpleMDE, { onChange: (txt) => {
            setText(txt);
            console.log(txt);
        } }));
};
