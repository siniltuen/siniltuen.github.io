import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types'


class Saat extends Component {


    render() {
        const { alanAdi, defaultValue } = this.props;
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
                />
            </div>
        );
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
