export interface Quote {
  text: string;
  author: string;
}

export interface QuotesData {
  [topic: string]: Quote[];
}

export const quotesData: QuotesData = {
  love: [
    {
      text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
      author: "Lao Tzu",
    },
    {
      text: "The best thing to hold onto in life is each other.",
      author: "Audrey Hepburn",
    },
    {
      text: "Love is composed of a single soul inhabiting two bodies.",
      author: "Aristotle",
    },
    {
      text: "Where there is love there is life.",
      author: "Mahatma Gandhi",
    },
    {
      text: "Love is not only something you feel, it is something you do.",
      author: "David Wilkerson",
    },
  ],
  life: [
    {
      text: "Life is what happens to you while you're busy making other plans.",
      author: "John Lennon",
    },
    {
      text: "The purpose of our lives is to be happy.",
      author: "Dalai Lama",
    },
    {
      text: "In the end, it's not the years in your life that count. It's the life in your years.",
      author: "Abraham Lincoln",
    },
    {
      text: "Life is really simple, but we insist on making it complicated.",
      author: "Confucius",
    },
    {
      text: "The biggest adventure you can take is to live the life of your dreams.",
      author: "Oprah Winfrey",
    },
  ],
  inspirational: [
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
    },
    {
      text: "It is during our darkest moments that we must focus to see the light.",
      author: "Aristotle",
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      text: "The only impossible journey is the one you never begin.",
      author: "Tony Robbins",
    },
    {
      text: "In the middle of difficulty lies opportunity.",
      author: "Albert Einstein",
    },
  ],
  humor: [
    {
      text: "I have not failed. I've just found 10,000 ways that won't work.",
      author: "Thomas A. Edison",
    },
    {
      text: "Life is too important to be taken seriously.",
      author: "Oscar Wilde",
    },
    {
      text: "The secret to staying young is to live honestly, eat slowly, and lie about your age.",
      author: "Lucille Ball",
    },
    {
      text: "I'm not superstitious, but I am a little stitious.",
      author: "Michael Scott",
    },
    {
      text: "Age is an issue of mind over matter. If you don't mind, it doesn't matter.",
      author: "Mark Twain",
    },
  ],
  philosophy: [
    {
      text: "The unexamined life is not worth living.",
      author: "Socrates",
    },
    {
      text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
      author: "Aristotle",
    },
    {
      text: "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.",
      author: "Albert Camus",
    },
    {
      text: "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.",
      author: "Jean-Paul Sartre",
    },
    {
      text: "The only true wisdom is in knowing you know nothing.",
      author: "Socrates",
    },
  ],
  god: [
    {
      text: "God helps those who help themselves.",
      author: "Benjamin Franklin",
    },
    {
      text: "Faith is taking the first step even when you don't see the whole staircase.",
      author: "Martin Luther King Jr.",
    },
    {
      text: "God's work done in God's way will never lack God's supply.",
      author: "Hudson Taylor",
    },
    {
      text: "Trust in the Lord with all your heart and lean not on your own understanding.",
      author: "Proverbs 3:5",
    },
    {
      text: "Be still, and know that I am God.",
      author: "Psalm 46:10",
    },
  ],
  truth: [
    {
      text: "The truth will set you free, but first it will piss you off.",
      author: "Gloria Steinem",
    },
    {
      text: "Three things cannot be long hidden: the sun, the moon, and the truth.",
      author: "Buddha",
    },
    {
      text: "If you tell the truth, you don't have to remember anything.",
      author: "Mark Twain",
    },
    {
      text: "The truth is not for all men, but only for those who seek it.",
      author: "Ayn Rand",
    },
    {
      text: "A lie gets halfway around the world before the truth has a chance to get its pants on.",
      author: "Winston Churchill",
    },
  ],
  wisdom: [
    {
      text: "The only true wisdom is in knowing you know nothing.",
      author: "Socrates",
    },
    {
      text: "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost",
    },
    {
      text: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
      author: "William Shakespeare",
    },
    {
      text: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
      author: "Eleanor Roosevelt",
    },
    {
      text: "It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.",
      author: "Maurice Switzer",
    },
  ],
  romance: [
    {
      text: "I have waited for this opportunity for more than half a century, to repeat to you once again my vow of eternal fidelity and everlasting love.",
      author: "Gabriel García Márquez",
    },
    {
      text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
      author: "Dr. Seuss",
    },
    {
      text: "The best love is the kind that awakens the soul and makes us reach for more.",
      author: "Nicholas Sparks",
    },
    {
      text: "I love you not only for what you are, but for what I am when I am with you.",
      author: "Elizabeth Barrett Browning",
    },
    {
      text: "Whatever our souls are made of, his and mine are the same.",
      author: "Emily Brontë",
    },
  ],
  poetry: [
    {
      text: "Poetry is when an emotion has found its thought and the thought has found words.",
      author: "Robert Frost",
    },
    {
      text: "A poet is, before anything else, a person who is passionately in love with language.",
      author: "W.H. Auden",
    },
    {
      text: "Poetry is the spontaneous overflow of powerful feelings: it takes its origin from emotion recollected in tranquility.",
      author: "William Wordsworth",
    },
    {
      text: "If I read a book and it makes my whole body so cold no fire can ever warm me, I know that is poetry.",
      author: "Emily Dickinson",
    },
    {
      text: "Poetry is not a turning loose of emotion, but an escape from emotion; it is not the expression of personality, but an escape from personality.",
      author: "T.S. Eliot",
    },
  ],
  "life lessons": [
    {
      text: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
      author: "Bill Keane",
    },
    {
      text: "Life is 10% what happens to you and 90% how you react to it.",
      author: "Charles R. Swindoll",
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      text: "Don't cry because it's over, smile because it happened.",
      author: "Dr. Seuss",
    },
    {
      text: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
    },
  ],
  death: [
    {
      text: "Death is not the opposite of life, but a part of it.",
      author: "Haruki Murakami",
    },
    {
      text: "The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.",
      author: "Mark Twain",
    },
    {
      text: "Death is nothing, but to live defeated and inglorious is to die daily.",
      author: "Napoleon Bonaparte",
    },
    {
      text: "I'm not afraid of death; I just don't want to be there when it happens.",
      author: "Woody Allen",
    },
    {
      text: "Death leaves a heartache no one can heal, love leaves a memory no one can steal.",
      author: "Richard Puz",
    },
  ],
  happiness: [
    {
      text: "Happiness is not something ready made. It comes from your own actions.",
      author: "Dalai Lama",
    },
    {
      text: "The purpose of our lives is to be happy.",
      author: "Dalai Lama",
    },
    {
      text: "Happiness is when what you think, what you say, and what you do are in harmony.",
      author: "Mahatma Gandhi",
    },
    {
      text: "For every minute you are angry you lose sixty seconds of happiness.",
      author: "Ralph Waldo Emerson",
    },
    {
      text: "Happiness depends upon ourselves.",
      author: "Aristotle",
    },
  ],
  hope: [
    {
      text: "Hope is the thing with feathers that perches in the soul.",
      author: "Emily Dickinson",
    },
    {
      text: "We must accept finite disappointment, but never lose infinite hope.",
      author: "Martin Luther King Jr.",
    },
    {
      text: "Hope is being able to see that there is light despite all of the darkness.",
      author: "Desmond Tutu",
    },
    {
      text: "Everything that is done in this world is done by hope.",
      author: "Martin Luther",
    },
    {
      text: "Hope is a waking dream.",
      author: "Aristotle",
    },
  ],
  faith: [
    {
      text: "Faith is taking the first step even when you don't see the whole staircase.",
      author: "Martin Luther King Jr.",
    },
    {
      text: "Faith is not the belief that God will do what you want. It is the belief that God will do what is right.",
      author: "Max Lucado",
    },
    {
      text: "Keep your dreams alive. Understand to achieve anything requires faith and belief in yourself.",
      author: "Gail Devers",
    },
    {
      text: "Faith is the strength by which a shattered world shall emerge into the light.",
      author: "Helen Keller",
    },
    {
      text: "Faith makes all things possible... love makes all things easy.",
      author: "Dwight L. Moody",
    },
  ],
  spirituality: [
    {
      text: "The spiritual journey is individual, highly personal. It can't be organized or regulated.",
      author: "Ram Dass",
    },
    {
      text: "Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.",
      author: "Rumi",
    },
    {
      text: "The soul always knows what to do to heal itself. The challenge is to silence the mind.",
      author: "Caroline Myss",
    },
    {
      text: "We are not human beings having a spiritual experience. We are spiritual beings having a human experience.",
      author: "Pierre Teilhard de Chardin",
    },
    {
      text: "Peace cannot be kept by force; it can only be achieved by understanding.",
      author: "Albert Einstein",
    },
  ],
  religion: [
    {
      text: "Religion is the opium of the people.",
      author: "Karl Marx",
    },
    {
      text: "I like your Christ, I do not like your Christians. Your Christians are so unlike your Christ.",
      author: "Mahatma Gandhi",
    },
    {
      text: "The way to see by Faith is to shut the Eye of Reason.",
      author: "Benjamin Franklin",
    },
    {
      text: "My religion is very simple. My religion is kindness.",
      author: "Dalai Lama",
    },
    {
      text: "Science without religion is lame, religion without science is blind.",
      author: "Albert Einstein",
    },
  ],
  motivational: [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      text: "Your limitation—it's only your imagination.",
      author: "Unknown",
    },
    {
      text: "Push yourself, because no one else is going to do it for you.",
      author: "Unknown",
    },
    {
      text: "Great things never come from comfort zones.",
      author: "Unknown",
    },
    {
      text: "Dream it. Wish it. Do it.",
      author: "Unknown",
    },
  ],
  motivation: [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      text: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson",
    },
    {
      text: "The future depends on what you do today.",
      author: "Mahatma Gandhi",
    },
    {
      text: "It always seems impossible until it's done.",
      author: "Nelson Mandela",
    },
  ],
  relationships: [
    {
      text: "The greatest thing in the world is to know how to belong to oneself.",
      author: "Michel de Montaigne",
    },
    {
      text: "We accept the love we think we deserve.",
      author: "Stephen Chbosky",
    },
    {
      text: "The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed.",
      author: "Carl Jung",
    },
    {
      text: "A successful marriage requires falling in love many times, always with the same person.",
      author: "Mignon McLaughlin",
    },
    {
      text: "The best way to find out if you can trust somebody is to trust them.",
      author: "Ernest Hemingway",
    },
  ],
  time: [
    {
      text: "Time you enjoy wasting is not wasted time.",
      author: "Marthe Troly-Curtin",
    },
    {
      text: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
      author: "Eleanor Roosevelt",
    },
    {
      text: "Time is what we want most, but what we use worst.",
      author: "William Penn",
    },
    {
      text: "The two most powerful warriors are patience and time.",
      author: "Leo Tolstoy",
    },
    {
      text: "Lost time is never found again.",
      author: "Benjamin Franklin",
    },
  ],
  science: [
    {
      text: "Science is not only compatible with spirituality; it is a profound source of spirituality.",
      author: "Carl Sagan",
    },
    {
      text: "The important thing is not to stop questioning.",
      author: "Albert Einstein",
    },
    {
      text: "Science without religion is lame, religion without science is blind.",
      author: "Albert Einstein",
    },
    {
      text: "Equipped with his five senses, man explores the universe around him and calls the adventure Science.",
      author: "Edwin Hubble",
    },
    {
      text: "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.",
      author: "Stephen Hawking",
    },
  ],
  writing: [
    {
      text: "There is nothing to writing. All you do is sit down at a typewriter and bleed.",
      author: "Ernest Hemingway",
    },
    {
      text: "Write what you know. That should leave you with a lot of free time.",
      author: "Howard Nemerov",
    },
    {
      text: "A writer is someone for whom writing is more difficult than it is for other people.",
      author: "Thomas Mann",
    },
    {
      text: "The first draft of anything is shit.",
      author: "Ernest Hemingway",
    },
    {
      text: "You can make anything by writing.",
      author: "C.S. Lewis",
    },
  ],
  success: [
    {
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      text: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
    {
      text: "Don't be afraid to give up the good to go for the great.",
      author: "John D. Rockefeller",
    },
    {
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs",
    },
    {
      text: "Success is walking from failure to failure with no loss of enthusiasm.",
      author: "Winston Churchill",
    },
  ],
  courage: [
    {
      text: "Courage is not the absence of fear, but the mastery of it.",
      author: "Mark Twain",
    },
    {
      text: "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face.",
      author: "Eleanor Roosevelt",
    },
    {
      text: "It takes courage to grow up and become who you really are.",
      author: "E.E. Cummings",
    },
    {
      text: "Courage is grace under pressure.",
      author: "Ernest Hemingway",
    },
    {
      text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
      author: "Lao Tzu",
    },
  ],
  growth: [
    {
      text: "Growth begins at the end of your comfort zone.",
      author: "Neale Donald Walsch",
    },
    {
      text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
      author: "Alan Watts",
    },
    {
      text: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
    },
    {
      text: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
      author: "Bill Keane",
    },
    {
      text: "Life is what happens to you while you're busy making other plans.",
      author: "John Lennon",
    },
  ],
  perseverance: [
    {
      text: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      text: "Perseverance is not a long race; it is many short races one after the other.",
      author: "Walter Elliot",
    },
    {
      text: "Never give up, for that is just the place and time that the tide will turn.",
      author: "Harriet Beecher Stowe",
    },
    {
      text: "The difference between ordinary and extraordinary is that little extra.",
      author: "Jimmy Johnson",
    },
    {
      text: "Fall seven times, stand up eight.",
      author: "Japanese Proverb",
    },
  ],
  leadership: [
    {
      text: "A leader is one who knows the way, goes the way, and shows the way.",
      author: "John C. Maxwell",
    },
    {
      text: "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things.",
      author: "Ronald Reagan",
    },
    {
      text: "Leadership is not about being in charge. It's about taking care of those in your charge.",
      author: "Simon Sinek",
    },
    {
      text: "A true leader has the confidence to stand alone, the courage to make tough decisions, and the compassion to listen to the needs of others.",
      author: "Douglas MacArthur",
    },
    {
      text: "Leadership is the capacity to translate vision into reality.",
      author: "Warren Bennis",
    },
  ],
};

