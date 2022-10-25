import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Music from './components/Navbar/Music/Music';
import News from './components/Navbar/News/News';
import Setting from './components/Navbar/Setting/Setting';

const App =(props)=> {
  return (
    <BrowserRouter>
    <div className='app_wrapper'>
      <Header /> 
      <Navbar />
      <div className='app_wrapper_content'>
    <Routes>
    <Route path="/dialogs/*" element= {<Dialogs dialogsData = {props.dialogsData} messagesData = {props.messagesData} />}/>
    <Route path="/profile" element= { <Profile postsData = {props.postsData} />} />
      <Route path="/news" element={<News/>}/>
      <Route path="/music" element={<Music/>}/>
      <Route path="/setting" element={<Setting/>}/>
    </Routes>
     </div>
    </div>
    </BrowserRouter>
  );
} 

export default App;