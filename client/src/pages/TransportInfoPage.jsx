import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import FooterComponent from '../components/FooterComponent';
import TransportInfo from '../components/TransportationComponent/TransportInfo';

function TransportInfoPage() {
  return (
    <div>
      <CustomNavbar />
      <TransportInfo />
      <FooterComponent />
    </div>
  );
}

export default TransportInfoPage;