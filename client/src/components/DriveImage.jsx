import React, { useEffect, useState } from "react";

function DriveImage({ url, className }) {
  const [orgUrl, setOrgUrl] = useState(url);
  useEffect(() => {
    convertGoogleDriveUrl();
  }, []);

  function convertGoogleDriveUrl() {
    const match = url.match(/\/file\/d\/([^/]+)/);
    if (match) {
      const imageId = match[1];
      const directUrl = `https://drive.google.com/uc?export=view&id=${imageId}`;
      // console.log("DRIVE IMG AFTER CHANGE " + directUrl);
      setOrgUrl(directUrl);
    } else {
      console.log("It is a normal image");
      setOrgUrl(url);
    }
  }

  return <img src={orgUrl} alt="Article Cover" className={className} />;
}

export default DriveImage;
