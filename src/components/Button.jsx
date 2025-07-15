const Button = ({ href, label, className }) => {
  return (
    <a
      href={href}
      className={`${className} flex items-center justify-center text-center text-2xl ring-2 ring-white transition-colors duration-200 hover:bg-white hover:text-black max-sm:focus:bg-white max-sm:focus:text-black`}
    >
      <span className="block animate-spin duration-300">✦</span>
      {label}
      <span className="animate-spin">✦</span>
    </a>
  );
};

export default Button;
