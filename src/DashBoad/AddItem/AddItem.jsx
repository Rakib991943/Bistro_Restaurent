import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { useForm } from 'react-hook-form';

const AddItem = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {

    console.log(data)
  }
  return (
    <div>
      <SectionTitle
        subHeading="whats new?"
        heading="add an item"
      ></SectionTitle>
      {/* <h1 className='text-3xl text-center'>Please add Item</h1> */}


      <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-2xl mx-auto">
        <form className="space-y-4">
          <div>
            <label className="block font-medium">Recipe name*</label>
            <input
              type="text"
              placeholder="Recipe name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Category*</label>
              <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400">
                <option>Category</option>
                <option>Appetizer</option>
                <option>Main Course</option>
                <option>Dessert</option>
              </select>
            </div>
            <div>
              <label className="block font-medium">Price*</label>
              <input
                type="text"
                placeholder="Price"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium">Recipe Details*</label>
            <textarea
              placeholder="Recipe Details"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400 h-24"
            ></textarea>
          </div>

          <div className="flex items-center space-x-4">
            <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
          </div>
          <div className='ml-28'>
            <select defaultValue="Salad" className="select ">
              <option disabled={true}>Pick a browser</option>
              <option>Salad</option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Dessert</option>
              <option>Drinks</option>
            </select>
          </div>
          <button className="bg-yellow-700 text-white px-4 py-2 rounded-md font-semibold flex items-center gap-2">
            Add Item 🍽️
          </button>
        </form>
      </div>

    </div>
  );
};

export default AddItem;