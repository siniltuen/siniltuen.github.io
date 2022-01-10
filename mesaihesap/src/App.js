import logo from './logo.svg';
import Gun from './Components/Gun'
import './App.css';
import { render } from "react-dom";
import Header from './Components/Header'
import Saat from './Components/Saat'
import BasicTimePicker from './Components/BasicTimePicker';
import { Provider } from 'react-redux';
import store from './store/index';


function App() {
  return (


    <Provider store={store}>


      <div className="container" style={{
        minWidth: 2000, marginLeft: 50
      }}>
        <div>
          <Header />
        </div>
        <div className="row col-sm-3" style={{ marginTop: 150 }}>
          <Saat alanAdi="Haftalık Toplam Çalışma Saati" />
          <Saat alanAdi="Haftalık Eksik Çalışma Saati" />
          <Saat alanAdi="Haftalık Toplam Çalışma Saati" />
        </div>
        <div className="row col-sm-12">
          <Gun gunAdi="Pazartesi" id={0} />
          <Gun gunAdi="Salı" id={1} />
          <Gun gunAdi="Çarşamba" id={2} />
          <Gun gunAdi="Perşembe" id={3} />
          <Gun gunAdi="Cuma" id={4} />
          <Gun gunAdi="Cumartesi" id={5} />
          <Gun gunAdi="Pazar" id={6} />
        </div>


      </div >

    </Provider>


  );
}

export default App;
