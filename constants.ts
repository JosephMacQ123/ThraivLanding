
import { ChartBar, Clock, Mail, MessageSquare, Shield, Users, Zap, CheckCircle, Activity, Box, Factory, Headset, FileText, Search, Settings, AlertOctagon, TrendingUp, Layers, LayoutDashboard, Brain, Cpu, FileWarning, RefreshCcw, Gauge, ArrowRight, BarChart, Smile, Coins, TrendingDown, Repeat, Database, Globe, AlertTriangle, Shuffle, Award, Briefcase } from 'lucide-react';

export const COLORS = {
  NAVY: '#0F1C3F',
  BLUE: '#2676FF',
  GREY: '#F6F7FB',
  WHITE: '#FFFFFF',
  RED_ALERT: '#EF4444',
  GREEN_SUCCESS: '#10B981',
};

export const TRUST_POINTS = [
    {
        icon: Shield,
        label: "Fortune 500 Systems",
        value: "$100M+ Operations"
    },
    {
        icon: TrendingUp,
        label: "Proven Growth",
        value: "27 Businesses • 2.4x Avg"
    },
    {
        icon: Award,
        label: "Best Result",
        value: "$1M to $6M (3 Years)"
    },
    {
        icon: Zap,
        label: "Response Speed",
        value: "Under 2 Minutes"
    },
    {
        icon: Briefcase,
        label: "Built For",
        value: "$1M-$50M Revenue"
    }
];

