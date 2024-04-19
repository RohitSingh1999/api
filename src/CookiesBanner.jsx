import React, { useState } from 'react';
import CookieConsent from 'react-cookie-consent';
import Cookies from 'js-cookie';

const CookiesBanner = () => {
  const [lang, setLang] = useState('en'); // Set your default language here

  // Function to handle cookie acceptance
  const handleAccept = () => {
    Cookies.set('cookieAccepted', 'true', { expires: 365 }); // Set cookie with a one-year expiry
  };

  // Function to close the cookie bar
  const closeCookieBar = () => {
    // Your logic to close the cookie bar
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <CookieConsent
      location="bottom"
      enableDeclineButton
      buttonText="Accept"
      declineButtonText="Close"
      style={{ background: '#000' }}
      cookieName="cookieAccepted"
      buttonStyle={{ color: '#fff', background: '#f3468e', fontSize: '16px', fontWeight: 'bold' }}
      declineButtonStyle={{ fontSize: '16px', fontWeight: 'bold' }}
      setDeclineCookie={false}
      onAccept={({ acceptedByScrolling }) => {
        if (!acceptedByScrolling) {
          handleAccept();
        }
      }}
      onDecline={() => closeCookieBar()}
    >
      <span style={{ display: 'inline-block' }}>
        We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
        <a href="/privacy" className="text-purple border-b font-bold" style={{ marginLeft: '5px', marginRight: '5px' }} onClick={scrollToTop}>
          Privacy Policy
        </a>
        and
        <a href="/terms" className="text-purple border-b font-bold" style={{ marginLeft: '5px', marginRight: '5px' }} onClick={scrollToTop}>
          term & condition
        </a>
      </span>
    </CookieConsent>
  );
};

export default CookiesBanner;
