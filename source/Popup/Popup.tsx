import * as React from 'react';
import AddUrl from './components/AddUrl';
import AllUrls from './components/AllUrls';
import SideBar from './components/Sidebar';
import './styles.scss';


const Popup: React.FC = () => {
  const [Click, setClick] = React.useState<string>("notClicked")
  console.log(Click)
  const urlProps = {
    setClick: setClick

  }
  return (
    <div className='container'>
      <div className='title'>
        <h2 >ONE-Tab</h2>
        <div className='divider'></div>
      </div>
      <div className='popUp'>
        <SideBar {...urlProps} />
      </div >
      <div className='content'>
        {Click == "addUrl" ? <AddUrl></AddUrl> : null}
        {Click == "removeUrl" ? <p className='log'>{Click}</p> : null}
        {Click == "urls"||Click=="notClicked" ? <AllUrls></AllUrls> : null}
      </div>
    </div>
  );
};

export default Popup;
