import logoImg from "../assets/logo2.webp";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img
        className="w-15 h-15 rounded-xl  object-cover"
        src={logoImg}
        alt="Logo"
      />
      <h2 className="text-2xl font-bold text-pink-700">Flower Shop</h2>
    </div>
  );
}

export default Logo;
