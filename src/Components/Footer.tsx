import logo from "../assets/logo-text.png"


function Footer() {
  return (
    <footer className="container mx-auto w-full max-w-[1240px] md:mt-30 mt-15">
      <div className="grid xl:grid-cols-5 md:grid-cols-2 grid-cols-1 sm:gap-10 ">
        <div className="col-span-2">
          <div className="flex justify-center items-center xl:justify-start ">
            <img src={logo} alt="" />
          </div>
          <p className="mt-3 flex justify-center items-center xl:justify-start">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <div className="mt-7 flex gap-5  justify-center xl:justify-start">
            <a className="font-semibold" href="https://github.com/sayeedmahmuddevs">
              githube
            </a>
            <a className="font-semibold" href="x.com">
              Twitter
            </a>
            <a className="font-semibold" href="https://www.linkedin.com/in/sayeed-mahmud-devs/">
              Linked
            </a>
          </div>
        </div>
        <div className="col-span-3 md:grid grid-cols-3 hidden">
          <div className="ml-20">
            <p className="font-semibold text-xl mb-5 uppercase">Product</p>
            <ul className="flex flex-col gap-3 text-gray-500">
              <li className="hover:underline cursor-pointer">Home</li>
              <li className="hover:underline cursor-pointer">Technologies</li>
              <li className="hover:underline cursor-pointer">Projects</li>
            </ul>
          </div>
          <div className="ml-20">
            <p className="font-semibold text-xl mb-5 uppercase">Company</p>
            <ul className="flex flex-col gap-3 text-gray-500">
              <li className="hover:underline cursor-pointer">About</li>
              <li className="hover:underline cursor-pointer">Contact</li>
              <li className="hover:underline cursor-pointer">Careers</li>
            </ul>
          </div>
          <div className="ml-20">
            <p className="font-semibold text-xl mb-5 uppercase">LEGAL</p>
            <ul className="flex flex-col gap-3 text-gray-500">
              <li className="hover:underline cursor-pointer">Privacy Policy</li>
              <li className="hover:underline cursor-pointer">Tearms of Service</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="mt-10 text-gray-200" />
      <div className="flex justify-between items-center my-10 text-gray-300">
        <h5>© 2026 Dev Stack. All rights reserved.</h5>
        <div className="flex  gap-5">
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
