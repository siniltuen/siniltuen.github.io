import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types'

class Saat extends Component {


    render() {
        const { alanAdi, gunId, girisCikisId, defaultValue } = this.props;
        return (
            <div >
                <TextField
                    id="time"
                    label={alanAdi}
                    type="time"
                    defaultValue={defaultValue}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        step: 300, // 5 min
                    }}
                    style={{ width: 150, marginTop: 15 }}
                    onChange={evt => this.updatedValue(evt, alanAdi)}


                />

                {console.log()}


            </div>
        );
    }

    updatedValue(evt, alanAdi) {
        const val = evt.target.value;
        console.log(alanAdi + " " + val);
        console.log("GunId=" + this.props.gunId);
        console.log("girisCikisId=" + this.props.girisCikisId)
    }

}



Saat.defaultProps = {
    alanAdi: "Bilgi Yok",
    defaultValue: ""
}
Saat.propTypes = {
    alanAdi: PropTypes.string.isRequired,
    defaultValue: PropTypes.string.isRequired
}
export default Saat;