export interface ChartDataPoint {
  date: string;
  queries: number;
  tokens: number;
  cost: number;
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'Owner' | 'Admin' | 'Member' | 'Viewer';
  status: 'Active' | 'Invited' | 'Inactive';
  joinedDate: string;
  lastActive: string;
  usage: number;
}

export interface Invoice {
  id: string;
  number: string;
  date: string;
  description: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Failed';
}

export interface Notification {
  id: string;
  type: 'research' | 'billing' | 'team' | 'alert' | 'system' | 'error';
  title: string;
  description: string;
  timestamp: string;
  read: boolean;
  icon?: string;
}

export interface ResearchResult {
  id: string;
  sourceType: 'Web' | 'Academic' | 'Internal';
  title: string;
  summary: string;
  confidence: number;
  timestamp: string;
}

export interface APIKey {
  id: string;
  name: string;
  key: string;
  created: string;
  lastUsed: string;
  permissions: string[];
}

export interface StatsCard {
  title: string;
  value: string | number;
  change: number;
  icon: string;
  trend: 'up' | 'down';
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  company?: string;
  jobTitle?: string;
  timezone?: string;
  language?: string;
  plan: 'Starter' | 'Pro' | 'Enterprise';
  role: 'Owner' | 'Admin' | 'Member';
}
