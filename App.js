import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter.jsx'
import MyJumbotron from './components/Welcome';

function App() {
  return (
      <>
        <MyNavbar />
        <MyJumbotron />
        <MyFooter />
      </>
  );
}

export default App;
