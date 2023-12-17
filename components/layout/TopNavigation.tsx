import Image from "next/image";
import { Popover } from "@headlessui/react";
import { useRouter } from "next/router";

export default function TopNavigation() {
  const router = useRouter();
  const goTo = (event: string) => {
    switch (event) {
      case "community":
        router.replace("/community");
        break;
      case "events":
        router.replace("/events");
        break;
      case "hwu":
        router.replace("/hiretalent");
        break;
      case "fw":
        router.replace("/findwork");
        break;
      case "au":
        router.replace("/aboutus");
        break;
      case "login":
        router.replace("/auth");
        break;
    }
    return true;
  };
  return (
    <header className="bg-primary-color text-primary-text-color font-primary-family">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <span className="-m-1.5 p-1.5">
            <span className="sr-only">BitShala</span>
            <Image
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
              width="100"
              height="100"
            />
          </span>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <span
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={() => goTo("community")}
          >
            Community
          </span>
          <span
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={() => goTo("events")}
          >
            Events
          </span>
          <span
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={() => goTo("hwu")}
          >
            Hire With Us
          </span>
          <span
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={() => goTo("fw")}
          >
            Find Work
          </span>
          <span
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={() => goTo("au")}
          >
            About Us
          </span>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <span
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={() => goTo("login")}
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      </nav>
    </header>
  );
}
