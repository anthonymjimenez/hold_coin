import './App.css';
import Amplify, {API} from 'aws-amplify';
import config from './aws-exports';
import {withAuthenticator} from '@aws-amplify/ui-react';

Amplify.configure(config);

function App() {
  React.useEffect(() => {
    API.get("cryptoapi", "/crypto/symbol").then(console.log)
  })
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default withAuthenticator(App);
