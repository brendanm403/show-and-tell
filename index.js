let allBooksArray= [];
let booksInStockArray = [];
var isGridPresent = false;
var gridLength = 0;
const numberFormatter = Intl.NumberFormat('en-US');

function BooktasticBook(bookId, name, onScreen, price, priceMax, priceMin, rarity, release, selected, source, stock, stockId) {
    this.bookId = bookId;
    this.name = name;
    this.onScreen = onScreen;
    this.price = price;
    this.priceMax = priceMax;
    this.priceMin = priceMin;
    this.rarity = rarity;
    this.release = release;
    this.selected = selected;
    this.source = source;
    this.stock = stock;
    this.stockId = stockId;
};

// function to determine the minimum and maximum amount of the item stocked based on rarity //
function getStockLimits(rarity) {
    if(rarity <=45){
        return [10,27]
    } else if(rarity >45 && rarity <=60){
        return [8,21];
    } else if(rarity >60 && rarity <=70){
        return [3,11];
    } else if(rarity >70 && rarity <= 80){
        return [2,5];
    } else if(rarity >80 && rarity <=84){
        return [1,4];
    } else if(rarity === 85){
        return [1,3];
    } else{
        return[1,1];
    }
    
};

// function that picks a random number in the specified range //
function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

// method that chooses stock amount that is assigned to the book object //
function stockAmountMethod(rarity) {
    let getStockAmount = getStockLimits(rarity);
    let randomIntegerStocked = randomRange(getStockAmount[0],getStockAmount[1]);   
    return randomIntegerStocked;   
};

//function to generate random stockID//
function generateStockId() {
    let x = Math.floor((Math.random()+100) *1000000000);
    return x;
};

//creating all books objects//
var bbook0 = new BooktasticBook("item000", "Back In Peaceful Times", false, randomRange(920,1109), 1109, 920, 38, "05/05/2004", false, "images/book0.gif", stockAmountMethod(38), generateStockId());
var bbook1 = new BooktasticBook("item001", "105 Lava Cake Recipes", false, randomRange(972,1172), 1172, 972, 41, "05/05/2004", false, "images/book1.gif", stockAmountMethod(41), generateStockId());
var bbook2 = new BooktasticBook("item002", "Traversing The Moon", false, randomRange(766,924), 924, 766, 50, "05/05/2004", false, "images/book2.gif", stockAmountMethod(50), generateStockId());
var bbook3 = new BooktasticBook("item003", "Kreludan Recipes", false, randomRange(1462,1763), 1763, 1462, 35, "05/05/2004", false, "images/book3.gif", stockAmountMethod(35), generateStockId());
var bbook4 = new BooktasticBook("item004", "Repairing Your Ship", false, randomRange(644,777), 777, 644, 45, "05/05/2004", false, "images/book4.gif", stockAmountMethod(45), generateStockId());
var bbook5 = new BooktasticBook("item005", "Orange Grundo Survival Handbook", false, randomRange(1243,1499), 1499, 1243, 38, "05/05/2004", false, "images/book5.gif", stockAmountMethod(38), generateStockId());
var bbook6 = new BooktasticBook("item006", "Victory Is Ours", false, randomRange(1045,1260), 1260, 1045, 35, "05/05/2004", false, "images/book6.gif", stockAmountMethod(35), generateStockId());
var bbook7 = new BooktasticBook("item007", "Oranges Are Better", false, randomRange(1432,1727), 1727, 1432, 55, "05/05/2004", false, "images/book7.gif", stockAmountMethod(55), generateStockId());
var bbook8 = new BooktasticBook("item008", "The Threat Outside", false, randomRange(684,825), 825, 684, 45, "05/05/2004", false, "images/book8.gif", stockAmountMethod(45), generateStockId());
var bbook9 = new BooktasticBook("item009", "Orange Central History", false, randomRange(2186,2636), 2636, 2186, 55, "05/05/2004", false, "images/book9.gif", stockAmountMethod(55), generateStockId());

var bbook10 = new BooktasticBook("item010", "Wishing On A Star", false, randomRange(515,621), 621, 515, 60, "05/11/2004", false, "images/book10.gif", stockAmountMethod(60), generateStockId());
var bbook11 = new BooktasticBook("item011", "The Kreludan Flag", false, randomRange(1100,1326), 1326, 1100, 35, "05/11/2004", false, "images/book11.gif", stockAmountMethod(35), generateStockId());
var bbook12 = new BooktasticBook("item012", "Defend Yourself", false, randomRange(855,1030), 1030, 855, 38, "05/11/2004", false, "images/book12.gif", stockAmountMethod(38), generateStockId());
var bbook13 = new BooktasticBook("item013", "Constellation Spotting", false, randomRange(1616,1949), 1949, 1616, 47, "05/11/2004", false, "images/book13.gif", stockAmountMethod(47), generateStockId());
var bbook14 = new BooktasticBook("item014", "Kreludan Fashion", false, randomRange(1054,1271), 1271, 1054, 57, "05/17/2004", false, "images/book14.gif", stockAmountMethod(57), generateStockId());
var bbook15 = new BooktasticBook("item015", "Galactic Adventures", false, randomRange(940,1133), 1133, 940, 58, "05/17/2004", false, "images/book15.gif", stockAmountMethod(58), generateStockId());
var bbook16 = new BooktasticBook("item016", "Kreludan Encyclopedia", false, randomRange(605,729), 729, 605, 55, "05/17/2004", false, "images/book16.gif", stockAmountMethod(55), generateStockId());
var bbook17 = new BooktasticBook("item017", "Collecting Moon Rock", false, randomRange(611,737), 737, 611, 60, "05/17/2004", false, "images/book17.gif", stockAmountMethod(60), generateStockId());
var bbook18 = new BooktasticBook("item018", "Attack On Kreludor", false, randomRange(271,327), 327, 271, 55, "05/24/2004", false, "images/book18.gif", stockAmountMethod(55), generateStockId());
var bbook19 = new BooktasticBook("item019", "Kreludan Bed Time Stories", false, randomRange(1362,1642), 1642, 1362, 40, "05/24/2004", false, "images/book19.gif", stockAmountMethod(40), generateStockId());

