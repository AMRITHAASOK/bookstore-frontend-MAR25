import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    
<GoogleOAuthProvider clientId="354339544241-bl9unhutsagdpi7epsnloka09hc5g8jn.apps.googleusercontent.com"> <App /></GoogleOAuthProvider>;
   
    </BrowserRouter>
  </StrictMode>,
)
