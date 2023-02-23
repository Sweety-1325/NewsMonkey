
import './App.css';

import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App=(()=>{
const [progress, setProgress] = useState(0)
  
  //apiKey='dd37b374a4ce4b3e8ad2592434bf291b';//Sweety
  const apiKey=process.env.REACT_APP_news_api;

  //apiKey=${props.apiKey};//LOVELY
  const pageSize=9;
  
  
    
    //state is an object
    
    return (
      <>
      <LoadingBar
        color='#1bc24a'
        height={2}
        progress={progress}
        
      />
    <div>
      
    <Router>
    
      <Navbar/>
      
      
    
    <Routes>
      {/* //if we give a key over here react will understand that we need to remount our components else it will not remount the new props and new page will be loaded after reloading */}
          <Route exact path="/" element={<News setProgress={setProgress}  apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route exact path="/business" element={<News setProgress={setProgress}  apiKey={apiKey} key="business"  pageSize={pageSize} country="in" category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress}  apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}></Route>
          <Route exact path="/general" element={<News setProgress={setProgress}  apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route exact path="/health" element={<News setProgress={setProgress}  apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>}></Route>
          <Route exact path="/science" element={<News setProgress={setProgress}  apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>}></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress}  apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>}></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress}  apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>}></Route>
        </Routes>
    
    </Router>
    </div>
    </>
    )
  
})
export default App;