const Footer = () => {
  const about = ["About", "   Privacy Policy", " Licensing", "    Contact"];
  return (
    <footer className="bg-white rounded-lg shadow-md m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline ">
            FIstore™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          {about.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="hover:underline hover:text-primary hover:font-bold me-4 md:me-6"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
