"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  findQuotesWithFallback,
  getAvailableTopics,
  Quote,
} from "@/data/quotes";
import {
  Search,
  Sparkles,
  Quote as QuoteIcon,
  RefreshCw,
  Tag,
} from "lucide-react";

export default function Home() {
  const [topic, setTopic] = useState("");
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [matchedTopic, setMatchedTopic] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const availableTopics = getAvailableTopics();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setIsLoading(true);

    // Simulate loading for better UX
    await new Promise((resolve) => setTimeout(resolve, 800));

    const result = findQuotesWithFallback(topic.trim(), 3);
    setQuotes(result.quotes);
    setSuggestions(result.suggestions);
    setMatchedTopic(result.matchedTopic || "");
    setHasSearched(true);
    setIsLoading(false);
  };

  const handleTopicSelect = (selectedTopic: string) => {
    setTopic(selectedTopic);
  };

  const regenerateQuotes = () => {
    if (!topic.trim()) return;

    setIsLoading(true);
    setTimeout(() => {
      const result = findQuotesWithFallback(topic.trim(), 3);
      setQuotes(result.quotes);
      setSuggestions(result.suggestions);
      setMatchedTopic(result.matchedTopic || "");
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 rounded-full bg-brand-gradient shadow-lg">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent mb-4">
            QuoteWise
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover inspiration through powerful quotes. Enter a topic and get
            three carefully selected motivational quotes to inspire your
            journey.
          </p>
        </div>

        {/* Search Form */}
        <Card className="max-w-2xl mx-auto mb-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl">Find Your Inspiration</CardTitle>
            <CardDescription>
              Enter a topic like &quot;success&quot;, &quot;courage&quot;, or
              &quot;motivation&quot;
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Enter a topic..."
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="pl-10 h-12 text-lg"
                />
              </div>
              <Button
                type="submit"
                disabled={!topic.trim() || isLoading}
                className="h-12 px-8 bg-brand-gradient hover:bg-brand-gradient-intense"
              >
                {isLoading ? (
                  <RefreshCw className="h-4 w-4 animate-spin" />
                ) : (
                  "Get Quotes"
                )}
              </Button>
            </form>

            {/* Search with Tags */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-3">
                Search with tags - Choose from all {availableTopics.length}{" "}
                available topics:
              </p>
              <div className="max-h-32 overflow-y-auto p-3 border rounded-lg bg-gray-50 dark:bg-gray-800/50">
                <div className="flex flex-wrap gap-2 justify-center">
                  {availableTopics.sort().map((availableTopic) => (
                    <button
                      key={availableTopic}
                      onClick={() => handleTopicSelect(availableTopic)}
                      className="px-3 py-1 text-sm bg-brand-100 hover:bg-brand-200 text-brand-700 rounded-full transition-colors capitalize"
                    >
                      {availableTopic}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        {hasSearched && (
          <div className="max-w-4xl mx-auto">
            {quotes.length > 0 ? (
              <>
                <div className="flex items-center justify-center gap-4 mb-8">
                  <h2 className="text-3xl font-bold text-center capitalize">
                    {matchedTopic &&
                    matchedTopic !== topic.toLowerCase().trim() ? (
                      <>
                        Quotes about &quot;{matchedTopic}&quot;{" "}
                        <span className="text-lg text-muted-foreground font-normal">
                          (searched for &quot;{topic}&quot;)
                        </span>
                      </>
                    ) : (
                      `Quotes about "${matchedTopic || topic}"`
                    )}
                  </h2>
                  <Button
                    onClick={regenerateQuotes}
                    variant="outline"
                    size="sm"
                    disabled={isLoading}
                    className="border-brand-200 hover:bg-brand-50"
                  >
                    <RefreshCw
                      className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`}
                    />
                    New Quotes
                  </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
                  {quotes.map((quote, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm dark:bg-gray-900/90 hover:scale-105"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3">
                          <QuoteIcon className="h-6 w-6 text-brand-500 mt-1 flex-shrink-0" />
                          <div className="space-y-4">
                            <blockquote className="text-lg leading-relaxed font-medium text-foreground">
                              &quot;{quote.text}&quot;
                            </blockquote>
                            <footer>
                              <cite className="text-brand-600 font-semibold not-italic">
                                — {quote.author}
                              </cite>
                            </footer>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            ) : (
              <Card className="max-w-2xl mx-auto text-center border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
                <CardContent className="p-8">
                  <div className="p-4 rounded-full bg-orange-100 dark:bg-orange-900/20 w-fit mx-auto mb-4">
                    <Tag className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    No exact match found for &quot;{topic}&quot;
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Try these suggested topics that might interest you:
                  </p>

                  {/* Suggested Topics */}
                  {suggestions.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-muted-foreground mb-3 flex items-center justify-center gap-2">
                        <Sparkles className="h-4 w-4" />
                        Suggested for you
                      </h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {suggestions.map((suggestion) => (
                          <Badge
                            key={suggestion}
                            variant="outline"
                            className="cursor-pointer px-3 py-1 text-sm bg-brand-50 hover:bg-brand-100 text-brand-700 border-brand-200 hover:border-brand-300 transition-all hover:scale-105 capitalize"
                            onClick={() => handleTopicSelect(suggestion)}
                          >
                            {suggestion}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* All Available Tags */}
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-3">
                      Search with tags - Choose from all{" "}
                      {availableTopics.length} available topics:
                    </h4>
                    <div className="flex flex-wrap gap-2 justify-center max-h-40 overflow-y-auto p-2 border rounded-lg bg-gray-50 dark:bg-gray-800/50">
                      {availableTopics.sort().map((availableTopic) => (
                        <Badge
                          key={availableTopic}
                          variant="secondary"
                          className="cursor-pointer px-3 py-1 text-sm hover:bg-secondary/80 transition-colors capitalize"
                          onClick={() => handleTopicSelect(availableTopic)}
                        >
                          {availableTopic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Loading Animation */}
        {isLoading && hasSearched && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold capitalize">
                Finding quotes about &quot;{topic}&quot;...
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card
                  key={i}
                  className="border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-900/80"
                >
                  <CardContent className="p-6">
                    <div className="animate-pulse">
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4 w-3/4"></div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
