
import { FaCreditCard, FaExchangeAlt, FaTruck, FaHeadset } from 'react-icons/fa'

const Trust = () => {
  return (
    <section className="container py-10">
      <div className="">
        <h2 className="text-3xl text-center lg:text-left font-bold mb-8 lg:mb-12">Нам доверяют</h2>
        
        <div className="bg-gray-900    py-12 rounded-2xl  text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Безопасная оплата */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-800 p-4 rounded-full mb-4">
              <FaCreditCard className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">Безопасная оплата</h3>
            <p className="text-gray-400 text-sm">100% безопасная оплата</p>
          </div>

          {/* Возврат */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-800 p-4 rounded-full mb-4">
              <FaExchangeAlt className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">Возврат в течение 30 дней</h3>
            <p className="text-gray-400 text-sm">Если у товара есть проблемы</p>
          </div>

          {/* Бесплатная доставка */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-800 p-4 rounded-full mb-4">
              <FaTruck className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">Бесплатная доставка</h3>
            <p className="text-gray-400 text-sm">Для всех заказов</p>
          </div>

          {/* Поддержка */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-800 p-4 rounded-full mb-4">
              <FaHeadset className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">Поддержка 24/7</h3>
            <p className="text-gray-400 text-sm">Круглосуточная поддержка</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trust