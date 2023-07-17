import React, {useState, useEffect} from 'react';
import './scss/allUrls.scss';
import UrlCard from './UrlCard';

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

export type Turls = {
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

  console.log("outSide", urls[0]);


  return (
    <>
      {urls.map((url) => (
        <UrlCard key={url.id} {...url}></UrlCard>
      ))}
    </>
  );
};

export default AllUrls;
