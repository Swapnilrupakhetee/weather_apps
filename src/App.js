import './index.css';
const api={
  key:"eaa04b891f93d9b9a2d5085b082ac95a",
  base:"http://api.openweathermap.org/data/2.5/"
 }

function App() {
  return (
    <div className="App">
      <main>
        <div className='search-box'>
          <input type="text"
                 className='search-bar'
                 placeholder='Search'
                 />
        </div>
      </main>
    </div>
  );
}

export default App;
