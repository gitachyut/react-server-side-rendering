import  React from 'react';
import { Link } from 'react-router';
export default class App extends React.Component{

  constructor (props, context) {

      super(props, context);
      this.state = {
          name: context.data.name,
          age: context.data.age,
          address : context.data.address
      };
  }


  //  componentDidMount(){
  //      this.setState({
  //        name  :this.props.name,
  //        age : this.props.age
  //      });
  //  }

  render(){
    return (

        <div>
        <h2>{this.state.name}, {this.state.age}  {this.state.address}</h2>
           <ul>
             <li><Link to="/">Home</Link></li>
             <li><Link to={"/foo/about/"+this.state.age}>About</Link></li>
             <li><Link to="/foo/features">Features</Link></li>
           </ul>
           {this.props.children}
        </div>
    )
  }

};

App.contextTypes = {
    data: React.PropTypes.object.isRequired
};