var bbook20 = new BooktasticBook("item020", "Kreludan Facts", false, randomRange(2140,2581), 2581, 2140, 50, "05/24/2004", false, "images/book20.gif", stockAmountMethod(50), generateStockId());
var bbook21 = new BooktasticBook("item021", "Kreludan Cookie Book", false, randomRange(672,810), 810, 672, 50, "05/27/2004", false, "images/book21.gif", stockAmountMethod(50), generateStockId());
var bbook22 = new BooktasticBook("item022", "Kreludan Games", false, randomRange(1593,1921), 1921, 1593, 70, "05/27/2004", false, "images/book22.gif", stockAmountMethod(70), generateStockId());
var bbook23 = new BooktasticBook("item023", "Moon Missions", false, randomRange(530,639), 639, 530, 60, "05/27/2004", false, "images/book23.gif", stockAmountMethod(60), generateStockId());
var bbook24 = new BooktasticBook("item024", "Kreludan Sundaes", false, randomRange(1969,2375), 2375, 1969, 55, "06/08/2004", false, "images/book24.gif", stockAmountMethod(55), generateStockId());
var bbook25 = new BooktasticBook("item025", "Moon Rock Formations", false, randomRange(672,810), 810, 672, 50, "06/08/2004", false, "images/book25.gif", stockAmountMethod(50), generateStockId());
var bbook26 = new BooktasticBook("item026", "Defending Your Neohome", false, randomRange(1238,1493), 1493, 1238, 60, "06/08/2004", false, "images/book26.gif", stockAmountMethod(60), generateStockId());
var bbook27 = new BooktasticBook("item027", "Kreludan Poems", false, randomRange(1372,1655), 1655, 1372, 70, "07/23/2004", false, "images/book27.gif", stockAmountMethod(70), generateStockId());
var bbook28 = new BooktasticBook("item028", "Learning kreludan", false, randomRange(1808,2180), 2180, 1808, 78, "07/23/2004", false, "images/book28.gif", stockAmountMethod(78), generateStockId());
var bbook29 = new BooktasticBook("item029", "Mathematics In Space", false, randomRange(1385,1670), 1670, 1385, 75, "07/23/2004", false, "images/book29.gif", stockAmountMethod(75), generateStockId());

var bbook30 = new BooktasticBook("item030", "Kreludan Physics", false, randomRange(780,940), 940, 780, 70, "07/23/2004", false, "images/book30.gif", stockAmountMethod(70), generateStockId());
var bbook31 = new BooktasticBook("item031", "Practical Repairs", false, randomRange(1927,2324), 2324, 1927, 83, "10/05/2004", false, "images/book31.gif", stockAmountMethod(83), generateStockId());
var bbook32 = new BooktasticBook("item032", "Alien Aisha Invasion", false, randomRange(10000,10001), 10001, 10000, 99, "10/05/2004", false, "images/book32.gif", stockAmountMethod(99), generateStockId());
var bbook33 = new BooktasticBook("item033", "It Came From Kreludor", false, randomRange(10000,10001), 10001, 10000, 99, "10/05/2004", false, "images/book33.gif", stockAmountMethod(99), generateStockId());
var bbook34 = new BooktasticBook("item034", "Interplanetary Communications", false, randomRange(10000,10001), 10001, 10000, 100, "10/05/2004", false, "images/book34.gif", stockAmountMethod(100), generateStockId());
var bbook35 = new BooktasticBook("item035", "Beam Me Aboard", false, randomRange(10000,10001), 10001, 10000, 100, "10/11/2004", false, "images/book35.gif", stockAmountMethod(100), generateStockId());
var bbook36 = new BooktasticBook("item036", "Advanced Kreludan Physics", false, randomRange(10000,10001), 10001, 10000, 100, "10/11/2004", false, "images/book36.gif", stockAmountMethod(100), generateStockId());
var bbook37 = new BooktasticBook("item037", "Kreludan Engineering", false, randomRange(10000,10001), 10001, 10000, 100, "10/11/2004", false, "images/book37.gif", stockAmountMethod(100), generateStockId());
var bbook38 = new BooktasticBook("item038", "Know Your Robot Petpet", false, randomRange(10000,10001), 100001, 10000, 100, "10/11/2004", false, "images/book38.gif", stockAmountMethod(100), generateStockId());
var bbook39 = new BooktasticBook("item039", "The Green Grundo Invasion", false, randomRange(10000,10001), 10001, 10000, 100, "10/19/2004", false, "images/book39.gif", stockAmountMethod(100), generateStockId());

var bbook40 = new BooktasticBook("item040", "Kreludor Versus Neopia", false, randomRange(10000,10001), 10001, 10000, 100, "10/19/2004", false, "images/book40.gif", stockAmountMethod(100), generateStockId());
var bbook41 = new BooktasticBook("item041", "Scenic Kreludan Views", false, randomRange(10000,10001), 10001, 10000, 100, "10/19/2004", false, "images/book41.gif", stockAmountMethod(100), generateStockId());
var bbook42 = new BooktasticBook("item042", "How Purples Got Their Spots", false, randomRange(10000,10001), 10001, 10000, 100, "10/19/2004", false, "images/book42.gif", stockAmountMethod(100), generateStockId());
var bbook43 = new BooktasticBook("item043", "Do The Moon Bounce", false, randomRange(5000,5001), 5001, 5000, 90, "01/04/2005", false, "images/book43.gif", stockAmountMethod(90), generateStockId());
var bbook44 = new BooktasticBook("item044", "Kreludan Cookie Cookbook", false, randomRange(10000,10001), 10001, 10000, 97, "01/04/2005", false, "images/book44.gif", stockAmountMethod(97), generateStockId());
var bbook45 = new BooktasticBook("item045", "Guide To The Neocola Machine", false, randomRange(10000,10001), 10001, 10000, 99, "01/04/2005", false, "images/book45.gif", stockAmountMethod(99), generateStockId());
var bbook46 = new BooktasticBook("item046", "Kreludor Home Decorating", false, randomRange(5000,5001), 5001, 5000, 94, "01/04/2005", false, "images/book46.gif", stockAmountMethod(94), generateStockId());
var bbook47 = new BooktasticBook("item047", "Kreludan Crosswords", false, randomRange(5000,5001), 5001, 5000, 90, "01/24/2005", false, "images/book47.gif", stockAmountMethod(90), generateStockId());
var bbook48 = new BooktasticBook("item048", "Galactic Adventures II", false, randomRange(2500,2501), 2501, 2500, 89, "01/24/2005", false, "images/book48.gif", stockAmountMethod(89), generateStockId());
var bbook49 = new BooktasticBook("item049", "Creatures From Afar", false, randomRange(1407,1697), 1697, 1407, 80, "01/24/2005", false, "images/book49.gif", stockAmountMethod(80), generateStockId());

var bbook50 = new BooktasticBook("item050", "Beyond Neopia", false, randomRange(1138,1372), 1372, 1138, 70, "01/24/2005", false, "images/book50.gif", stockAmountMethod(70), generateStockId());
var bbook51 = new BooktasticBook("item051", "Zero Gravity and Loving It", false, randomRange(1077,1299), 1299, 1077, 80, "04/20/2005", false, "images/book51.gif", stockAmountMethod(80), generateStockId());
var bbook52 = new BooktasticBook("item052", "Stairway to Kreludor", false, randomRange(938,1131), 1131, 938, 75, "04/20/2005", false, "images/book52.gif", stockAmountMethod(75), generateStockId());
var bbook53 = new BooktasticBook("item053", "Computing the Kreludan Way", false, randomRange(2500,2501), 2501, 2500, 86, "04/20/2005", false, "images/book53.gif", stockAmountMethod(86), generateStockId());
var bbook54 = new BooktasticBook("item054", "Building Techniques", false, randomRange(873,1052), 1052, 873, 70, "07/07/2005", false, "images/book54.gif", stockAmountMethod(70), generateStockId());
var bbook55 = new BooktasticBook("item055", "Space Exploration", false, randomRange(2455,2961), 2961, 2455, 60, "07/07/2005", false, "images/book55.gif", stockAmountMethod(60), generateStockId());
var bbook56 = new BooktasticBook("item056", "Kreating Kreludan Angles", false, randomRange(2500,2501), 2501, 2500, 85, "07/07/2005", false, "images/book56.gif", stockAmountMethod(85), generateStockId());
var bbook57 = new BooktasticBook("item057", "Yesterdays Future", false, randomRange(2500,2501), 2501, 2500, 88, "07/07/2005", false, "images/book57.gif", stockAmountMethod(88), generateStockId());
var bbook58 = new BooktasticBook("item058", "Kreludan Mysteries", false, randomRange(2500,2501), 2501, 2500, 85, "08/12/2005", false, "images/book58.gif", stockAmountMethod(85), generateStockId());
var bbook59 = new BooktasticBook("item059", "The Sun and You", false, randomRange(2500,2501), 2501, 2500, 89, "08/12/2005", false, "images/book59.gif", stockAmountMethod(89), generateStockId());

