import './index.css';
const api={
  key:"eaa04b891f93d9b9a2d5085b082ac95a",
  base:"http://api.openweathermap.org/data/2.5/"
 }

function App() {
  const dateBuilder=(d)=>{
    let months=["Jan", "Feb", "Mar", "Apr", "May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
  }
  return (
    <div className="App">
      <main>
        <div className='search-box'>
          <input type="text"
                 className='search-bar'
                 placeholder='Search'
                 />
        </div>
        <div className='location-box'>
          <div className='location'>
            Kathmandu,Nepal
            <div className='date'>
              11/5/2023

            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}

export default App;
