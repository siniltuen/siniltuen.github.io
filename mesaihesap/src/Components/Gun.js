import React, { Component } from 'react'
import { useForm } from 'react-hook-form';
import Saat from './Saat'
import TimePickers from './TimePicker'
import PropTypes from 'prop-types'
import GirisCikis from './GirisCikis'
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { arttir, azalt } from '../store/actions/counter';

// function AddGirisCikis(count, newCount, id, girisCikisListesi) {

//   const newArray = [...girisCikisListesi];
//   console.log("Add GirisCikis: ");
//   console.log(girisCikisListesi);
//   var i = girisCikisListesi.length;

//   console.log(count);

//   for (var j = 1; j < i + count + 1; j++) {
//     newArray.push(<GirisCikis key={j + i} number={j + i} girisCikisSayisi={j + i} id={id} />);

//   }

//   newCount = count;

//   console.log(newArray)

//   return (

//     newArray

//   );



// }


function Gun(props) {



  let girisCikisListesi = [];

  const GunIcerigi = props => (

    <div className="">
      {props.girisCikisListesi}
    </div>
  );

  const lastCount = 0;

  const count = useSelector((state) => state.counter.girisCikislar[props.id].count);
  const girisler = useSelector((state) => state.counter.girisCikislar[props.id].girisCikisListesi);

  console.log("Girisler");
  console.log(girisler);

  const dispatch = useDispatch();



  return (
    <div className="card gunCard">

      <div className="card-header d-flex justify-content-between">
        <h5 className="d-inline">{props.gunAdi} </h5>
        <i className="fas fa-undo-alt" style={{ cursor: 'pointer' }}></i>
      </div>

      <div className="card-body">

        <Saat alanAdi={"Toplam Çalışma Saati " + props.gunAdi} />
        <GunIcerigi gunAdi={props.gunAdi} girisCikisListesi={girisler} />
        <Button mt="5px" onClick={() => dispatch(arttir(props.id)
        )}> Giriş Çıkış Ekle</Button>
      </div>


    </div>
  );

}


/*
class Gun extends Component {



  state = {
    numGirisCikis: 0
  }

  addGirisCikis() {
  };

  render() {

    const { counter } = useSelector(state => state);

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
*/


export default Gun;
