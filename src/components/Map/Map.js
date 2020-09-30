import React, { useState } from 'react';
import { VectorMap } from '@south-paw/react-vector-maps';
import vietnam from './VietNam.json';
import './Map.css';

function Map() {
    const [focused, setFocused] = useState('none');
    console.log(focused);
    return (
        <div className="map">
            <VectorMap {...vietnam} onFocus={({ target }) => setFocused(target.attributes.name.value)} />;
        </div>
    )
}

export default Map
