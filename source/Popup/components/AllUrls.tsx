import React, {useState, useEffect} from 'react';
import './scss/allUrls.scss';

export type Tuser = {
  id: string;
  email: string;
  userName: string;
  first_name: string;
  last_name: string;
  password: string;
  age: number;
  JwtToken: string;
};

type Turls = {
  id: string;
  url: string;
  title: string;
  user: Tuser;
  createAt: string;
};
const AllUrls = () => {
  const [urls, setUrls] = useState<Turls[]>([]);

  function getDataUrls() {
    return fetch('http://localhost:3000/urls')
      .then((res) => res.json())
      .then((data) => {
        setUrls(data);
      });
  }

  useEffect(() => {
    getDataUrls();
  }, []);

  // console.log("outSide", urls);

  return (
    <>
      {urls.map((url) => (
        <p key={url.id}>{url.title}</p>
      ))}
    </>
  );
};

export default AllUrls;
