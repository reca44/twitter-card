import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Datos = ({ setData }) => {
    useEffect(() => {
        axios.get('http://localhost:3000/datos')
            .then(response => {
                setData(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return null;
}

export default Datos;
