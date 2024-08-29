import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';
const Main =()=>{
  return(
     <div>
     <Header/>
     </div>
  );
}

ReactDOM.render(<Main/>,document.getElementById('root'));