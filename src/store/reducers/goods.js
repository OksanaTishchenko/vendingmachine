const initialState = {
  goods: [
    {
      id: 1,
      title: "Pepsi",
      price: 20,
      count: 5,
      isAvailable: true,
      image: "https://pngimg.com/uploads/pepsi/pepsi_PNG5.png"
    },
    {
      id: 2,
      title: "Coca-cola",
      price: 30,
      count: 5,
      isAvailable: true,
      image: "https://www.pikpng.com/pngl/b/287-2874218_pepsi-png-image-free-download-pepsi-clipart.png"
    },
    {
      id: 3,
      title: "Coca-cola light",
      price: 35,
      count: 5,
      isAvailable: true,
      image: "https://clipart-db.ru/file_content/rastr/sprite_003.png"
    },
    {
      id: 4,
      title: "Sprite",
      price: 30,
      count: 5,
      isAvailable: true,
      image: "https://pngimg.com/uploads/sprite/sprite_PNG8934.png"
    },
    {
      id: 5,
      title: "Bonaqua",
      price: 15,
      count: 5,
      isAvailable: true,
      image: "https://amwine.ru/upload/resize_cache/iblock/e47/620_620_1/e47282542062f0becbedabc635a410ce.png"
    },
    {
      id: 6,
      title: "Моршинська",
      price: 18,
      count: 5,
      isAvailable: true,
      image: "https://www.morshynska.ua/images/kids/sportyk/sportyk_bottle_01.png"
    },
    {
      id: 7,
      title: "Лужанська",
      price: 25,
      count: 5,
      isAvailable: true,
      image: "https://alex.com.ua/wp-content/uploads/2021/04/product2-80x300.png"
    },
    {
      id: 8,
      title: "Поляна",
      price: 30,
      count: 5,
      isAvailable: true,
      image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/%D0%9C%D1%96%D0%BD%D0%B5%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0_%D0%B2%D0%BE%D0%B4%D0%B0_%D0%9F%D0%BE%D0%BB%D1%8F%D0%BD%D0%B0_%D0%A6%D1%96%D0%BB%D1%8E%D1%89%D0%B0.png"
    },
    {
      id: 9,
      title: "Чипсы с сыром",
      price: 25,
      count: 5,
      isAvailable: true,
      image: "https://pngimg.com/uploads/potato_chips/potato_chips_PNG79.png"
    },
    {
      id: 10,
      title: "Flint",
      price: 15,
      count: 5,
      isAvailable: true,
      image: "https://images.ua.prom.st/1689490416_w640_h640_suhariki-flint-pshenichno-rzhanye.jpg"
    },
    {
      id: 11,
      title: "Грінки",
      price: 20,
      count: 5,
      isAvailable: true,
      image: "https://images.ua.prom.st/3089038232_w640_h640_grenki-flint-so.jpg"
    },
    {
      id: 12,
      title: "Грінки",
      price: 20,
      count: 5,
      isAvailable: true,
      image: "https://images.ua.prom.st/3089038233_w700_h500_grenki-flint-so.jpg"
    },
    {
      id: 13,
      title: "Lion",
      price: 30,
      count: 5,
      isAvailable: true,
      image: "http://i.otzovik.com/objects/b/220000/211051.png"
    },
    {
      id: 14,
      title: "Kit-Kat",
      price: 35,
      count: 5,
      isAvailable: true,
      image: "https://www.pngkit.com/png/full/213-2131521_kitkat-4-fingers-kit-kat.png"
    },
    {
      id: 15,
      title: "Oreo",
      price: 30,
      count: 5,
      isAvailable: true,
      image: "https://www.kindpng.com/picc/m/701-7014173_oreo-cookies-png-chocolate-oreos-transparent-png.png"
    },
    {
      id: 16,
      title: "Snikers",
      price: 35,
      count: 5,
      isAvailable: true,
      image: "https://pngimg.com/uploads/snickers/snickers_PNG98761.png"
    }
  ]
}


// Reducers
export function goodsReducer(state = initialState, action) {
  switch (action.type) {

    default:
      return state
  }
}

