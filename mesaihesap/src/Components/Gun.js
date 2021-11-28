import React, { Component } from 'react'
import { useForm } from 'react-hook-form';
import Saat from './Saat'
import TimePickers from './TimePicker'
import PropTypes from 'prop-types'
import GirisCikis from './GirisCikis'
import { Button } from '@material-ui/core';

class Gun extends Component {

  state = {
    numGirisCikis: 0
  }

  addGirisCikis() {
  };

  render() {
    const girisCikisListesi = [];
    //Destructing
    const { gunAdi } = this.props;

    for (var i = 0; i < this.state.numGirisCikis; i += 1) {
      girisCikisListesi.push(<GirisCikis key={i} number={i} girisCikisSayisi={i + 1} />);
    };


    return (
      <div className="card gunCard">

        <div className="card-header d-flex justify-content-between">
          <h5 className="d-inline">{gunAdi} </h5>
          <i class="fas fa-undo-alt" style={{ cursor: 'pointer' }}></i>
        </div>

        <div className="card-body">

          <Saat alanAdi="Toplam Çalışma Saati" />
          <GunIcerigi onAddGirisCikis={this.onAddGirisCikis} gunAdi={gunAdi} girisCikisListesi=
            {girisCikisListesi} />
          <Button mt="5px" onClick={this.onAddGirisCikis}> Giriş Çıkış Ekle</Button>
        </div>


      </div>


    );
  }

  onAddGirisCikis = () => {
    this.setState({
      numGirisCikis: this.state.numGirisCikis + 1
    });
  }

}

const GunIcerigi = props => (
  <div className="">
    {props.girisCikisListesi}
  </div>
);
Gun.defaultProps = {
  gunAdi: "Bilgi Yok"
}

Gun.propTypes = {
  gunAdi: PropTypes.string.isRequired
}

export default Gun;