// Synonyms and related terms mapping
const topicSynonyms: { [key: string]: string[] } = {
  love: [
    "affection",
    "romance",
    "relationship",
    "heart",
    "passion",
    "adore",
    "romantic",
    "dating",
    "soulmate",
    "valentine",
  ],
  life: [
    "living",
    "existence",
    "journey",
    "experience",
    "being",
    "alive",
    "world",
    "reality",
    "days",
  ],
  success: [
    "achievement",
    "victory",
    "triumph",
    "accomplishment",
    "winning",
    "goal",
    "achieve",
    "prosper",
    "excel",
  ],
  motivational: [
    "inspiration",
    "drive",
    "ambition",
    "encouragement",
    "uplifting",
    "empowering",
    "inspiring",
  ],
  motivation: [
    "inspiration",
    "drive",
    "ambition",
    "encouragement",
    "uplifting",
    "empowering",
    "inspiring",
  ],
  inspirational: [
    "motivation",
    "uplifting",
    "encouraging",
    "inpirational",
    "empowering",
    "moving",
    "touching",
  ],
  happiness: [
    "joy",
    "bliss",
    "contentment",
    "pleasure",
    "delight",
    "cheerful",
    "glad",
    "merry",
    "joyful",
  ],
  wisdom: [
    "knowledge",
    "intelligence",
    "insight",
    "understanding",
    "smart",
    "wise",
    "clever",
    "sage",
  ],
  courage: [
    "bravery",
    "strength",
    "valor",
    "fearlessness",
    "bold",
    "brave",
    "heroic",
    "daring",
  ],
  humor: [
    "funny",
    "comedy",
    "laugh",
    "joke",
    "witty",
    "amusing",
    "hilarious",
    "comic",
  ],
  truth: [
    "honesty",
    "reality",
    "fact",
    "genuine",
    "authentic",
    "real",
    "sincere",
    "honest",
  ],
  death: [
    "mortality",
    "dying",
    "end",
    "passing",
    "eternal",
    "grave",
    "farewell",
    "memorial",
  ],
  god: [
    "divine",
    "lord",
    "creator",
    "almighty",
    "heaven",
    "prayer",
    "sacred",
    "holy",
  ],
  faith: [
    "belief",
    "trust",
    "religion",
    "spiritual",
    "prayer",
    "devotion",
    "worship",
    "religious",
  ],
  religion: [
    "faith",
    "spiritual",
    "god",
    "prayer",
    "church",
    "worship",
    "sacred",
    "divine",
  ],
  science: [
    "research",
    "study",
    "experiment",
    "discovery",
    "knowledge",
    "facts",
    "learning",
    "technology",
  ],
  growth: [
    "development",
    "progress",
    "improvement",
    "change",
    "evolution",
    "advancement",
    "learning",
  ],
  perseverance: [
    "persistence",
    "determination",
    "endurance",
    "patience",
    "resilience",
    "strength",
  ],
  leadership: [
    "leader",
    "guide",
    "management",
    "authority",
    "influence",
    "power",
    "responsibility",
  ],
  "life lessons": [
    "experience",
    "learning",
    "wisdom",
    "growth",
    "advice",
    "guidance",
    "insight",
  ],
  spirituality: [
    "spiritual",
    "soul",
    "meditation",
    "mindfulness",
    "divine",
    "sacred",
    "prayer",
    "enlightenment",
  ],
  philosophy: [
    "philosophical",
    "wisdom",
    "thinking",
    "ideas",
    "thought",
    "logic",
    "reason",
    "mind",
  ],
  romance: [
    "romantic",
    "love",
    "relationship",
    "passion",
    "dating",
    "valentine",
    "heart",
    "kiss",
  ],
  poetry: [
    "poems",
    "verses",
    "literature",
    "writing",
    "poet",
    "rhyme",
    "verse",
    "lyric",
  ],
  relationships: [
    "friendship",
    "connection",
    "bond",
    "partnership",
    "family",
    "friends",
    "together",
    "social",
  ],
  time: [
    "moment",
    "duration",
    "period",
    "age",
    "clock",
    "hour",
    "day",
    "year",
    "lifetime",
  ],
  writing: [
    "literature",
    "composition",
    "authoring",
    "poetry",
    "book",
    "novel",
    "author",
    "write",
    "pen",
  ],
  hope: [
    "optimism",
    "faith",
    "belief",
    "trust",
    "confidence",
    "expectation",
    "aspiration",
    "dream",
  ],
};

