import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";


import { useState } from "react";
import { selectUserInfo, updateUserAsync } from "../userSlice";

export default function UserProfile() {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);
  const [selectedEditAddress, setselectedEditAddress] = useState(-1);
  const [showAddAddressForm, setShowAddAddressForm] = useState(false);
  // const handleRemove = (e, id) => {
  //   dispatch(deleteItemFromCartAsync(id));
  // };

  const handleAddress = (e) => {
    setSelectedAddress(userInfo.addresses[e.target.value]);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

const handleAdd=(address)=>{
    const newUser={...userInfo,addresses:[...userInfo.addresses,address]};
    dispatch(updateUserAsync(newUser))
}

  return (
    <>
      <div className="mx-auto mt-12 max-w-7xl px-4 py-6 sm:px-6 lg:px-8 ">
        <div className="border-b border-gray-200 px-4 py-6 sm:px-6">
          <h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900">
            Name:{userInfo.name ? userInfo.name : "New User"}
          </h1>
          <h3 className="text-4xl my-5 font-bold tracking-tight text-red-900">
            email address:{userInfo.email}
          </h3>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <button
          className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            onClick={(e) => {
              setShowAddAddressForm(true);
              setSelectEditIndex(-1);
            }}
          >
            Add New Address
          </button>
        </div>
        {showAddAddressForm ? (
          <form
            className="bg-white px-5 py-12 mt-12"
            onSubmit={handleSubmit((data) => {
            handleAdd(data);
            reset()
            })}
          >
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base/7 font-semibold text-gray-900">
                  Personal Information
                </h2>
                <p className="mt-1 text-sm/6 text-gray-600">
                  Use a permanent address where you can receive mail.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Full name
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        {...register("name", {
                          required: "name is required",
                        })}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        {...register("email", {
                          required: "email is required",
                        })}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Phone
                    </label>
                    <div className="mt-2">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        {...register("phone", {
                          required: "phone is required",
                        })}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-full">
                    <label
                      htmlFor="street"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Street address
                    </label>
                    <div className="mt-2">
                      <input
                        id="street"
                        name="street"
                        type="tel"
                        {...register("street", {
                          required: "street address is required",
                        })}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:col-start-1">
                    <label
                      htmlFor="city"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      City
                    </label>
                    <div className="mt-2">
                      <input
                        id="city"
                        name="city"
                        type="text"
                        {...register("city", {
                          required: "city  is required",
                        })}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="state"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      State / Province
                    </label>
                    <div className="mt-2">
                      <input
                        id="state"
                        name="state"
                        type="text"
                        {...register("state", {
                          required: "state  is required",
                        })}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="pinCode"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      ZIP / Postal code
                    </label>
                    <div className="mt-2">
                      <input
                        id="pinCode"
                        name="pinCode"
                        type="text"
                        {...register("pinCode", {
                          required: "pinCode is required",
                        })}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  onClick={(e) => setShowAddAddressForm(false)}
                  className="text-sm/6 font-semibold text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add Address
                </button>
              </div>
            </div>
          </form>
        ) : null}
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Adresses:
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Choose From Existing addresses
          </p>
          <ul role="list">
            {userInfo.addresses.map((address, index) => (
              <li
                key={index}
                className="flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200"
              >
                <div className="flex  gap-x-4">
                  <input
                    name="address"
                    type="radio"
                    value={index}
                    onChange={handleAddress}
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm/6 font-semibold text-gray-900">
                      {address.name}
                    </p>
                    <p className="mt-1 truncate text-xs/5 text-gray-500">
                      {address.street}
                    </p>
                    <p className="text-sm/6 text-gray-900">{address.pinCode}</p>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm/6 text-gray-900">
                    Phone: {address.phone}
                  </p>
                  <p className="text-sm/6 text-gray-900">{address.city}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
