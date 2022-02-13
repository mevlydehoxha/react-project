// import Todo from'./components/Todo';
// import Modal from './components/Modal';
// import Backdrop from './components/Backdrop';

import { Route, Routes } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
return (
<div>
  <Layout>
    <Routes>
      <Route path='/' element={<AllMeetupsPage/>} />
      <Route path='/new-meetup' element={<NewMeetupPage/>} />
      <Route path='/favorites' element={<FavoritesPage/>} />
    </Routes>
 </Layout>
</div>

);



  // return (
  //   <div>
  //     <h1>My Todos</h1>
  //     <Todo text='Learn React' />
  //     <Todo text='Master React' />
  //     <Todo text='Explore the full React course' />
  //  </div>
  //  );
}

export default App;
