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
};

// Semantic relationships between topics (related concepts)
const semanticRelationships: { [key: string]: string[] } = {
  love: ["happiness", "life", "wisdom"],
  life: ["wisdom", "happiness", "inspirational"],
  success: ["motivational", "inspirational", "wisdom", "courage"],
  motivational: ["success", "inspirational", "courage", "wisdom"],
  inspirational: ["motivational", "wisdom", "life", "happiness"],
  happiness: ["love", "life", "inspirational", "wisdom"],
  wisdom: ["life", "inspirational", "success", "courage"],
  courage: ["success", "motivational", "inspirational", "wisdom"],
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
