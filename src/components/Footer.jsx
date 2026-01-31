const Footer = () => {
  return (
    <div className="py-10 bg-[#16251D]/90 border-t border-gray-700">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-300">
          © {new Date().getFullYear()}{" "}
          <span className="text-[#6B8E23] font-semibold">Eslam Zayed</span>. All
          rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
