import { Dropdown } from "flowbite-react";
import { DashboardContainer } from "../../components/DashboardContainer";
import { GoSearch } from "react-icons/go";

export const AdminBookings = () => {
  return (
    <DashboardContainer>
      <div className="text-lg font-semibold my-4 text-gray-600">Bookings</div>
      <div className="flex flex-row justify-between items-center space-x-4">
        <div>
          <Dropdown label={"Action"} inline>
            <Dropdown.Header>
              <span className="block text-sm">Take Action</span>
            </Dropdown.Header>
            <Dropdown.Item className="text-red-500">Delete</Dropdown.Item>
          </Dropdown>
        </div>
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
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Position
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <td
                // scope="row"
                className="flex items-center px-3 py-2 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="/docs/images/people/profile-picture-1.jpg"
                  alt="Jese"
                />
                <div className="ps-3">
                  <div className="text-base font-semibold">Neil Sims</div>
                  <div className="font-normal text-gray-500">
                    neil.sims@flowbite.com
                  </div>
                </div>
              </td>
              <td className="px-3 py-2">React Developer</td>
              <td className="px-3 py-2">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                  Online
                </div>
              </td>
              <td className="px-3 py-2">
                <a
                  href="/#"
                  type="button"
                  data-modal-target="editUserModal"
                  data-modal-show="editUserModal"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit user
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </DashboardContainer>
  );
};
