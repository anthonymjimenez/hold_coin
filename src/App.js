import './App.css';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import {withAuthenticator} from '@aws-amplify/ui-react';

Amplify.configure(config);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default withAuthenticator(App);
