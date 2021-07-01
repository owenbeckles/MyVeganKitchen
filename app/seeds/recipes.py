from app.models import db, Recipe

def seed_recipes():
    
    recipe1 = Recipe(name='veganquesadillas',
    title='Vegan Quesadillas',
    type='Lunch/Dinner',
    ingredients='12 oz seitan (cut into strips);1/2 green bell pepper (chopped);1/2 red bell pepper (chopped);1/2 yellow onion (chopped);3-4 large flour tortilla;8 oz vegan shredded cheddar cheese;8 oz vegan shredded mozzarella cheese;1/2 tsp "Better Than Bouillon" sautéed onion;1/4 cup of vegan beef broth (or water);1 tbsp grape seed oil',
    instructions='In a skillet on medium heat add 1/2 tbsp oil. Allow the skillet to get hot then add peppers and onions. Cook until the onions are translucent. Remove from skillet, place in a dish and  set aside. In the same skillet add the other half of the oil  and the seitan. Allow the seitan to heat up then add the broth and beef bouillon. Allow to cook until the liquid evaporates about 2-3 minutes. Remove skillet from heat and set aside. In a separate much larger skillet, allow to heat on medium. Use a small cooking brush to coat the skillet with a small amount of oil or butter. Place the tortilla in the skillet. On one side of the tortilla add about 1/4 of each ingredient. First the cheddar cheese, then peppers and onion, then cooked seitan and lastly the mozzarella  cheese. Fold the side with no ingredients onto the side with ingredients. Cover the skillet reduce the stove to low medium heat and allow the cheese to melt 2-3 minutes. Remove the quesadilla and place on a cutting board, use a large knife or pizza cutter to cut into triangle shapes. Continue the same process with the rest of the ingredients. You can serve with sides such as guacamole, salsa or salsa verde. Sprinkle chopped cilantro to garnish.',
    description='Well seasoned seitan, lots of ooey gooey cheese, and a crispy golden exterior.'
    )

    recipe2 = Recipe(name='springrolls',
    title='Spring Rolls',
    type='Appetizer',
    ingredients='rice noodles;rice paper;sweet chili sauce;romaine lettuce (remove center cut into small square like pieces);cucumbers (peeled sliced thin, no seeds);red bell peppers (sliced thin);yellow bell peppers (sliced thin);carrots (peeled, sliced thin);fresh basil (leaves only)',
    instructions='Prepare and arrange all your vegetables. In a large shallow bowl add room temperature water. Use a wooden cutting board for your surface to roll your spring rolls. Take your rice paper and place it into the water. Do not let go of your rice paper continue to submerge. Once the rice paper becomes pliable, remove and place it on the cutting board. Start adding small quantities of your veggies on top of the rice paper. Lettuce first them everything else and rice noodles last. Take the bottom end of the rice paper closest to you and place over the veggies. Then take one corner of the rice paper and fold over, do the same the opposite end. Continue to roll from the bottom up. The sticky rice paper will stay sealed once your roll is complete. Continue the same process to the rest. You can use a wet knife to cut your rolls in half for display or eat as is. Serve your rolls with peanut sauce or sweet chili sauce as shown in the photo.',
    description='Fresh veggies wrapped in rice paper.') 

    recipe3 = Recipe(name='bbqoystermushrooms',
    title='Air Fried BBQ Oyster Mushrooms',
    type='Lunch/Dinner',
    ingredients='1 lb Oyster Mushrooms (gently wiped with wet paper towel to clean);1 1/2 tbsp grapeseed oil;1/2 tsp garlic powder;1/2 tsp paprika;1/2 black pepper;1/2 vegan chicken seasoning;2 tbsp cornstarch;your favorite bbq sauce',
    instructions='In a large bowl place cleaned mushrooms, add oil and toss or gently mix to coat all of the mushrooms. Add the garlic powder, paprika, black pepper and all purpose or chicken flavored seasoning. Toss or mix well to coat the mushrooms. Add the cornstarch and make sure to cover and coat all the mushrooms. Add the seasoned mushrooms to the air fryer. Cook for 15 minutes on 400 degrees. Be sure to rotate pieces during cooking process to ensure even browning. Once cooked place in a large bowl and add the desired amount of your favorite bbq sauce. Toss to  evenly coat.',
    description='Smokey, tangy, and tender low-calorie oyster mushrooms.') 

    recipe4 = Recipe(name='frenchtoast',
    title='Homemade French Toast',
    type='Breakfast',
    ingredients='1 cup plant based milk;1/2 cup JUST EGG brand vegan egg;1/2 tsp cinnamon;1 tbsp sugar;1 tsp vanilla;1 tbsp butter (or 1/2 1 tsp grapeseed oil);maple syrup;your favorite bakery day old bread',
    instructions='In a large mixing bowl add the milk, vegan egg, cinnamon, vanilla and sugar. Stir well to combine. Cut your bread into slices about 1/2 an inch thick. Place the bread into the milk and egg mixture allow to sit for 3-5 minutes to absorb. On medium heat add butter or oil to a non stick skillet. Place the soaked bread into the hot skillet, allow to brown on both sides. Remove from the skillet and place on a serving plate drizzle with maple syrup, add your favorite fruit and enjoy.',
    description='Sweet cinnamon french toast layered with maple syrup, butter, and your favorite assortment of berries.') 

    recipe5 = Recipe(name='veganlox',
    title='Vegan Lox',
    type='Breakfast',
    ingredients='4 large carrots;2 cups sea salt;1 lemon juiced;1 tsp smoked paprika;5 tbsp olive oil;2 tbsp rice vinegar;1 tbsp black pepper;1 tbsp liquid smoke',
    instructions='In an oven safe glass container place half of the salt. Then place the unpeeled carrots on top of the salt. Then add the remaining salt on top of the carrots. Bake on 475 degrees F for 40 minutes to an hour depending on the size of the carrots. When done the carrots should be a little firm not soft and mushy. Remove carrots from baking dish and allow to cool enough to handle. remove the thick layer of salt with your hands. It’s ok if all the salt is not completely removed from the carrots. Use a vegetable peeler or a sharp knife to cut thin slices. Place the sliced carrot pieces in a glass container with the remaining ingredients. Allow to marinade for about a half hour in the refrigerator. This recipe can last 3 to 4 days in the refrigerator.',
    description='Delicious slices of fresh carrots, cucumbers, onions, and cappers topped on an everything bagel.')

    recipe6 = Recipe(name='tofuscramble',
    title='Tofu Scramble',
    type='Breakfast',
    ingredients='1 block firm tofu pressed and mashed with potato masher;1/4 cup red bell pepper (chopped);1/4 cup green bell pepper (chopped);1/4 yellow onion (chopped);1 1/2 cup white mushrooms (chopped);2 stacks green onion (chopped);1/2 tsp turmeric;1 tbsp grapeseed oil;1/4 tsp cumin;salt and black pepper (to taste)',
    instructions='On medium heat in a skillet add the grapeseed oil. Add the bell peppers, onions and mushrooms. Allow to cook for about 3-5 minutes. Add the mashed tofu, stir to combine allow to cook for 5 minutes. Add the turmeric and cumin, gently stir to combine. Add salt and black pepper to taste. Remove from heat and add green onions. Serve with toast, vegan sausage or add to a a burrito wrap for a delicious breakfast burrito.',
    description='Scrambled tofu combined with onions and a variety of bell peppers. Served with your choice of toast.')

    recipe7 = Recipe(name='avocadotoast',
    title='Avocado Toast',
    type='Breakfast',
    ingredients='1 ripe avocado;a squeeze of lime juice;red onion (chopped);cilantro (chopped);jalapeño (chopped);cherry tomatoes sliced in half;balsamic drizzleń;green onions (finely chopped);salt (to taste);your favorite toast',
    instructions='In a small bowl or mortar add the onion, cilantro, lime juice and jalapeño. Use a fork or pestle to combine the ingredients. Once the ingredients are combined add the avocado. Leave the avocado a bit chunky. Season to taste. Place the avocado mixture on your favorite toast, add the tomatoes, sprinkle the green onions and drizzle the balsamic drizzle.',
    description='Smashed avocados seasoned with red onions, jalapenos, all on top fresh bakery baked bread.')

    recipe8 = Recipe(name='generaltsoportobellomushrooms',
    title='General Tso Portobello Mushrooms',
    type='Lunch/Dinner',
    ingredients='2 portobello mushroom caps (cut into quarters, stem removed);1 tbsp cornstarch;2/3 cup grapeseed oil;1 1/2 cup broccoli florets;1/2 green bell pepper cut in squares;1/2 red bell pepper cut in squares;1/2 cup yellow onions sliced in wedges;3 tbsp rice vinegar (for sauce);4 tbsp liquid aminos (for sauce);2 tbsp hoisin sauce (for sauce);1/2 cup water (for sauce);1 tsp sesame oil (for sauce);4 tbsp granulated sugar (for sauce);2 tablespoon cornstarch (for sauce);2 tablespoon water (for sauce)',
    instructions='In a small bowl or measuring cup add rice vinegar, liquid aminos, hoisin sauce, water, sesame oil, and sugar. Stir and set aside. In a wok or skillet pour the grapeseed oil and heat on medium high. In a bowl add the quartered mushrooms and cornstarch. Coat the mushrooms well with the cornstarch. One by one add the coated mushrooms to the hot oil. Fry and brown on both sides. Remove brown mushrooms and place on a plate. Pour oil out of the pot and wipe clean with paper towel or kitchen cloth. Be careful not to burn yourself. Place the pot back on the medium high flame. Add the broccoli and cook for 1 minute. Add the peppers and onion. Stir and allow to cook for 1 minute. Add the General Tso sauce mixture to the pot. Stir all the ingredients to combine. Add the cornstarch mixture to the pot to thicken the sauce. Stir well until sauce begins to thicken. Once the sauce thickens remove from heat. Serve immediately.',
    description='Sweet and spicy mushrooms carmelized to perfection, and best served over rice with broccoli and bell peppers.')

    recipe9 = Recipe(name='walnutgnocchi',
    title='Cheesy Walnut Meat Gnocchi',
    type='Lunch/Dinner',
    ingredients='2 cups walnuts raw walnuts;8 oz package whole mushrooms;16 oz package gnocchi;12 oz marinara sauce;4 oz vegan cheddar shredded cheese;1/4 cup vegan parmesan;1/4 cup red bell peppers (chopped);1/4 cup green bell peppers (chopped);4 garlic cloves finely (chopped);1 cup yellow onions (chopped);1 tsp dried oregano;1 tsp dried basil;1 tsp black pepper;1 tsp salt;1 tbsp maple syrup;1 cup vegan beef broth;2 tbsp grapeseed oil;1 cup of water',
    instructions='In a food processor ground walnuts for 1 minute. Set aside. On medium heat in a large skillet add oil, onions and mushrooms. Cook until onions are translucent. Add garlic and peppers. Cook for about 1 minute, add grounded walnuts. Cook for 1 to 2 minutes, add the broth, oregano, basil, black pepper, salt, and maple syrup. Stir and allow to cook about 5 minutes. Add the marina sauce, gnocchi and water, stir and cook another 5 minutes. Stir and remove from heat. Stir in the shredded cheddar and parmesan, give it a good stir to incorporate the cheese. Once the cheese has melted you’re done. Serve with a side salad and some crusty bread.',
    description='')    

    recipe10 = Recipe(name='vegetableeggrolls',
    title='Homemade Vegetable Egg Rolls',
    type='Appetizer',
    ingredients='1 package coleslaw cabbage mix;6-8 wonton wrappers;1/2 cup yellow onion (chopped);2 stalks green onions (chopped);2 garlic cloves (chopped);1 tbsp fresh grated ginger;grapeseed oil (for frying);small bowl of water;salt and black pepper (to taste)',
    instructions='In a skillet on medium heat add 2 tbsp grapeseed oil. Add the onions and allow to cook for about a minute. Add the garlic and ginger, stir to combine. Now add the cabbage stir to combine and cover the skillet. Allow to cook for 5- 7 minutes stirring occasionally. Season with salt and pepper to taste and remove from heat. Set aside to cool down. Place a skillet or wok on medium to high heat. Add about a 1/2 cup of grapeseed oil. Enough oil to deep fry the egg rolls. On a work surface lay wonton wrapper flat. Use a spoon to add cabbage mixture to the center of the wrapper. Fold the sides of the wrapper to the center, then fold the bottom of the wrapper to the center. Roll the egg roll, wet your fingers and moisten the remaining flap of the wrap and seal the wonton. Place the egg roll in the hot oil and allow to brown on both sides. Remove and place on a paper towel lined plate to absorb the excess oil. Serve with your favorite sauce.',
    description='')

    recipe11 = Recipe(name='avocadowontons',
    title='Avocado Wontons',
    type='Appetizer',
    ingredients='1/4 cup red onion (chopped);2 tbsp cilantro (finely chopped);1 tbsp jalapeño peppers (chopped);1 lime (juiced);1 tsp salt;wonton wrappers (approx. 20);1 cup grapeseed oil (wok method)/2 cups (skillet method)',
    instructions='Place the red onions, cilantro, jalapeño, lime juice, and salt in a mortar or bowl and combine with a pestle or fork (mortar and pestle preferred). Once combined add avocado and mix, still keeping it chunky. Lay your wonton wrappers on a cutting board, I usually do 6 at a time. Use a small spoon to scoop a small amount of the avocado mixture onto the wonton wrapper. Be sure not to overfill your wonton. Wet your fingers with water and dab around the edges and then press all of the edges in a star like X shape and firmly press together. Your wonton should be completely sealed before frying to maintain shape. Heat a wok or skillet with grapeseed oil over medium-high heat. Place the filled wonton into the hot oil, once golden brown flip over and cook on the other side. These wontons cook really fast so be sure to keep an eye on them. Once cooked, remove from oil onto a plate with paper towels to remove any excess oil. I serve these with sweet chili sauce but these can be served with your favorite sauce as well.',
    description='')

    recipe12 = Recipe(name='loadednachos',
    title='Loaded Nachos',
    type='Appetizer',
    ingredients='cashew cheese sauce;4 oz vegan shredded cheddar cheese;12 oz vegan chorizo;1 can chipotle peppers in adobo sauce;1/4 yellow onions chopped;2 garlic cloves chopped;1/2 cup vegan chicken broth;1 tbsp grapeseed oil;1 tsp turmeric;2 tbsp green onions;2 tbsp cilantro;1 bag tortilla chips;jalapeño (optional);avocado (optional)',
    instructions='On medium heat in a skillet, add oil and chorizo. Start to brown chorizo then add the onions and garlic cook for about 3 minutes. Add about 2 to 3 chipotles, you can add more if you like it more spicy. Cook mixture for about 5 minutes then set aside. In a sauce pan on medium heat add the cashew cheese sauce, shredded cheese, chicken broth and turmeric. Stir constantly until the shredded cheese has melted. If the cheese sauce becomes too thick you can always add more broth. The sauce should be thin enough to pour over the tortilla chips. On a large platter place the tortilla chips. Use a spoon to layer the chorizo on top of the tortilla, then pour the cheese sauce on top. Add the green onions, cilantro, jalapeño and diced avocado. Serve immediately.',
    description='')


    


