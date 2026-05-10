import { useState } from 'react';
import { Send, Search } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';
import { researchResults } from '../data/mockData';

export default function Research() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web Search', 'Academic', 'Internal Docs', 'Custom'];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold font-display text-[--text-primary]">
          Research Assistant
        </h1>
        <p className="text-[--text-muted] mt-2">
          Ask anything to our AI research assistant.
        </p>
      </div>

      {/* Main Search */}
      <Card className="p-6">
        <div className="space-y-4">
          <div className="relative">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Ask anything... (e.g., 'Summarize recent papers on LLMs')"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="input-base w-full pr-10"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-[--text-muted]" size={20} />
              </div>
              <Button className="px-6">
                <Send size={20} className="mr-2" />
                Submit
              </Button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-2 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-[--primary] text-white'
                    : 'bg-[--surface-secondary] text-[--text-primary] hover:bg-[--surface]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </Card>

      {/* Results */}
      <div className="grid grid-cols-1 gap-4">
        {researchResults.map((result) => (
          <Card key={result.id} hover className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="primary">{result.sourceType}</Badge>
                  <span className="text-xs text-[--text-muted]">
                    {result.timestamp}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-[--text-primary] mb-2">
                  {result.title}
                </h3>

                <p className="text-sm text-[--text-muted] mb-4 line-clamp-3">
                  {result.summary}
                </p>

                {/* Confidence Score */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[--text-muted]">
                      Confidence Score
                    </span>
                    <span className="text-sm font-medium text-[--text-primary]">
                      {Math.round(result.confidence * 100)}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-[--surface-secondary] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[--primary]"
                      style={{ width: `${result.confidence * 100}%` }}
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="secondary" size="sm">
                    View Full
                  </Button>
                  <Button variant="ghost" size="sm">
                    Save
                  </Button>
                  <Button variant="ghost" size="sm">
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Research History Sidebar - for desktop */}
      <div className="hidden lg:block fixed right-6 top-24 w-64">
        <Card>
          <div className="p-4">
            <h3 className="font-semibold text-[--text-primary] mb-4">
              Research History
            </h3>
            <div className="space-y-2">
              {[
                'Latest papers on transformers',
                'LLM optimization techniques',
                'AI adoption in 2024',
                'Enterprise AI trends',
              ].map((item, idx) => (
                <button
                  key={idx}
                  className="w-full text-left p-2 rounded hover:bg-[--surface-secondary] transition-colors"
                >
                  <p className="text-xs text-[--text-muted] line-clamp-2">
                    {item}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
