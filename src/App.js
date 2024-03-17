import './App.css';
import bgVideo from './Components/assets/weatherchange.mp4'
import video from './Components/assets/timelapes.mp4'
import WeatherApp from './Components/WeatherApp/WeatherApp';

function App() {
  return (
    <div className="App">
      <video autoPlay muted>
        <source src={video} type='video/mp4'/>
      </video>
      <WeatherApp/>
    </div>
  );
}

export default App;
