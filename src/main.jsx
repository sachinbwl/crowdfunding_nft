import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

import { StateContextProvider } from './context';
import App from './App';
import './index.css';

const client_id = process.env.CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider activeChain={ChainId.Goerli} clientId={client_id}>
        <Router>
            <StateContextProvider>
                <App />
            </StateContextProvider>    
        </Router>
    </ThirdwebProvider>
)