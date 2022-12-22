// JS root

// we plan to use createRoot function
import { createRoot } from 'react-dom/client';

// import default App CSS 
import './index.css';

// include main App
import App from './App';

// point to main element in HTML 
const container = document.getElementById('result')

// point to container 
const root = createRoot(container)

// render it all to App
root.render(<App tab="home" />)
