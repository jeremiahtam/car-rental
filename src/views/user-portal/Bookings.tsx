import { DashboardContainer } from "../../components/DashboardContainer";
import { GoSearch } from "react-icons/go";
import { PaginationComponent } from "../../components/PaginationComponent";
import { UserViewRideDetailsModal } from "../../components/UserViewRideDetailsModal";
import { useState } from "react";

export const Bookings = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <DashboardContainer>
      <div className="text-lg font-semibold my-4 text-gray-600">Bookings</div>
      <div className="flex flex-row justify-between items-center space-x-4">
        <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white dark:bg-gray-900">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <GoSearch />
            </div>
            <input
              type="text"
              id="table-search-users"
              className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for users"
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-3 py-2">
                Destination
              </th>
              <th scope="col" className="px-3 py-2">
                Price
              </th>
              <th scope="col" className="px-3 py-2">
                Status
              </th>
              <th scope="col" className="px-3 py-2">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="flex items-center px-3 py-2 text-gray-900 whitespace-nowrap dark:text-white">
                <div className="text-base font-semibold">Choba Campus</div>
              </td>
              <td className="px-3 py-2">NGN 200,000.00</td>
              <td className="px-3 py-2">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                  Completed
                </div>
              </td>
              <td className="px-3 py-2">
                <span
                  data-modal-target="editUserModal"
                  data-modal-show="editUserModal"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                  onClick={() => setOpenModal(true)}
                >
                  View Details
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <PaginationComponent />
      <UserViewRideDetailsModal
        openModal={openModal}
        setOpenModal={() => setOpenModal(!openModal)}
      />
    </DashboardContainer>
  );
};
