import '../i18n.js'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import {ToastContainer} from "react-toastify";
import {ThemeProvider} from "./Utils/ThemeContext.jsx";

createRoot(document.getElementById('root')).render(

    <ThemeProvider>
      <StrictMode>
          <BrowserRouter>
              <App />
              <ToastContainer limit={2}/>
          </BrowserRouter>
      </StrictMode>
    </ThemeProvider>,
)
