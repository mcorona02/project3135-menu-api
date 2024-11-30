const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(__dirname));
app.use('/images', express.static('images'));

const menu = [
    {
        id: 1,
        name: "Creamy Hot Chocolate",
        description: "Brewed with cocoa powder created from sweet kukuru beans, this warm winter beverage is made all the sweeter with a dollop of our plant-based whipped cream.",
        image: "/drinks/creamy-hot-chocolate.png",
        category: "drinks"
    },
    {
        id: 2,
        name: "Steppe Tea",
        description: "A thick, creamy beverage popular on the Azem Steppe made from steeped fermented tea leaves and a generous helping of dzo milk.",
        image: "images/drinks/steppe-tea.png",
        category: "drinks"
    },
    {
        id: 3,
        name: "Chamomile Tea",
        description: "A delicately fragranced infusion brewed from tiny yellow chamomile flowers and sweetened with honey.",
        image: "images/drinks/chamomile-tea.png",
        category: "drinks"
    },
    {
        id: 4,
        name: "Cinnamon Cream Coffee",
        description: "The bittersweet flavor of this coffee is complemented by a cinnamon aroma and creamy, plant-based topping sweetened with delicious housemade palm sugar.",
        image: "images/drinks/cinnamon-cream-coffee.png",
        category: "drinks"
    },
    {
        id: 5,
        name: "Ishgardian Tea",
        description: "Rather than adding milk to boiling water that has been infused with tea leaves, Ishgardian tea is brewed by boiling yak milk and letting dried Coerthan tea leaves steep right into the hot liquid.",
        image: "images/drinks/ishgardian-tea.png",
        category: "drinks"
    },
    {
        id: 6,
        name: "Tsai tou Vounou",
        description: "An herbal drink with impressive medicinal properties made from steeped sideritis leaves with a hint of cinnamon and a spritz of lemonette.",
        image: "images/drinks/tsai-tou-vounou.png",
        category: "drinks"
    },
    {
        id: 7,
        name: "Masala Chai",
        description: "The Coerthan tea leaves provide the base and the cinnamon and amber cloves add the signature sweet and aromatic flavor to this traditional beverage.",
        image: "images/drinks/masala-chai.png",
        category: "drinks"
    },
    {
        id: 8,
        name: "Espresso con Panna",
        description: "The surprising addition of sour cream may catch some off guard, but they will be invariably won over by the subtle harmonies of this rich blend.",
        image: "images/drinks/espresso-con-panna.png",
        category: "drinks"
    },
    {
        id: 9,
        name: "Spiced Cider",
        description: "A warmed jug filled with piquant apple juice mulled with zested pearl ginger and cloves, complete with a stick of cinnamon.",
        image: "images/drinks/spiced-cider.png",
        category: "drinks"
    },
    {
        id: 10,
        name: "Buckwheat Tea",
        description: "A dark, nutty infusion made from steeping buckwheat kernels in boiling water.",
        image: "images/drinks/buckwheat-tea.png",
        category: "drinks"
    },
    {
        id: 11,
        name: "Bubbly Mogfloat",
        description: "A tall glass of fruity pom fizz of your choice topped with a heaping scoop of frosty ice cream. Flavors: Strawberry, Pomegranate, Orange, Lemon, Blueberry, Grape.",
        image: "images/drinks/bubbly-mogfloat.png",
        category: "drinks"
    },
    {
        id: 12,
        name: "Wild Banana Blend",
        description: "Wild Ja Tiika bananas take center stage in this sweet and tangy summertime smoothie with just a hint of branchbearer fruit.",
        image: "images/drinks/wild-banana-blend.png",
        category: "drinks"
    },
    {
        id: 13,
        name: "Rolanberry Lassi",
        description: "A sweet and tangy drink made from cultured milk and sweetened with rolanberries. Popular in the Near Eastern city-state of Radz-at-Han for its ability to soothe the burn of heavily spiced dishes.",
        image: "images/drinks/rolanberry-lassi.png",
        category: "drinks"
    },
    {
        id: 14,
        name: "Frozen Spirits",
        description: "A cool concoction made by fermenting cloud bananas and Old World figs, freezing them with ice crystals, then mashing and mixing the fruit into a slush-like consistency.",
        image: "images/drinks/frozen-spirits.png",
        category: "drinks"
    },
    {
        id: 15,
        name: "Lemonade",
        description: "An incomparably refreshing blend of sour lemonette juice and sweet golden honey.",
        image: "images/drinks/lemonade.png",
        category: "drinks"
    },
    {
        id: 16,
        name: "Loquat Juice",
        description: "A thick, orange juice freshly squeezed from sweet and tangy Gyr Abanian loquats.",
        image: "images/drinks/loquat-juice.png",
        category: "drinks"
    },
    {
        id: 17,
        name: "Melon Juice",
        description: "Paralyzingly delicious juice freshly squeezed from tongue-numbing thundermelons and a surprising hint of elder nutmeg with a delicious blend of palm and beet sugar.",
        image: "images/drinks/melon-juice.png",
        category: "drinks"
    },
    {
        id: 18,
        name: "Pixieberry Tea",
        description: "Simultaneously sweet and tart, this perfectly steeped cup of aromatic tea with hints of peppermint almost takes the place of dessert.",
        image: "images/drinks/pixieberry-tea.png",
        category: "drinks"
    },
    {
        id: 19,
        name: "Dragon Fruit Blend",
        description: "Mashed dragon fruit is blended together with cloud banana and coconut milk to create this creamy refreshing drink.",
        image: "images/drinks/dragon-fruit-blend.png",
        category: "drinks"
    },
    {
        id: 20,
        name: "Bacon Bread",
        description: "Soft sunset wheat dough mixed with thick-sliced smoked bacon and twisted into a pattern resembling a sheaf of wheat.",
        image: "images/appetizers/bacon-bread.png",
        category: "appetizers"
    },
    {
        id: 21,
        name: "Marinated Broccoflower",
        description: "A biting dish of broccoflower, Thavnairian paprika, and alien onion steeped in perilla oil and night vinegar.",
        image: "images/appetizers/marinated-broccoflower.png",
        category: "appetizers"
    },
    {
        id: 22,
        name: "Shrimp Cocktail",
        description: "Deveined stardust shrimp poached in court bouillon broth and served with spicy cocktail sauce for dipping topped with a spritz of tart lemonette to help balance the spice.",
        image: "images/appetizers/shrimp-cocktail.png",
        category: "appetizers"
    },
    {
        id: 23,
        name: "Haddock Dip",
        description: "A thick salty dip made from a purée of haraldr haddock, raw egg, and mashed popotoes balanced with sweet honey lemon juice, Garlean garlic, and freshly cracked black pepper served with a platter of pita chips.",
        image: "images/appetizers/haddock-dip.png",
        category: "appetizers"
    },
    {
        id: 24,
        name: "Caviar Canapes",
        description: "Perennial party favorites, these hors d'oeuvres feature delightfully bite-sized bread topped with rich Garlean cheese and chopped vegetables, and salty caviar sturgeon eggs.",
        image: "images/appetizers/caviar-canapes.png",
        category: "appetizers"
    },
    {
        id: 25,
        name: "Grilled Turban",
        description: "A simple dish of live horned turban cooked in its shell with a splash of soy sauce and rice wine for a unique and flavorful bite.",
        image: "images/appetizers/grilled-turban.png",
        category: "appetizers"
    },
    {
        id: 26,
        name: "Oyster Confit",
        description: "A serving of succulent Coerthan oysters on the half shell, simmered in rich olive oil and seasoned with fresh rosemary, highland parsley, and laurel.",
        image: "images/appetizers/oyster-confit.png",
        category: "appetizers"
    },
    {
        id: 27,
        name: "Tako-yaki",
        description: "Bite-sized balls of fried pastry each containing a chunk of usuginu octopus in their gooey, molten centers topped with drizzles of delicious sauce.",
        image: "images/appetizers/tako-yaki.png",
        category: "appetizers"
    },
    {
        id: 28,
        name: "Futo-maki-roll",
        description: "Crisp dried seaweed and sweet vinegared Doman rice rolled around deliciously sweet and savory fillings of spiny lobster, Doman eel, and shiitake mushrooms.",
        image: "images/appetizers/futo-maki-roll.png",
        category: "appetizers"
    },
    {
        id: 29,
        name: "Chawan-Mushi",
        description: "Whisked gagana egg mixed with fish broth, shiitake mushrooms, and Yanxian parsley, then steamed until hardened into a savory pudding.",
        image: "images/appetizers/chawan-mushi.png",
        category: "appetizers"
    },
    {
        id: 30,
        name: "Chilled Popoto Soup",
        description: "A refreshing soup made by blending popotos, mild La Noscean leeks, smooth butter, and a rich sweet cream into a smooth and refreshing consistency with a sprig of highland parsley.",
        image: "images/soups/chilled-popoto-soup.png",
        category: "soups"
    },
    {
        id: 31,
        name: "Broccoflower Stew",
        description: "Broccoflower slices boiled in a savory perfectly seasoned broth alongside tender poultry and nutrient-rich root vegetables.",
        image: "images/soups/broccoflower-stew.png",
        category: "soups"
    },
    {
        id: 32,
        name: "Pumpkin Potage",
        description: "A creamy soup that highlights the rich and nutty flavor of the giant pumpkin with hints of potent spice and minced alien onion.",
        image: "images/soups/pumpkin-potage.png",
        category: "soups"
    },
    {
        id: 33,
        name: "Spicy Stellar Soup",
        description: "Simmered with diced alien onions and carrots of happiness aplenty, with a touch of sour cream for creaminess and bright, earthy spices, this stellar soup’s flavor is out of this world.",
        image: "images/soups/spicy-stellar-soup.png",
        category: "soups"
    },
    {
        id: 34,
        name: "Baked Alien Soup",
        description: "Alien onions are sautéed, simmered in a savory chicken bouillon, then topped with crispy Garlean cheese baked in an oven until golden brown for a simple, yet satisfying meal.",
        image: "images/soups/baked-alien-soup.png",
        category: "soups"
    },
    {
        id: 35,
        name: "Heavensegg Soup",
        description: "A beaten heavensegg is gradually poured into a boiling soup, thickening into wisps across the smoked bacon and vegetables.",
        image: "images/soups/heavensegg-soup.png",
        category: "soups"
    },
    {
        id: 36,
        name: "Dagger Soup",
        description: "After a light clear broth is taken from a freshly caught Navigator's dagger, the meat is removed from the bones and ground up into a paste with fresh salt leeks.",
        image: "images/soups/dagger-soup.png",
        category: "soups"
    },
    {
        id: 37,
        name: "Lobster Bisque",
        description: "This creamy soup gets its rich flavor from puréed royal lobster complemented with sweet Ut'ohmu tomatoes and a dash of cooking mezcal.",
        image: "images/soups/lobster-bisque.png",
        category: "soups"
    },
    {
        id: 38,
        name: "Carrot Nibbles",
        description: "Ribbons of thinly sliced carrots of happiness and cyclops onion dressed with night vinegar make for a healthy and blissfully refreshing salad.",
        image: "images/salads/carrot-nibbles.png",
        category: "salads"
    },
    {
        id: 39,
        name: "Broad Bean Salad",
        description: "This nourishing salad of broad beans, purple carrots, and crisp La Noscean lettuce is dressed lightly with frantoio oil and curly parsley.",
        image: "images/salads/broad-bean-salad.png",
        category: "salads"
    },
    {
        id: 40,
        name: "Landtrap Salad",
        description: "A salad made with the still-twitching leaves of a landtrap, Dzemael tomatoes, wild onions, and La Noscean lettuce, garnished with a drizzle of olive oil.",
        image: "images/salads/landtrap-salad.png",
        category: "salads"
    },
    {
        id: 41,
        name: "Robe Lettuce Salad",
        description: "A refreshing salad of fresh lettuce, wild onions, and sweet Dzemael tomatoes, dressed with a drizzle of olive oil.",
        image: "images/salads/robe-lettuce-salad.png",
        category: "salads"
    },
    {
        id: 42,
        name: "Popoto Salad",
        description: "A creamy dish of eggs, colorful vegetables, and hearty russet popotoes served on leaves of crisp robe lettuce and topped with freshly ground night pepper.",
        image: "images/salads/popoto-salad.png",
        category: "salads"
    },
    {
        id: 43,
        name: "Alligator Salad",
        description: "A simple salad made from slices of soft and surprisingly savory slices of alligator pear tossed in dark vinegar and olive oil topped with chunks of blue cheese.",
        image: "images/salads/alligator-salad.png",
        category: "salads"
    },
    {
        id: 44,
        name: "Amra Salad",
        description: "This salad, tossed with a light vinaigrette and filled with chopped iceberg lettuce, acidic blood tomato, and sweet amra fruit is a sweet and savory treat.",
        image: "images/salads/amra-salad.png",
        category: "salads"
    },
    {
        id: 45,
        name: "Spicy Shakshuka",
        description: "A hearty and delicious meal for any mealtime, its base is a flavorful, rich tomato sauce filled with potent spices, in which two eggs of Elpis have been perfectly poached.",
        image: "images/entrees/spicy-shakshuka.png",
        category: "entrees"
    },
    {
        id: 46,
        name: "Baked Eggplant",
        description: "Topped with sliced vegetables and a healthy coating of melted Garlean cheese, these rich eggplants have been roasted to tender perfection.",
        image: "images/entrees/baked-eggplant.png",
        category: "entrees"
    },
    {
        id: 47,
        name: "Tomato Pie",
        description: "Considered a delicacy in Gridania, this pie is arranged with sliced Dzamael tomatoes and Midland basil, giving it the appearance of a flower garden.",
        image: "images/entrees/tomato-pie.png",
        category: "entrees"
    },
    {
        id: 48,
        name: "Mushroom Sautee",
        description: "The rich creamy, texture of this dish comes not from the hearty creamtop mushrooms, but from the fermented butter in which they have been cooked to perfection.",
        image: "images/entrees/mushroom-sautee.png",
        category: "entrees"
    },
    {
        id: 49,
        name: "Tandoori Raptor",
        description: "A Near Eastern staple consisting of tender chunks of baked raptor meat marinated in mouthwatering spices and creamy yogurt.",
        image: "images/entrees/tandoori-raptor.png",
        category: "entrees"
    },
    {
        id: 50,
        name: "Creamy Alpaca Pasta",
        description: "The rustic handmade noodles are boiled until tender, then tossed in a pan with grilled alpaca filet and broccoli florets in a cream sauce.",
        image: "images/entrees/cream-alpaca-pasta.png",
        category: "entrees"
    },
    {
        id: 51,
        name: "Ovim Cordon Bleu",
        description: "An indulgent meal of tender ovim meat wrapped around gooey cream cheese, battered and pan-fried in frantoio olive oil to give it its crispy, golden brown shell.",
        image: "images/entrees/ovim-cordon-bleu.png",
        category: "entrees"
    },
    {
        id: 52,
        name: "Exquisite Beef Stew",
        description: "A sumptuous stew made by slowly cooking buffalo sirloin in sour red wine for several hours until it falls off the bone flavored with delectable wild onions and, black pepper, popotoes, and buttery Coerthan carrots.",
        image: "images/entrees/beef-stew.png",
        category: "entrees"
    },
    {
        id: 53,
        name: "Banh Xeo",
        description: "A traditional Nagxian dish consisting of Koshu pork, Yanxian Tiger Prawn, green leeks, and fennel swaddled in a thin shell of crispy fried batter.",
        image: "images/entrees/banh-xeo.png",
        category: "entrees"
    },
    {
        id: 54,
        name: "Crab Cakes",
        description: "To preserve the toothsome texture of blue crab, chunks of flesh are gently folded into flour and molded into cakes, which are pan fried to perfection.",
        image: "images/entrees/crab-cakes.png",
        category: "entrees"
    },
    {
        id: 55,
        name: "Battered Fish",
        description: "Deep-fried haddock accompanied with thick-cut popotoes thrown togther for a delicious, greasy platter best accompanied with a dash of malt vinegar.",
        image: "images/entrees/battered-fish.png",
        category: "entrees"
    },
    {
        id: 56,
        name: "Lemon Waffle",
        description: "Crispy on the outside and moist on the inside, this baked delight with a distinctive texture has a slight hint of citrus.",
        image: "images/brunch-items/lemon-waffle.png",
        category: "brunch"
    },
    {
        id: 57,
        name: "Royal Toast",
        description: "Thick sliced bread soaked in a batter of whisked egg and milk, pan-fried until fluffy, and served with a generous drizzle of royal maple syrup.",
        image: "images/brunch-items/royal-toast.png",
        category: "brunch"
    },
    {
        id: 58,
        name: "Dodo Omelete",
        description: "A traditional Plainsfolk dish made from deftly whisked dodo eggs and aldgoat milk fried in smooth butter and expertly formed into a soft, fluffy mountain topped with tangy tomato sauce and a sprig of Highland parsley.",
        image: "images/brunch-items/dodo-omelette.png",
        category: "brunch"
    },
    {
        id: 59,
        name: "Crumpet",
        description: "A savory type of leavened bread, generously doused in smooth butter and maple syrup, a perfect accompaniment to a cup of tea and is also known as a specialty at the Quicksand in Ul’dah.",
        image: "images/brunch-items/crumpet.png",
        category: "brunch"
    },
    {
        id: 60,
        name: "La Noscean Toast",
        description: "A slice of walnut bread soaked in a mixture of buffalo milk and apkallu eggs, then fried in creamy smooth butter. Known as a specialty at the Drowning Wench in Limsa Lominsa.",
        image: "images/brunch-items/la-noscean-toast.png",
        category: "brunch"
    },
    {
        id: 61,
        name: "Wildwood Scrambled Eggs",
        description: "Fragrant mushrooms sautéed in a generous pat of creamery butter and served upon a bed of fluffy heavenseggs, scrambled to perfection.",
        image: "images/brunch-items/wildwood-scrambled-eggs.png",
        category: "brunch"
    },
    {
        id: 62,
        name: "Farmer's Breakfast",
        description: "This simple yet delightful dish of russet popatoes and lightly scrambled silkie eggs with delicious bits of ovim sausage will fill you up for the day.",
        image: "images/brunch-items/farmers-breakfast.png",
        category: "brunch"
    },
    {
        id: 63,
        name: "Salmon Muffin",
        description: "A buttery Ishgardian muffin topped with the winning combination of succulent fresh salmon, silky sliced alligator pear, and a drizzling of rich Steppe cheese.",
        image: "images/brunch-items/salmon-muffin.png",
        category: "brunch"
    },
    {
        id: 64,
        name: "Royal Eggs",
        description: "A breakfast dish consisting of an Ishgardian muffin sliced into halves and topped with salmon, a poached egg, and rich, creamy hollandaise sauce.",
        image: "images/brunch-items/royal-eggs.png",
        category: "brunch"
    },
    {
        id: 65,
        name: "Egg Foo Young",
        description: "Succulent carpenter crab legs folded into a fluffy gagana egg omelet and topped with a thick, savory sauce.",
        image: "images/brunch-items/egg-foo-young.png",
        category: "brunch"
    },
    {
        id: 66,
        name: "Peppered Popotoes",
        description: "A pleasing plate of russet popotoes peppered and prepared to perfection, tossed with chopped, browned sausage links, garnished with curly parsley.",
        image: "images/brunch-items/peppered-popatoes.png",
        category: "brunch"
    },
    {
        id: 67,
        name: "Fruit and Aloe Jelly",
        description: "This gelatinous dessert is falvored with the mouthwatering sour kick of branchbearer fruit with a subtle smokiness from the mesquite beans sweetened with royal maple syrup and brought together with refreshing Turali aloe.",
        image: "images/desserts/fruit-and-aloe-jelly.png",
        category: "desserts"
    },
    {
        id: 68,
        name: "Rolanberry Shaved Ice",
        description: "A heaping mound of the purest ice harvested from atop the mountains of Coerthas, shaved and drizzled in multicolored rolanberry syrup.",
        image: "images/desserts/rolanberry-shaved-ice.png",
        category: "desserts"
    },
    {
        id: 69,
        name: "Honeyed Dragonfruit",
        description: "A generous serving of dragonfruit slathered with a silky sweet layer of golden honey and sour lemonette juice and slices.",
        image: "images/desserts/honeyed-dragonfruit.png",
        category: "desserts"
    },
    {
        id: 70,
        name: "Pineapple Orange Jelly",
        description: "Made from Turali pineapples and navel oranges, the refreshingly sweet, tropical flavor will remind you of Tural no matter where you are.",
        image: "images/desserts/pineapple-orange-jelly.png",
        category: "desserts"
    },
    {
        id: 71,
        name: "Coffee Kukuru Rusks",
        description: "These delectable cookies are made by soaking kukuru chocolate dough in coffee, then sprinkling it with sugar and baking it.",
        image: "images/desserts/coffee-kukuru-rusks.png",
        category: "desserts"
    },
    {
        id: 72,
        name: "Apple Strudel",
        description: "A handful of chopped golden apples glazed with birch syrup are thinly wrapped in a warm flaky crust topped with just a sprinkling of cinnamon.",
        image: "images/desserts/apple-strudel.png",
        category: "desserts"
    },
    {
        id: 73,
        name: "Almond Cream Croissant",
        description: "A flaky crescent-shaped pastry sliced in two and buttered with a sweet creamy paste made from honeydew almonds.",
        image: "images/desserts/almond-cream-croissant.png",
        category: "desserts"
    },
    {
        id: 74,
        name: "Marron Glace",
        description: "Dark chestnuts peeled and soaked in birch syrup and cooking sherry for several moons until the entire fruit is permeated with sweetness and a nice kick.",
        image: "images/desserts/marron-glace.png",
        category: "desserts"
    },
    {
        id: 75,
        name: "Crème Brûlée",
        description: "A vanilla-flavored egg custard drenched in a sweet syrup that is then heated with a fire crystal until a crisp brown shell is created.",
        image: "images/desserts/creme-brulee.png",
        category: "desserts"
    },
    {
        id: 76,
        name: "Papanasi",
        description: "Thick dough kneaded with soft reunion cheese and fried into a hearty donut, slathered with yet more creamycheese and a sweet-and-tart rolanberry sauce.",
        image: "images/desserts/papanasi.png",
        category: "desserts"
    },
    {
        id: 77,
        name: "Banana Ponzecake",
        description: "An otherwise ordinary ponzecake, infused with ripe Ja Tiika bananas and Turali aloe for a soft, moist texture and a heavenly aroma while baking.",
        image: "images/desserts/banana-ponzecake.png",
        category: "desserts"
    },
    {
        id: 78,
        name: "Blood Current Tart",
        description: "A sweet and sour pastry made with a tart filling of blood currants in a simple pie dough sweetened with maple sugar.",
        image: "images/desserts/blood-current-tart.png",
        category: "desserts"
    },
    {
        id: 79,
        name: "Rolanberry Cheesecake",
        description: "Rich, indulgent cheesecake swirled through with a ribbon of sweet-and-tart rolanberry cream cheese with a surprising hint of honey lemon.",
        image: "images/desserts/rolanberry-cheesecake.png",
        category: "desserts"
    },
    {
        id: 80,
        name: "Wondrous Parfait",
        description: "A massive dessert layered with fresh rolaberries, prickly pineapple, La Noscean oranges, amras, whipped cream, and frozen confectionery.",
        image: "images/desserts/wondrous-parfait.png",
        category: "desserts"
    },
    {
        id: 81,
        name: "Tendered Shortcake",
        description: "Layered with our plant-based whipped cream, spongy shortcake, and sliced nopalitender tunas, this light and fruity dessert is the perfect summertime treat.",
        image: "images/desserts/tender-shortcake.png",
        category: "desserts"
    },
    {
        id: 82,
        name: "Sohm Al Tart",
        description: "A traditional Ishgardian cake made up of several stacked layers tapered to resemble Sohm Al, peak sacred to Dravanians. It gets its subtle flavor from dark chestnuts and a rich, thick layer of sweet cream.",
        image: "images/desserts/sohm-al-tart.png",
        category: "desserts"
    },
    {
        id: 83,
        name: "Lemon Curd Sachertorte",
        description: "A rich cake of indulgent Kriollo kukuru chocolate accented with the perfect amount of tart lemonette curd.",
        image: "images/desserts/lemon-curd-sachertorte.png",
        category: "desserts"
    }
]

app.get('/menu', (req, res) => {
    res.json(menu);
});

app.use('/images', express.static('images'));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});