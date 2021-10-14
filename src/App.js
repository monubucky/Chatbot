import ChatBot from 'react-simple-chatbot';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
