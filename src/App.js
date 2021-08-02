import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
