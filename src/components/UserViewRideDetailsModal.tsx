import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";

interface UserViewRideDetailsModalProps {
  openModal: boolean;
  setOpenModal: () => void;
}
export const UserViewRideDetailsModal = (
  props: UserViewRideDetailsModalProps
) => {
  return (
    <>
      <Modal
        dismissible
        show={props.openModal}
        onClose={props.setOpenModal}
        size="lg"
        className="max-h-full!"
      >
        <Modal.Header className="text-sm">Journey Details</Modal.Header>
        <div className="p-4 md:p-5 space-y-4">
          <div className="space-y-2">
            <div className="text-base leading-relaxed p-2 rounded-lg border-solid border-[1px] border-gray-200">
              <div className="text-sm text-gray-400">Driver</div>
              <div className="text-sm font-semibold">Peter Mark</div>
            </div>

            <div className="text-base leading-relaxed p-2 rounded-lg border-solid border-[1px] border-gray-200">
              <div className="text-sm text-gray-400">From</div>
              <div className="text-sm font-semibold">
                23, Choba Road, Rivers State
              </div>
            </div>
            <div className="text-base leading-relaxed p-2 rounded-lg border-solid border-[1px] border-gray-200">
              <div className="text-sm text-gray-400">To</div>
              <div className="text-sm font-semibold">
                23, Choba Road, Rivers State
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center space-x-2">
              <div className="md:basis-1/2 text-base leading-relaxed p-2 rounded-lg border-solid border-[1px] border-gray-200">
                <div className="text-sm text-gray-400">Start Date</div>
                <div className="text-sm font-semibold">23rd November, 2021</div>
              </div>
              <div className="md:basis-1/2 text-base leading-relaxed p-2 rounded-lg border-solid border-[1px] border-gray-200">
                <div className="text-sm text-gray-400">End Date</div>
                <div className="text-sm font-semibold">23rd November, 2021</div>
              </div>
            </div>
          </div>
          <div className="my-4">
            <span className="text-sm text-yellow-900 bg-yellow-50 p-3 rounded-lg">
              NGN 200,000.00
            </span>
          </div>
        </div>
        {/* <Modal.Footer>
          <button
            type="button"
            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Proceed
          </button>
          <button
            type="button"
            className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
            onClick={props.setOpenModal}
          >
            Cancel
          </button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};
