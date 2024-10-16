/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Modal, Input, Select, Form, Button } from "antd";

const { Option } = Select;

const AddressModal = ({ visible, onClose, onSave, initialValues }) => {
  const [addressDetails, setAddressDetails] = useState({
    id: null, // ID will be set on save
    name: "",
    email: "",
    mobile: "",
    addressLine1: "",
    addressLine2: "",
    building: "",
    pincode: "",
    state: "",
    city: "",
    deliveryType: "",
  });

  useEffect(() => {
    if (initialValues) {
      setAddressDetails(initialValues);
    } else {
      // Reset to empty values if no initial values are provided
      setAddressDetails({
        id: null,
        name: "",
        email: "",
        mobile: "",
        addressLine1: "",
        addressLine2: "",
        building: "",
        pincode: "",
        state: "",
        city: "",
        deliveryType: "",
      });
    }
  }, [initialValues, visible]); // Reset when the modal opens

  const handleChange = (name, value) => {
    setAddressDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (addressDetails.name.trim() && addressDetails.email.trim()) {
      // Assign a new ID only if it's a new address
      if (!addressDetails.id) {
        addressDetails.id = Date.now(); // Simple ID generation
      }
      onSave(addressDetails);
      onClose(); // Close the modal after saving
    }
  };

  return (
    <Modal
      title="Add/Edit Address"
      visible={visible}
      onCancel={onClose}
      footer={null}
      centered
    >
      <Form layout="vertical">
        <Form.Item label="Name" required>
          <Input
            value={addressDetails.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Name"
          />
        </Form.Item>
        <Form.Item label="Email" required>
          <Input
            type="email"
            value={addressDetails.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item label="Mobile Number" required>
          <Input
            type="tel"
            value={addressDetails.mobile}
            onChange={(e) => handleChange("mobile", e.target.value)}
            placeholder="Mobile Number"
          />
        </Form.Item>
        <Form.Item label="Address Line 1" required>
          <Input
            value={addressDetails.addressLine1}
            onChange={(e) => handleChange("addressLine1", e.target.value)}
            placeholder="Address Line 1"
          />
        </Form.Item>
        <Form.Item label="Address Line 2">
          <Input
            value={addressDetails.addressLine2}
            onChange={(e) => handleChange("addressLine2", e.target.value)}
            placeholder="Address Line 2"
          />
        </Form.Item>
        <Form.Item label="Building">
          <Input
            value={addressDetails.building}
            onChange={(e) => handleChange("building", e.target.value)}
            placeholder="Building"
          />
        </Form.Item>
        <Form.Item label="Pincode" required>
          <Input
            value={addressDetails.pincode}
            onChange={(e) => handleChange("pincode", e.target.value)}
            placeholder="Pincode"
          />
        </Form.Item>
        <Form.Item label="State" required>
          <Input
            value={addressDetails.state}
            onChange={(e) => handleChange("state", e.target.value)}
            placeholder="State"
          />
        </Form.Item>
        <Form.Item label="City" required>
          <Input
            value={addressDetails.city}
            onChange={(e) => handleChange("city", e.target.value)}
            placeholder="City"
          />
        </Form.Item>
        <Form.Item label="Delivery Type">
          <Select
            value={addressDetails.deliveryType}
            onChange={(value) => handleChange("deliveryType", value)}
            placeholder="Select Delivery Type"
          >
            <Option value="home">Home</Option>
            <Option value="office">Office</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleSave}>
            Save Address
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddressModal;

// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import { Modal, Input, Select, Form, Button } from "antd";

// const { Option } = Select;

// const AddressModal = ({ visible, onClose, onSave, initialValues }) => {
//   const [addressDetails, setAddressDetails] = useState({
//     id: Date.now(), // Default ID, will be replaced for existing addresses
//     name: "",
//     email: "",
//     mobile: "",
//     addressLine1: "",
//     addressLine2: "",
//     building: "",
//     pincode: "",
//     state: "",
//     city: "",
//     deliveryType: "",
//   });

//   useEffect(() => {
//     if (initialValues) {
//       setAddressDetails(initialValues);
//     } else {
//       // Reset to default values if no initial values are provided
//       setAddressDetails({
//         id: Date.now(),
//         name: "",
//         email: "",
//         mobile: "",
//         addressLine1: "",
//         addressLine2: "",
//         building: "",
//         pincode: "",
//         state: "",
//         city: "",
//         deliveryType: "",
//       });
//     }
//   }, [initialValues]);

//   const handleChange = (name, value) => {
//     setAddressDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSave = () => {
//     if (addressDetails.name.trim() && addressDetails.email.trim()) {
//       onSave(addressDetails);
//       onClose(); // Close the modal after saving
//     }
//   };

//   return (
//     <Modal
//       title="Add/Edit Address"
//       visible={visible}
//       onCancel={onClose}
//       footer={null}
//       centered
//     >
//       <Form layout="vertical">
//         <Form.Item label="Name" required>
//           <Input
//             value={addressDetails.name}
//             onChange={(e) => handleChange("name", e.target.value)}
//             placeholder="Name"
//           />
//         </Form.Item>
//         <Form.Item label="Email" required>
//           <Input
//             type="email"
//             value={addressDetails.email}
//             onChange={(e) => handleChange("email", e.target.value)}
//             placeholder="Email"
//           />
//         </Form.Item>
//         <Form.Item label="Mobile Number" required>
//           <Input
//             type="tel"
//             value={addressDetails.mobile}
//             onChange={(e) => handleChange("mobile", e.target.value)}
//             placeholder="Mobile Number"
//           />
//         </Form.Item>
//         <Form.Item label="Address Line 1" required>
//           <Input
//             value={addressDetails.addressLine1}
//             onChange={(e) => handleChange("addressLine1", e.target.value)}
//             placeholder="Address Line 1"
//           />
//         </Form.Item>
//         <Form.Item label="Address Line 2">
//           <Input
//             value={addressDetails.addressLine2}
//             onChange={(e) => handleChange("addressLine2", e.target.value)}
//             placeholder="Address Line 2"
//           />
//         </Form.Item>
//         <Form.Item label="Building">
//           <Input
//             value={addressDetails.building}
//             onChange={(e) => handleChange("building", e.target.value)}
//             placeholder="Building"
//           />
//         </Form.Item>
//         <Form.Item label="Pincode" required>
//           <Input
//             value={addressDetails.pincode}
//             onChange={(e) => handleChange("pincode", e.target.value)}
//             placeholder="Pincode"
//           />
//         </Form.Item>
//         <Form.Item label="State" required>
//           <Input
//             value={addressDetails.state}
//             onChange={(e) => handleChange("state", e.target.value)}
//             placeholder="State"
//           />
//         </Form.Item>
//         <Form.Item label="City" required>
//           <Input
//             value={addressDetails.city}
//             onChange={(e) => handleChange("city", e.target.value)}
//             placeholder="City"
//           />
//         </Form.Item>
//         <Form.Item label="Delivery Type" required>
//           <Select
//             value={addressDetails.deliveryType}
//             onChange={(value) => handleChange("deliveryType", value)}
//             placeholder="Select Delivery Type"
//           >
//             <Option value="home">Home Delivery</Option>
//             <Option value="pickup">Pickup</Option>
//           </Select>
//         </Form.Item>
//         <Form.Item>
//           <Button type="primary" onClick={handleSave}>
//             Save
//           </Button>
//           <Button onClick={onClose} style={{ marginLeft: 8 }}>
//             Cancel
//           </Button>
//         </Form.Item>
//       </Form>
//     </Modal>
//   );
// };

// export default AddressModal;
