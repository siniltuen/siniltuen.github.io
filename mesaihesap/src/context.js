import React, { Component } from 'react'

const GunContext = React.createContext();


export default class GunProvider extends Component {
    render() {
        return (

            <GunContext.Provider>

                {this.props.children}
            </GunContext.Provider>

        )
    }
}

export default GunConsumer = GunContext.Consumer;
