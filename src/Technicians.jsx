import { FaRegEye } from "react-icons/fa";
import { HiOutlinePencil } from "react-icons/hi2";
import { useState } from "react";

const Technicians = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-[97%] min-h-screen flex justify-center mt-10 md:mt-15 lg:mt-20 px-4"> {/* Added padding for small screens */}
      <div className="w-full max-w-7xl">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6"> {/* Stack on small, row on larger */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-0">Technicians</h1> {/* Adjust text size */}
          <button
            className="bg-sky-500 hover:bg-sky-600 rounded text-white px-4 py-2 font-medium text-sm sm:text-xs" // Consistent button size
            onClick={openModal}
          >
            + Add Technician
          </button>
        </div>

        {isModalOpen && (
          <div
            className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50 p-4" // Added padding for modal on small screens
            onClick={closeModal}
          >
            <div
              className="bg-white p-6 rounded-lg w-full max-w-md md:max-w-lg lg:max-w-xl shadow-lg" // Responsive width
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center border-b pb-2 mb-5">
                <h2 className="text-xl font-bold">Add Technician</h2>
                <button
                  className="text-gray-900 text-3xl md:text-[45px] hover:text-gray-700" // Adjust icon size
                  onClick={closeModal}
                >
                  &times;
                </button>
              </div>

              {/* Modal Content */}
              <form>
                <div className="mb-4">
                  <label className="block mb-1 text-gray-700">Company Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
                    placeholder="Enter company name"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mb-4"> {/* Stack on small, row on larger */}
                  <div className="w-full sm:w-1/2"> {/* Take half width on small-medium screens */}
                    <label className="block mb-1 text-gray-700">Email</label>
                    <input
                      type="email"
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
                      placeholder="Enter email"
                    />
                  </div>

                  <div className="w-full sm:w-1/2"> {/* Take half width on small-medium screens */}
                    <label className="block mb-1 text-gray-700">Contact Number</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
                      placeholder="Enter contact number"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block mb-1 text-gray-700">ABN</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
                    placeholder="Enter ABN"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1 text-gray-700">Address</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
                    placeholder="Enter a location"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1 text-gray-700">Tags</label>
                  <div className="flex flex-wrap gap-2"> {/* Allow tags to wrap */}
                    <span className="bg-gray-200 px-2 py-1 rounded-full text-xs">Spraybooth</span> {/* Smaller text for tags */}
                    <span className="bg-gray-200 px-2 py-1 rounded-full text-xs">Warranty</span>
                    <span className="bg-gray-200 px-2 py-1 rounded-full text-xs">Gas</span>
                    <span className="bg-gray-200 px-2 py-1 rounded-full text-xs">Electrical</span>
                    <span className="bg-gray-200 px-2 py-1 rounded-full text-xs">Maintenance</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-[30px]"> {/* Stack buttons on small, row on larger */}
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto" // Full width on small, auto on larger
                  >
                    Add Technician
                  </button>
                  <button
                    type="button"
                    className="text-gray-500 hover:text-gray-700 mt-2 sm:mt-0 w-full sm:w-auto" // Full width on small, auto on larger
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="rounded-md border border-gray-200 overflow-x-auto bg-white p-4 sm:p-6"> {/* Adjust padding */}
          <table className="w-full text-sm text-left text-gray-700">
            <thead>
              <tr className="bg-sky-100 text-[#254a9c]">
                <th className="px-3 py-2 sm:px-6 sm:py-3">Company</th> {/* Adjust padding */}
                <th className="px-3 py-2 sm:px-6 sm:py-3 hidden md:table-cell">Tags</th> {/* Hide tags on small screens */}
                <th className="px-3 py-2 sm:px-6 sm:py-3">Email</th>
                <th className="px-3 py-2 sm:px-6 sm:py-3 hidden lg:table-cell">Contact Number</th> {/* Hide contact number on medium screens */}
                <th className="px-3 py-2 sm:px-6 sm:py-3 hidden sm:table-cell">Insurance</th> {/* Hide insurance on extra-small screens */}
                <th className="px-3 py-2 sm:px-6 sm:py-3 text-center">Actions</th> {/* Changed to Actions for clarity */}
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200 hover:bg-gray-50"> {/* Softer border */}
                <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">SXDA</td> {/* Increased font weight */}
                <td className="px-3 py-3 sm:px-6 sm:py-4 hidden md:table-cell">
                  <div className="flex flex-wrap gap-1 sm:gap-2"> {/* Allow tags to wrap in table */}
                    <span className="border border-gray-300 px-2 py-1 rounded-full text-xs">Spraybooth</span>
                    <span className="border border-gray-300 px-2 py-1 rounded-full text-xs">Electrical</span>
                    <span className="border border-gray-300 px-2 py-1 rounded-full text-xs">Maintenance</span>
                  </div>
                </td>
                <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm">anshu@sterlinginfotech.com</td> {/* Adjust text size */}
                <td className="px-3 py-3 sm:px-6 sm:py-4 hidden lg:table-cell text-xs sm:text-sm">9468590655</td>
                <td className="px-3 py-3 sm:px-6 sm:py-4 hidden sm:table-cell">
                  <span className="bg-green-500 text-white px-4 py-0.5 rounded-md text-xs">Valid</span> {/* Smaller badge */}
                </td>
                <td className="px-3 py-3 sm:px-6 sm:py-4 flex gap-1 sm:gap-2 justify-center"> {/* Adjust gap */}
                  <button className="p-1 sm:p-[5px] border rounded border-gray-400 hover:bg-gray-100 cursor-pointer text-sm"><HiOutlinePencil /></button> {/* Smaller buttons */}
                  <button className="p-1 sm:p-[5px] border rounded border-gray-400 hover:bg-gray-100 cursor-pointer text-sm"><FaRegEye /></button>
                </td>
              </tr>
              {/* You'll likely map over technician data here to render multiple rows */}
              <tr className="border-t border-gray-200 hover:bg-gray-50">
                <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">ABC Services</td>
                <td className="px-3 py-3 sm:px-6 sm:py-4 hidden md:table-cell">
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    <span className="border border-gray-300 px-2 py-1 rounded-full text-xs">Gas</span>
                    <span className="border border-gray-300 px-2 py-1 rounded-full text-xs">Warranty</span>
                  </div>
                </td>
                <td className="px-3 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm">abc@example.com</td>
                <td className="px-3 py-3 sm:px-6 sm:py-4 hidden lg:table-cell text-xs sm:text-sm">1234567890</td>
                <td className="px-3 py-3 sm:px-6 sm:py-4 hidden sm:table-cell">
                  <span className="bg-red-500 text-white px-4 py-0.5 rounded-md text-xs">Expired</span>
                </td>
                <td className="px-3 py-3 sm:px-6 sm:py-4 flex gap-1 sm:gap-2 justify-center">
                  <button className="p-1 sm:p-[5px] border rounded border-gray-400 hover:bg-gray-100 cursor-pointer text-sm"><HiOutlinePencil /></button>
                  <button className="p-1 sm:p-[5px] border rounded border-gray-400 hover:bg-gray-100 cursor-pointer text-sm"><FaRegEye /></button>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="mt-5 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 border-t border-gray-200 pt-4"> {/* Stack on small, row on larger */}
            <div className="mb-2 sm:mb-0 text-center sm:text-left">Page 1 of 1, showing 2 record(s) out of 2 total</div>
            <div className="flex gap-2">
              <button className="px-3 py-1 border rounded text-gray-400" disabled>
                &lt; Prev
              </button>
              <button className="px-3 py-1 border rounded text-gray-400" disabled>
                Next &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technicians;