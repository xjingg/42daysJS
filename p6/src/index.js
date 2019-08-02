import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';

import Header from './components/header';
import NewsList from './components/news_list';
class App extends Component{

    state={
        news: JSON
    }

 render(){
     return(
     <div>
     <Header/>
     <NewsList news={this.state.news}/>
     </div>
 )
}
}


ReactDOM.render(<App/>, document.getElementById('root'));

