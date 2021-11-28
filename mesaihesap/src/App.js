import logo from './logo.svg';
import Gun from './Components/Gun'
import './App.css';
import { render } from "react-dom";
import Header from './Components/Header'
import Saat from './Components/Saat'

function App() {
  return (



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
        <Gun gunAdi="Pazartesi" />
        <Gun gunAdi="Salı" />
        <Gun gunAdi="Çarşamba" />
        <Gun gunAdi="Perşembe" />
        <Gun gunAdi="Cuma" />
        <Gun gunAdi="Cumartesi" />
        <Gun gunAdi="Pazar" />
      </div>
    </div >



  );
}

export default App;
