import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <div style={{ margin: '20px', border: '1px solid  black', borderRadius: '10px', padding: '20px' }}>
          <Card />
        </div>

      </ChakraProvider>
    </div>
  );
}

export default App;