export const COPY = {
  HERO: {
    HEADLINE_BLUE: "Fast Operations Win",
    HEADLINE_REST: "The delays you think are normal are the ones costing you the most.",
    LINES: [
      "Every slow response is lost business to a faster competitor.",
      "Every manual task drains hours your team doesn't have.",
      "Every delay kills trust you'll never rebuild."
    ],
    INSIGHT_INTRO: "This isn't a people problem.",
    INSIGHT_MAIN: "It's a systems problem. And systems are what make your operations work, react, and solve problems faster than anyone else.",
    CTA: "Book Free Opportunity Audit",
    CTA_SUBTEXT: "15 minutes. Zero cost. See exactly where you're leaking revenue."
  },
  PAIN: {
    HEADLINE: "These Are The Delays:",
    SUBHEAD: "",
    CARDS: [
      { text: "Slow To Respond to Leads", color: "red", icon: Clock },
      { text: "Mountains of Admin", color: "orange", icon: FileText },
      { text: "Running Reports To Find Problems", color: "red", icon: ChartBar },
      { text: "Not Knowing Everything Instantly", color: "orange", icon: Search },
      { text: "The Same Old Questions Over and Over", color: "red", icon: RefreshCcw },
      { text: "Customers Chasing You for Answers", color: "orange", icon: Mail },
      { text: "Tasks Piling Up with No Visibility", color: "red", icon: Layers },
      { text: "Switching Between 6 Different Systems", color: "orange", icon: Shuffle },
      { text: "In the Chaos, Not Working On the Chaos", color: "red", icon: AlertTriangle },
      { text: "Firefighting Instead of Improving", color: "orange", icon: AlertTriangle },
      { text: "Quotes Delayed By Someone's Approval", color: "red", icon: FileText },
      { text: "Waiting For Missing Information", color: "orange", icon: Clock },
      { text: "Busy Work That Should Be Automatic", color: "red", icon: RefreshCcw },
      { text: "Updates Falling Through the Cracks", color: "orange", icon: AlertTriangle },
      { text: "No Single Source of Truth", color: "red", icon: Database },
      { text: "Chasing Internal Updates", color: "orange", icon: MessageSquare },
      { text: "Relying On Memory Instead of Systems", color: "red", icon: Users },
      { text: "Fixing Avoidable Mistakes", color: "orange", icon: AlertOctagon },
    ]
  },
  COST: {
    HEADLINE: "Manual Workflows to Instant Workflows",
    SUBHEAD: "Every workflow you automate multiplies across your entire business. More deals. Faster decisions. Problems avoided before they happen.",
    TIMELINE_OLD: [
      { label: "Unnoticed in Inbox", sub: "Sitting in queue", icon: Mail, delay: "Wait: +4h", barWidth: "20%" },
      { label: "Hunting Info", sub: "CRM + ERP Search", icon: Search, delay: "Active: +2h", barWidth: "15%" },
      { label: "Drafting & Approval", sub: "Waiting on sign-off", icon: FileText, delay: "Wait: +22h", barWidth: "65%" },
      { label: "Finally Sent", sub: "Risk of Churn", icon: Clock, delay: "Done", barWidth: "0%" }
    ],
    TIMELINE_NEW: [
      { label: "Enquiry Received", sub: "Captured", icon: Zap },
      { label: "AI Analyzes & Drafts", sub: "Instant Logic", icon: Brain },
      { label: "Outcome Delivered", sub: "Revenue Secured", icon: CheckCircle }
    ]
  },
  FRICTION: {
    HEADLINE: "This Is Operational Friction.",
    SUBHEAD: "It's the delay between something changing and your team reacting. Made of two hidden delays you've always thought were normal.",
    SECTION_TITLE: "The Two Delays Silently Slowing Your Business Down",
    DELAY_1: {
      TITLE: "DELAY #1: TIME TO NOTICE SOMETHING NEEDS DOING",
      SUBTITLE: "The delay no one measures. The biggest hidden drain.",
      DURATION: "4h 23m",
      PERCENTAGE: 40,
      COLOR: "#EF4444",
      EXAMPLES: [
        "Emails Sitting Unseen",
        "Data Changes With No Alert",
        "Customer Waiting For Answers",
        "Tasks Lost in Busy Inboxes",
        "Issues Raised But Not Spotted",
        "Critical Work Hidden in Noise"
      ]
    },
    DELAY_2: {
      TITLE: "DELAY #2: TIME TO ACTUALLY DO THE WORK",
      SUBTITLE: "The delay everyone feels. But assumes is unavoidable.",
      DURATION: "18h 45m",
      PERCENTAGE: 85,
      COLOR: "#DC2626",
      EXAMPLES: [
        "Chasing Someone For Information",
        "Manual Admin To Build Quotes, Reports & Updates",
        "Copy-Pasting Between Systems",
        "Rewriting the Same Emails Again",
        "Searching For Missing Details",
        "Switching Between 6 to 10 Tools To Finish One Task"
      ]
    },
    CLOSING: "These two delays stack. And that stack is operational friction. It silently kills your speed, drains your team, and loses the revenue you should already have. Fixing it is the biggest opportunity in your business.",
    YOUTUBE_URL: "https://www.youtube.com/@Joseph.Thraiv"
  },
  DREAM: {
    HEADLINE: "Picture This: No More Firefighting.",
    SUBHEAD: "Your inbox isn't a hellscape. Your team isn't buried in spreadsheets. Your customers aren't waiting. You're finally building the business you dreamed of because your systems work like a team of 10, not a todo list."
  },
  AHA: {
    HEADLINE: "Work Like People. Scale Like Software.",
    SUBHEAD: "Your operations run automatically. Fast, consistent, always improving."
  },
  HOW_IT_WORKS: [
    {
      title: "Watches Everything",
      desc: "Every lead, enquiry, RFQ, update, and data change is captured instantly. The moment something changes in your systems, it sees it. Nothing missed.",
      example: "Signal Captured",
      icon: Search,
      phase: "Input"
    },
    {
      title: "Understands What Matters",
      desc: "The system reads messages, analyzes data changes, identifies what matters, and decides the next step. Smart logic applied instantly.",
      example: "Priority Detected",
      icon: Settings,
      phase: "Intelligence"
    },
    {
      title: "Takes Action Instantly",
      desc: "Replies sent. Quotes drafted. Updates pushed. Alerts triggered. All automatically the moment something needs doing.",
      example: "Action Triggered",
      icon: Zap,
      phase: "Execution"
    },
    {
      title: "Surfaces Insights",
      desc: "Data changes highlighted instantly. Delays and bottlenecks surfaced before they become problems. You always know what is happening.",
      example: "Alert Sent",
      icon: AlertOctagon,
      phase: "Visibility"
    },
    {
      title: "Improves Speed",
      desc: "Your team gains breathing room. Your business gets faster every week. Problems prevented before they start.",
      example: "Speed Up 42%",
      icon: TrendingUp,
      phase: "Growth"
    },
    {
      title: "Scales Infinitely",
      desc: "Handle 10x the volume without hiring a single new admin staff member. Growth without the growing pains.",
      example: "Volume 10x",
      icon: Gauge,
      phase: "Scale"
    }
  ],
  OUTCOMES: [
    {
      title: "Your Data Watched Constantly",
      desc: "The moment things change, the system acts. Alerts sent instantly. Reports generated automatically. Problems surfaced before they become fires. You always know what is happening without checking.",
      icon: Activity,
      stat: "Real-Time Intelligence",
    },
    {
      title: "Scale Without Headcount",
      desc: "Handle 2x, 5x, or 10x the volume without hiring more people or adding stress. Growth without growing pains.",
      icon: TrendingUp,
      stat: "Infinite Scale",
    },
    {
      title: "Team Focused On Growth",
      desc: "Admin handled by systems. Your people spend time on strategy, sales, and improvement. Not firefighting.",
      icon: Users,
      stat: "Zero Admin Chaos",
    },
    {
      title: "Quotes Made For You",
      desc: "RFQs analyzed, quotes drafted, customers responded to. All automatically while you focus on winning deals.",
      icon: FileText,
      stat: "Admin Done Automatically",
    },
    {
      title: "Emails Read & Responded To",
      desc: "Every customer message acknowledged instantly. Updates sent proactively. No chasing required.",
      icon: Mail,
      stat: "24/7 Response System",
    },
    {
      title: "Insights Delivered Automatically",
      desc: "See what is working, what is stuck, and what to fix next. No manual analysis. No waiting for reports.",
      icon: BarChart,
      stat: "Always Up To Date",
    }
  ]
};

