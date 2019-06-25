import React from 'react';
import './counter.css';

const Counter = ({counter, inc, dec, zero}) => {
    return (
        <div className='bcgCounter'>
			<div className='counter'>
				{counter}
			</div>

			<div className='row'>
					<button  onClick={inc} className='btnInc'>
							<img src="./img/plus.png" alt="plus"/>
					</button>
			
                    <button  onClick={dec} className='btnDec'>
                        <img src="./img/minus.png" alt="minus"/>
                    </button>
        
                    <button  onClick={zero} className='btnZero'>
                            <img src='./img/topArrow.png' alt="topArrow"/>
                            <img src='./img/bottomArrow.png' alt="bottomArrow"/>
                    </button>
			</div>
		</div>
		
    )
}

export default Counter;