var bbook60 = new BooktasticBook("item060", "Light Speed Made Easy", false, randomRange(414,500), 500, 414, 78, "08/12/2005", false, "images/book60.gif", stockAmountMethod(78), generateStockId());
var bbook61 = new BooktasticBook("item061", "Dont Push That Button!", false, randomRange(2500,2501), 2501, 2500, 89, "10/17/2005", false, "images/book61.gif", stockAmountMethod(89), generateStockId());
var bbook62 = new BooktasticBook("item062", "Get Organised Stay Organised", false, randomRange(5000,5001), 5001, 5000, 92, "10/17/2005", false, "images/book62.gif", stockAmountMethod(92), generateStockId());
var bbook63 = new BooktasticBook("item063", "Half Moon Pop-Up Book", false, randomRange(10000,10001), 10001, 10000, 95, "10/17/2005", false, "images/book63.gif", stockAmountMethod(95), generateStockId());
var bbook64 = new BooktasticBook("item064", "The Handy Guide to Neopian Domination", false, randomRange(4679,5643), 5643, 4679, 85, "01/13/2006", false, "images/book64.gif", stockAmountMethod(85), generateStockId());
var bbook65 = new BooktasticBook("item065", "The Complete Guide to Dr Sloth", false, randomRange(3394,4092), 4092, 3394, 83, "01/13/2006", false, "images/book65.gif", stockAmountMethod(83), generateStockId());
var bbook66 = new BooktasticBook("item066", "Secrets of Sloth", false, randomRange(6091,7345), 7345, 6091, 92, "01/13/2006", false, "images/book66.gif", stockAmountMethod(92), generateStockId());
var bbook67 = new BooktasticBook("item067", "Almost Big Book of Slothy Recipes", false, randomRange(3449,4159), 4159, 3449, 87, "01/13/2006", false, "images/book67.gif", stockAmountMethod(87), generateStockId());
var bbook68 = new BooktasticBook("item068", "The Code", false, randomRange(794,957), 957, 794, 72, "01/30/2006", false, "images/book68.gif", stockAmountMethod(72), generateStockId());
var bbook69 = new BooktasticBook("item069", "Neopet V2 Guide to Revenge", false, randomRange(1447,1745), 1745, 1447, 78, "01/30/2006", false, "images/book69.gif", stockAmountMethod(78), generateStockId());

var bbook70 = new BooktasticBook("item070", "Craters of Kreludor", false, randomRange(1464,1765), 1765, 1464, 75, "01/30/2006", false, "images/book70.gif", stockAmountMethod(75), generateStockId());
var bbook71 = new BooktasticBook("item071", "101 Stale Bread Recipes", false, randomRange(1184,1427), 1427, 1184, 68, "06/29/2006", false, "images/book71.gif", stockAmountMethod(68), generateStockId());
var bbook72 = new BooktasticBook("item072", "Kreluberry Cookbook", false, randomRange(1639,1976), 1976, 1639, 77, "09/21/2006", false, "images/book72.gif", stockAmountMethod(77), generateStockId());
var bbook73 = new BooktasticBook("item073", "Slime and You", false, randomRange(1417,1708), 1708, 1417, 78, "09/21/2006", false, "images/book73.gif", stockAmountMethod(78), generateStockId());
var bbook74 = new BooktasticBook("item074", "Purple and Orange - The Truth", false, randomRange(1246,1503), 1503, 1246, 79, "09/21/2006", false, "images/book74.gif", stockAmountMethod(79), generateStockId());
var bbook75 = new BooktasticBook("item075", "Neocola Book", false, randomRange(713,860), 860, 713, 80, "09/21/2006", false, "images/book75.gif", stockAmountMethod(80), generateStockId());
var bbook76 = new BooktasticBook("item076", "Grundo Beauty Book", false, randomRange(2500,2501), 2501, 2500, 88, "01/26/2007", false, "images/book76.gif", stockAmountMethod(88), generateStockId());
var bbook77 = new BooktasticBook("item077", "How To Escape", false, randomRange(5000,5001), 5001, 5000, 90, "01/26/2007", false, "images/book77.gif", stockAmountMethod(90), generateStockId());
var bbook78 = new BooktasticBook("item078", "Laser Energy", false, randomRange(5000,5001), 5001, 5000, 91, "01/26/2007", false, "images/book78.gif", stockAmountMethod(91), generateStockId());
var bbook79 = new BooktasticBook("item079", "The Happy Orange Grundo", false, randomRange(2500,2501), 2501, 2500, 89, "01/26/2007", false, "images/book79.gif", stockAmountMethod(89), generateStockId());

var bbook80 = new BooktasticBook("item080", "When Meteors Crash", false, randomRange(1704,2055), 2055, 1704, 81, "06/22/2007", false, "images/book80.gif", stockAmountMethod(81), generateStockId());
var bbook81 = new BooktasticBook("item081", "Meteor Sites", false, randomRange(1391,1677), 1677, 1391, 80, "06/22/2007", false, "images/book81.gif", stockAmountMethod(80), generateStockId());
var bbook82 = new BooktasticBook("item082", "Identifying Meteorites", false, randomRange(1485,1791), 1791, 1485, 79, "06/22/2007", false, "images/book82.gif", stockAmountMethod(79), generateStockId());
var bbook83 = new BooktasticBook("item083", "Meteor Shower Protection", false, randomRange(1898,2289), 2289, 1898, 78, "06/22/2007", false, "images/book83.gif", stockAmountMethod(78), generateStockId());
var bbook84 = new BooktasticBook("item084", "Achyfi Recipes", false, randomRange(1034,1247), 1247, 1034, 72, "08/24/2007", false, "images/book84.gif", stockAmountMethod(72), generateStockId());
var bbook85 = new BooktasticBook("item085", "The Big Book of Intermediate Evil Plots", false, randomRange(14460,17437), 17437, 14460, 97, "08/24/2007", false, "images/book85.gif", stockAmountMethod(97), generateStockId());
var bbook86 = new BooktasticBook("item086", "Easy Decor in Low Gravity Situations", false, randomRange(10545,12716), 12716, 10545, 93, "08/24/2007", false, "images/book86.gif", stockAmountMethod(93), generateStockId());
var bbook87 = new BooktasticBook("item087", "Kreludor Rainy Day Activity Book", false, randomRange(3787,4566), 4566, 3787, 89, "08/24/2007", false, "images/book87.gif", stockAmountMethod(89), generateStockId());
var bbook88 = new BooktasticBook("item088", "Zarex Diary", false, randomRange(5000,5001), 5001, 5000, 91, "11/22/2007", false, "images/book88.gif", stockAmountMethod(91), generateStockId());
var bbook89 = new BooktasticBook("item089", "Oxygen and You", false, randomRange(929,1120), 1120, 929, 68, "11/22/2007", false, "images/book89.gif", stockAmountMethod(68), generateStockId());

