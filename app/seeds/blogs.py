from app.models import db, Blog, User

def seed_blogs():
    post1 = Blog(name='fasting',
    title='Fasting',
    content='Most people associate the idea of fasting with starvation.;However, starvation is involuntary abstention from eating.;Fasting on the other hand is the voluntary abstention from eating for spiritual, health, or other reasons.;Whatever the reason is to sustain from food, the fact is that fasting is voluntary is a critical distinction.;There is no standard duration of time when you’re fasting. Any time you’re not eating your fasting.;Not eating from dinner to breakfast is an example of fasting. Consider the term breakfast. Which simply means you are breaking your fast from the meal you previously ate hours before.;Fasting have been done by literally millions of people around the world for thousands of years. There is enormous health benefits to fasting. Fasting is simple, flexible, practical, free, and guaranteed to work.;When we eat food we increase insulin production which stores sugar and produce fat in the liver. When we don’t eat food we decrease insulin, burn stored sugar and burn body fat. Eating less food won’t have the same effect on the body like some diets will suggest. You have to eat no food to have these health benefits. High insulin resistance, is the root problem in type 2 diabetes and has been linked to a number of diseases, including:;Heart disease;Stroke;Alzheimer’s disease;High cholesterol;High blood pressure;Abdominal obesity;Nonalcoholic steatohepatitis (fatty liver disease);Polycystic ovary syndrome;Gout;Atherosclerosis;Gastroesophageal reflux disease;Obstructive sleep apnea;Cancer;Now I know fasting isn’t a cure all, healthy eating still matters. The reduction of sugar, high fructose corn syrup, artificial flavors, artificial sweeteners, and over dependence on refined grains will decrease the risk of heart disease, stroke, cancer, and even premature death.',
    description='How fasting leads us to be more in tune with our bodies.')

    post2 = Blog(name='quinoa',
    title='Quinoa',
    content='Quinoa, pronounced KEEN-wah, is very popular throughout the world.;Quinoa is a seed which is prepared and eaten, similar to a grain. The Inca Empire harvest this crop and referred to it as the “Mother of all grains” and believed it to be sacred.;Quinoa has become a trend or Super Food even though it’s been eaten for thousands of years in South America. Today you can find quinoa and quinoa products all over the world. Most health food stores and restaurants that emphasize natural foods will have it available.;There are three main types: white, red, and black. Quinoa is gluten free and NON-GMO even though it’s not a grain, it counts as a whole -grain food.;Quinoa has thousands of trace nutrients which are extremely healthy including antioxidants called flavonoids.;Quinoa has a very high fiber content; more than twice as high as most grains. It’s also a good source of iron, folate, magnesium, and protein. If you are following a plant based or vegan diet quinoa is an excellent source for protein. The protein in quinoa supplies a wide range of amino acids. Muscle development and immunity activity are among essential functions and the body will benefit from quinoa nutrients.;Quinoa works well and can be versatile in many dishes. It works well in hot dishes, salads, and burgers as well as baking or as a breakfast grain. It has a subtle nutty taste, you can add broth or coconut milk in the cooking process to give a whole new delicious flavor.',
    description='One of the most underrated super-foods around.')

    post3 = Blog(name='tempeh',
    title='Tempeh',
    content='Tempeh is a traditional Indonesian soy product that is made from fermented soybeans. It is made through fermentation process that binds soybeans into a cake-like solid form. It is known for its high protein content but it also offers many different health benefits.;Tempeh has absolutely no cholesterol is a great way to get B vitamins, fiber, iron, calcium, and other minerals.;Tempeh is also a product that does not cause bloating or inflammation. This makes it a great alternative to beans for people who struggle with stomach disorders like irritable bowel syndrome.;There is also evidence that products like tempeh may:;Improve your cholesterol;Lower your blood pressure;Protect your heart;Improve insulin resistance;Lower inflammation;Help relieve hot flashes from menopause;Promote bone health;Tempeh is not the most attractive food straight out of the package. It can be a little dry and stiff at first. You’ll definitely want to add some flavor with a marinade! Then you can cook it pretty much any way you like: cubed, sliced, crumbled, sautéed, or baked.',
    description='A plant based protein popularized as a meat substitute.')

    post4 = Blog(name='tofu',
    title='Tofu',
    content='Let’s talk about tofu.;For vegans and vegetarians, tofu is a very important ingredient of our diet as it is packed with much needed proteins.;Tofu, which originates from China, is a type of food produced by condensation of soy milk in a similar process to making cheese. Tofu is packed with a lot of beneficial vitamins and minerals, such as vitamin B6, vitamin K, thiamin, riboflavin, folate, calcium, iron, phosphorus, magnesium, zinc, copper, selenium, and manganese.;I do want to mention soybeans today are mostly genetically modified (GMO) and if you want the best then you should seek organic tofu.;Here are 6 Health Benefits:;Reduces Appetite;If you are trying to loose weight you should consume tofu more often. Tofu is packed with dietary fiber, proteins, vitamins, and minerals. This will keep you full longer. Another great benefit of tofu is that it is low in calories, which means that you will have only befits from its consumption, regardless if you eat a little bit more than you intended.;Promotes Brain Health;If you want to have better brain health then you should make sure to consume healthy foods, including tofu. Lecithin found in tofu promotes better brain health. Another great health benefit to tofu when it comes to brain health is it’s anti-inflammatory properties.;Prevents Anemia;Tofu is a very rich source of iron, eating tofu consistently for about 3months and you will start to notice an improvement in lab results.;Improves Blood Glucose levels;Those who consume tofu on a regular basis will have improvement of baseline insulin levels, as well as average fasting blood glucose levels.;Lowers Cholesterol Levels;Tofu is packed with saponins, they can reduce the levels of LDL in the blood, otherwise known as bad cholesterol.;Reduces the Risk of Heart Diseases;Researchers have shown that tofu can reduce the risk of heart disease based on the fact that isoflavones reduce the inflammation of blood vessels, improving their elasticity at the same time. Also, tofu contains saponins, which have a protective effect on the heart.;Make tofu part of your healthy diet. There are so many delicious recipes to be made with tofu, why not make it part of your health plant based diet.',
    description='One of the most versatile vegan proteins.')

    user = User.query.one()
    
    db.session.add(post1)
    db.session.add(post2)
    db.session.add(post3)
    db.session.add(post4)

    user.blogs.extend([post1, post2, post3, post4])

    db.session.commit()

def undo_blogs():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()

