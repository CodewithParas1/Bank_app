import React, { useState } from 'react';
import '../index.css'; 

const Home = () => {
  const [selectedAddress, setSelectedAddress] = useState('');
  const [livedDuration, setLivedDuration] = useState('');
  const [isManualPopupVisible, setManualPopupVisible] = useState(false);
  const [isChangePopupVisible, setChangePopupVisible] = useState(false);
  const [manualAddress, setManualAddress] = useState({
    houseName: '',
    houseNumber: '',
    streetName: '',
    townCity: '',
    postcode: ''
  });
  const [changeAddress, setChangeAddress] = useState({
    houseName: '',
    houseNumber: '',
    streetName: '',
    townCity: '',
    postcode: ''
  });
  const [manualErrors, setManualErrors] = useState({
    houseName: '',
    houseNumber: '',
    streetName: '',
    townCity: '',
    postcode: ''
  });
  const [changeErrors, setChangeErrors] = useState({
    houseName: '',
    houseNumber: '',
    streetName: '',
    townCity: '',
    postcode: ''
  });

  const handleAddressChange = (event) => {
    setSelectedAddress(event.target.value);
  };

  const handleDurationChange = (event) => {
    setLivedDuration(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;

    if (!selectedAddress) {
      isValid = false;
    }
    if (!livedDuration) {
      isValid = false;
    }

    if (isValid) {
      alert('Form submitted successfully!');
    } else {
      alert('Please fill out all fields.');
    }
  };

  const toggleManualPopup = () => {
    setManualPopupVisible(!isManualPopupVisible);
  };

  const toggleChangePopup = () => {
    if (!selectedAddress) {
      alert('Please select an address first.');
      return;
    }
    const addressParts = selectedAddress.split(', ');
    if (addressParts.length < 5) {
      alert('Invalid address format.');
      return;
    }
    setChangeAddress({
      houseName: addressParts[0],
      streetName: addressParts[1],
      townCity: addressParts[2],
      postcode: addressParts[3],
      houseNumber: '' // Assuming house number is not part of selected address
    });
    setChangePopupVisible(!isChangePopupVisible);
  };

  const handleManualAddressSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    const errors = {
      houseName: '',
      houseNumber: '',
      streetName: '',
      townCity: '',
      postcode: ''
    };

    if (!manualAddress.houseName) {
      isValid = false;
      errors.houseName = 'House or Building Name is required.';
    }
    if (!manualAddress.houseNumber) {
      isValid = false;
      errors.houseNumber = 'House or Building Number is required.';
    }
    if (!manualAddress.streetName) {
      isValid = false;
      errors.streetName = 'Street Name is required.';
    }
    if (!manualAddress.townCity) {
      isValid = false;
      errors.townCity = 'Town or City is required.';
    }
    if (!manualAddress.postcode) {
      isValid = false;
      errors.postcode = 'Postcode is required.';
    }

    if (isValid) {
      alert('Manual address submitted successfully!');
      setManualPopupVisible(false);
    } else {
      setManualErrors(errors);
    }
  };

  const handleChangeAddressSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    const errors = {
      houseName: '',
      houseNumber: '',
      streetName: '',
      townCity: '',
      postcode: ''
    };

    if (!changeAddress.houseName) {
      isValid = false;
      errors.houseName = 'House or Building Name is required.';
    }
    if (!changeAddress.houseNumber) {
      isValid = false;
      errors.houseNumber = 'House or Building Number is required.';
    }
    if (!changeAddress.streetName) {
      isValid = false;
      errors.streetName = 'Street Name is required.';
    }
    if (!changeAddress.townCity) {
      isValid = false;
      errors.townCity = 'Town or City is required.';
    }
    if (!changeAddress.postcode) {
      isValid = false;
      errors.postcode = 'Postcode is required.';
    }

    if (isValid) {
      alert('Address changed successfully!');
      setChangePopupVisible(false);
    } else {
      setChangeErrors(errors);
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-20 bg-blue-50 p-16 rounded-lg shadow-lg relative">
      <h1 className="text-2xl font-bold text-left mb-4">Home Address</h1>
      <p className="text-left mb-4 text-gray-800">Please provide your current India Home Address:</p>
      <hr className="mb-4" />

      <div className="mb-4">
        <label htmlFor="searchAddress" className="block text-gray-700">Search For Your Address:</label>
        <select 
          id="searchAddress" 
          name="searchAddress" 
          className="w-full p-2 border border-gray-300 rounded mt-2"
          value={selectedAddress}
          onChange={handleAddressChange}
        >
          <option value="">Select Address</option>
          <option value="123 Main St, Springfield, IL, 62704, USA">123 Main St, Springfield, IL, 62704, USA</option>
          <option value="456 Elm St, Metropolis, NY, 10001, USA">456 Elm St, Metropolis, NY, 10001, USA</option>
          <option value="789 Oak St, Smallville, KS, 67524, USA">789 Oak St, Smallville, KS, 67524, USA</option>
          <option value="101 Maple St, Gotham, NJ, 07030, USA">101 Maple St, Gotham, NJ, 07030, USA</option>
        </select>
        {selectedAddress && (
          <>
            <div id="selectedAddress" className="w-full p-2 border border-gray-300 rounded mt-2 whitespace-pre-line">
              Address: {selectedAddress}{"\n"}Lived Duration: {livedDuration}
            </div>
            <a href="#" id="changeAddressLink" className="block text-left mt-4 text-blue-500 hover:underline" onClick={toggleChangePopup}>Change Address</a>
          </>
        )}
      </div>

      {!selectedAddress && (
        <>
          <p id="manualEntryText" className="text-left mb-4 text-red-500">
            Please select an address or enter manually using the link below:
          </p>
          <a href="#" id="manualEntryLink" className="block text-left text-blue-500 hover:underline mb-4" onClick={toggleManualPopup}>
            Prefer to enter address manually 
          </a>
        </>
      )}

      <hr className="mb-4" />

      <div className="mb-4">
        <label htmlFor="livedDuration" className="block text-gray-700 text-left mb-4">How long have You lived at This Address?</label>
        <select id="livedDuration" name="livedDuration" className="w-full p-2 border border-gray-300 rounded mt-2" value={livedDuration} onChange={handleDurationChange}>
          <option value="">Select</option>
          <option value="6months">6 months</option>
          <option value="less6months">Less than 6 months</option>
          <option value="morethan6months">more than 6 months</option>
        </select>
      </div>

      <button id="submitButton" className="bg-blue-500 text-white p-2 rounded" onClick={handleSubmit}>Submit</button>

      <p className="text-sm text-gray-600 mt-4 text-center">
        Please check your details above. You won't be able to change it once submitted.
      </p>

      {/* Manual Address Popup */}
      {isManualPopupVisible && (
        <div id="popupFormManual" className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg max-w-md w-full relative">
            <button id="closeButtonManual" className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={toggleManualPopup}>&times;</button>
            <h2 className="text-xl font-bold mb-4">Enter Address Manually</h2>
            <form id="manualAddressForm" onSubmit={handleManualAddressSubmit}>
              <div className="mb-4">
                <label htmlFor="houseBuildingNameManual" className="block text-gray-700">House or Building Name:</label>
                <input 
                  type="text" 
                  id="houseBuildingNameManual" 
                  name="houseBuildingNameManual" 
                  className={`w-full p-2 border border-gray-300 rounded mt-2 ${manualErrors.houseName ? 'border-red-500' : ''}`}
                  value={manualAddress.houseName}
                  onChange={(e) => setManualAddress({ ...manualAddress, houseName: e.target.value })}
                />
                                {manualErrors.houseName && (
                  <p className="text-red-500 text-sm mt-1">{manualErrors.houseName}</p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="houseBuildingNumberManual" className="block text-gray-700">House or Building Number:</label>
                <input 
                  type="text" 
                  id="houseBuildingNumberManual" 
                  name="houseBuildingNumberManual" 
                  className={`w-full p-2 border border-gray-300 rounded mt-2 ${manualErrors.houseNumber ? 'border-red-500' : ''}`}
                  value={manualAddress.houseNumber}
                  onChange={(e) => setManualAddress({ ...manualAddress, houseNumber: e.target.value })}
                />
                {manualErrors.houseNumber && (
                  <p className="text-red-500 text-sm mt-1">{manualErrors.houseNumber}</p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="streetNameManual" className="block text-gray-700">Street Name:</label>
                <input 
                  type="text" 
                  id="streetNameManual" 
                  name="streetNameManual" 
                  className={`w-full p-2 border border-gray-300 rounded mt-2 ${manualErrors.streetName ? 'border-red-500' : ''}`}
                  value={manualAddress.streetName}
                  onChange={(e) => setManualAddress({ ...manualAddress, streetName: e.target.value })}
                />
                {manualErrors.streetName && (
                  <p className="text-red-500 text-sm mt-1">{manualErrors.streetName}</p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="townCityManual" className="block text-gray-700">Town or City:</label>
                <input 
                  type="text" 
                  id="townCityManual" 
                  name="townCityManual" 
                  className={`w-full p-2 border border-gray-300 rounded mt-2 ${manualErrors.townCity ? 'border-red-500' : ''}`}
                  value={manualAddress.townCity}
                  onChange={(e) => setManualAddress({ ...manualAddress, townCity: e.target.value })}
                />
                {manualErrors.townCity && (
                  <p className="text-red-500 text-sm mt-1">{manualErrors.townCity}</p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="postcodeManual" className="block text-gray-700">Postcode:</label>
                <input 
                  type="text" 
                  id="postcodeManual" 
                  name="postcodeManual" 
                  className={`w-full p-2 border border-gray-300 rounded mt-2 ${manualErrors.postcode ? 'border-red-500' : ''}`}
                  value={manualAddress.postcode}
                  onChange={(e) => setManualAddress({ ...manualAddress, postcode: e.target.value })}
                />
                {manualErrors.postcode && (
                  <p className="text-red-500 text-sm mt-1">{manualErrors.postcode}</p>
                )}
              </div>
              <div className="flex justify-end">
                <button type="button" id="cancelButtonManual" className="bg-gray-300 text-gray-700 p-2 rounded mr-2" onClick={toggleManualPopup}>Cancel</button>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Change Address Popup */}
      {isChangePopupVisible && (
        <div id="popupFormChange" className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg max-w-md w-full relative">
            <button id="closeButtonChange" className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={toggleChangePopup}>&times;</button>
            <h2 className="text-xl font-bold mb-4">Change Address</h2>
            <form id="changeAddressForm" onSubmit={handleChangeAddressSubmit}>
              <div className="mb-4">
                <label htmlFor="houseBuildingNameChange" className="block text-gray-700">House or Building Name:</label>
                <input 
                  type="text" 
                  id="houseBuildingNameChange" 
                  name="houseBuildingNameChange" 
                  className={`w-full p-2 border border-gray-300 rounded mt-2 ${changeErrors.houseName ? 'border-red-500' : ''}`}
                  value={changeAddress.houseName}
                  onChange={(e) => setChangeAddress({ ...changeAddress, houseName: e.target.value })}
                />
                {changeErrors.houseName && (
                  <p className="text-red-500 text-sm mt-1">{changeErrors.houseName}</p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="houseBuildingNumberChange" className="block text-gray-700">House or Building Number:</label>
                <input 
                  type="text" 
                  id="houseBuildingNumberChange" 
                  name="houseBuildingNumberChange" 
                  className={`w-full p-2 border border-gray-300 rounded mt-2 ${changeErrors.houseNumber ? 'border-red-500' : ''}`}
                  value={changeAddress.houseNumber}
                  onChange={(e) => setChangeAddress({ ...changeAddress, houseNumber: e.target.value })}
                />
                {changeErrors.houseNumber && (
                  <p className="text-red-500 text-sm mt-1">{changeErrors.houseNumber}</p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="streetNameChange" className="block text-gray-700">Street Name:</label>
                <input 
                  type="text" 
                  id="streetNameChange" 
                  name="streetNameChange" 
                  className={`w-full p-2 border border-gray-300 rounded mt-2 ${changeErrors.streetName ? 'border-red-500' : ''}`}
                  value={changeAddress.streetName}
                  onChange={(e) => setChangeAddress({ ...changeAddress, streetName: e.target.value })}
                />
                {changeErrors.streetName && (
                  <p className="text-red-500 text-sm mt-1">{changeErrors.streetName}</p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="townCityChange" className="block text-gray-700">Town or City:</label>
                <input 
                  type="text" 
                  id="townCityChange" 
                  name="townCityChange" 
                  className={`w-full p-2 border border-gray-300 rounded mt-2 ${changeErrors.townCity ? 'border-red-500' : ''}`}
                  value={changeAddress.townCity}
                  onChange={(e) => setChangeAddress({ ...changeAddress, townCity: e.target.value })}
                />
                {changeErrors.townCity && (
                  <p className="text-red-500 text-sm mt-1">{changeErrors.townCity}</p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="postcodeChange" className="block text-gray-700">Postcode:</label>
                <input 
                  type="text" 
                  id="postcodeChange" 
                  name="postcodeChange" 
                  className={`w-full p-2 border border-gray-300 rounded mt-2 ${changeErrors.postcode ? 'border-red-500' : ''}`}
                  value={changeAddress.postcode}
                  onChange={(e) => setChangeAddress({ ...changeAddress, postcode: e.target.value })}
                />
                {changeErrors.postcode && (
                  <p className="text-red-500 text-sm mt-1">{changeErrors.postcode}</p>
                )}
              </div>
              <div className="flex justify-end">
                <button type="button" id="cancelButtonChange" className="bg-gray-300 text-gray-700 p-2 rounded mr-2" onClick={toggleChangePopup}>Cancel</button>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

