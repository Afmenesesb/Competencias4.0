import React, { Component, useState, useEffect } from "react";


class Formulario extends React.Component {

    render() {
        return (
            
    <div id='radiobuttonset'>
        <input type='radio' id='myradio_1' name='radiobutton' value='1' />1
        <input type='radio' id='myradio_2' name='radiobutton' value='2' />2
        <input type='radio' id='myradio_3' name='radiobutton' value='3' />3 
    </div>

        )

    }
}
export default Formulario;

