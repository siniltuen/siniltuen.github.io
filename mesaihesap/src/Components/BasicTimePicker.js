import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import PropTypes from 'prop-types'


export default function BasicTimePicker() {

    const [value, setValue] = React.useState(null);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
                ampm={false}
                label=""
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}
