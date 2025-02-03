import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductSlider from '../components/ProductSlider';

const Product = () => {
  const {id} = useParams();
  const categories = useSelector((state) => state.categories);
  const category = categories.find((cat) => cat.singleLink === id);

  const renderDescription = () => {
    if (category?.type === 'cleaning_product') {
      if (category?.description?.includes('M106')) {
        return (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Описание</h2>
            <p className="text-gray-700">
              Объем: 5л Единица измерения: л Жидкий гигиена и чистота Очень эффективен и экономичен благодаря мягкой формуле и обильной пене Его богатый состав питает и защищает кожу Совместимость с pH кожи Дерматологически протестирован и одобрен Используется с дозатором пенного мыла
            </p>
          </div>
        );
      }
    }
    return null;
  };

  const renderSpecifications = () => {
    switch(category?.type) {
      case 'equipment_product':
        if (category?.description?.includes('TTS')) {
          return (
            <div className="space-y-2 text-gray-700">
              <p>Серия: {category?.description?.split(' ')[3] || 'Pocket System'}</p>
              <p>Назначение: Для влажной уборки</p>
              <p>Тип крепления мопа: Карманы</p>
              <p>Материал: Полиамид, стекловолокно и полипропилен</p>
              <p>Фиксатор положения: {category?.description?.includes('Wet') ? 'Нет' : 'Да'}</p>
              <p>Диаметр рукоятки, мм: 23</p>
              <p>Цвет: Серый</p>
              <p>Вес, кг: {category?.description?.includes('Wet') ? '0.514' : '0.5'}</p>
              <p>Размер (Д × Ш), см: 40 × 11</p>
              <p>Страна производства: Италия</p>
            </div>
          );
        }
        return (
          <div className="space-y-2 text-gray-700">
            <p>Тип: Уборочный инвентарь</p>
            <p>Назначение: Профессиональная уборка</p>
            <p>Материал: Высококачественный пластик</p>
          </div>
        );

      case 'paper_product':
        if (category?.description?.includes('Domi')) {
          return (
            <div className="space-y-2 text-gray-700">
              <p>код: 7900145</p>
              <p>цвет: дымчатый цвет</p>
              <p>ширина см: 12,5</p>
              <p>длина см: 16,5</p>
              <p>глубина см: 12,5</p>
            </div>
          );
        }
        return (
          <div className="space-y-2 text-gray-700">
            <p>код: {category?.code || '7900076'}</p>
            <p>цвет: белый</p>
            <p>количество листов: 200</p>
            <p>количество в упаковке: 12</p>
          </div>
        );

      case 'cleaning_product':
        return (
          <div className="space-y-2 text-gray-700">
            <p>Тип: Моющее средство</p>
            <p>Объем: {category?.description?.includes('5L') ? '5 литров' : '700 мл'}</p>
            <p>Применение: Для профессиональной уборки</p>
            <p>Форма выпуска: Жидкость</p>
            <p>Тип использования: Профессиональное</p>
          </div>
        );

      case 'scrubber_product':
        if (category?.description === 'T55/50B') {
          return (
            <div className="space-y-2 text-gray-700">
              <p>Модель: T55/50B</p>
              <p>Ширина щетки: 510 мм</p>
              <p>Всасывающая балка: 780 мм</p>
              <p>Макс. производительность: 2250 м2/ч</p>
              <p>Давление щетки: 35 кг</p>
              <p>Скорость движения вперед: 180 об/мин</p>
              <p>Мотор щетки: DC24/500 В/Вт</p>
              <p>Всасывающий мотор: 24/500 В/Вт</p>
              <p>Бак чистой воды: 55 л</p>
              <p>Бак грязной воды: 55 л</p>
              <p>Габаритный размер: 1200*550*1020мм</p>
              <p>Батарея: 12В*2</p>
              <p>Масса батареи: 35 кг*2</p>
              <p>Масса нетто: 110 кг</p>
            </div>
          );
        }
        return (
          <div className="space-y-2 text-gray-700">
            <p>Модель: {category?.description}</p>
            <p>Тип: Поломоечная машина</p>
            <p>Применение: Профессиональная уборка</p>
          </div>
        );

      case 'vacuum_product':
        return (
          <div className="space-y-2 text-gray-700">
            <p>Тип: Пылесос</p>
            <p>Назначение: {category?.description?.includes('влажной') ? 'Для сухой и влажной уборки' : 'Для сухой уборки'}</p>
            <p>Мощность: {category?.power || '1200'} Вт</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="mt-40 mb-20 container">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm mb-8">
        <Link to="/" className="text-gray-600 hover:text-blue-600">Главная</Link>
        <span className="mx-2">/</span>
        <Link to={`/product-category/${category?.link}`} className="text-gray-600 hover:text-blue-600">{category?.category}</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">{category?.description}</span>
      </div> 

      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative">
         <div className='w-full h-auto'>
         <ProductSlider images={category?.images} />
         </div>
          <button 
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md"
            onClick={() => {/* Handle fullscreen */}}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </button>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-6">
            {category?.description}
          </h1>

          {/* Price Section */}
          {category?.price && (
            <div className="mb-6">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-blue-600">{category?.price}</span>
                {category?.oldPrice && (
                  <span className="text-lg text-gray-500 line-through">{category?.oldPrice}</span>
                )}
              </div>
            </div>
          )}

          {/* Product Description */}
          {renderDescription()}

          {/* Product Specifications */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Характеристики</h2>
            {renderSpecifications()}
          </div>

          {/* Buy Button */}
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors mb-8">
            Купить
          </button>

          {/* Advantages */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Наши преимущества</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaCheck className="text-blue-600 mr-2" />
                <span>Высокое качество продукции</span>
              </li>
              <li className="flex items-center">
                <FaCheck className="text-blue-600 mr-2" />
                <span>Безопасные платежи</span>
              </li>
              <li className="flex items-center">
                <FaCheck className="text-blue-600 mr-2" />
                <span>Гарантия удовлетворенности</span>
              </li>
              <li className="flex items-center">
                <FaCheck className="text-blue-600 mr-2" />
                <span>Доставка по Узбекистану</span>
              </li>
              <li className="flex items-center">
                <FaCheck className="text-blue-600 mr-2" />
                <span>Гарантия возврата средств</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;