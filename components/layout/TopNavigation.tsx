import Image from "next/image";
import { Popover } from "@headlessui/react";

export default function TopNavigation() {
  return (
    <header className="bg-primary-color text-primary-text-color font-primary-family">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">BitShala</span>
            <Image
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
              width="100"
              height="100"
            />
          </a>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Community
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Events
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Hire With Us
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Find Work
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            About Us
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
