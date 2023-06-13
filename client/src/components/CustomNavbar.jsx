import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
 
export default function Cust() {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1  text-lg"
      >
        <a href="/" className="flex items-center">
          Ana Sayfa
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 text-lg"
      >
        <a href="/blog-main" className="flex items-center">
          Blog
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1  text-lg"
      >
        <a href="/event" className="flex items-center">
          Etkinlik
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1  text-lg"
      >
        <a href="/locations" className="flex items-center">
          Mekanlar
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 text-lg"
      >
        <a href="/transportation" className="flex items-center">
          Ulasım
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 border-none shadow-none">
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="#"
          variant="small"
          color="black"
          className="mr-4 cursor-pointer py-1.5 font-bold text-xl"
        >
          <a href="/"><span>Atlas</span></a>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <Button variant="gradient" size="sm" className="hidden lg:inline-block rounded-md bg-gradient-to-r from-sky-500 to-blue-500">
          <a  className =" inline-block w-full h-full" href="/login"><span>Giris Yap</span></a>
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-black"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2 rounded-md  to-blue-500">
            <span>Buy Now</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}