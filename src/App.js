import { AllRoutes } from './routes/AllRoutes';
import './App.css';
import { Header } from './component/Header';


function App() {
  return (
    <div>
      {/* <h1>My app file</h1> */}
      <Header/>
      <AllRoutes />
    </div>
  );
}

export default App;
