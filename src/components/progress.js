import React from 'react';
import './progress.css';

function Progress(){
    return(
        <main className="container">
            <div>
                <svg className='circle'>
                        <circle cx="100px" cy="100px" r="90px" />
                </svg>
            </div>
            {/* <p> This is progress okur! </p> */}
        </main>
    );
}

export default Progress;