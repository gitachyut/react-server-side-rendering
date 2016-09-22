import  React from 'react';
import { Link } from 'react-router';
import DocumentMeta from 'react-document-meta';
export default class Home extends React.Component{

  // constructor (props, context) {
  //
  //     super(props, context);
  //     this.state = {
  //         name: context.data.name,
  //         age: context.data.age,
  //         address : context.data.address
  //     };
  // }


  //  componentDidMount(){
  //      this.setState({
  //        name  :this.props.name,
  //        age : this.props.age
  //      });
  //  }

  btnClickd(){
    alert('hello world');
  }

  render(){
    const meta = {
     title: 'Some Meta Title',
     description: 'I am a description, and I can create multiple tags',
     canonical: 'http://example.com/path/to/page',
     meta: {
       charset: 'utf-8',
       name: {
         keywords: 'react,meta,document,html,tags'
       }
     }
   };
    return (
      <div>
       <DocumentMeta {...meta} />
        <button onClick={this.btnClickd.bind(this)}>Click Me Here </button>
      </div>

    )
  }

};