// Semantic relationships between topics (related concepts)
const semanticRelationships: { [key: string]: string[] } = {
  love: ["relationships", "romance", "happiness", "life"],
  relationships: ["love", "romance", "life", "happiness"],
  romance: ["love", "relationships", "poetry", "happiness"],
  happiness: ["joy", "life", "hope", "inspirational"],
  success: [
    "motivational",
    "motivation",
    "leadership",
    "wisdom",
    "perseverance",
  ],
  motivational: ["success", "inspirational", "courage", "perseverance"],
  motivation: ["success", "inspirational", "courage", "perseverance"],
  inspirational: ["motivational", "motivation", "hope", "wisdom", "life"],
  courage: ["strength", "perseverance", "leadership", "faith"],
  wisdom: ["philosophy", "truth", "life", "growth", "science"],
  philosophy: ["wisdom", "truth", "life", "thinking"],
  spirituality: ["faith", "religion", "god", "wisdom"],
  faith: ["spirituality", "religion", "god", "hope"],
  religion: ["faith", "spirituality", "god", "wisdom"],
  god: ["faith", "religion", "spirituality", "hope"],
  life: ["wisdom", "happiness", "growth", "time", "life lessons"],
  death: ["life", "time", "philosophy", "wisdom"],
  time: ["life", "wisdom", "philosophy", "growth"],
  hope: ["faith", "inspirational", "happiness", "courage"],
  truth: ["wisdom", "philosophy", "science", "life"],
  growth: ["wisdom", "life", "success", "perseverance", "life lessons"],
  perseverance: ["courage", "success", "motivational", "strength"],
  leadership: ["success", "courage", "wisdom", "responsibility"],
  writing: ["poetry", "literature", "wisdom", "creativity"],
  poetry: ["writing", "romance", "beauty", "art"],
  humor: ["happiness", "joy", "life", "wisdom"],
  science: ["truth", "knowledge", "discovery", "wisdom"],
  "life lessons": ["wisdom", "life", "growth", "experience"],
};

