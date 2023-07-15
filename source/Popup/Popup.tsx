import * as React from 'react';
import AddUrl from './components/AddUrl';
import SideBar from './components/Sidebar';
import './styles.scss';


const Popup: React.FC = () => {
  const [Click, setClick] = React.useState<string>("notclicked")
  console.log(Click)
  const urlProps = {
    setClick: setClick

  }
  return (
    <div className='container'>
      <h2 className='title'>ONE-Tab</h2>
      <div className='popUp'>
        <SideBar {...urlProps} />

      </div >
      <div className='content'>
        {Click == "addUrl" ? <AddUrl></AddUrl> : null}
        {Click == "removeUrl" ? <p className='log'>{Click}</p> : null}
      </div>
    </div>
  );
};

export default Popup;