var bbook90 = new BooktasticBook("item090", "Kreludor Mining Corridor Maps", false, randomRange(10000,10001), 10001, 10000, 99, "11/22/2007", false, "images/book90.gif", stockAmountMethod(99), generateStockId());
var bbook91 = new BooktasticBook("item091", "Spyders", false, randomRange(835,1007), 1007, 835, 66, "11/22/2007", false, "images/book91.gif", stockAmountMethod(66), generateStockId());
var bbook92 = new BooktasticBook("item092", "Antigravity Games", false, randomRange(1485,1791), 1791, 1485, 65, "04/11/2008", false, "images/book92.gif", stockAmountMethod(65), generateStockId());
var bbook93 = new BooktasticBook("item093", "Beverage Recipes Book", false, randomRange(928,1119), 1119, 928, 68, "04/11/2008", false, "images/book93.gif", stockAmountMethod(68), generateStockId());
var bbook94 = new BooktasticBook("item094", "Picnicking on Kreludor Book", false, randomRange(903,1089), 1089, 903, 72, "04/11/2008", false, "images/book94.gif", stockAmountMethod(72), generateStockId());
var bbook95 = new BooktasticBook("item095", "Programming Book", false, randomRange(784,946), 946, 784, 78, "04/11/2008", false, "images/book95.gif", stockAmountMethod(78), generateStockId());
var bbook96 = new BooktasticBook("item096", "Crater Dwellings", false, randomRange(2379,2869), 2869, 2379, 64, "08/01/2008", false, "images/book96.gif", stockAmountMethod(64), generateStockId());
var bbook97 = new BooktasticBook("item097", "Robot Fashions", false, randomRange(1698,2048), 2048, 1698, 69, "08/01/2008", false, "images/book97.gif", stockAmountMethod(69), generateStockId());
var bbook98 = new BooktasticBook("item098", "Robot Rock", false, randomRange(856,1032), 1032, 856, 73, "08/01/2008", false, "images/book98.gif", stockAmountMethod(73), generateStockId());
var bbook99 = new BooktasticBook("item099", "Robot Care", false, randomRange(3307,3988), 3988, 3307, 78, "08/01/2008", false, "images/book99.gif", stockAmountMethod(78), generateStockId());

var bbook100 = new BooktasticBook("item100", "Games on Kreludor", false, randomRange(5234,6311), 6311, 5234, 88, "03/07/2009", false, "images/book100.gif", stockAmountMethod(88), generateStockId());
var bbook101 = new BooktasticBook("item101", "Space Fashion", false, randomRange(3279,3955), 3955, 3279, 87, "03/07/2009", false, "images/book101.gif", stockAmountMethod(87), generateStockId());
var bbook102 = new BooktasticBook("item102", "Kreludan Life", false, randomRange(990,1194), 1194, 990, 73, "07/16/2009", false, "images/book102.gif", stockAmountMethod(73), generateStockId());
var bbook103 = new BooktasticBook("item103", "Situational Gravity Pranks", false, randomRange(10355,12487), 12487, 10355, 92, "07/16/2009", false, "images/book103.gif", stockAmountMethod(92), generateStockId());
var bbook104 = new BooktasticBook("item104", "Binary Stars and You", false, randomRange(2500,2501), 2501, 2500, 89, "07/22/2009", false, "images/book104.gif", stockAmountMethod(89), generateStockId());
var bbook105 = new BooktasticBook("item105", "Build Your Own Telescope", false, randomRange(2500,2834), 2834, 2500, 88, "07/22/2009", false, "images/book105.gif", stockAmountMethod(88), generateStockId());
var bbook106 = new BooktasticBook("item106", "Zurroball Tournament Rule Book", false, randomRange(1158,1396), 1396, 1158, 56, "08/25/2009", false, "images/book106.gif", stockAmountMethod(56), generateStockId());
var bbook107 = new BooktasticBook("item107", "Grundos In Space", false, randomRange(1267,1528), 1528, 1267, 53, "08/25/2009", false, "images/book107.gif", stockAmountMethod(53), generateStockId());
var bbook108 = new BooktasticBook("item108", "Tips for Scouting", false, randomRange(1261,1521), 1521, 1261, 75, "09/29/2009", false, "images/book108.gif", stockAmountMethod(75), generateStockId());
var bbook109 = new BooktasticBook("item109", "The Great Betrayal", false, randomRange(1581,1907), 1907, 1581, 74, "09/29/2009", false, "images/book109.gif", stockAmountMethod(74), generateStockId());

var bbook110 = new BooktasticBook("item110", "Mining Operations Technical Manual", false, randomRange(6414,7735), 7735, 6414, 88, "11/21/2009", false, "images/book110.gif", stockAmountMethod(88), generateStockId());
var bbook111 = new BooktasticBook("item111", "Space Rocks: A Visual Encyclopedia", false, randomRange(2126,2564), 2564, 2126, 82, "11/21/2009", false, "images/book111.gif", stockAmountMethod(82), generateStockId());
var bbook112 = new BooktasticBook("item112", "Kreludan Architecture", false, randomRange(34185,41223), 41223, 34185, 96, "03/26/2010", false, "images/book112.gif", stockAmountMethod(96), generateStockId());
var bbook113 = new BooktasticBook("item113", "Its Not Easy Being Purple", false, randomRange(3939,4750), 4750, 3939, 88, "03/26/2010", false, "images/book113.gif", stockAmountMethod(88), generateStockId());
var bbook114 = new BooktasticBook("item114", "It Came From the Mine", false, randomRange(22382,26990), 26990, 22382, 97, "09/03/2010", false, "images/book114.gif", stockAmountMethod(97), generateStockId());
var bbook115 = new BooktasticBook("item115", "Meteorite Craft Book", false, randomRange(13493,16270), 16270, 13493, 93, "09/03/2010", false, "images/book115.gif", stockAmountMethod(93), generateStockId());
var bbook116 = new BooktasticBook("item116", "Low Gravity Rock Collecting", false, randomRange(10373,12509), 12509, 10373, 88, "12/03/2010", false, "images/book116.gif", stockAmountMethod(88), generateStockId());
var bbook117 = new BooktasticBook("item117", "Guide to Orange Furniture", false, randomRange(11119,13409), 13409, 11119, 90, "12/03/2010", false, "images/book117.gif", stockAmountMethod(90), generateStockId());
var bbook118 = new BooktasticBook("item118", "Under the Surface Part I", false, randomRange(11946,14406), 14406, 11946, 90, "06/29/2011", false, "images/book118.gif", stockAmountMethod(90), generateStockId());
var bbook119 = new BooktasticBook("item119", "Under the Surface Part II", false, randomRange(14062,16957), 16957, 14062, 91, "06/29/2011", false, "images/book119.gif", stockAmountMethod(91), generateStockId());

