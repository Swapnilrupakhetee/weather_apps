import './index.css';
import React,{useState} from 'react';
const api={
  key:"eaa04b891f93d9b9a2d5085b082ac95a",
  base:"http://api.openweathermap.org/data/2.5/"
 }

function App() {
  const[query,setQuery] =useState("");
  const[weather,setWeather] = useState({});

  const search =(e)=>{
    if(e.key==="Enter")
    {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res=>res.json())
        .then(result=>{
          setQuery('');
          setWeather (result);
          console.log(result);
        })
    }
  }


  const dateBuilder=(d)=>{
    let months=["Jan", "Feb", "Mar", "Apr", "May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let days=["Sun", "Mon", "Tue","Wed", "Thu", "Fri", "Sat"];

    let day=days[d.getDay()];
    let date=d.getDate();
    let month=months[d.getMonth()];
    let year=d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  }
  return (
    <div className="App">
      <main>
        <div className='search-box'>
          <input type="text"
                 className='search-bar'
                 placeholder='Search'
                 onChange={e=>setQuery(e.target.value)}
                 value={query}
                 onKeyPress={search}
                 />
        </div>
        {(typeof weather.main!="undefined")?(
          <div className='location-box'>
          <div className='location'>
            {weather.name},{weather.sys.country}

            
            <div className='date'>
              {dateBuilder(new Date())}

            </div>
          </div>
          <div className='weather-box'>
            <div className='temp'>
              {Math.round(weather.main.temp)}°
            </div>
            <div className='weather'>
              Sunny

            </div>

          </div>
          
        </div>
        ):('')
        
        
        }
      </main>
    </div>
  );
}

export default App;
