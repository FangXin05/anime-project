const goodsList = [
  {
    id: "4001172",
    name: "魔女之旅1",
    price: "289.00",
    picture: "./images/nvl_1.jpg",
  },
  {
    id: "4001594",
    name: "魔女之旅2",
    price: "288.00",
    picture: "./images/nvl_2.jpg",
  },
  {
    id: "4001009",
    name: "魔女之旅3",
    price: "109.00",
    picture: "./images/nvl_3.jpg",
  },
  {
    id: "4001874",
    name: "魔女之旅4",
    price: "488.00",
    picture: "./images/nvl_4.jpg",
  },
  {
    id: "4001649",
    name: "魔女之旅5",
    price: "139.00",
    picture: "./images/nvl_5.jpg",
  },
  {
    id: "3997185",
    name: "魔女之旅6",
    price: "108.00",
    picture: "./images/nvl_6.jpg",
  },
  {
    id: "3997403",
    name: "魔女之旅7",
    price: "99.00",
    picture: "./images/nvl_7.jpg",
  },
  {
    id: "3998274",
    name: "魔女之旅8",
    price: "139.00",
    picture: "./images/nvl_8.jpg",
  },
  {
    id: "3998274",
    name: "魔女之旅9",
    price: "139.00",
    picture: "./images/nvl_9.jpg",
  },
  {
    id: "3998274",
    name: "魔女之旅10",
    price: "139.00",
    picture: "./images/nvl_10.jpg",
  },
  {
    id: "3998274",
    name: "魔女之旅11",
    price: "139.00",
    picture: "./images/nvl_11.jpg",
  },
  {
    id: "3998274",
    name: "魔女之旅12",
    price: "139.00",
    picture: "./images/nvl_12.jpg",
  },
  {
    id: "3998274",
    name: "魔女之旅13",
    price: "139.00",
    picture: "./images/nvl_13.jpg",
  },
  {
    id: "3998274",
    name: "魔女之旅14",
    price: "139.00",
    picture: "./images/nvl_14.jpg",
  },
  {
    id: "3998274",
    name: "魔女之旅15",
    price: "139.00",
    picture: "./images/nvl_15.jpg",
  },
  {
    id: "3998274",
    name: "魔女之旅16",
    price: "139.00",
    picture: "./images/nvl_16.webp",
  },
  {
    id: "3998274",
    name: "魔女之旅17",
    price: "139.00",
    picture: "./images/nvl_17.webp",
  },
  {
    id: "3998274",
    name: "魔女之旅18",
    price: "139.00",
    picture: "./images/nvl_18.webp",
  },
  {
    id: "3998274",
    name: "魔女之旅19",
    price: "139.00",
    picture: "./images/nvl_19.webp",
  },
  {
    id: "3998274",
    name: "魔女之旅20",
    price: "139.00",
    picture: "./images/nvl_20.webp",
  },
  {
    id: "3998274",
    name: "魔女之旅8",
    price: "139.00",
    picture: "./images/nvl_21.webp",
  },
  {
    id: "3998274",
    name: "魔女之旅8",
    price: "139.00",
    picture: "./images/nvl_22.webp",
  },
  {
    id: "3998274",
    name: "魔女之旅8",
    price: "139.00",
    picture: "./images/nvl_23.webp",
  },
  {
    id: "3998274",
    name: "魔女之旅8",
    price: "139.00",
    picture: "./images/nvl_24.webp",
  },
  {
    id: "3998274",
    name: "魔女之旅8",
    price: "139.00",
    picture: "./images/nvl_sp_1.webp",
  },
  {
    id: "3998274",
    name: "学院物语2",
    price: "139.00",
    picture: "./images/nvl_sp_2.webp",
  },
];

// 1. 声明一个字符串变量
let str = "";
// 2. 遍历数据
goodsList.forEach((item) => {
  // console.log(item)  // 可以得到每一个数组元素  对象 {id: '4001172'}
  // const {id} =  item  对象解构
  const { name, price, picture } = item;
  str += `
      <div class="item">
        <img src=${picture} alt="">
        <p class="name">${name}</p>
        <p class="price">${price}</p>
      </div>
      `;
});
// 3.生成的 字符串 添加给 list
document.querySelector(".list").innerHTML = str;