var bbook120 = new BooktasticBook("item120", "Made of Stars", false, randomRange(15226,18361), 18361, 15226, 90, "03/09/2012", false, "images/book120.gif", stockAmountMethod(90), generateStockId());
var bbook121 = new BooktasticBook("item121", "4 Billion Pie Recipes", false, randomRange(15131,18247), 18247, 15131, 90, "03/09/2012", false, "images/book121.gif", stockAmountMethod(90), generateStockId());
var bbook122 = new BooktasticBook("item122", "Space Station Schematics", false, randomRange(24708,29795), 29795, 24708, 98, "07/13/2012", false, "images/book122.gif", stockAmountMethod(98), generateStockId());
var bbook123 = new BooktasticBook("item123", "Emergency Shuttle Procedures", false, randomRange(2268,2735), 2735, 2268, 79, "07/13/2012", false, "images/book123.gif", stockAmountMethod(79), generateStockId());
var bbook124 = new BooktasticBook("item124", "Nerkmid Values", false, randomRange(6192,7467), 7467, 6192, 84, "08/01/2012", false, "images/book124.gif", stockAmountMethod(84), generateStockId());
var bbook125 = new BooktasticBook("item125", "Secrets of the Universe", false, randomRange(19663,23711), 23711, 19663, 96, "08/01/2012", false, "images/book125.gif", stockAmountMethod(96), generateStockId());
var bbook126 = new BooktasticBook("item126", "Astrophysics for Beginners", false, randomRange(8795,10606), 10606, 8795, 86, "01/17/2013", false, "images/book126.gif", stockAmountMethod(86), generateStockId());
var bbook127 = new BooktasticBook("item127", "Rocket Building for Fun and Profit", false, randomRange(5933,7154), 7154, 5933, 82, "01/17/2013", false, "images/book127.gif", stockAmountMethod(82), generateStockId());
var bbook128 = new BooktasticBook("item128", "Lennies in Space", false, randomRange(12889,15543), 15543, 12889, 94, "02/12/2013", false, "images/book128.gif", stockAmountMethod(94), generateStockId());
var bbook129 = new BooktasticBook("item129", "Robot Lenny Repair Manual", false, randomRange(4952,5971), 5971, 4952, 86, "02/12/2013", false, "images/book129.gif", stockAmountMethod(86), generateStockId());

var bbook130 = new BooktasticBook("item130", "Booktastic Books Value Guide", false, randomRange(9477,11429), 11429, 9477, 88, "08/01/2013", false, "images/book130.gif", stockAmountMethod(88), generateStockId());
var bbook131 = new BooktasticBook("item131", "Kreludor Colouring Book", false, randomRange(11913,14366), 14366, 11913, 89, "08/01/2013", false, "images/book131.gif", stockAmountMethod(89), generateStockId());
var bbook132 = new BooktasticBook("item132", "Space Station Holidays", false, randomRange(11576,13960), 13960, 11576, 90, "12/17/2013", false, "images/book132.gif", stockAmountMethod(90), generateStockId());
var bbook133 = new BooktasticBook("item133", "Boxes of Bolts", false, randomRange(2883,3477), 3477, 2883, 86, "12/17/2013", false, "images/book133.gif", stockAmountMethod(86), generateStockId());
var bbook134 = new BooktasticBook("item134", "The Space Ace", false, randomRange(21325,25715), 25715, 21325, 97, "02/04/2014", false, "images/book134.gif", stockAmountMethod(97), generateStockId());
var bbook135 = new BooktasticBook("item135", "Ace Adventures", false, randomRange(6271,7562), 7562, 6271, 83, "02/04/2014", false, "images/book135.gif", stockAmountMethod(83), generateStockId());
var bbook136 = new BooktasticBook("item136", "Derlyn Fonnet: A Biography", false, randomRange(6012,7250), 7250, 6012, 88, "04/18/2014", false, "images/book136.gif", stockAmountMethod(88), generateStockId());
var bbook137 = new BooktasticBook("item137", "Zenor Kevix: A Biography", false, randomRange(12186,14694), 14694, 12186, 92, "04/18/2014", false, "images/book137.gif", stockAmountMethod(92), generateStockId());
var bbook138 = new BooktasticBook("item138", "Diary of a Baby Space Fungus", false, randomRange(10000,11102), 11102, 10000, 95, "03/25/2015", false, "images/book138.gif", stockAmountMethod(95), generateStockId());
var bbook139 = new BooktasticBook("item139", "Myths and Legends of Alien Aishas", false, randomRange(9950,11998), 11998, 9950, 93, "03/25/2015", false, "images/book139.gif", stockAmountMethod(93), generateStockId());

var bbook140 = new BooktasticBook("item140", "Time Management", false, randomRange(5788,6980), 6980, 5788, 87, "04/17/2015", false, "images/book140.gif", stockAmountMethod(88), generateStockId());
var bbook141 = new BooktasticBook("item141", "Scoops of Friendship On the Run", false, randomRange(5011,6043), 6043, 5011, 85, "04/17/2015", false, "images/book141.gif", stockAmountMethod(89), generateStockId());
var bbook142 = new BooktasticBook("item142", "Grundo Phrase Book", false, randomRange(2500,2501), 2501, 2500, 85, "05/01/2015", false, "images/book142.gif", stockAmountMethod(90), generateStockId());
var bbook143 = new BooktasticBook("item143", "10,001 Chocolate Cake Recipes", false, randomRange(1985,2393), 2393, 1985, 54, "06/24/2015", false, "images/book143.gif", stockAmountMethod(86), generateStockId());
var bbook144 = new BooktasticBook("item144", "Grundos Guide to Brain Washing", false, randomRange(8260,9961), 9961, 8260, 91, "09/18/2015", false, "images/book144.gif", stockAmountMethod(97), generateStockId());
var bbook145 = new BooktasticBook("item145", "Most Memorable Dr Sloth Quotes", false, randomRange(2500,2501), 2501, 2500, 88, "09/18/2015", false, "images/book145.gif", stockAmountMethod(83), generateStockId());
var bbook146 = new BooktasticBook("item146", "Moonotonous", false, randomRange(2500,2501), 2501, 2500, 86, "10/13/2015", false, "images/book146.gif", stockAmountMethod(88), generateStockId());
var bbook147 = new BooktasticBook("item147", "Howl", false, randomRange(717,865), 865, 717, 81, "10/13/2015", false, "images/book147.gif",stockAmountMethod(92), generateStockId());
var bbook148 = new BooktasticBook("item148", "Kreludor on a Budget", false, randomRange(2500,2501), 2501, 2500, 85, "01/08/2016", false, "images/book148.gif", stockAmountMethod(95), generateStockId());
var bbook149 = new BooktasticBook("item149", "Kreludor: Places of Interest", false, randomRange(3264,3936), 3936, 3264, 82, "01/08/2016", false, "images/book149.gif", stockAmountMethod(93), generateStockId());

