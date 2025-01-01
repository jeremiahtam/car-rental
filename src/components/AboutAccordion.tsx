import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

function AboutAccordion() {
  return (
    <div className="px-4 lg:px-24 my-20">
      <div className="container mx-auto">
        <Accordion className="border-none">
          <AccordionPanel className="p-8 mb-3">
            <div className="border-solid border-[1px] border-gray-800 rounded-xl mb-5 overflow-hidden">
              <AccordionTitle className="p-6">What is Flowbite?</AccordionTitle>
              <AccordionContent className="p-6">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components
                  built on top of Tailwind CSS including buttons, dropdowns,
                  modals, navbars, and more.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to&nbsp;
                  <a
                    href="https://flowbite.com/docs/getting-started/introduction/"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    get started&nbsp;
                  </a>
                  and start developing websites even faster with components on
                  top of Tailwind CSS.
                </p>
              </AccordionContent>
            </div>
          </AccordionPanel>
          <AccordionPanel className="p-8 mb-3">
            <div className="border-solid border-[1px] border-gray-800 rounded-xl mb-5 overflow-hidden">
              <AccordionTitle className="p-6">What is Flowbite?</AccordionTitle>
              <AccordionContent className="p-6">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components
                  built on top of Tailwind CSS including buttons, dropdowns,
                  modals, navbars, and more.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to&nbsp;
                  <a
                    href="https://flowbite.com/docs/getting-started/introduction/"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    get started&nbsp;
                  </a>
                  and start developing websites even faster with components on
                  top of Tailwind CSS.
                </p>
              </AccordionContent>
            </div>
          </AccordionPanel>
        </Accordion>
      </div>
    </div>
  );
}

export default AboutAccordion;
