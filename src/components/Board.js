import React from 'react';
import Square  from './Square'

const Board = () => {
    return (
        <div>
            <div>
                <Square value ={0} /> 
                <Square value ={ 21} /> 
                <Square value ={ 21} /> 
            </div>
            <div >
                <Square value ={ 21} /> 
                <Square value ={ 21} /> 
                <Square value ={ 21} /> 
            </div>
            <div>
                <Square value ={ 21} /> 
                <Square value ={ 21} /> 
                <Square value ={ 21} /> 
                
            </div>
            

        </div>
    )
}

export default Board
