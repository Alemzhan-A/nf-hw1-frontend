const Footer = () => {
  return (
    <footer className="bg-header-footer text-white p-4">
      <div className="container mx-auto text-center p-4">
        <p>© 2024 My Blog. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-gray-200 transition-colors duration-300">LinkedIn</a>
          <a href="#" className="hover:text-gray-200 transition-colors duration-300">Twitter</a>
          <a href="#" className="hover:text-gray-200 transition-colors duration-300">Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
