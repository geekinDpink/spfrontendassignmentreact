import React from 'react';

export default function Header ({cartItems}){
    return(
        <header>
            <h2>
                Order Online
            </h2>
            <div>
                Due to Phase 2 Heightened Alert to contain the current COVID-19 outbreak situation, we only accept delivery. <br></br>
                We seek your kind understanding.
            </div>
            <div className="mt-3">
                <b>Item type(s) in Cart: </b>{cartItems.length}
            </div>
        </header>
    );
}