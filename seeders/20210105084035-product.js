"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Products",
      [
        {
          CategoryId: 1,
          name: "可麗露",
          image: "https://imgur.com/lxWa1BS.png",
          info: `小型的法式糕點，表層則是厚厚焦褐色滿是焦糖的微硬外殼。 

          這項點心外型上小巧，大約呈2英吋高、分層的圓柱體，是法國波爾多地區的特產，但也常常可以在巴黎糕點店(pâtisseries)找到。`,
          status: 1,
          is_deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          CategoryId: 2,
          name: "磅蛋糕",
          image: "https://imgur.com/HcqDbdB.jpg",
          info: `牛油、砂糖、雞蛋、麵粉各取一磅(pound)，混合成麵糊，烤作蛋糕，就是「磅蛋糕」名字的由來。

          磅蛋糕，又叫奶油蛋糕，這是一種非常常見的蛋糕，濃郁奶香與紮實口感是一大特色。
          
          磅蛋糕原來的意思，是指用相同份量的材料（麵粉、奶油、糖、蛋各一磅）做出來的濃郁重奶油蛋糕，所以叫磅蛋糕『Pound cake』。台灣稱為重奶油蛋糕或布丁蛋糕。
          
          磅蛋糕發源自美國南部，再傳入世界各國後，各國則因應風俗民情以及不同的飲食習慣，創造出了各式各樣不同風格的磅蛋糕，材料及作法簡單不容易失敗，香濃且密實的濃郁口感，為新手必學的ㄧ道甜點。`,
          status: 1,
          is_deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          CategoryId: 2,
          name: "巧克力磅蛋糕",
          image: "https://imgur.com/VMttCTQ.jpg",
          info: `磅蛋糕，又叫奶油蛋糕，這是一種非常常見的蛋糕，濃郁奶香與紮實口感是一大特色。

          磅蛋糕原來的意思，是指用相同份量的材料（麵粉、奶油、糖、蛋各一磅）做出來的濃郁重奶油蛋糕，所以叫磅蛋糕『Pound cake』。台灣稱為重奶油蛋糕或布丁蛋糕。
          
          磅蛋糕發源自美國南部，再傳入世界各國後，各國則因應風俗民情以及不同的飲食習慣，創造出了各式各樣不同風格的磅蛋糕，材料及作法簡單不容易失敗，香濃且密實的濃郁口感，為新手必學的ㄧ道甜點。`,
          status: 1,
          is_deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          CategoryId: 1,
          name: "可可貝果",
          image: "https://imgur.com/YNICHSc.jpg",
          info: `可可貝果超爆好吃的啦！`,
          status: 1,
          is_deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          CategoryId: 1,
          name: "草莓蛋糕",
          image: "https://imgur.com/Xv6ZdO8.jpg",
          info: null,
          status: 1,
          is_deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          CategoryId: 1,
          name: "經典可頌",
          image: "https://imgur.com/d3e1T2u.jpg",
          info: `輕盈溫暖的乳香，一咬就斷口. 在奶油與麵糰的軟硬拿捏過程掌握最完美的時間點 才能打造出16摺、層次分明的口感。

          對於牛角麵包的由來，至今沒有確切的定論。
          
          傳說牛角麵包起源於奧地利維也納的一家糕點店，用來紀念奧斯曼帝國的撤軍。1683年，發生了維也納戰役，因此這類西點被稱為viennoiserie。
          當時，軍隊決定在夜間偷襲維也納，然而被當地麵包房早早起來的麵包師傅們發覺。他們拉響了全城警報，從而使敵方的偷襲以失敗而告終。
          為了紀念這次勝利，麵包師傅們把麵包做成了號角的形狀，這種形狀也很近似於鄂圖曼帝國旗幟的標誌。`,
          status: 1,
          is_deleted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Products", null, {});
  },
};
