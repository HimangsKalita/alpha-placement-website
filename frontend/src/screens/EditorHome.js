import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Editor from './Editor';
import EditorSharing from './EditorSharing';

function EditorHome() {
  return (
    <Routes>
      <Route path="/" element={<Editor />}></Route>
      <Route path="/editor/:roomId" element={<EditorSharing />}></Route>
    </Routes>
  );
}

export default EditorHome;
