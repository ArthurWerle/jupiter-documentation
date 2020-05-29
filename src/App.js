import React from 'react';

function App() {
  return (
    <div className="App">
      <header>
        <div className="ju-container">
          <div className="ju-box tabs">
            <div>Home</div>
            <div>About</div>
            <div>Why use jupiter?</div>
            <div>Atoms Components</div>
            <div>Molecules Components</div>
            <div>Organisms Components</div>
          </div>          
        </div>
      </header>
      <main className="ju-container">
        <div className="ju-box">
          Jupiter UI library
        </div>
      </main>
      <footer>
        <div>
          <p>Made with (love) by <a href="www.google.com">me</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
