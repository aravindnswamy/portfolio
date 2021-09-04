import React, { useEffect } from 'react';

export default function LinkedIn() {
    useEffect(() => {
      const script = document.createElement('script');
  
      script.src = 'https://platform.linkedin.com/badges/js/profile.js';
      script.async = true;
      script.defer = true;
  
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  
    return (
      <div>
        <div
          class="badge-base LI-profile-badge"
          data-locale="en_US"
          data-size="medium"
          data-theme="light"
          data-type="VERTICAL"
          data-vanity="aravind-n-753b41112"
          data-version="v1"
        >
         {/* <a
            class="badge-base__link LI-simple-link"
            href="https://www.linkedin.com/in/aravind-n-753b41112/"
          /> */}
        </div>
      </div>
    );
  }