import  React from 'react';
import DocumentMeta from 'react-document-meta';
export default class Features extends React.Component{
  render(){
    const meta = {
      title: 'Featured page'
    };
    return (
            <div>
             <DocumentMeta {...meta} />
              <h1>Features Features Features Features Features Features Features Features Page</h1>
            </div>
    );
  }
};
