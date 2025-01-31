import { createSlice } from "@reduxjs/toolkit";
import paper from "../assets/paper.png";
import cleaning from "../assets/cleaning.png";
import vacum from "../assets/vacum.png";
import scrubber from "../assets/scrubber.png";
import equipment from "../assets/equipment.png";
import selpak from "../assets/selpak.jpg";
import sens from "../assets/sens.jpg";
import solo from "../assets/solo.jpg";
import selpakExtra from "../assets/selpakExtra.jpg";

const initialState = {
  categories: {
    title: "Категории",
    data: [
      {
        img: paper,
        title: "Бумажная продукция",
        id: 1,
        description: "Туалетная бумага, салфетки, полотенца",
        count: 24,
        link:"бумажная-продукция",
      },
      {
        img: cleaning,
        title: "Моющие средства",
        id: 2,
        description: "Профессиональная химия для уборки",
        count: 156,
        link:"моющие-средства"
      },
      {
        img: scrubber,
        title: "Поломоечные Продукция",
        id: 5,
        description: " Поломоечные машины",
        count: 24,
        link:"поломоечные-продукция"
      },
      {
        img: vacum,
        title: "Пылесосы",
        id: 3,
        description: "Промышленные пылесосы",
        count: 42,
        link:"пылесосы"
      },
      {
        img: equipment,
        title: "Уборочный инвентарь",
        id: 4,
        description: "Швабры, ведра, тележки",
        count: 85,
        link:"уборочный-инвентарь"
      },
    ],
  },
  paperProducts: {
    title: "Бумажная продукция",
    data: [
      {
        id: 1,
        title: "Selpak Professional Extra Z-Сложенное полотенце для диспенсера",
        category: "БУМАЖНАЯ ПРОДУКЦИЯ",
        img: selpak,
        description: "Бумажные полотенца Z-сложения",
        price: "12000 UZS",
        isNew: false,
        specs: {
          layers: "2 слоя",
          sheets: "200 листов",
          size: "21.5x24 см",
          color: "Белый",
        },
      },
      {
        id: 2,
        title: "Sens Туалетная бумага 24 шт.",
        category: "БУМАЖНАЯ ПРОДУКЦИЯ",
        img: sens,
        description: "Туалетная бумага в рулонах",
        price: "15000 UZS",
        isNew: false,
        specs: {
          layers: "2 слоя",
          length: "150 метров",
          quantity: "24 рулона",
          color: "Белый",
        },
      },
      {
        id: 3,
        title: "Solo Professional 1/6 Складные салфетки Официант 26,5×33 см 100 шт.",
        category: "БУМАЖНАЯ ПРОДУКЦИЯ",
        img: solo,
        description: "Бумажные салфетки для HoReCa",
        price: "8000 UZS",
        isNew: false,
        specs: {
          size: "26.5x33 см",
          quantity: "100 шт",
          color: "Белый",
          type: "Складные",
        },
      },
      {
        id: 4,
        title: "Selpak Professional Extra Туалетная бумага 24 шт.",
        category: "БУМАЖНАЯ ПРОДУКЦИЯ",
        img: selpakExtra,
        description: "Профессиональная туалетная бумага",
        price: "18000 UZS",
        oldPrice: "20000 UZS",
        isNew: false,
        specs: {
          layers: "2 слоя",
          length: "180 метров",
          quantity: "24 рулона",
          quality: "Extra",
        },
      },
    ],
  },
  products: {
    title: "Поломоечные Продукция",
    data: [
      {
        id: 1,
        title: "T55/50B",
        category: "Поломоечные машины",
        img: scrubber,
        description: "Поломоечная машина",
        price: "10000 UZS",
        isNew: false,
        specs: {
          width: "50 см",
          capacity: "40 л",
          productivity: "2000 м²/ч",
          power: "500 W",
          weight: "120 кг",
        },
      },
      {
        id: 2,
        title: "T35B",
        category: "Поломоечные машины",
        img: scrubber,
        description: "Поломоечная машина",
        price: "12000 UZS",
        isNew: false,
        specs: {
          width: "35 см",
          capacity: "35 л",
          productivity: "1500 м²/ч",
          power: "450 W",
          weight: "95 кг",
        },
      },
      {
        id: 3,
        title: "T55/50BT",
        category: "Поломоечные машины",
        img: scrubber,
        description: "Поломоечная машина",
        price: "15000 UZS",
        isNew: false,
        specs: {
          width: "50 см",
          capacity: "45 л",
          productivity: "2200 м²/ч",
          power: "550 W",
          weight: "130 кг",
        },
      },
      {
        id: 4,
        title: "T45/50B",
        category: "Поломоечные машины",
        img: scrubber,
        description: "Поломоечная машина",
        price: "16000 UZS",
        oldPrice: "18000 UZS",
        isNew: true,
        specs: {
          width: "45 см",
          capacity: "50 л",
          productivity: "2500 м²/ч",
          power: "600 W",
          weight: "140 кг",
        },
      },
    ],
  },
  filters: {
    categories: [
      { id: 1, name: "Поломоечные машины", count: 24 },
      { id: 2, name: "Пылесосы", count: 18 },
      { id: 3, name: "Подметальные машины", count: 12 },
      { id: 4, name: "Роторные машины", count: 8 },
    ],
    brands: [
      { id: 1, name: "Cleanvac" },
      { id: 2, name: "Karcher" },
      { id: 3, name: "Nilfisk" },
      { id: 4, name: "Tennant" },
    ],
    priceRange: {
      min: 0,
      max: 50000,
      currency: "UZS",
    },
  },
};

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    filterByCategory: (state, action) => {
      // Filter logic here
    },
    filterByPrice: (state, action) => {
      // Price filter logic here
    },
    filterByBrand: (state, action) => {
      // Brand filter logic here
    },
    sortProducts: (state, action) => {
      // Sorting logic here
    },
  },
});

export const { filterByCategory, filterByPrice, filterByBrand, sortProducts } =
  categorySlice.actions;
export default categorySlice.reducer;
