import React, { useState } from 'react';
import SimpleMDE from 'react-simplemde-editor';
//import 'easymde/dist/easymde.min.css';

export const MarkDownEditor = () => {
  const [text, setText] = useState('');
  
  return (
    <SimpleMDE
      onChange={(txt) => {
        setText(txt);
        console.log(txt);
      }}
    />
  );
};
