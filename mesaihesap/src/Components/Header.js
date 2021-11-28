import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';

class Header extends Component {
    render() {


        return (
            <AppBar>
                <Box textAlign="center" bgcolor="primary.main" color="primary.contrastText" p={5}>
                    ESNEK MESAİ ÇALIŞMA SAATİ HESAPLA
            </Box>
            </AppBar>

        );

    }
}


export default Header;