var bbook150 = new BooktasticBook("item150", "101 Tyrannian Omelettes", false, randomRange(2894,3490), 3490, 2894, 72, "10/06/2016", false, "images/book150.gif", stockAmountMethod(88), generateStockId());
var bbook151 = new BooktasticBook("item151", "Worlds Outside Neopia", false, randomRange(4265,5143), 5143, 4265, 78, "02/03/2017", false, "images/book151.gif", stockAmountMethod(89), generateStockId());
var bbook152 = new BooktasticBook("item152", "Freaky Factory Employee Handbook", false, randomRange(6125,7386), 7386, 6125, 82, "02/10/2017", false, "images/book152.gif", stockAmountMethod(90), generateStockId());
var bbook153 = new BooktasticBook("item153", "All About Rare Stamps", false, randomRange(9139,11021), 11021, 9139, 82, "08/31/2017", false, "images/book153.gif", stockAmountMethod(86), generateStockId());
var bbook154 = new BooktasticBook("item154", "Elephante Fashion", false, randomRange(8662,10446), 10446, 8662, 79, "08/31/2017", false, "images/book154.gif", stockAmountMethod(97), generateStockId());
var bbook155 = new BooktasticBook("item155", "Mind Control for Dummies", false, randomRange(4998,6027), 6027, 4998, 88, "01/15/2022", false, "images/book155.gif", stockAmountMethod(83), generateStockId());
var bbook156 = new BooktasticBook("item156", "Illusens Insignificant Quests Book", false, randomRange(2500,2832), 2832, 2500, 87, "02/05/2022", false, "images/book156.gif", stockAmountMethod(88), generateStockId());
var bbook157 = new BooktasticBook("item157", "Defenders Comic Book", false, randomRange(1963,2368), 2368, 1963, 83, "07/22/2022", false, "images/book157.gif", stockAmountMethod(92), generateStockId());
var bbook158 = new BooktasticBook("item158", "S750 Kreludan Defender Robots Tell-All Book", false, randomRange(8918,10754), 10754, 8918, 85, "08/25/2022", false, "images/book158.gif", stockAmountMethod(95), generateStockId());
var bbook159 = new BooktasticBook("item159", "Bernards Booktastic Book Club Book", false, randomRange(12184,14693), 14693, 12184, 85, "08/25/2022", false, "images/book159.gif", stockAmountMethod(93), generateStockId());

