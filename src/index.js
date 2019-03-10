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
         top: 'Top',
         bottom: 'Bottom'
      }
      this.updateState = this.updateState.bind(this);

      this.updateState2 = this.updateState2.bind(this);



   };
   updateState(e) {
      this.setState({top: e.target.value});
   }

   updateState2(c) {
   		this.setState({bottom: c.target.value});
   }

   render() {
      return (
         <div >
         	<div>
         	<input type = "text" value = {this.state.top} 
               onChange = {this.updateState} />
            <input type = "text" value = {this.state.bottom}
            	onChange = {this.updateState2} />
         	</div>
          

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