export const IMPACT_METRICS = [
    {
        label: "Admin Load",
        was: "20h / week",
        now: "0h",
        icon: TrendingDown,
        color: "green", // Good result (reduction)
        change: "-100%",
        trend: [100, 90, 80, 60, 40, 20, 10, 5, 0] // Downward trend
    },
    {
        label: "Win Rate",
        was: "18% Avg",
        now: "42%",
        icon: TrendingUp,
        color: "blue", // Good result (increase)
        change: "+2.3x",
        trend: [18, 20, 22, 28, 32, 35, 38, 40, 42] // Upward trend
    },
    {
        label: "Customer Sat",
        was: "3.2 Stars",
        now: "4.9",
        icon: Smile,
        color: "purple", // Good result (increase)
        change: "+53%",
        trend: [3.2, 3.4, 3.8, 4.0, 4.3, 4.6, 4.8, 4.9] // Upward trend
    },
    {
        label: "Lifetime Value",
        was: "1.0x",
        now: "2.4x",
        icon: Coins,
        color: "yellow", // Good result (increase)
        change: "+140%",
        trend: [1.0, 1.2, 1.3, 1.6, 1.8, 2.0, 2.2, 2.4] // Upward trend
    }
];

export const STORY_SECTIONS = {
  PROBLEM: [
    { text: "Busy Email Inboxes", icon: Mail, detail: "Buried leads & lost requests." },
    { text: "Building Manual Quotes", icon: FileText, detail: "Hours of admin every day." },
    { text: "Analysing Reports", icon: ChartBar, detail: "Slow data means slow decisions." },
    { text: "Repetitive Questions", icon: RefreshCcw, detail: "Answering the same thing 50x." },
  ],
  SOLUTION: [
    { text: "Customers Trust Speed", icon: Zap, detail: "First to respond wins the trust." },
    { text: "Fast Teams Win", icon: CheckCircle, detail: "Capture revenue before they quote." },
    { text: "Breathing Room", icon: Users, detail: "Focus on high-value work, not admin." },
    { text: "Instant Admin", icon: Brain, detail: "Zero manual entry. Zero delay." }
  ]
};

export const STORY_CARDS = [
  { id: '1', text: "Slow replies leak margin.", highlight: false },
  { id: '2', text: "Delays you don’t see cost the most.", highlight: false },
  { id: '3', text: "Firefighting kills growth.", highlight: true },
  { id: '4', text: "Customers trust speed.", highlight: true },
  { id: '5', text: "Fast teams win the deal.", highlight: false },
  { id: '6', text: "Your team gets breathing room.", highlight: true }
];

