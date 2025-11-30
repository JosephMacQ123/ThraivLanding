
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
        icon: Award,
        label: "Best Result",
        value: "$1M to $6M (3 Years)"
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
    CTA: "Find My Revenue Leaks",
    CTA_SUBTEXT: "Find out how much profit is being lost through slow responses, chasing and everyday operational delays"
  },
  PAIN: {
    HEADLINE: "These Are The Delays:",
    SUBHEAD: "",
    CARDS: [
      { text: "Buried in Email Chaos", color: "red", icon: Mail },
      { text: "RFQs Sitting Unnoticed", color: "orange", icon: FileText },
      { text: "Slow To Respond to Leads", color: "red", icon: Clock },
      { text: "Forgetting To Reply To Customers", color: "orange", icon: MessageSquare },
      { text: "Customers Chasing You for Answers", color: "red", icon: Mail },
      { text: "Mountains of Admin", color: "orange", icon: FileText },
      { text: "Switching Between 6 Different Systems", color: "red", icon: Shuffle },
      { text: "Tasks Piling Up with No Visibility", color: "orange", icon: Layers },
      { text: "No Single Source of Truth", color: "red", icon: Database },
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
        "Customer Waiting For Answers",
        "Tasks Lost in Busy Inboxes",
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
        "Manual Admin To Build Quotes, Reports & Updates",
        "Copy-Pasting Between Systems",
        "Rewriting the Same Emails Again",
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
      title: "Scales Infinitely",
      desc: "Handle 10x the volume without hiring more people. Your team gains breathing room. Growth without the growing pains.",
      example: "No Limits",
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
  HEADLINE: "The Opportunity Is Now",
  SUBHEAD: "Speed isn't magic. It's systems. And systems can be installed starting today. The businesses winning right now aren't special. They just moved first.",
  POINTS: [
    "Fast response times win more deals. Be the one who responds first.",
    "Your team can handle 10x the volume without burning out.",
    "Every workflow you automate creates compound returns across your business."
  ],
  CTA_TEXT: "Start building your advantage today."
};

export const REVENUE_LEAK_AUDIT = {
  TITLE: "Find My Revenue Leaks",
  INTRO_HEADLINE: "Get Your Free Revenue Leak Report",
  INTRO_PARAGRAPH: "Every industrial business loses money to slow quoting, delayed replies, constant chasing and buried workloads. This audit highlights where your biggest revenue leaks are and what those delays are costing you. It also shows the fastest wins available based on how your operation runs today.",
  INTRO_REASSURANCE: "Takes under 90 seconds. Clear and simple. No jargon. Built for busy operations teams.",
  TRUST_LINE: "Trusted by UK industrial operations teams handling 500+ enquiries monthly",

  STEPS: [
    {
      number: 1,
      title: "Quote & Enquiry Speed",
      intro: "Slow responses hand business to faster competitors. Slow quoting leaks margin and kills confidence.",
      estimatedTime: 20,
      fields: [
        {
          id: "rfqs_per_day",
          label: "RFQs per day",
          type: "select",
          required: true,
          options: [
            { value: "", label: "Select..." },
            { value: "1-10", label: "1-10" },
            { value: "10-30", label: "10-30" },
            { value: "30-50", label: "30-50" },
            { value: "50-100", label: "50-100" },
            { value: "100+", label: "100+" }
          ]
        },
        {
          id: "quote_turnaround",
          label: "Typical quote turnaround time",
          type: "select",
          required: true,
          options: [
            { value: "", label: "Select..." },
            { value: "<4hrs", label: "Less than 4 hours" },
            { value: "4-8hrs", label: "4-8 hours" },
            { value: "8-24hrs", label: "8-24 hours (same day)" },
            { value: "1-3days", label: "1-3 days" },
            { value: "3+days", label: "3+ days" }
          ]
        },
        {
          id: "response_speed",
          label: "Response speed to new enquiries",
          type: "select",
          required: true,
          options: [
            { value: "", label: "Select..." },
            { value: "<1hr", label: "Under 1 hour" },
            { value: "1-4hrs", label: "1-4 hours" },
            { value: "4-8hrs", label: "4-8 hours" },
            { value: "same-day", label: "Same day" },
            { value: "next-day", label: "Next day or longer" }
          ]
        }
      ]
    },
    {
      number: 2,
      title: "Workload & Pressure Points",
      intro: "High inbox volume and constant chasing drag your team away from the work that matters and create hidden labour costs.",
      estimatedTime: 15,
      fields: [
        {
          id: "email_volume",
          label: "Customer email volume per day",
          type: "select",
          required: true,
          options: [
            { value: "", label: "Select..." },
            { value: "1-20", label: "1-20" },
            { value: "20-50", label: "20-50" },
            { value: "50-100", label: "50-100" },
            { value: "100-200", label: "100-200" },
            { value: "200+", label: "200+" }
          ]
        },
        {
          id: "chasing_frequency",
          label: "How often do customers chase you",
          type: "select",
          required: true,
          options: [
            { value: "", label: "Select..." },
            { value: "rarely", label: "Rarely" },
            { value: "sometimes", label: "Sometimes" },
            { value: "often", label: "Often" },
            { value: "constantly", label: "Constantly" }
          ]
        },
        {
          id: "staff_count",
          label: "Staff involved in admin and communication",
          type: "select",
          required: true,
          options: [
            { value: "", label: "Select..." },
            { value: "1-2", label: "1-2 people" },
            { value: "3-5", label: "3-5 people" },
            { value: "6-10", label: "6-10 people" },
            { value: "10+", label: "10+ people" }
          ]
        }
      ]
    },
    {
      number: 3,
      title: "Operational Reality Check",
      intro: "Inconsistent processes, hidden bottlenecks and lack of visibility make it impossible to scale without more people and more pressure.",
      estimatedTime: 10,
      fields: [
        {
          id: "visibility_level",
          label: "How much visibility do you have",
          type: "select",
          required: true,
          options: [
            { value: "", label: "Select..." },
            { value: "full", label: "Full visibility - we track everything" },
            { value: "partial", label: "Partial - some gaps" },
            { value: "limited", label: "Limited - mostly in people's heads" },
            { value: "none", label: "Almost none - constant firefighting" }
          ]
        },
        {
          id: "main_bottleneck",
          label: "Main bottleneck",
          type: "select",
          required: true,
          options: [
            { value: "", label: "Select..." },
            { value: "quoting", label: "Quoting speed" },
            { value: "comms", label: "Customer communication" },
            { value: "data-entry", label: "Data entry and admin" },
            { value: "visibility", label: "Lack of visibility" },
            { value: "all", label: "All of the above" }
          ]
        },
        {
          id: "process_consistency",
          label: "Process consistency",
          type: "select",
          required: true,
          options: [
            { value: "", label: "Select..." },
            { value: "very-consistent", label: "Very consistent" },
            { value: "mostly-consistent", label: "Mostly consistent" },
            { value: "inconsistent", label: "Inconsistent" },
            { value: "chaotic", label: "Chaotic - everyone does it differently" }
          ]
        },
        {
          id: "error_frequency",
          label: "Error frequency",
          type: "select",
          required: true,
          options: [
            { value: "", label: "Select..." },
            { value: "rare", label: "Rare" },
            { value: "occasional", label: "Occasional" },
            { value: "frequent", label: "Frequent" },
            { value: "constant", label: "Constant issue" }
          ]
        },
        {
          id: "average_order_value",
          label: "Average order value (optional)",
          helperText: "This helps personalise your revenue recovery estimate",
          type: "select",
          required: false,
          options: [
            { value: "", label: "Prefer not to say" },
            { value: "<500", label: "Under £500" },
            { value: "500-2k", label: "£500 - £2,000" },
            { value: "2k-5k", label: "£2,000 - £5,000" },
            { value: "5k-10k", label: "£5,000 - £10,000" },
            { value: "10k+", label: "£10,000+" }
          ]
        }
      ]
    }
  ],

  SUBMIT_BUTTON: "Generate My Report",
  SUBMIT_REASSURANCE: "Your personalised breakdown will arrive in your inbox shortly",

  CONFIRMATION: {
    HEADLINE: "Your Revenue Leak Report Is Being Built",
    BUILDING_MESSAGE: "Analysing your inputs and calculating revenue recovery opportunities...",
    YOUTUBE_SECTION: {
      HEADLINE: "While You Wait",
      SUBHEADLINE: "Watch how we fix these exact problems for UK industrial businesses",
      BUTTON_TEXT: "See Our Systems In Action"
    },
    LEAD_FORM: {
      HEADLINE: "Want To Discuss Your Results Right Away?",
      SUBHEADLINE: "Book a call to go through your report together",
      BUTTON_TEXT: "Send & Book Call"
    },
    NEXT_STEPS: {
      HEADLINE: "What Happens Next",
      STEPS: [
        {
          number: 1,
          title: "Your report arrives in 5 minutes",
          detail: "Check your inbox and spam folder"
        },
        {
          number: 2,
          title: "We review it and contact you shortly",
          detail: "Our team analyses your specific situation"
        },
        {
          number: 3,
          title: "We show you exactly how to fix what we found",
          detail: "Clear roadmap to recover lost revenue"
        }
      ]
    },
    TRUST_LINE: "Based on real industrial benchmarks and the answers you provided"
  }
};