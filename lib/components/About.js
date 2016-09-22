import  React from 'react';
import DocumentMeta from 'react-document-meta';
export default class About extends React.Component{
  render(){

    const meta = {
      title: 'About page'
    };

    return (
            <div>
             <DocumentMeta {...meta} />
              <h1> About Page info {this.props.params.index}</h1>
            </div>
    );
  }
};
