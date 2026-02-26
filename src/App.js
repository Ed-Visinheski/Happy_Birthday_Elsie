import './App.css';

function App() {
  return (
    <div className="App">
      <div className="birthday-container">
        <div className="balloons">
          <div className="balloon balloon-1">🎈</div>
          <div className="balloon balloon-2">🎈</div>
          <div className="balloon balloon-3">🎈</div>
          <div className="balloon balloon-4">🎈</div>
          <div className="balloon balloon-5">🎈</div>
        </div>
        
        <div className="content">
          <h1 className="title">Happy Birthday Elsie! 🎉</h1>
          <div className="cake">🎂</div>
          <p className="message">
            Wishing you the most amazing day filled with love, laughter, and all your favorite things!
          </p>
          <p className="message">
            You make every day brighter! 💖
          </p>
          <div className="confetti">
            <span className="confetti-piece">✨</span>
            <span className="confetti-piece">🌟</span>
            <span className="confetti-piece">💫</span>
            <span className="confetti-piece">⭐</span>
            <span className="confetti-piece">✨</span>
            <span className="confetti-piece">🌟</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
