interface MenuItem {
  id: number
  category: string
  name_zh: string
  name_en: string
  price: number
  description: string
  description_en: string
  isRecommended: boolean
}

const menuData: MenuItem[] = [
  // 牛肉堡系列 (BEEF)
  {
    id: 1,
    category: '牛肉堡',
    name_zh: '經典原味漢堡',
    name_en: 'Burger O\'clock Original Burger',
    price: 100,
    description: '漢堡肉、生菜、牛番茄、洋蔥、酸黃瓜',
    description_en: 'Handmade patty',
    isRecommended: false
  },
  {
    id: 2,
    category: '牛肉堡',
    name_zh: '熔岩起司漢堡',
    name_en: 'American Cheese Burger',
    price: 130,
    description: '漢堡肉、美國切達起司醬、生菜、牛番茄、洋蔥、酸黃瓜',
    description_en: 'Handmade patty / American cheese',
    isRecommended: true
  },
  {
    id: 3,
    category: '牛肉堡',
    name_zh: '瑞士起司漢堡',
    name_en: 'Swiss Cheese Burger',
    price: 149,
    description: '漢堡肉、瑞士起司、生菜、牛番茄、洋蔥、酸黃瓜',
    description_en: 'Handmade patty / Swiss cheese',
    isRecommended: false
  },
  {
    id: 4,
    category: '牛肉堡',
    name_zh: '起司雙重奏',
    name_en: 'Double Cheese Burger',
    price: 179,
    description: '漢堡肉、瑞士起司、美國切達起司醬、生菜、牛番茄、洋蔥、酸黃瓜',
    description_en: 'Handmade patty / Swiss cheese / American cheese',
    isRecommended: true
  },
  {
    id: 5,
    category: '牛肉堡',
    name_zh: '起司三重奏',
    name_en: 'Triple Cheese Burger',
    price: 199,
    description: '漢堡肉、瑞士起司、美國切達起司醬、馬茲瑞拉起司、生菜、牛番茄、洋蔥、酸黃瓜',
    description_en: 'Handmade patty / Swiss cheese / American cheese / mozzarella cheese',
    isRecommended: true
  },
  {
    id: 6,
    category: '牛肉堡',
    name_zh: '煙燻BBQ漢堡',
    name_en: 'Smoked BBQ Burger',
    price: 179,
    description: '漢堡肉、美國切達起司醬、炒洋蔥、特調BBQ醬、生菜、牛番茄、洋蔥、酸黃瓜',
    description_en: 'Handmade patty / American cheese / fried onions / BBQ sauce',
    isRecommended: false
  },
  {
    id: 7,
    category: '牛肉堡',
    name_zh: '培根起司漢堡',
    name_en: 'Bacon & Cheese Burger',
    price: 179,
    description: '漢堡肉、美國切達起司醬、培根、生菜、牛番茄、洋蔥、酸黃瓜',
    description_en: 'Handmade patty / American cheese / bacon',
    isRecommended: false
  },
  {
    id: 8,
    category: '牛肉堡',
    name_zh: '蘑菇起司堡',
    name_en: 'Mushroom Cheese Burger',
    price: 189,
    description: '漢堡肉、瑞士起司、炒蘑菇、生菜、牛番茄、洋蔥、酸黃瓜',
    description_en: 'Handmade patty / Swiss cheese / mushroom',
    isRecommended: false
  },
  {
    id: 9,
    category: '牛肉堡',
    name_zh: '花生醬培根起司堡',
    name_en: 'Peanut Butter & Bacon Cheese Burger',
    price: 199,
    description: '漢堡肉、花生醬、美國切達起司醬、培根、生菜、牛番茄、洋蔥、酸黃瓜',
    description_en: 'Handmade patty / peanut butter / American cheese / bacon',
    isRecommended: true
  },
  {
    id: 10,
    category: '牛肉堡',
    name_zh: '酥炸洋蔥圈佐法式芥末堡',
    name_en: 'Crispy Onion Rings w Mustard Burger',
    price: 179,
    description: '漢堡肉、蜂蜜芥末醬、酥炸洋蔥圈、生菜、牛番茄、洋蔥、酸黃瓜',
    description_en: 'Handmade patty / honey mustard / fried onion rings',
    isRecommended: false
  },
  {
    id: 11,
    category: '牛肉堡',
    name_zh: '美國來的夏威夷漢堡',
    name_en: 'Hawaiian Burger',
    price: 179,
    description: '漢堡肉、美國切達起司醬、香煎鳳梨片、生菜、牛番茄、洋蔥、酸黃瓜',
    description_en: 'Handmade patty / American cheese / pan-fried pineapple',
    isRecommended: false
  },
  {
    id: 12,
    category: '牛肉堡',
    name_zh: '墨西哥來的辣味起司堡',
    name_en: 'Mexican Burger',
    price: 199,
    description: '漢堡肉、美國切達起司醬、墨西哥辣椒、培根、生菜、牛番茄、洋蔥、酸黃瓜',
    description_en: 'Handmade patty / American cheese / JALAPEÑO',
    isRecommended: false
  },
  {
    id: 13,
    category: '牛肉堡',
    name_zh: '黯然銷魂堡',
    name_en: 'Special Recipe Burger with Tartar Sauce',
    price: 179,
    description: '漢堡肉、瑞士起司、手工塔塔醬、生菜、牛番茄、洋蔥、酸黃瓜',
    description_en: 'Handmade patty / Swiss cheese / handmade Tartar sauce',
    isRecommended: false
  },
  {
    id: 14,
    category: '牛肉堡',
    name_zh: '辣肉醬起司堡',
    name_en: 'Special Recipe Burger with Meat Sauce',
    price: 179,
    description: '漢堡肉、美國切達起司醬、秘制黑毛豬肉辣醬、生菜、牛番茄、洋蔥、酸黃瓜',
    description_en: 'Handmade patty / American cheese / handmade meat sauce(pork)',
    isRecommended: false
  },
  {
    id: 15,
    category: '牛肉堡',
    name_zh: '混蛋BBQ堡',
    name_en: 'BBQ Cheese Burger with Sunny Side Up',
    price: 199,
    description: '漢堡肉、美國切達起司、炒洋蔥、特調BBQ醬、太陽蛋、生菜、牛番茄、洋蔥、酸黃瓜',
    description_en: 'Handmade patty / American cheese / fried onions / BBQ sauce / Sunny side up',
    isRecommended: false
  },
  {
    id: 16,
    category: '牛肉堡',
    name_zh: '義大利松露起司漢堡',
    name_en: 'Truffle Cheese Burger',
    price: 249,
    description: '漢堡肉、松露醬、美國切達起司醬、培根、生菜、牛番茄、洋蔥、酸黃瓜',
    description_en: 'Handmade patty / Truffle Sauce / American cheese / bacon',
    isRecommended: false
  },
  {
    id: 17,
    category: '牛肉堡',
    name_zh: 'Burger O\'clock招牌雙層起司堡',
    name_en: 'Double Double Burger',
    price: 269,
    description: '漢堡肉、漢堡肉、美國切達起司醬、瑞士起司、培根、生菜、牛番茄、洋蔥、酸黃瓜',
    description_en: 'Handmade patty x2 / American cheese / Swiss cheese / bacon',
    isRecommended: false
  },
  {
    id: 18,
    category: '牛肉堡',
    name_zh: 'Burger O\'clock招牌三層起司堡',
    name_en: 'Triple Triple Burger',
    price: 369,
    description: '漢堡肉×3、美國切達起司醬、瑞士起司、馬茲瑞拉起司、培根×3、生菜、牛番茄、洋蔥、酸黃瓜',
    description_en: 'Handmade patty x3 / American cheese / Swiss cheese / mozzarella cheese / bacon',
    isRecommended: false
  },
  {
    id: 19,
    category: '牛肉堡',
    name_zh: '飛天遁地鱈魚堡',
    name_en: 'Fried Fish Fillet w Tartar Sauce Burger',
    price: 179,
    description: '酥炸鱈魚條、手工塔塔醬、生菜、牛番茄、洋蔥、酸黃瓜',
    description_en: 'Deep fried fish fillet / Tartar sauce',
    isRecommended: false
  },
  
  // 雞肉堡系列 (CHICKEN)
  {
    id: 20,
    category: '雞肉堡',
    name_zh: '原味雞腿堡',
    name_en: 'Burger O\'clock Original Chicken Burger',
    price: 179,
    description: '特醃雞腿、生菜、牛番茄、洋蔥、酸黃瓜',
    description_en: 'Pan-fried chicken thigh',
    isRecommended: false
  },
  {
    id: 21,
    category: '雞肉堡',
    name_zh: '起司雞腿堡',
    name_en: 'Chicken Cheese Burger',
    price: 189,
    description: '特醃雞腿、瑞士起司、生菜、牛番茄、洋蔥、酸黃瓜',
    description_en: 'Pan-fried chicken thigh / Swiss cheese',
    isRecommended: false
  },
  {
    id: 22,
    category: '雞肉堡',
    name_zh: 'BBQ起司雞腿堡',
    name_en: 'BBQ Chicken Cheese Burger',
    price: 199,
    description: '特醃雞腿、美國切達起司、炒洋蔥、特調BBQ醬、生菜、牛番茄、洋蔥、酸黃瓜',
    description_en: 'Pan-fried chicken thigh / American cheese / fried onions / BBQ sauce',
    isRecommended: true
  },
  {
    id: 23,
    category: '雞肉堡',
    name_zh: '蒜香奶油醬辣雞腿堡',
    name_en: 'Garlic Butter Chicken Cheese Burger',
    price: 219,
    description: '特醃雞腿、特調蒜香奶油醬、墨西哥辣椒、瑞士起司、生菜、牛番茄、洋蔥、酸黃瓜',
    description_en: 'Pan-fried chicken thigh / Swiss cheese / Garlic butter / JALAPEÑO',
    isRecommended: false
  },
  {
    id: 24,
    category: '雞肉堡',
    name_zh: '辣味噴火雞腿堡',
    name_en: 'Spicy Chicken Burger',
    price: 219,
    description: '特醃雞腿、特製酸辣醬、墨西哥辣椒、美國巧達起司醬、生菜、牛番茄、洋蔥、酸黃瓜',
    description_en: 'Pan-fried chicken thigh / buffalo sauce / JALAPEÑO / American cheese',
    isRecommended: false
  },
  
  // 熱狗系列 (HOTDOG)
  {
    id: 25,
    category: '熱狗',
    name_zh: '經典原味熱狗堡',
    name_en: 'Classic',
    price: 89,
    description: '熱狗麵包、德式香腸、番茄醬、芥末醬',
    description_en: 'Hot dog bun, German sausage, ketchup, and mustard',
    isRecommended: false
  },
  {
    id: 26,
    category: '熱狗',
    name_zh: '混蛋熱狗堡',
    name_en: 'Cheese Hot Dog with Sunny Side Up',
    price: 169,
    description: '熱狗麵包、德式香腸、香煎培根、美國切達起司、太陽蛋',
    description_en: 'Hot dog bun, German sausage, pan-fried bacon, American cheddar cheese, and a sunny side up egg',
    isRecommended: true
  },
  {
    id: 27,
    category: '熱狗',
    name_zh: '花生醬熱狗堡',
    name_en: 'Peanut Butter',
    price: 169,
    description: '熱狗麵包、德式香腸、香煎培根、花生醬、美國切達起司',
    description_en: 'Hot dog bun, German sausage, pan-fried bacon, peanut butter, and American cheddar cheese',
    isRecommended: false
  },
  {
    id: 28,
    category: '熱狗',
    name_zh: '招牌香辣肉醬熱狗堡',
    name_en: 'Meat Sauce Hot Dog',
    price: 169,
    description: '熱狗麵包、德式香腸、秘制豬肉辣醬、美國切達起司、生洋蔥丁、墨西哥辣椒、酸黃瓜片',
    description_en: 'Hot dog bun, German sausage, secret recipe spicy pork meat sauce, American cheddar cheese, diced raw onion, jalapeño, and pickle slices',
    isRecommended: true
  },
  
  // 素食系列
  {
    id: 29,
    category: '素食',
    name_zh: 'Burger O\'clock 素食堡',
    name_en: 'Burger O\'clock Vegetarian Burger',
    price: 130,
    description: '薯餅、烤鳳梨片、美國切達起司醬、生菜、牛番茄、洋蔥、酸黃瓜',
    description_en: 'Hash brown / pan-fried pineapple / American cheese',
    isRecommended: false
  },
  
  // 點心系列 (FINGER FOOD)
  {
    id: 30,
    category: '點心',
    name_zh: '酥炸薯條',
    name_en: 'French Fries',
    price: 80,
    description: '經典酥炸薯條',
    description_en: 'Classic crispy fries',
    isRecommended: false
  },
  {
    id: 31,
    category: '點心',
    name_zh: '起司薯條',
    name_en: 'Cheese Fries',
    price: 120,
    description: '酥脆薯條淋上濃郁起司醬',
    description_en: 'Crispy fries with rich cheese sauce',
    isRecommended: false
  },
  {
    id: 32,
    category: '點心',
    name_zh: 'BBQ起司薯條',
    name_en: 'BBQ Cheese Fries',
    price: 130,
    description: '酥脆薯條、起司醬、特調BBQ醬',
    description_en: 'Crispy fries with cheese sauce and BBQ sauce',
    isRecommended: false
  },
  {
    id: 33,
    category: '點心',
    name_zh: '起司肉醬薯條',
    name_en: 'Cheesy Fries w Meat Sauce',
    price: 150,
    description: '酥脆薯條、起司醬、秘制肉醬',
    description_en: 'Crispy fries with cheese sauce and meat sauce',
    isRecommended: false
  },
  {
    id: 34,
    category: '點心',
    name_zh: '墨西哥秘制肉醬薯條',
    name_en: 'Fries w Meat Sauce & JALAPEÑO',
    price: 150,
    description: '酥脆薯條、秘制肉醬、墨西哥辣椒',
    description_en: 'Crispy fries with meat sauce and jalapeño',
    isRecommended: true
  },
  {
    id: 35,
    category: '點心',
    name_zh: '松露薯條',
    name_en: 'Truffle Fries',
    price: 130,
    description: '酥脆薯條淋上松露醬，奢華風味',
    description_en: 'Crispy fries with truffle sauce',
    isRecommended: true
  },
  {
    id: 36,
    category: '點心',
    name_zh: 'BOC特製通心粉',
    name_en: 'Macaroni & Cheese with Meat Sauce',
    price: 150,
    description: '濃郁起司通心粉配秘制肉醬',
    description_en: 'Rich macaroni & cheese with meat sauce',
    isRecommended: true
  },
  {
    id: 37,
    category: '點心',
    name_zh: '酥炸起司條',
    name_en: 'Mozzarella Sticks',
    price: 140,
    description: '酥炸馬茲瑞拉起司條',
    description_en: 'Deep-fried mozzarella sticks',
    isRecommended: false
  },
  {
    id: 38,
    category: '點心',
    name_zh: '特醃水牛城辣雞翅',
    name_en: 'Buffalo Wings',
    price: 170,
    description: '特製水牛城辣雞翅',
    description_en: 'Special buffalo wings',
    isRecommended: true
  },
  {
    id: 39,
    category: '點心',
    name_zh: '帕瑪森起士雞翅',
    name_en: 'Cheesy Chicken Wings',
    price: 170,
    description: '帕瑪森起司雞翅',
    description_en: 'Parmesan cheese chicken wings',
    isRecommended: false
  },
  {
    id: 40,
    category: '點心',
    name_zh: 'BBQ雞翅',
    name_en: 'BBQ Chicken Wings',
    price: 170,
    description: 'BBQ調味雞翅',
    description_en: 'BBQ flavored chicken wings',
    isRecommended: false
  },
  {
    id: 41,
    category: '點心',
    name_zh: '雞翅拼盤',
    name_en: 'Chicken Wings Platter',
    price: 320,
    description: 'BBQ、帕瑪森、水牛城三種口味',
    description_en: 'BBQ, Parmesan, and Buffalo flavored wings',
    isRecommended: false
  },
  {
    id: 42,
    category: '點心',
    name_zh: '酥炸花枝圈',
    name_en: 'Fried Calamari',
    price: 180,
    description: '酥脆Q彈花枝圈',
    description_en: 'Crispy and chewy calamari rings',
    isRecommended: false
  },
  {
    id: 43,
    category: '點心',
    name_zh: '酥炸魚條',
    name_en: 'Deep Fried Fish Fillet',
    price: 180,
    description: '新鮮魚條，附塔塔醬',
    description_en: 'Fresh fish fillet with tartar sauce',
    isRecommended: true
  },
  {
    id: 44,
    category: '點心',
    name_zh: '酥炸洋蔥圈',
    name_en: 'Onion Rings',
    price: 80,
    description: '7入',
    description_en: '7 pieces',
    isRecommended: false
  },
  {
    id: 45,
    category: '點心',
    name_zh: '酥炸洋蔥圈',
    name_en: 'Onion Rings',
    price: 150,
    description: '14入',
    description_en: '14 pieces',
    isRecommended: false
  },
  {
    id: 46,
    category: '點心',
    name_zh: '酥炸洋蔥圈',
    name_en: 'Onion Rings',
    price: 210,
    description: '21入',
    description_en: '21 pieces',
    isRecommended: false
  },
  {
    id: 47,
    category: '點心',
    name_zh: '香酥雞塊',
    name_en: 'Chicken Nuggets',
    price: 80,
    description: '7入',
    description_en: '7 pieces',
    isRecommended: false
  },
  {
    id: 48,
    category: '點心',
    name_zh: '香酥雞塊',
    name_en: 'Chicken Nuggets',
    price: 150,
    description: '14入',
    description_en: '14 pieces',
    isRecommended: false
  },
  {
    id: 49,
    category: '點心',
    name_zh: '香酥雞塊',
    name_en: 'Chicken Nuggets',
    price: 210,
    description: '21入',
    description_en: '21 pieces',
    isRecommended: false
  },
  {
    id: 50,
    category: '點心',
    name_zh: '香酥雞柳',
    name_en: 'Deep Fried Chicken Strips',
    price: 200,
    description: '特製香酥雞柳條',
    description_en: 'Special crispy chicken strips',
    isRecommended: false
  },
  {
    id: 51,
    category: '點心',
    name_zh: '香脆玉米片佐切達起司與墨西哥辣椒',
    name_en: 'Nachos with American Cheese and JALAPEÑO',
    price: 240,
    description: '香脆玉米片、切達起司、墨西哥辣椒',
    description_en: 'Crispy nachos with American cheese and jalapeño',
    isRecommended: false
  },
  {
    id: 52,
    category: '點心',
    name_zh: '陸上的炸物拼盤',
    name_en: 'Platter A',
    price: 220,
    description: '酥炸薯條、香酥雞塊、酥炸洋蔥圈',
    description_en: 'French Fries, Chicken Nuggets, and Onion Rings',
    isRecommended: false
  },
  {
    id: 53,
    category: '點心',
    name_zh: '海裡的炸物拼盤',
    name_en: 'Platter B',
    price: 390,
    description: '酥炸薯條、酥炸花枝圈、酥炸魚條',
    description_en: 'French Fries, Fried Calamari, and Fried Fish Fillet',
    isRecommended: true
  },
  
  // 飲品/甜點系列
  {
    id: 54,
    category: '飲品/甜點',
    name_zh: '無糖紅茶',
    name_en: 'Black Tea',
    price: 50,
    description: '無糖紅茶，可選冰/熱',
    description_en: 'Unsweetened black tea, iced or hot',
    isRecommended: false
  },
  {
    id: 55,
    category: '飲品/甜點',
    name_zh: '可樂',
    name_en: 'Coke',
    price: 60,
    description: '冰可樂',
    description_en: 'Iced Coke',
    isRecommended: false
  },
  {
    id: 56,
    category: '飲品/甜點',
    name_zh: '零卡可樂',
    name_en: 'Coke Zero',
    price: 60,
    description: '零卡可樂',
    description_en: 'Coke Zero',
    isRecommended: false
  },
  {
    id: 57,
    category: '飲品/甜點',
    name_zh: '雪碧',
    name_en: 'Sprite',
    price: 60,
    description: '雪碧',
    description_en: 'Sprite',
    isRecommended: false
  },
  {
    id: 58,
    category: '飲品/甜點',
    name_zh: '檸檬紅茶',
    name_en: 'Lemon Iced Tea',
    price: 60,
    description: '檸檬紅茶',
    description_en: 'Lemon iced tea',
    isRecommended: false
  },
  {
    id: 59,
    category: '飲品/甜點',
    name_zh: '柳橙汁',
    name_en: 'Orange Juice',
    price: 60,
    description: '新鮮柳橙汁',
    description_en: 'Fresh orange juice',
    isRecommended: false
  },
  {
    id: 60,
    category: '飲品/甜點',
    name_zh: '冰淇淋紅茶',
    name_en: 'Ice Cream Black Tea',
    price: 80,
    description: '紅茶配冰淇淋',
    description_en: 'Black tea with ice cream',
    isRecommended: false
  },
  {
    id: 61,
    category: '飲品/甜點',
    name_zh: '鮮奶茶',
    name_en: 'Fresh Milk Tea',
    price: 80,
    description: '鮮奶茶',
    description_en: 'Fresh milk tea',
    isRecommended: false
  },
  {
    id: 62,
    category: '飲品/甜點',
    name_zh: '清爽氣泡水',
    name_en: 'Sparkling Water',
    price: 100,
    description: '清爽氣泡水',
    description_en: 'Sparkling water',
    isRecommended: false
  },
  {
    id: 63,
    category: '飲品/甜點',
    name_zh: '喝不醉的啤酒',
    name_en: 'Something Light',
    price: 150,
    description: '輕酒精啤酒',
    description_en: 'Light beer',
    isRecommended: false
  },
  {
    id: 64,
    category: '飲品/甜點',
    name_zh: '精釀啤酒',
    name_en: 'Craft Beer',
    price: 200,
    description: '精釀啤酒，不定期更換',
    description_en: 'Craft beer, subject to availability',
    isRecommended: true
  },
  {
    id: 65,
    category: '飲品/甜點',
    name_zh: '本日濃湯',
    name_en: 'Daily Soup',
    price: 80,
    description: '每日特製濃湯，請詢問今日口味',
    description_en: 'Soup of the day, please ask for today\'s flavor',
    isRecommended: false
  },
  {
    id: 66,
    category: '飲品/甜點',
    name_zh: '冰淇淋黑糖麻糬鬆餅',
    name_en: 'Ice Cream Brown Sugar Mochi Waffle',
    price: 250,
    description: '外酥內軟的鬆餅，配上黑糖麻糬與冰淇淋',
    description_en: 'Crispy waffle with chewy mochi, brown sugar sauce, and ice cream',
    isRecommended: true
  },
  {
    id: 67,
    category: '飲品/甜點',
    name_zh: '老闆的心情',
    name_en: 'Boss Mood',
    price: 0,
    description: '有時候有心情，有時候沒心情。請洽櫃檯詢問老闆今日奇檬子',
    description_en: 'Sometimes in a mood, sometimes not. Please ask the server for today\'s special',
    isRecommended: false
  }
]

export default menuData
