function Header({ quote = false }) {


  return (
    <div id="header" className="flex items-baseline justify-between">
      <div id="logo">
        <h1 className="text-white font-bold text-4xl">Potrello</h1>
      </div>
        {quote && (
            <div id="quote">
            <p className="text-3xl text-gray-200 font-normal max-w-56 text-right">
                "If they don't If you Ifly, don't If it Ifly"
            </p>
            </div>
        )}
    </div>
  );
}

export default Header;
