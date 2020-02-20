// const prouduct =
// {

//     fakeDB : [],

//     init()
//     {

//         this.fakeDB.push({title:'XPS 13',description:`Our smallest 13-inch laptops feature a virtually 
//         borderless InfinityEdge display and up to 10th gen Intel® processors. 
//         Touch, silver, rose gold and frost options available
//         `,price:`1349.99`});
    
//         this.fakeDB.push({title:'XPS 15',description:`Powerhouse performance with the latest processors and NVIDIA 
//         graphics paired with a stunning 4K Ultra HD display.`,price:`1749.99`});
    
//         this. fakeDB.push({title:'XPS 17',description:`XPS 17 is designed to keep you entertained for more than 9 hours 
//         with a 9-cell battery upgrade.`,price:`1949.99`});


//         this. fakeDB.push({title:'toy',description:`nice toy.everyone loves toys`,price:`149.99`});
//     },
//     getallProducts()
//     {
//         return this.fakeDB;
//     }

// }

const room = 
{
  fakeDB : [],

  init()
  {
    this.fakeDB.push({
        id : 110,
        // roomImg : settings.imagePath+`img01.jpg`,
        // starImg: settings.starsPath+`2stars.png`,
        title: `Hidden Gem of ...`,
        description: `Entire home, Self check-in, Sparkling clean, Victoria And Christian is a Superhost`,
        price: 66
    });
    this.fakeDB.push({
        id : 111,
        // roomImg : settings.imagePath+`img02.jpg`,
        // starImg: settings.starsPath+`3stars.png`,
        title: `Joshua Tree ...`,
        description: `Entire home, Self check-in, Sparkling clean, Victoria And Christian is a Superhost`,
        price: 159
        });
    this.fakeDB.push({
        id : 112,
        // roomImg : settings.imagePath+`img03.jpg`,
        // starImg: settings.starsPath+`4stars.png`,
        title: `1 Bdrm Modern ...`,
        description: `Entire home, Self check-in, Sparkling clean, Victoria And Christian is a Superhost`,
        price: 99 
    });
    this.fakeDB.push({
        id : 113,
        // roomImg : settings.imagePath+`img04.jpg`,
        // starImg: settings.starsPath+`1star.png`,
        title: `Entire Chalet. South Lake ...`,
        description: `The Lake Tahoe Chalet`,
        price: 249
    });
    this.fakeDB.push({
        id : 114,
        // roomImg : settings.imagePath+`img05.jpg`,
        // starImg: settings.starsPath+`0star.png`,
        title: `Entire house ...`,
        description: `The Lake Tahoe Chalet`,
        price: 149 
    });
    this.fakeDB.push({
        id : 115,
        // roomImg : settings.imagePath+`img06.jpg`,
        // starImg: settings.starsPath+`5stars.png`,
        title: `Hector Cave House`,
        description: `Hector Cave House, carved into the unique caldera cliff for more than 250 years, was originally used as a wine cellar.`,
        price: 572
    });
  },
  getAllRooms()
  {
    return this.fakeDB;
  }
}

room.init();
module.exports=room;

// const allRooms =[
//   { //0
//     id : 110,
//     roomImg : settings.imagePath+`img01.jpg`,
//     starImg: settings.starsPath+`2stars.png`,
//     title: `Hidden Gem of ...`,
//     description: `Entire home, Self check-in, Sparkling clean, Victoria And Christian is a Superhost`,
//     price: 66
//   },{ //1
//     id : 111,
//     roomImg : settings.imagePath+`img02.jpg`,
//     starImg: settings.starsPath+`3stars.png`,
//     title: `Joshua Tree ...`,
//     description: `Entire home, Self check-in, Sparkling clean, Victoria And Christian is a Superhost`,
//     price: 159
//   },{ //2
//     id : 112,
//     roomImg : settings.imagePath+`img03.jpg`,
//     starImg: settings.starsPath+`4stars.png`,
//     title: `1 Bdrm Modern ...`,
//     description: `Entire home, Self check-in, Sparkling clean, Victoria And Christian is a Superhost`,
//     price: 99 
//   },{ //3
//     id : 113,
//     roomImg : settings.imagePath+`img04.jpg`,
//     starImg: settings.starsPath+`1star.png`,
//     title: `Entire Chalet. South Lake ...`,
//     description: `The Lake Tahoe Chalet`,
//     price: 249
//   },{ //4
//     id : 114,
//     roomImg : settings.imagePath+`img05.jpg`,
//     starImg: settings.starsPath+`0star.png`,
//     title: `Entire house ...`,
//     description: `The Lake Tahoe Chalet`,
//     price: 149 
//   },{ //5
//     id : 115,
//     roomImg : settings.imagePath+`img06.jpg`,
//     starImg: settings.starsPath+`5stars.png`,
//     title: `Hector Cave House`,
//     description: `Hector Cave House, carved into the unique caldera cliff for more than 250 years, was originally used as a wine cellar.`,
//     price: 572
//   }
// ];



