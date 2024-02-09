
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Display from './component/Display';
import Model from './component/Model';
import Monitoring from './component/Monitoring';
import { useSelector } from 'react-redux';
import PrivacyMessage from './component/PrivacyMessage';

function App() {
  const privacy = useSelector(store=>store.privacy);
  return (
  <>
  
  <center className="px-4 py-5 my-5 text-center">
  
  <Model>
   <Header></Header>
   <Display></Display>
    <div className="col-lg-6 mx-auto">
     
     {privacy? <PrivacyMessage/> :<Monitoring/>}
    </div>
    </Model>
  </center>

  </>
  );
}

export default App;
