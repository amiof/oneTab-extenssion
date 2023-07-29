import React, { FC } from "react";
import { useState, useEffect } from "react";
interface Props {
  urls:{url:string,favIconUrls:string|undefined}  ;
}

const Favicon: FC<Props> = ({ urls:{url} }) => {
  const [faviconUrl, setFaviconUrl] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFavicon() {
      try {
        const faviconUrl = new URL(`https://s2.googleusercontent.com/s2/favicons?domain_url=${url}`);
        const response = await fetch(faviconUrl.toString());
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);

        setFaviconUrl(imageUrl);
      } catch (error) {
        console.error(`this url have errro : ${url}: ${error}`);
      }
    }

    fetchFavicon();

  }, [url]);

  if (!faviconUrl) {
    return null;
  }

  return (
    <div>
  <img src={faviconUrl} style={{opacity:"1.0", width:"16px", height:"16px"}}  />
    </div>
  );
};
export default Favicon;
