const Footer = () => {
  return (
    <footer className="bg-black">
      {/* container */}
      <div className="container max-w-6xl py-10 mx-auto">
        {/* Footer Flex Container */}
        <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
          {/* Menu & logo Container */}
          <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
            <div className="h-8">
              <img src="images/logo.svg" alt="logo" className="w-44 md:ml-3" />
            </div>
            <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
              <div className="h-10 group">
                <a href="#">About</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="h-10 group">
                <a href="#">Careers</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="h-10 group">
                <a href="#">Events</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="h-10 group">
                <a href="#">Product</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="h-10 group">
                <a href="#">Support </a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
            </div>
          </div>

          {/* Social & Copy Right Container */}
          <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
            {/* Icon Container */}
            <div className="flex items-center justify-center mx-auto space-x-4 md:mx-0 md:justify-end">
              <div className="h-8 group">
                <a href="#">
                  <img
                    src="images/icon-facebook.svg"
                    alt="icon"
                    className="h-6"
                  />
                </a>
              </div>
              <div className="h-8 group">
                <a href="#">
                  <img
                    src="images/icon-twitter.svg"
                    alt="icon"
                    className="h-6"
                  />
                </a>
              </div>
              <div className="h-8 group">
                <a href="#">
                  <img
                    src="images/icon-pinterest.svg"
                    alt="icon"
                    className="h-6"
                  />
                </a>
              </div>
              <div className="h-8 group">
                <a href="#">
                  <img
                    src="images/icon-instagram.svg"
                    alt="icon"
                    className="h-6"
                  />
                </a>
              </div>
            </div>
            {/* Copy Right */}
            <div className="font-bold">
              &copy; 2023 Loopstudios. All Right Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
