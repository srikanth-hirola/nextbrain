/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select } from "antd";
import AddressModal from "./modal/AddressModal";
import addressesData from "../../../data/addresses.json"; // Import the JSON file
import Payment from "./Payment";
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdOutlinePayments } from "react-icons/md";
const {Option} = Select;
const Checkout = ({ onBack }) => {
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isPayment, setIsPayment] = useState(false);
  const [isSelectAddress, setIsSelectAddress] = useState(false); // State to track checkbox

  const handleProceedToPayment = () => {
    setIsPayment(true);
  };

  useEffect(() => {
    // Load addresses from JSON file
    setSavedAddresses(addressesData);
  }, []);

  const handleSaveAddress = (newAddress) => {
    newAddress.id = savedAddresses.length + 1;
    setSavedAddresses((prevAddresses) => [...prevAddresses, newAddress]);
    setSelectedAddress(newAddress);
    setIsModalOpen(false);
  };

  const handleAddressSelect = (addressId) => {
    const address = savedAddresses.find((addr) => addr.id === addressId);
    setSelectedAddress(address);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const updatedAddress = {
      ...selectedAddress,
      name: e.target.name.value,
      email: e.target.email.value,
      mobile: e.target.mobile.value,
      addressLine1: e.target.addressLine1.value,
      addressLine2: e.target.addressLine2.value,
      building: e.target.building.value,
      pincode: e.target.pincode.value,
      state: e.target.state.value,
      city: e.target.city.value,
      deliveryType: e.target.deliveryType.value,
    };
    setSavedAddresses((prevAddresses) =>
      prevAddresses.map((address) =>
        address.id === selectedAddress.id ? updatedAddress : address
      )
    );
    setSelectedAddress(updatedAddress); // Update selected address
  };

  return (
    <div className="checkout-main">
      <div className="checkout-container">
        {isPayment ? (
          <Payment onBack={() => setIsPayment(false)} />
        ) : (
          <div className="checkout-content">
           <div className="sticy-linkss">
           <Link to="#" onClick={onBack} className="back-button">
              <IoArrowBackSharp style={{marginInline:'0.2rem 0.5rem'}} /> Cart
            </Link>
          
           </div>
          
            <div>
              <h2>Update Address to Proceed for payment</h2>
              <div className="ad-sec">
                <input
                  type="checkbox"
                  checked={isSelectAddress}
                  onChange={() => setIsSelectAddress(!isSelectAddress)}
                />
                <label style={{ marginLeft: 10 }}>
                  {isSelectAddress
                    ? ""
                    : "saved addresses "}
                </label>
                {isSelectAddress && (
                  <Select
                  style={{ width: "100%", marginBottom: 20 }}
                  placeholder="Select an address"
                  onChange={handleAddressSelect}
                  value={selectedAddress ? selectedAddress.id : undefined}
                >
                  {savedAddresses.map((address) => (
                    <Option key={address.id} value={address.id}>
                      {address.name} - {address.city}, {address.state}
                    </Option>
                  ))}
                </Select>
                )}
                <button className="ad-btn" onClick={() => setIsModalOpen(true)}>
                  Add New Address
                </button>
              </div>

              {selectedAddress && (
               <>
                <form onSubmit={handleFormSubmit} style={{ marginTop: 20 }}>
                  <div>
                    <label>Name:</label>
                    <input type="text" name="name" defaultValue={selectedAddress.name} required />
                  </div>
                  <div>
                    <label>Email:</label>
                    <input type="email" name="email" defaultValue={selectedAddress.email} required />
                  </div>
                  <div>
                    <label>Mobile:</label>
                    <input type="text" name="mobile" defaultValue={selectedAddress.mobile} required />
                  </div>
                  <div>
                    <label>Address Line 1:</label>
                    <input type="text" name="addressLine1" defaultValue={selectedAddress.addressLine1} required />
                  </div>
                  <div>
                    <label>Address Line 2:</label>
                    <input type="text" name="addressLine2" defaultValue={selectedAddress.addressLine2} />
                  </div>
                  <div>
                    <label>Building:</label>
                    <input type="text" name="building" defaultValue={selectedAddress.building} />
                  </div>
                  <div>
                    <label>Pincode:</label>
                    <input type="text" name="pincode" defaultValue={selectedAddress.pincode} required />
                  </div>
                  <div>
                    <label>State:</label>
                    <input type="text" name="state" defaultValue={selectedAddress.state} required />
                  </div>
                  <div>
                    <label>City:</label>
                    <input type="text" name="city" defaultValue={selectedAddress.city} required />
                  </div>
                  <div>
                    <label>Delivery Type:</label>
                    <Select width={"100%"} name="deliveryType" defaultValue={selectedAddress.deliveryType}>
                      <Option value="home">Home</Option>
                      <Option value="office">Office</Option>
                      <Option value="other">Other</Option>
                    </Select>
                  </div>
                 
                </form>
              
               </>
              )}

            </div>
            <div className="sticky-links">
                <Link to="#" onClick={handleProceedToPayment} className="proceed-sticky">
                 <MdOutlinePayments style={{marginInline:'0.2rem 0.5rem'}} /> Payment
                 </Link>
                </div>
          </div>
          
        )}
       
      </div>
      <AddressModal
        visible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveAddress}
        initialValues={null} // Pass null to ensure the modal starts empty
      />
    </div>
  );
};

export default Checkout;
