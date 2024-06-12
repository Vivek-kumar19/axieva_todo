import { useEffect } from 'react';

const useDeviceDetect = () => {
  useEffect(() => {
    const showAlert = () => {
      if (window.innerWidth > 768) {
        alert('Open it in phone for better user experience');
      }
    };

    const alreadyShown = window.sessionStorage.getItem('alertShown');

    if (!alreadyShown) {
      showAlert();
      window.sessionStorage.setItem('alertShown', 'true');
    }

    return () => {
      window.sessionStorage.removeItem('alertShown');
    };
  }, []);
};

export default useDeviceDetect;
