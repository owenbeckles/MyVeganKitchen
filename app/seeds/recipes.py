from app.models import db, Recipe

def seed_recipes():
    
    recipe1 = Recipe(name='veganquesadillas',
    title='Vegan Quesadillas',
    type='Lunch/Dinner',
    ingredients='',
    instructions='In a skillet on medium heat add 1/2 tbsp oil. Allow the skillet to get hot then add peppers and onions. Cook until the onions are translucent. Remove from skillet, place in a dish and  set aside. In the same skillet add the other half of the oil  and the seitan. Allow the seitan to heat up then add the broth and beef bouillon. Allow to cook until the liquid evaporates about 2-3 minutes. Remove skillet from heat and set aside. In a separate much larger skillet, allow to heat on medium. Use a small cooking brush to coat the skillet with a small amount of oil or butter. Place the tortilla in the skillet. On one side of the tortilla add about 1/4 of each ingredient. First the cheddar cheese, then peppers and onion, then cooked seitan and lastly the mozzarella  cheese. Fold the side with no ingredients onto the side with ingredients. Cover the skillet reduce the stove to low medium heat and allow the cheese to melt 2-3 minutes. Remove the quesadilla and place on a cutting board, use a large knife or pizza cutter to cut into triangle shapes. Continue the same process with the rest of the ingredients. You can serve with sides such as guacamole, salsa or salsa verde. Sprinkle chopped cilantro to garnish.',
    description='Well seasoned seitan, lots of ooey gooey cheese, and a crispy golden exterior.'
    )

    recipe2 = Recipe(name='springrolls',
    title='Spring Rolls',
    type='Appetizer',
    ingredients='',
    instructions='Prepare and arrange all your vegetables. In a large shallow bowl add room temperature water. Use a wooden cutting board for your surface to roll your spring rolls. Take your rice paper and place it into the water. Do not let go of your rice paper continue to submerge. Once the rice paper becomes pliable, remove and place it on the cutting board. Start adding small quantities of your veggies on top of the rice paper. Lettuce first them everything else and rice noodles last. Take the bottom end of the rice paper closest to you and place over the veggies. Then take one corner of the rice paper and fold over, do the same the opposite end. Continue to roll from the bottom up. The sticky rice paper will stay sealed once your roll is complete. Continue the same process to the rest. You can use a wet knife to cut your rolls in half for display or eat as is. Serve your rolls with peanut sauce or sweet chili sauce as shown in the photo.',
    description='Fresh veggies wrapped in rice paper.') 

    recipe3 = Recipe(name='bbqoystermushrooms',
    title='Air Fried BBQ Oyster Mushrooms',
    type='Lunch/Dinner',
    ingredients='',
    instructions='In a large bowl place cleaned mushrooms, add oil and toss or gently mix to coat all of the mushrooms. Add the garlic powder, paprika, black pepper and all purpose or chicken flavored seasoning. Toss or mix well to coat the mushrooms. Add the cornstarch and make sure to cover and coat all the mushrooms. Add the seasoned mushrooms to the air fryer. Cook for 15 minutes on 400 degrees. Be sure to rotate pieces during cooking process to ensure even browning. Once cooked place in a large bowl and add the desired amount of your favorite bbq sauce. Toss to  evenly coat.',
    description='Smokey, tangy, and tender low-calorie oyster mushrooms.') 

    recipe4 = Recipe(name='frenchtoast',
    title='Homemade French Toast',
    type='Breakfast',
    ingredients='',
    instructions='In a large mixing bowl add the milk, vegan egg, cinnamon, vanilla and sugar. Stir well to combine. Cut your bread into slices about 1/2 an inch thick. Place the bread into the milk and egg mixture allow to sit for 3-5 minutes to absorb. On medium heat add butter or oil to a non stick skillet. Place the soaked bread into the hot skillet, allow to brown on both sides. Remove from the skillet and place on a serving plate drizzle with maple syrup, add your favorite fruit and enjoy.',
    description='Sweet cinnamon french toast layered with maple syrup, butter, and your favorite assortment of berries.') 

    recipe5 = Recipe(name='veganlox',
    title='Vegan Lox',
    type='Breakfast',
    ingredients='',
    instructions='In an oven safe glass container place half of the salt. Then place the unpeeled carrots on top of the salt. Then add the remaining salt on top of the carrots. Bake on 475 degrees F for 40 minutes to an hour depending on the size of the carrots. When done the carrots should be a little firm not soft and mushy. Remove carrots from baking dish and allow to cool enough to handle. remove the thick layer of salt with your hands. It’s ok if all the salt is not completely removed from the carrots. Use a vegetable peeler or a sharp knife to cut thin slices. Place the sliced carrot pieces in a glass container with the remaining ingredients. Allow to marinade for about a half hour in the refrigerator. This recipe can last 3 to 4 days in the refrigerator.',
    description='Delicious slices of fresh carrots, cucumbers, onions, and cappers topped on an everything bagel.')

    recipe6 = Recipe(name='tofuscramble',
    title='Tofu Scramble',
    type='Breakfast',
    ingredients='',
    instructions='On medium heat in a skillet add the grapeseed oil. Add the bell peppers, onions and mushrooms. Allow to cook for about 3-5 minutes. Add the mashed tofu, stir to combine allow to cook for 5 minutes. Add the turmeric and cumin, gently stir to combine. Add salt and black pepper to taste. Remove from heat and add green onions. Serve with toast, vegan sausage or add to a a burrito wrap for a delicious breakfast burrito.',
    description='Scrambled tofu combined with onions and a variety of bell peppers. Served with your choice of toast.')

    recipe7 = Recipe(name='avocadotoast',
    title='Avocado Toast',
    type='Breakfast',
    ingredients='',
    instructions='In a small bowl or mortar add the onion, cilantro, lime juice and jalapeño. Use a fork or pestle to combine the ingredients. Once the ingredients are combined add the avocado. Leave the avocado a bit chunky. Season to taste. Place the avocado mixture on your favorite toast, add the tomatoes, sprinkle the green onions and drizzle the balsamic drizzle.',
    description='Smashed avocados seasoned with red onions, jalapenos, all on top fresh bakery baked bread.')

    recipe8 = Recipe(name='generaltsoportobellomushrooms',
    title='General Tso Portobello Mushrooms',
    type='Lunch/Dinner',
    ingredients='',
    instructions='In a small bowl or measuring cup add rice vinegar, liquid aminos, hoisin sauce, water, sesame oil, and sugar. Stir and set aside. In a wok or skillet pour the grapeseed oil and heat on medium high. In a bowl add the quartered mushrooms and cornstarch. Coat the mushrooms well with the cornstarch. One by one add the coated mushrooms to the hot oil. Fry and brown on both sides. Remove brown mushrooms and place on a plate. Pour oil out of the pot and wipe clean with paper towel or kitchen cloth. Be careful not to burn yourself. Place the pot back on the medium high flame. Add the broccoli and cook for 1 minute. Add the peppers and onion. Stir and allow to cook for 1 minute. Add the General Tso sauce mixture to the pot. Stir all the ingredients to combine. Add the cornstarch mixture to the pot to thicken the sauce. Stir well until sauce begins to thicken. Once the sauce thickens remove from heat. Serve immediately.',
    description='Sweet and spicy mushrooms carmelized to perfection, and best served over rice with broccoli and bell peppers.')

    


    


