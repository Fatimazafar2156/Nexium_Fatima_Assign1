export interface Quote {
  text: string;
  author: string;
  tags?: string[];
  id?: string;
}

export interface QuotesData {
  [topic: string]: Quote[];
}

// Comprehensive local quotes data (keeping all categories working)
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
  // Adding remaining categories for completeness
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
  ],
  god: [
    {
      text: "God helps those who help themselves.",
      author: "Benjamin Franklin",
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
  ],
  // Add more categories as needed...
};

// Available topics
export const availableTopics = Object.keys(quotesData);

// Synonyms for better matching
const topicSynonyms: { [key: string]: string[] } = {
  love: ["affection", "romance", "relationship", "heart", "passion"],
  life: ["living", "existence", "journey", "experience"],
  success: ["achievement", "victory", "triumph", "accomplishment"],
  motivational: ["inspiration", "drive", "ambition", "encouragement"],
  motivation: ["inspiration", "drive", "ambition", "encouragement"],
  inspirational: ["motivation", "uplifting", "encouraging", "inpirational"],
  happiness: ["joy", "bliss", "contentment", "pleasure", "delight"],
  wisdom: ["knowledge", "intelligence", "insight", "understanding"],
  courage: ["bravery", "strength", "valor", "fearlessness"],
  humor: ["funny", "comedy", "laugh", "joke", "witty"],
  faith: ["belief", "trust", "religion", "spiritual"],
  hope: ["optimism", "belief", "trust", "confidence"],
};

// Simple Levenshtein distance function
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

// Find best topic match using fuzzy search
const findBestTopicMatch = (searchTerm: string): string | null => {
  const normalizedSearch = searchTerm.toLowerCase().trim();
  const allTopics = Object.keys(quotesData);

  // Check for exact synonym matches first
  for (const [topic, synonyms] of Object.entries(topicSynonyms)) {
    if (synonyms.includes(normalizedSearch)) {
      return topic;
    }
  }

  // Check for partial matches
  const partialMatches = allTopics.filter(
    (topic) =>
      topic.includes(normalizedSearch) || normalizedSearch.includes(topic),
  );

  if (partialMatches.length > 0) {
    return partialMatches.sort((a, b) => a.length - b.length)[0];
  }

  // Fuzzy matching
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

// Get suggestions for similar topics
export const getSuggestedTopics = (
  topic: string,
  maxSuggestions: number = 6,
): string[] => {
  const normalizedTopic = topic.toLowerCase().trim();
  const allTopics = Object.keys(quotesData);

  if (quotesData[normalizedTopic]) {
    return [];
  }

  const topicScores = allTopics.map((availableTopic) => {
    const distance = levenshteinDistance(normalizedTopic, availableTopic);
    const contains =
      availableTopic.includes(normalizedTopic) ||
      normalizedTopic.includes(availableTopic);

    const isSynonym =
      topicSynonyms[availableTopic]?.includes(normalizedTopic) ||
      Object.entries(topicSynonyms).some(
        ([key, synonyms]) =>
          key === normalizedTopic && synonyms.includes(availableTopic),
      );

    let score = distance;
    if (contains) score -= 10;
    if (isSynonym) score -= 15;

    return {
      topic: availableTopic,
      score,
      contains,
      isSynonym,
    };
  });

  topicScores.sort((a, b) => a.score - b.score);

  const reasonableMatches = topicScores.filter(
    (item) =>
      item.contains ||
      item.isSynonym ||
      item.score <= Math.max(3, Math.floor(normalizedTopic.length * 0.5)),
  );

  return reasonableMatches.slice(0, maxSuggestions).map((item) => item.topic);
};

// Get available topics
export const getAvailableTopics = (): string[] => {
  return availableTopics;
};

// Main function to get quotes (simplified, local only for now)
export const getQuotes = async (
  topic: string,
  count: number = 3,
): Promise<Quote[]> => {
  const normalizedTopic = topic.toLowerCase().trim();

  // Try exact match first
  let topicQuotes = quotesData[normalizedTopic];

  if (!topicQuotes) {
    // Try fuzzy matching
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

// Main function with fallback
export const findQuotesWithFallback = async (
  topic: string,
  count: number = 3,
): Promise<{
  quotes: Quote[];
  suggestions: string[];
  matchedTopic?: string;
}> => {
  const normalizedTopic = topic.toLowerCase().trim();

  try {
    const quotes = await getQuotes(topic, count);

    if (quotes.length > 0) {
      const matchedTopic = quotesData[normalizedTopic]
        ? normalizedTopic
        : findBestTopicMatch(normalizedTopic);
      return {
        quotes,
        suggestions: [],
        matchedTopic: matchedTopic || normalizedTopic,
      };
    }

    const suggestions = getSuggestedTopics(topic);
    return { quotes: [], suggestions };
  } catch (error) {
    console.error("Error in findQuotesWithFallback:", error);
    const suggestions = getSuggestedTopics(topic);
    return { quotes: [], suggestions };
  }
};
