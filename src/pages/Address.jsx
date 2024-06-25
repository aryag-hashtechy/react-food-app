import React, { useState } from "react";
import AddressCard from "../component/AddressCard";
import axios from "axios";
import { useEffect } from "react";
import { parseCookies } from "nookies";

const Address = () => {
  const [addressData, setAddressData] = useState();
  const cookies = parseCookies();

  const fetchAddressData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/address/getall-address",
        {
          headers: {
            Authorization: cookies.accessToken
              ? `Bearer ${cookies.accessToken}`
              : "",
          },
        }
      );
      // handle exception =...
      setAddressData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(addressData);

  useEffect(() => {
    fetchAddressData();
  }, []);

  return (
    <section className="addressList__main">
      <div className="mobile__container">
        <p className="addressList__text">Address</p>

        {addressData &&
          addressData.map((data) => (
            <AddressCard
              key={data.id}
              id={data.id}
              name="Mark"
              address={data.addressLine1}
              number="1234567890"
            />
          ))}
      </div>
    </section>
  );
};

export default Address;
