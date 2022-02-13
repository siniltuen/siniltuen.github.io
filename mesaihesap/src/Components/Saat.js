import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types'

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { arttir, azalt, saatKaydet } from '../store/actions/counter';


function Saat(props) {

    const { alanAdi, gunId, girisCikisId, defaultValue } = props;

    const dispatch = useDispatch();
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
                onChange={evt => UpdatedValue(dispatch, evt, props, alanAdi)}


            />

            {console.log()}


        </div>
    );

}


function UpdatedValue(dispatch, evt, props, alanAdi) {
    dispatch(saatKaydet(props));
    const val = evt.target.value;
    console.log(alanAdi + " " + val);
    console.log("GunId=" + props.gunId);
    console.log("girisCikisId=" + props.girisCikisId)

};

/*class Saat extends Component {


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
*/



// Saat.defaultProps = {
//     alanAdi: "Bilgi Yok",
//     defaultValue: ""
// }
// Saat.propTypes = {
//     alanAdi: PropTypes.string.isRequired,
//     defaultValue: PropTypes.string.isRequired
// }
export default Saat;