// adding all book objects to books array //
function addBooksToArray(){
    allBooksArray.push(bbook0, bbook1, bbook2, bbook3, bbook4, bbook5, bbook6, bbook7, bbook8, bbook9, bbook10, bbook11, bbook12, bbook13, bbook14, bbook15, bbook16, bbook17, bbook18, bbook19, bbook20, bbook21, bbook22, bbook23, 
        bbook24, bbook25, bbook26, bbook27, bbook28, bbook29, bbook30, bbook31, bbook32, bbook33, bbook34, bbook35, bbook36, bbook37, bbook38, bbook39, bbook40, bbook41, bbook42, bbook43, bbook44, bbook45, bbook46, bbook47,
        bbook48, bbook49, bbook50, bbook51, bbook52, bbook53, bbook54, bbook55, bbook56, bbook57, bbook58, bbook59, bbook60, bbook61, bbook62, bbook63, bbook64, bbook65, bbook66, bbook67, bbook68, bbook69, bbook70, bbook71,
        bbook72, bbook73, bbook74, bbook75, bbook76, bbook77, bbook78, bbook79, bbook80, bbook81, bbook82, bbook83, bbook84, bbook85, bbook86, bbook87, bbook88, bbook89, bbook90, bbook91, bbook92, bbook93, bbook94, bbook95,
        bbook96, bbook97, bbook98, bbook99, bbook100, bbook101, bbook102, bbook103, bbook104, bbook105, bbook106, bbook107, bbook108, bbook109, bbook110, bbook111, bbook112, bbook113, bbook114, bbook115, bbook116, bbook117,
        bbook118, bbook119, bbook120, bbook121, bbook122, bbook123, bbook124, bbook125, bbook126, bbook127, bbook128, bbook129, bbook130, bbook131, bbook132, bbook133, bbook134, bbook135, bbook136, bbook137, bbook138, bbook139,
        bbook140, bbook141, bbook142, bbook143, bbook144, bbook145, bbook146, bbook147, bbook148, bbook149, bbook150, bbook151, bbook152, bbook153, bbook154, bbook155, bbook156, bbook157, bbook158, bbook159 );   
};
// remove sold out message
function removeHints() {
    let soldOutText = document.getElementById("remove-sold-out-message"); 
    soldOutText.remove();
    
};
// creates a grid element //
function createGrid(array) {
    if(isGridPresent === false){
        if(array.length > 0){
            removeHints();
            var grid = document.createElement("div");
            grid.className = "grid-container";
            document.querySelectorAll(".shop-bottom")[0].appendChild(grid);
            isGridPresent = true;
        };    
    };       
};
// creates div to append to //
function createDiv(array, index) {
    var div = document.createElement("div");
    div.className = "grid-item";
    div.id = array[index].bookId;
    document.querySelectorAll(".grid-container")[0].appendChild(div);   
};
// creates img element //
function createImg(array, index) {
    var img = document.createElement("img");
    img.src = array[index].source;
    img.className = "item-image"
    img.id = array[index].stockId;
    document.querySelectorAll(".grid-item")[index].appendChild(img);   
};
// creates name element //
function createItemNameText(array, index) {
    var pElement = document.createElement("p");
    var itemName = document.createTextNode(array[index].name);
    pElement.appendChild(itemName);
    pElement.className = "item-name";
    document.querySelectorAll(".grid-item")[index].appendChild(pElement);   
};
// creates amount of book in stock element //
function createInStockText(array, index) {
    var pElement = document.createElement("p");
    var inStock = document.createTextNode(array[index].stock + " in stock");
    pElement.appendChild(inStock);
    pElement.className = "in-stock-text";
    document.querySelectorAll(".grid-item")[index].appendChild(pElement);   
};
// creates price element //
function createPriceText(array, index) {
    var pElement = document.createElement("p");
    var formatted = numberFormatter.format(array[index].price);
    var price = document.createTextNode("Cost: " + formatted + " NP");
    pElement.appendChild(price);
    pElement.className = "price-text";
    document.querySelectorAll(".grid-item")[index].appendChild(pElement);  
};
// determines how many books are selected from the array //
function getNextStockNum(){
    var currentlyInStock = document.querySelectorAll(".grid-item").length;
    if(currentlyInStock === 0){
        var range = [48,66];
        var individualItems = randomRange(range[0], range[1]);
        return individualItems;
    } else if(currentlyInStock > 0 && currentlyInStock <=8){
        var range = [40,41];
        var individualItems = randomRange(range[0],range[1]);
        return individualItems;
    } else if(currentlyInStock > 8 && currentlyInStock <= 18){
        var range = [30,31];
        var individualItems = randomRange(range[0],range[1]);
        return individualItems;
    } else if(currentlyInStock > 18 && currentlyInStock <= 28){
        var range = [20,21];
        var individualItems = randomRange(range[0],range[1]);
        return individualItems;
    } else if(currentlyInStock > 28 && currentlyInStock <= 38){
        var range = [10,11];
        var individualItems = randomRange(range[0],range[1]);
        return individualItems;
    } else if(currentlyInStock > 38 && currentlyInStock <= 43){
        var range = [5,6];
        var individualItems = randomRange(range[0],range[1]);
        return individualItems;
    } else if(currentlyInStock > 43 && currentlyInStock <= 46){
        var range = [2,3];
        var individualItems = randomRange(range[0],range[1]);
        return individualItems;
    } else if(currentlyInStock === 47){
        var range = [1,1];
        var individualItems = randomRange(range[0],range[1]);
        return individualItems;
    } else if(currentlyInStock === 48){
        var range = [0,0];
        var individualItems = randomRange(range[0],range[1]);
        return individualItems;
    };
    
};
// selects random books to potentially stock by changing selected property to true //
function randomBookSelect(array, getNextStockNum) {
    for(i = 1; i <= getNextStockNum; i++){
        var randomNum = Math.floor(Math.random()*array.length);
        if(array[randomNum].onScreen === false){
            array[randomNum].selected = true;    
        };
    };
};
// determines which of the selected books will actually stock (set onscreen to true), if book fails to stock set selected property back to false //
function appearOnScreen(array){
    for(i = 0; i <= array.length-1; i++){
        if(array[i].rarity <= 45 && array[i].selected === true){
            array[i].onScreen = true;
            array[i].selected = false;
        };
        if(array[i].rarity > 45 && array[i].rarity <= 50 && array[i].selected === true){
            var result = Math.ceil(Math.random()*100);
            if(result <= 92){
                array[i].onScreen = true;
                array[i].selected = false;
            } else {
                array[i].selected = false;
            };
        };
        if(array[i].rarity > 50 && array[i].rarity <= 55 && array[i].selected === true){
            var result = Math.ceil(Math.random()*100);
            if(result <= 84){
                array[i].onScreen = true;
                array[i].selected = false;
            } else {
                array[i].selected = false;
            };
        };
        if(array[i].rarity > 55 && array[i].rarity <= 60 && array[i].selected === true){
            var result = Math.ceil(Math.random()*100);
            if(result <= 76){
                array[i].onScreen = true;
                array[i].selected = false;
            } else {
                array[i].selected = false;
            };

        }; 
        if(array[i].rarity > 60 && array[i].rarity <= 65 && array[i].selected === true){
            var result = Math.ceil(Math.random()*100);
            if(result <= 68){
                array[i].onScreen = true;
                array[i].selected = false;
            } else {
                array[i].selected = false;
            };
        };
        if(array[i].rarity > 65 && array[i].rarity <= 70 && array[i].selected === true){
            var result = Math.ceil(Math.random()*100);
            if(result <= 60){
                array[i].onScreen = true;
                array[i].selected = false;
            } else {
                array[i].selected = false;
            };
        };
        if(array[i].rarity > 70 && array[i].rarity <= 75 && array[i].selected === true){
            var result = Math.ceil(Math.random()*100);
            if(result <= 52){
                array[i].onScreen = true;
                array[i].selected = false;
            } else {
                array[i].selected = false;
            };
        };
        if(array[i].rarity > 75 && array[i].rarity <= 80 && array[i].selected === true){
            var result = Math.ceil(Math.random()*100);
            if(result <= 44){
                array[i].onScreen = true;
                array[i].selected = false;
            } else {
                array[i].selected = false;
            };
        };
        if(array[i].rarity > 80 && array[i].rarity <= 85 && array[i].selected === true){
            var result = Math.ceil(Math.random()*100);
            if(result <= 36){
                array[i].onScreen = true;
                array[i].selected = false;
            } else {
                array[i].selected = false;
            };
        };
        if(array[i].rarity > 85 && array[i].rarity <= 89 && array[i].selected === true){
            var result = Math.ceil(Math.random()*100);
            if(result <= 28){
                array[i].onScreen = true;
                array[i].selected = false;
            } else {
                array[i].selected = false;
            };
        };
        if(array[i].rarity > 89 && array[i].rarity <= 92 && array[i].selected === true){
            var result = Math.ceil(Math.random()*100);
            if(result <= 20){
                array[i].onScreen = true;
                array[i].selected = false;
            } else {
                array[i].selected = false;
            };
        };
        if(array[i].rarity > 92 && array[i].rarity <= 94 && array[i].selected === true){
            var result = Math.ceil(Math.random()*100);
            if(result <= 15){
                array[i].onScreen = true;
                array[i].selected = false;
            } else {
                array[i].selected = false;
            };
        };
        if(array[i].rarity === 95 && array[i].selected === true){
            var result = Math.ceil(Math.random()*100);
            if(result <= 12){
                array[i].onScreen = true;
                array[i].selected = false;
                console.log(array[i]);
            } else {
                array[i].selected = false;
            };
        };
        if(array[i].rarity === 96 && array[i].selected === true){
            var result = Math.ceil(Math.random()*100);
            if(result <= 8){
                array[i].onScreen = true;
                array[i].selected = false;
                console.log(array[i]);
            } else {
                array[i].selected = false;
            };
        };
        if(array[i].rarity === 97 && array[i].selected === true){
            var result = Math.ceil(Math.random()*100);
            if(result === 1){
                array[i].onScreen = true;
                array[i].selected = false;
                console.log(array[i]);
            } else {
                array[i].selected = false;
            };
        };
        if(array[i].rarity === 98 && array[i].selected === true){
            var result = Math.ceil(Math.random()*100);
            if(result <= 2){
                array[i].onScreen = true;
                array[i].selected = false;
                console.log(array[i]);
            } else {
                array[i].selected = false;
            };
        };
        if(array[i].rarity === 99 && array[i].selected === true){
            var result = Math.ceil(Math.random()*250);
            if(result === 1){
                array[i].onScreen = true;
                array[i].selected = false;
                console.log(array[i]);
            } else {
                array[i].selected = false;
            };
        };
        if(array[i].rarity === 100 && array[i].selected === true){
            var result = Math.ceil(Math.random()*500);
            if(result === 1){
                array[i].onScreen = true;
                array[i].selected = false;
                console.log(array[i]);
            } else {
                array[i].selected = false;
            };
        };
    
    
    };
};
// orders the books in stock array by release date //
function orderBooks(array){
    array.sort(function(a,b){
        if(a.bookId.substring(4) < b.bookId.substring(4)){
            return -1
        };
        if(a.bookId.substring(4) > b.bookId.substring(4)){
            return 1
        } else return 0;
    });
    return array;

};
// pushes onscreen true books to booksinstockarray and splices books with onscreen true from main array //
function getInStockArray(array) {
    for(i = 0; i <= array.length-1; i++){
        if(array[i].onScreen === true){
            booksInStockArray.push(allBooksArray[i]);
            var placeHolder = {name: "currently In Stock"};
            allBooksArray.splice(i, 1, placeHolder);   
        };
    };
    return booksInStockArray;
};

