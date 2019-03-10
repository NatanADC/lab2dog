import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import dog from './dog.jpg';
//import App from './App';
//import * as serviceWorker from './serviceWorker';


class DogeMeme extends React.Component{
	constructor(props) {
      super(props);
      
      this.state = {
         top: 'EASY PEASY',
         bottom: 'LEMON SQUEEZY'
      }


   };


   render() {
      return (
         <div >
          
            <div className= "bg">
            	<div class= "top myfont" >
            	{this.state.top}
            	</div>
            	<div class="myfont bottom">
            	{this.state.bottom}
            	</div>
            </div>

         </div>

      );
   }
}

ReactDOM.render(<DogeMeme />, document.getElementById('root'));


