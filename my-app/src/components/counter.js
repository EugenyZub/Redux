import React from 'react';
import {connect} from 'react-redux';
import './counter.css';
import * as actions from '../actions';
// import {bindActionCreators} from 'redux';

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

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

export default connect(mapStateToProps, actions)(Counter);