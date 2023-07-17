import * as React from 'react';
import Login from './components/Login';
import AllUrls from './components/AllUrls';
import SideBar from './components/Sidebar';
import './styles.scss';
import OpenUrls from './components/OpenUrls';
import AddTag from './components/AddTag';
import FavUrls from './components/FavUrls';
import SearchUrl from './components/Searchurl';

const Popup: React.FC = () => {
  const [Click, setClick] = React.useState<string>('notClicked');
  console.log(Click);
  const urlProps = {
    setClick,
  };
  return (
    <div className="container">
      <div className="title">
        <h2>ONE-Tab</h2>
        <div className="divider" />
      </div>
      <div className="popUp">
        <SideBar {...urlProps} />
      </div>
      <div className="content">
        {Click == 'login' ? <Login /> : null}
        {Click == 'urls' || Click == 'notClicked' ? <AllUrls /> : null}
        {Click == 'openUrls'  ? <OpenUrls/> : null}
        {Click == 'addTag'  ? <AddTag /> : null}
        {Click == 'favUrls'  ? <FavUrls /> : null}
        {Click == 'searchUrl'  ? <SearchUrl /> : null}
      </div>
    </div>
  );
};

export default Popup;