function removePlaceHolders(array) {
    for(i = array.length-1; i >= 0; i--){
        if(array[i].name === "currently In Stock"){
            array.splice(i, 1);
        };
    };
};
// appends/"stocks" the items //
function restockTheShop(array) {
    for(i = 0; i <= array.length-1; i++){
        createDiv(array, i);
        createImg(array, i);
        createItemNameText(array, i);
        createInStockText(array, i);
        createPriceText(array, i);
        clickListener(array, i);
    };
};
// removes all grid items, used for a shop clear and to clear grid items so they can be reappended for subsequent stocks //
function reorderClearAndShopClear(){
    var arrayLength = document.querySelectorAll(".grid-item").length
    for(i = arrayLength-1; i >= 0; i--){
        var a = document.querySelectorAll(".grid-item")[i];
        a.remove();
    };
};
// stock when shop is clear //
function initialStock() {
    randomBookSelect(allBooksArray, getNextStockNum());
    appearOnScreen(allBooksArray);
    orderBooks(getInStockArray(allBooksArray));
    removePlaceHolders(allBooksArray);
    createGrid(booksInStockArray);
    removeHints();
    restockTheShop(booksInStockArray);
    gridLength = document.querySelectorAll(".grid-item").length;
    return gridLength;
};
// stocks when items are already present //
function subsequentStocks(){
    randomBookSelect(allBooksArray, getNextStockNum());
    appearOnScreen(allBooksArray);
    orderBooks(getInStockArray(allBooksArray));
    removePlaceHolders(allBooksArray);
    createGrid(booksInStockArray);
    reorderClearAndShopClear();
    restockTheShop(booksInStockArray);
};
// reappend sold out message/hints //
function displaySoldOut() {
    var pElement = document.createElement("p");
    var soldOut = document.createTextNode("Sorry, we are sold out of everything! We get restocked every 8 minutes or so, so please come back soon.")
    pElement.appendChild(soldOut);
    pElement.className = "sold-out-message";
    pElement.id = "remove-sold-out-message";
    document.querySelectorAll(".shop-bottom")[0].appendChild(pElement);
};
// removes the grid //
function removeGrid() {
    var a = document.querySelectorAll(".grid-container")[0];
    a.remove();
};
// clear //
function clear() {
    if(isGridPresent === true){
        reorderClearAndShopClear();
        removeGrid();
        displaySoldOut();
        resetBothArrays(booksInStockArray);
        isGridPresent = false;
        gridLength = 0;
    };
    
};

function resetBothArrays(array) {
    for(i = 0; i <= array.length-1; i++){
        array[i].onScreen = false;
    };
    allBooksArray = [];
    booksInStockArray = [];
    addBooksToArray();
};

function limitSubsequentStocks() {
    if(gridLength > 0 && gridLength <=47){
        subsequentStocks();
        gridLength = document.querySelectorAll(".grid-item").length;
    };
    
};

function firstRestock() {
    if(isGridPresent === false){
        displaySoldOut();
        initialStock();   
    };  
};

function chanceToStock() {
    if(isGridPresent === false){
        var a = Math.ceil(Math.random()*100);
        if(a <= 13){
            firstRestock();
            console.log("initial " + gridLength);
        }; 
    };      
};

function subsequentStockChance() {
    if(isGridPresent === true){
        var a = Math.ceil(Math.random()*100);
        if(a <= 10){
            limitSubsequentStocks();
            console.log("subsequent " + gridLength);
        };
    };   
};

function chanceToClear() {
    var a = Math.ceil(Math.random()*100);
    if(a <= 9){
        console.log("clear " + gridLength);
        clear();
    };
};

function remove95Plus() {
    if(isGridPresent === true){
        var OnScreenArrayLength = document.querySelectorAll(".grid-item").length;
        for(i = OnScreenArrayLength-1; i >= 0; i--){
            if(booksInStockArray[i].rarity >= 95){
                booksInStockArray[i].stock = booksInStockArray[i].stock-1;
                booksInStockArray[i].onScreen = false;
                objectReset(booksInStockArray, i);
                allBooksArray.push(booksInStockArray[i]);
                var a = document.querySelectorAll(".grid-item")[i];
                a.remove();
                booksInStockArray.splice(i, 1);
                orderBooks(allBooksArray);

            };
        };
    };       
};

function objectReset(array, index) {
    array[index].price = randomRange(array[index].priceMin, array[index].priceMax);
    array[index].stock = stockAmountMethod(array[index].rarity);
    array[index].stockId = generateStockId();
};

function clickListener(array, index) {
    document.querySelectorAll(".item-image")[index].addEventListener("click", function() {
        alert("Are you sure you would like to purchase " + array[index].name + " for " + numberFormatter.format(array[index].price) + " NP?");
    });
};

function randomPurchases() {
    if(isGridPresent === true){
        var result = Math.ceil(Math.random()*100);
        console.log(result);
        if(result <= 10){
            var randomNum = Math.floor(Math.random()*booksInStockArray.length);
            if(booksInStockArray[randomNum].stock > 1){
                booksInStockArray[randomNum].stock = booksInStockArray[randomNum].stock -1;
                document.querySelectorAll(".in-stock-text")[randomNum].innerHTML = booksInStockArray[randomNum].stock + " in stock";
            } else {
                booksInStockArray[randomNum].stock = booksInStockArray[randomNum].stock -1;
                booksInStockArray[randomNum].onScreen = false;
                booksInStockArray[randomNum].stock = stockAmountMethod(booksInStockArray[randomNum].rarity);
                booksInStockArray[randomNum].price = randomRange(booksInStockArray[randomNum].priceMin, booksInStockArray[randomNum].priceMax);
                booksInStockArray[randomNum].stockId = generateStockId();
                var a = document.querySelectorAll(".grid-item")[randomNum];
                a.remove();
                allBooksArray.push(booksInStockArray[randomNum]);
                booksInStockArray.splice(randomNum, 1);
                orderBooks(allBooksArray);
            };
            
        };
    };
    
};




addBooksToArray();

// var xyz = allBooksArray;

// sessionStorage.setItem("allbooks", JSON.stringify(xyz));
// var booksArray = JSON.parse(sessionStorage.getItem('allbooks'));





setInterval(chanceToStock, randomRange(50000, 60000));
setInterval(subsequentStockChance, randomRange(50000, 65000));
setInterval(chanceToClear, randomRange(58000, 61000));
setInterval(remove95Plus, 4000);
setInterval(randomPurchases, 60000);

















