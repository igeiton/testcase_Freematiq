// React
import ReactDOM from 'react-dom/client';

// Redux Toolkit
import { Provider } from 'react-redux';

// Redux Persist
import { PersistGate } from 'redux-persist/integration/react';

// UI components
import App from './App.tsx';

// Store
import store, { persistor } from './Store/store.ts';

const root = document.getElementById('root');

ReactDOM.createRoot(root!).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
);
