import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Saat from './Saat';
import CancelIcon from '@material-ui/icons/Cancel';
import BasicTimePicker from './BasicTimePicker';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { arttir, azalt } from '../store/actions/counter';




function GirisCikis(props) {

    const count = useSelector((state) => state.counter.girisCikisSayisi[props.id]);

    const dispatch = useDispatch();

    const { girisCikisSayisi, defaultValue } = props;
    var girisAdi = "Giriş Saati - ";
    var cikisAdi = "Çıkış Saati - ";


    return (
        <div className="girisCikis" style={{ width: 175 }}>
            <div className="card">

                <div className="card-header d-flex">
                    <h5 className="d-inline"> Günlük Giriş Çıkış - {girisCikisSayisi} </h5>
                    <i className="far fa-trash-alt" style={{ cursor: 'pointer', marginLeft: 5 }} onClick={() => dispatch(azalt(props.id)
                    )}>
                    </i>
                </div>

                <div className="card-body">
                    <Saat alanAdi={girisAdi + girisCikisSayisi} />
                    <Saat alanAdi={cikisAdi + girisCikisSayisi} />
                    {/* <BasicTimePicker /> */}
                    {/* <BasicTimePicker /> */}
                </div>

            </div>

        </div >


    )
}



// class GirisCikis extends Component {

//     render() {


//         const { girisCikisSayisi, defaultValue } = this.props;
//         var girisAdi = "Giriş Saati - ";
//         var cikisAdi = "Çıkış Saati - ";
//         return (

//             <div className="girisCikis" style={{ width: 175 }}>
//                 <div className="card">

//                     <div className="card-header d-flex">
//                         <h5 className="d-inline"> Günlük Giriş Çıkış - {girisCikisSayisi} </h5>
//                         <i className="far fa-trash-alt" style={{ cursor: 'pointer', marginLeft: 5 }} onClick={this.removeGirisCikis}></i>
//                     </div>

//                     <div className="card-body">
//                         <Saat alanAdi={girisAdi + girisCikisSayisi} />
//                         <Saat alanAdi={cikisAdi + girisCikisSayisi} />
//                         {/* <BasicTimePicker /> */}
//                         {/* <BasicTimePicker /> */}
//                     </div>

//                 </div>

//             </div >


//         );

//     }

//     removeGirisCikis = () => {
//         this.setState({
//             // if(numGirisCikis) {
//             //     numGirisCikis: this.state.numGirisCikis - 1;

//             // }
//         });
//     }

// }



// GirisCikis.defaultProps = {
//     alanAdi: "Bilgi Yok",
//     defaultValue: ""
// }
// GirisCikis.propTypes = {
//     alanAdi: PropTypes.string.isRequired,
//     defaultValue: PropTypes.string.isRequired
// }
export default GirisCikis;
