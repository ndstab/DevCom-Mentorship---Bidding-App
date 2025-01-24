import React, { useState } from "react";

function AddProduct() {
  const [formData, setFormData] = useState({
    ProductType: "",
    ProductImage: null,
    ProductDescription: "",
    MSP: "",
    MRA: "",
    SellDate: "",
    SellTime: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fromData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div>
          <label htmlFor="ProductType">Product Type </label>
          <input
            type="text"
            placeholder="eg. Table, Mobile Phone, Pen, etc"
            name="ProductType"
            value={ProductType}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="ProductImage">Product Image</label>
          <input
            type="file"
            name="ProductImage"
            accept="image/*"
            value={ProductImage}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="ProductDescription">Product Description</label>
          <input
            type="text"
            placeholder="Enter Product Description"
            name="ProductDescription"
            value={ProductDesciption}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="MSP">Minimum Selling Price</label>
          <input
            type="text"
            placeholder="Initial price of Product"
            name="MSP"
            value={MSP}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="MRA">Minimum raise amount</label>
          <input
            type="text"
            placeholder="Minimum raise"
            name="MRA"
            value={MRA}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="SellDate">Sell Date</label>
          <input
            type="date"
            name="SellDate"
            value={SellDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="SellTime">Sell Time</label>
          <input
            type="time"
            name="SellTime"
            value={SellTime}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddProduct;