// Simple Levenshtein distance function for fuzzy matching
const levenshteinDistance = (str1: string, str2: string): number => {
  const matrix = [];

  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1,
        );
      }
    }
  }

  return matrix[str2.length][str1.length];
};

// Find the best matching topic using multiple strategies
const findBestTopicMatch = (searchTerm: string): string | null => {
  const normalizedSearch = searchTerm.toLowerCase().trim();
  const allTopics = Object.keys(quotesData);

  // 1. Check for exact synonym matches
  for (const [topic, synonyms] of Object.entries(topicSynonyms)) {
    if (synonyms.includes(normalizedSearch)) {
      return topic;
    }
  }

  // 2. Check for partial matches (contains)
  const partialMatches = allTopics.filter(
    (topic) =>
      topic.includes(normalizedSearch) || normalizedSearch.includes(topic),
  );

  if (partialMatches.length > 0) {
    // Return the shortest match (most specific)
    return partialMatches.sort((a, b) => a.length - b.length)[0];
  }

  // 3. Fuzzy matching with distance threshold
  const fuzzyMatches = allTopics
    .map((topic) => ({
      topic,
      distance: levenshteinDistance(normalizedSearch, topic),
    }))
    .filter(
      (match) =>
        match.distance <=
        Math.max(2, Math.floor(normalizedSearch.length * 0.4)),
    )
    .sort((a, b) => a.distance - b.distance);

  return fuzzyMatches.length > 0 ? fuzzyMatches[0].topic : null;
};

