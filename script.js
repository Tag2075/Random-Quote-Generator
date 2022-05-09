document.querySelector("#generate").addEventListener("click", () => {
  generate();
});

generate = () => {
  var quotes = {
    "- Walt Disney": '"The Way Get Started Is To Quit Talking And Begin Doing. Способ начать - перестать говорить и начать делать."',
    "- Winston Churchill": '"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty. Пессимист видит трудности в каждой возможности. Оптимист видит возможность в любой трудности."',
    "- Will Rogers": '"Don’t Let Yesterday Take Up Too Much Of Today. Не позволяйте вчерашнему дню занимать слишком много сегодняшнего. "',
    "- Unknown": '"You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character. Из неудач вы узнаете больше, чем из успеха. Не позволяйте этому остановить вас. Неудачи закаляют характер."',
    "- Vince Lombardi": '"It’s Not Whether You Get Knocked Down, It’s Whether You Get Up. Дело не в том, сбивают ли тебя с ног, а в том, поднимаешься ли ты."',
    "- Mahatma Gandhi": '"Live as if you were to die tomorrow. Learn as if you were to live forever. Живите так, как будто вы умрете завтра. Учитесь так, как будто вы будете жить вечно."',
    "- Martin Luther King Jr": '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that. Тьма не может изгнать тьму: это может сделать только свет. Ненависть не может изгнать ненависть: это может сделать только любовь."',
    "- Albert Einstein": '"Strive not to be a success, but rather to be of value. Стремитесь не к успеху, а к ценности."',
    "- Florence Nightingale": '"I attribute my success to this: I never gave or took any excuse. Я связываю свой успех именно с этим: Я никогда не давал и не принимал никаких оправданий."',
    "- Michael Jordan": '"I missed more than 9000 shots in my career. I lost almost 300 games. 26 times I been trusted to take the game winning shot and missed. I failed over and over and over again in my life. And that is why I succeed. За свою карьеру я промазал более 9000 бросков. Я проиграл почти 300 игр. 26 раз мне доверяли сделать победный бросок и я промахивался. Я терпел неудачи снова и снова, снова и снова в своей жизни. И именно поэтому я добился успеха."',
    "- Babe Ruth": '"Every strike brings me closer to the next home run. Каждый удар приближает меня к следующему хоумрану."',
    "- John Lennon": '"Life is what happens to you while you’re busy making other plans. Жизнь - это то, что происходит с вами, пока вы заняты составлением других планов."',
    "- Earl Nightingale": '"We become what we think about. Мы становимся тем, о чем думаем."',
    "- Mark Twain": '"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover."',
    "- Charles Swindoll": '"Life is 10% what happens to me and 90% of how I react to it. Жизнь на 10% состоит из того, что со мной происходит, и на 90% из того, как я на это реагирую."',
    "- Buddah": '"The mind is everything. What you think you become. Ум - это все. О чем вы думаете, тем вы и становитесь."',
    "- Chinese Proverb": '"The best time to plant a tree was 20 years ago. The second best time is now. Лучшее время для посадки дерева было 20 лет назад. Второе лучшее время - сейчас."',
    "- Woody Allen": '"Eighty percent of success is showing up. Восемьдесят процентов успеха - это проявление себя."',
    "- Steve Jobs": '"Your time is limited, so don’t waste it living someone else’s life. Ваше время ограничено, поэтому не тратьте его на чужую жизнь."',
    "- Vince Lombardi": '"Winning isn’t everything, but wanting to win is. Победа - это еще не все, но желание победить - да."',
    "- Stephen Covey": '"I am not a product of my circumstances. I am a product of my decisions. Я не являюсь продуктом своих обстоятельств. Я - продукт моих решений."',
    "- Christopher Columbus": '"You can never cross the ocean until you have the courage to lose sight of the shore. Вы никогда не сможете пересечь океан, пока не наберетесь смелости и не потеряете из виду берег."',
    "- Maya Angelou": '"I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. Я понял, что люди забудут, что вы сказали, люди забудут, что вы сделали, но люди никогда не забудут, что вы заставили их почувствовать."',
    "- Jim Rohn": '"Either you run the day, or the day runs you. Либо вы управляете днем, либо день управляет вами."',
    "- Henry Ford": '"Whether you think you can or you think you can’t, you’re right. Думаете ли вы, что можете, или думаете, что не можете, вы правы."',
    "- Frank Sinatra": '"The best revenge is massive success. Лучшая месть - массовый успех."',
    "- Zig Ziglar": '"People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily. Люди часто говорят, что мотивация недолговечна. Так и с купанием.  Вот почему мы рекомендуем принимать ее ежедневно."',
    "- Aristotle": '"There is only one way to avoid criticism: do nothing, say nothing, and be nothing. Есть только один способ избежать критики: ничего не делать, ничего не говорить и никем не быть."',
    "- Jesus": '"Ask and it will be given to you; search, and you will find; knock and the door will be opened for you. Просите, и дано будет вам; ищите, и найдете; стучите, и отворят вам дверь."',
    "- Ralph Waldo Emerson": '"The only person you are destined to become is the person you decide to be. Единственный человек, которым вам суждено стать, - это человек, которым вы решили стать."',
    "- Henry David Thoreau": '"Go confidently in the direction of your dreams.  Live the life you have imagined. Уверенно идите в направлении своей мечты.  Живите той жизнью, которую вы себе представляли."',
    "- Erma Bombeck": '"When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me. Когда я предстану перед Богом в конце своей жизни, я буду надеяться, что у меня не останется ни капли таланта, и я смогу сказать: "Я использовал все, что Ты мне дал"."',
    "- Booker T. Washington": '"Few things can help an individual more than to place responsibility on him, and to let him know that you trust him. Мало что может помочь человеку больше, чем возложить на него ответственность и дать ему понять, что вы ему доверяете."'
  };

  // grab all the keys in the dictionary (authors) and store in an array
  var authors = Object.keys(quotes);
  // grab a random key (author) and store it in author
  var author = authors[Math.floor(Math.random() * authors.length)];
  // grab the value(quote) that belongs to that key
  var quote = quotes[author]

  document.querySelector("#quote").textContent = quote;
  document.querySelector("#author").textContent = author;

}
