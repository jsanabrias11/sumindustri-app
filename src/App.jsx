import { BrowserRouter, HashRouter } from 'react-router-dom';
import './App.css';
import { AppRouter } from './router/AppRouter';

function App() {

  return (
    <HashRouter >
      <AppRouter />
    </HashRouter>
  )
}

export default App
