import ChatBot from 'react-simple-chatbot';
import clickme from './clickme';
import './App.css';

function App() {
  
  
  return (
    
    <div className="App">
      <header className="App-header">
        <div id="bukky">
          <ChatBot
              steps={[
                {
                  id: '1',
                  message: 'HII MY NAME IS MONU CHATBOT, HOW MAY I HELP YOU ??',
                  trigger: '2',
                },
                {
                  id: '2',
                  message: 'What is your name?',
                  trigger: '3',
                },
                {
                  id: '3',
                  user: true,
                  trigger: '4',
                },
                {
                  id: '4',
                  message: 'Hi {previousValue}, nice to meet you!',
                  end: true,
                },
              ]}
          />
        </div>
 
      <img id="imgage" src="https://media.istockphoto.com/vectors/-vector-id1010001882?k=20&m=1010001882&s=612x612&w=0&h=6ZqzWlYBD3bT2EqJolzC3xbIKVVy350qMQmmS6B-Wd4=" alt="chatbot"  onClick={clickme} display="block"></img>
      
      </header>
      
      
    </div>
  );
  
}

export default App;
