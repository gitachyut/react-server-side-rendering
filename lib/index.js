import express from 'express';
var ERoute = express.Router();
var app = new express();
import  path from 'path';
import DataWraper from './components/DataWraper';
import  React from 'react';
import  ReactDOMServer  from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './components/route';
import DocumentMeta from 'react-document-meta';

var Home = ERoute.get('*',function(req,res){

  app.get('/like',(req,res)=>{
    res.send('zdssd')
  })

  match({ routes, location: req.url },
      (err, redirect, props) => {
        console.log('============='+req.url+'==========');
        if (err) {
          res.status(500).send(error.message);
        } else if (redirect) {
          res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (props) {
          // var initialProps = {};
          // initialProps['name'] = 'achyut';
          var initialProps = {
            name:'achyut',
            address : 'sipajhar assam',
            age : 26
          };


          var  initstate = JSON.stringify(initialProps);
          const x = ReactDOMServer.renderToString(
            <DataWraper data={initialProps}>
              <RouterContext {...props} />
            </DataWraper>);
            
            // for meta tags
            var meta =  DocumentMeta.renderAsHTML();

          res.render('index.ejs',{x,initstate,meta});
        } else {
          res.status(404).render('nopage.ejs');
        }

    });


});


app.use(express.static(path.join(__dirname, '../public')))
    .use(Home);



app.listen(3000,function(req,res){
  console.log('server is running');
})