export const INDUSTRIES = [
  { 
    icon: Box, 
    label: "Distributors & Wholesalers", 
    desc: "High enquiry & RFQ volume. Fast responses win deals. Slow responses lose them.",
    outcome: "Become the supplier customers love. Because you always capture the lead, reply first, and get quotes out in minutes."
  },
  { 
    icon: Factory, 
    label: "Manufacturers & Industrial", 
    desc: "Production delays + manual updates slow everything down. Customers chase. Everything backs up.",
    outcome: "Customers always know what's happening. With automatic updates, instant RFQ acknowledgements, and quote-ready drafts."
  },
  {
    icon: Headset,
    label: "Service Businesses",
    desc: "Inbound leads need instant replies. Speed wins. Slow responses lose deals to faster competitors.",
    outcome: "Every lead captured. Every enquiry answered instantly. Speed optimised so you always reply first and win more business."
  },
  {
    icon: FileText,
    label: "Teams That Send Quotes",
    desc: "If quoting speed matters in your business, Thraiv will transform you.",
    outcome: "RFQs get instant acknowledgement. Quote-ready drafts in minutes. You win more deals without hiring more people."
  }
];

export const AUDIT_POINTS = [
  "Diagnose exactly where you're leaking revenue",
  "Map your hidden bottlenecks killing win rate",
  "Get your custom roadmap to 10x faster operations"
];

export const YOUTUBE_CHANNEL = {
  URL: "YOUR_YOUTUBE_CHANNEL_URL_HERE", // Replace with actual URL
  LABEL: "Watch How It Works",
  ICON: "Youtube"
};

export const FINAL_CTA = {
  HEADLINE: "Find Out How Much Slow Operations Cost You Last Month.",
  SUBHEAD: "In 15 minutes, we'll show you exactly where you're bleeding money, the bottlenecks killing your win rate, and your custom roadmap to 10x faster operations.",
  GUARANTEE: "Zero pressure. Zero cost. Just insights you can use immediately, even if you never work with us."
};

export const FAQ_ITEMS = [
  {
    question: "Will this work for my business?",
    answer: "If you want to remove delays, automate repetitive work, and stay ahead of what is now possible with AI systems, it will work.\n\nWe help teams speed up quotes, reduce manual admin, prevent missed updates, and bring clarity to information that is currently scattered.\n\nWe also help you uncover the opportunities you are not acting on yet. The ideas you wish you had time for. The systems that would give you an advantage if they existed. The competitive edge you could build now that AI can do more than most people realise.\n\nIf you want to move faster and build a smarter business, you are in the right place."
  },
  {
    question: "How long does implementation take?",
    answer: "If you want a specific problem solved, we can have something live in two to four weeks.\n\nIf you want a full AI enabled operating system, we will map everything with you and build it out step by step. Bigger transformations usually take a few months depending on scope.\n\nEither way, you see improvements quickly while we build the larger system behind it."
  },
  {
    question: "What if it does not work for us?",
    answer: "We only build systems that solve real problems.\n\nThat is why everything starts with an opportunity audit. We walk through your operations, show you where the biggest gains are, and highlight opportunities you may be missing.\n\nIf there is no meaningful value to create, we do not work together. If there is, we tailor the system around your goals and your way of working.\n\nYou get clarity before any commitment."
  },
  {
    question: "How much does this cost?",
    answer: "It depends on the size of your team and the level of automation or transformation you want.\n\nSome clients only need a few high impact systems. Others want to build an AI powered operating system that creates lasting competitive advantage.\n\nThe audit will show you what you could improve, what it is currently costing you, and what the ROI looks like. From there you choose the level of investment that makes sense."
  }
];

export const URGENCY = {
  HEADLINE: "This Is A Race. You Can Still Win.",
  SUBHEAD: "Every competitor who moves faster is taking market share. But speed isn't magic. It's systems. And you can install systems starting today.",
  POINTS: [
    "First to respond wins 73% of deals. Be first.",
    "Faster teams win while others are still drafting. Be faster.",
    "The gap widens every day. Start closing it today."
  ],
  CTA_TEXT: "Don't just watch the race. Win it."
};