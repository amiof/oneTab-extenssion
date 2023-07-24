import React from 'react';
import { browser } from 'webextension-polyfill-ts';

const OpenUrls = () => {
  const storage=browser.storage.local.get("userdata")
  storage.then((data)=>{console.log(data.userdata)})
  return <div>openUrls</div>;
};

export default OpenUrls;

