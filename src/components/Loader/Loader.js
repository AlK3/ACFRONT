import React from 'react';

export const Loader = () => (
    <div style={{display: 'flex', justifyContent: 'center', margin: '1rem'}}>
        <div className="lds-dual-ring" />
    </div>
);