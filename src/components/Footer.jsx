const Footer = () => {
  return (
    <footer className="bg-[#222222] text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row  items-start  gap-10 lg:gap-50">
          {/* Logo and Description */}
          <div className="space-y-4 ">
            <div className="flex items-center gap-2">
              <img src="../../public/assets/lightLogo.png" alt="Clemar Logo" className="h-8" />
            </div>
            <p className="text-gray-400 text-sm">
              Представляем лучшие мировые бренды  в  <br /> Узбекистане
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 lg:ml-auto">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">My Account</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">My Wishlist</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">My Cart</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Sign In</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Check Out</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="block">Phone: (+63) 555 1212</span>
                <span className="block">Fax: (+63) 555 0100</span>
              </li>
              <li className="text-gray-400">
                <span className="block">New York,</span>
                <span className="block">96th Street, NY 10129</span>
              </li>
            </ul>
          </div>

        
        </div>

       
      </div>
    </footer>
  )
}

export default Footer