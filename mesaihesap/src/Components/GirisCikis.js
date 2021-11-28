import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Saat from './Saat';
import CancelIcon from '@material-ui/icons/Cancel';


class GirisCikis extends Component {

    render() {

        const { girisCikisSayisi, defaultValue } = this.props;
        var girisAdi = "Giriş Saati - ";
        var cikisAdi = "Çıkış Saati - ";
        return (

            <div className="girisCikis" style={{ width: 175 }}>
                <div className="card">

                    <div className="card-header d-flex">
                        <h5 className="d-inline"> Günlük Giriş Çıkış - {girisCikisSayisi} </h5>
                        <i class="far fa-trash-alt" style={{ cursor: 'pointer', marginLeft: 5 }} onClick={this.removeGirisCikis}></i>
                    </div>

                    <div className="card-body">
                        <Saat alanAdi={girisAdi + girisCikisSayisi} />
                        <Saat alanAdi={cikisAdi + girisCikisSayisi} />
                    </div>

                </div>

            </div >


        );

    }

    removeGirisCikis = () => {
        this.setState({
            // if(numGirisCikis) {
            //     numGirisCikis: this.state.numGirisCikis - 1;

            // }
        });
    }

}
GirisCikis.defaultProps = {
    alanAdi: "Bilgi Yok",
    defaultValue: ""
}
GirisCikis.propTypes = {
    alanAdi: PropTypes.string.isRequired,
    defaultValue: PropTypes.string.isRequired
}
export default GirisCikis;
