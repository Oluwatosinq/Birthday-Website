import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

window.onerror = function (message, source, lineno, colno, error) {
  // Create a plain text area that mobile browsers can't mess up
  const textarea = document.createElement('textarea');
  textarea.style.position = 'fixed';
  textarea.style.top = '0';
  textarea.style.left = '0';
  textarea.style.width = '100vw';
  textarea.style.height = '100vh';
  textarea.style.backgroundColor = '#fff';
  textarea.style.color = '#000';
  textarea.style.zIndex = '999999';
  textarea.style.fontSize = '16px'; // Prevents mobile zoom
  
  textarea.value = `CRASH REPORT:\n\nError: ${message}\nFile: ${source}\nLine: ${lineno}:${colno}\n\nStack Trace:\n${error?.stack || ''}`;
  
  document.body.appendChild(textarea);
  return false;
};