export const getRandomQuotes = (topic: string, count: number = 3): Quote[] => {
  const normalizedTopic = topic.toLowerCase().trim();

  // First try exact match
  let topicQuotes = quotesData[normalizedTopic];

  if (!topicQuotes) {
    // Try fuzzy matching - find the best match
    const bestMatch = findBestTopicMatch(normalizedTopic);
    if (bestMatch) {
      topicQuotes = quotesData[bestMatch];
    }
  }

  if (!topicQuotes) {
    return [];
  }

  const shuffled = [...topicQuotes].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getAvailableTopics = (): string[] => {
  return Object.keys(quotesData);
};

export const getSuggestedTopics = (
  topic: string,
  maxSuggestions: number = 6,
): string[] => {
  const normalizedTopic = topic.toLowerCase().trim();
  const allTopics = Object.keys(quotesData);

  // Check for exact match first
  if (quotesData[normalizedTopic]) {
    return [];
  }

  // Calculate similarity scores for all topics with enhanced scoring
  const topicScores = allTopics.map((availableTopic) => {
    const distance = levenshteinDistance(normalizedTopic, availableTopic);
    const contains =
      availableTopic.includes(normalizedTopic) ||
      normalizedTopic.includes(availableTopic);

    // Check if it's a synonym
    const isSynonym =
      topicSynonyms[availableTopic]?.includes(normalizedTopic) ||
      Object.entries(topicSynonyms).some(
        ([key, synonyms]) =>
          key === normalizedTopic && synonyms.includes(availableTopic),
      );

    // Check semantic relationships
    const isSemanticallRelated =
      semanticRelationships[normalizedTopic]?.includes(availableTopic) ||
      semanticRelationships[availableTopic]?.includes(normalizedTopic);

    // Calculate a composite score (lower is better)
    let score = distance;
    if (contains) score -= 10; // Strong bonus for contains
    if (isSynonym) score -= 15; // Even stronger bonus for synonyms
    if (isSemanticallRelated) score -= 8; // Good bonus for semantic relationships

    return {
      topic: availableTopic,
      score,
      distance,
      contains,
      isSynonym,
      isSemanticallRelated,
    };
  });

  // Sort by composite score
  topicScores.sort((a, b) => a.score - b.score);

  // Return suggestions with multiple criteria
  const suggestions = [];

  // First priority: synonyms and exact contains
  const highPriority = topicScores.filter(
    (item) => item.isSynonym || item.contains,
  );
  suggestions.push(...highPriority.slice(0, 3));

  // Second priority: semantically related
  if (suggestions.length < maxSuggestions) {
    const semanticMatches = topicScores.filter(
      (item) =>
        item.isSemanticallRelated &&
        !suggestions.some((s) => s.topic === item.topic),
    );
    suggestions.push(
      ...semanticMatches.slice(0, maxSuggestions - suggestions.length),
    );
  }

  // Third priority: fuzzy matches
  if (suggestions.length < maxSuggestions) {
    const fuzzyMatches = topicScores.filter(
      (item) =>
        item.distance <=
          Math.max(3, Math.floor(normalizedTopic.length * 0.5)) &&
        !suggestions.some((s) => s.topic === item.topic),
    );
    suggestions.push(
      ...fuzzyMatches.slice(0, maxSuggestions - suggestions.length),
    );
  }

  // Return unique suggestions
  return [...new Set(suggestions.map((item) => item.topic))].slice(
    0,
    maxSuggestions,
  );
};

export const findQuotesWithFallback = (
  topic: string,
  count: number = 3,
): { quotes: Quote[]; suggestions: string[]; matchedTopic?: string } => {
  const normalizedTopic = topic.toLowerCase().trim();

  // Check if we have an exact match first
  const exactMatch = quotesData[normalizedTopic];
  if (exactMatch) {
    const shuffled = [...exactMatch].sort(() => 0.5 - Math.random());
    return {
      quotes: shuffled.slice(0, count),
      suggestions: [],
      matchedTopic: normalizedTopic,
    };
  }

  // Try fuzzy matching
  const bestMatch = findBestTopicMatch(normalizedTopic);
  if (bestMatch && quotesData[bestMatch]) {
    const shuffled = [...quotesData[bestMatch]].sort(() => 0.5 - Math.random());
    return {
      quotes: shuffled.slice(0, count),
      suggestions: [],
      matchedTopic: bestMatch,
    };
  }

  // If no quotes found, get suggestions
  const suggestions = getSuggestedTopics(topic);
  return { quotes: [], suggestions: [] };
};
