const Footer = () => {
  return (
    <footer className="py-8 bg-dark border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-primary font-medium">Eslam Zayed</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
