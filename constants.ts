
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
        label: "Built For Scale",
        value: "15+ Years Building Fortune 500 Systems"
    },
    {
        icon: Award,
        label: "Proven Results",
        value: "Operations Scaled 6x Without Headcount"
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
    CTA_SUBTEXT: "See the real cost of what's invisible right now: quotes sitting in inboxes, customers waiting for responses, hours burned chasing what should be automatic"
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
  INTRO_PARAGRAPH: "Every industrial business loses money to slow quoting, delayed replies and buried workloads. This audit shows where your biggest leaks are, what they're costing, and the fastest wins available.",
  INTRO_REASSURANCE: "Under 90 seconds. No jargon.",
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
          label: "How many quote requests (RFQs) do you receive per day?",
          type: "select",
          required: true,
          options: [
            { value: "", label: "Select average daily volume..." },
            { value: "0-5", label: "0-5 per day" },
            { value: "5-10", label: "5-10 per day" },
            { value: "10-20", label: "10-20 per day" },
            { value: "20-30", label: "20-30 per day" },
            { value: "30-50", label: "30-50 per day" },
            { value: "50-75", label: "50-75 per day" },
            { value: "75-100", label: "75-100 per day" },
            { value: "100+", label: "100+ per day" }
          ]
        },
        {
          id: "quote_turnaround",
          label: "How long does it typically take you to send a quote after receiving an RFQ?",
          type: "select",
          required: true,
          options: [
            { value: "", label: "Select typical turnaround time..." },
            { value: "<30min", label: "Under 30 minutes" },
            { value: "30min-1hr", label: "30 minutes to 1 hour" },
            { value: "1-2hrs", label: "1-2 hours" },
            { value: "2-4hrs", label: "2-4 hours" },
            { value: "4-8hrs", label: "4-8 hours (same day)" },
            { value: "8-24hrs", label: "8-24 hours (next day)" },
            { value: "1-2days", label: "1-2 business days" },
            { value: "2-3days", label: "2-3 business days" },
            { value: "3-5days", label: "3-5 business days" },
            { value: "5+days", label: "Over 5 business days" }
          ]
        },
        {
          id: "response_speed",
          label: "How quickly do you typically respond to new customer enquiries (first reply)?",
          type: "select",
          required: true,
          options: [
            { value: "", label: "Select typical first response time..." },
            { value: "<1min", label: "Under 1 minute (instant)" },
            { value: "1-5min", label: "1-5 minutes" },
            { value: "5-15min", label: "5-15 minutes" },
            { value: "15-30min", label: "15-30 minutes" },
            { value: "30min-1hr", label: "30 minutes to 1 hour" },
            { value: "1-2hrs", label: "1-2 hours" },
            { value: "2-4hrs", label: "2-4 hours" },
            { value: "4-8hrs", label: "4-8 hours (same day)" },
            { value: "same-day", label: "Same day (within 8 hours)" },
            { value: "next-day", label: "Next business day" },
            { value: "2+days", label: "2+ business days" }
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
          label: "How many customer emails does your team handle per day (total across all staff)?",
          type: "select",
          required: true,
          options: [
            { value: "", label: "Select daily email volume..." },
            { value: "0-10", label: "0-10 emails per day" },
            { value: "10-25", label: "10-25 emails per day" },
            { value: "25-50", label: "25-50 emails per day" },
            { value: "50-75", label: "50-75 emails per day" },
            { value: "75-100", label: "75-100 emails per day" },
            { value: "100-150", label: "100-150 emails per day" },
            { value: "150-200", label: "150-200 emails per day" },
            { value: "200-300", label: "200-300 emails per day" },
            { value: "300+", label: "Over 300 emails per day" }
          ]
        },
        {
          id: "chasing_frequency",
          label: "How often do customers chase you for updates, quotes or responses?",
          type: "select",
          required: true,
          options: [
            { value: "", label: "Select how often this happens..." },
            { value: "never", label: "Almost never - we're on top of it" },
            { value: "rarely", label: "Rarely - once or twice a week" },
            { value: "sometimes", label: "Sometimes - a few times per week" },
            { value: "often", label: "Often - multiple times per day" },
            { value: "constantly", label: "Constantly - it's a daily problem" }
          ]
        },
        {
          id: "staff_count",
          label: "How many people spend significant time on quoting, emails and customer admin?",
          type: "select",
          required: true,
          options: [
            { value: "", label: "Select number of staff..." },
            { value: "1", label: "Just 1 person" },
            { value: "2", label: "2 people" },
            { value: "3-5", label: "3-5 people" },
            { value: "6-10", label: "6-10 people" },
            { value: "11-15", label: "11-15 people" },
            { value: "15+", label: "Over 15 people" }
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
          label: "How much visibility do you have across quotes, orders and customer interactions?",
          type: "select",
          required: true,
          options: [
            { value: "", label: "Select current visibility level..." },
            { value: "full", label: "Full visibility - we track everything in real-time" },
            { value: "good", label: "Good - we can find most things when we need to" },
            { value: "partial", label: "Partial - some things slip through the cracks" },
            { value: "limited", label: "Limited - mostly in people's heads and spreadsheets" },
            { value: "none", label: "Almost none - constant firefighting and searching" }
          ]
        },
        {
          id: "main_bottleneck",
          label: "What is your biggest operational bottleneck right now?",
          type: "select",
          required: true,
          options: [
            { value: "", label: "Select your main bottleneck..." },
            { value: "quoting-speed", label: "Quote turnaround time is too slow" },
            { value: "response-time", label: "Responding to enquiries takes too long" },
            { value: "customer-comms", label: "Keeping customers updated and informed" },
            { value: "data-entry", label: "Manual data entry and admin work" },
            { value: "visibility", label: "Not knowing what's happening in real-time" },
            { value: "staff-capacity", label: "Team is overwhelmed with volume" },
            { value: "all", label: "All of the above - multiple issues" }
          ]
        },
        {
          id: "process_consistency",
          label: "How consistent are your processes across the team?",
          type: "select",
          required: true,
          options: [
            { value: "", label: "Select process consistency level..." },
            { value: "very-consistent", label: "Very consistent - everyone follows the same process" },
            { value: "mostly-consistent", label: "Mostly consistent - minor variations between people" },
            { value: "somewhat-consistent", label: "Somewhat consistent - depends on who handles it" },
            { value: "inconsistent", label: "Inconsistent - everyone has their own way" },
            { value: "chaotic", label: "Chaotic - no standard process at all" }
          ]
        },
        {
          id: "error_frequency",
          label: "How often do errors occur (wrong quotes, missed emails, incorrect data)?",
          type: "select",
          required: true,
          options: [
            { value: "", label: "Select how often errors happen..." },
            { value: "almost-never", label: "Almost never - very rare" },
            { value: "rare", label: "Rare - once or twice a month" },
            { value: "occasional", label: "Occasional - a few times per week" },
            { value: "frequent", label: "Frequent - multiple times per week" },
            { value: "daily", label: "Daily - happens every single day" }
          ]
        },
        {
          id: "average_order_value",
          label: "What is your typical order value? (optional but helps personalise your report)",
          helperText: "This helps us calculate your potential revenue recovery more accurately",
          type: "select",
          required: false,
          options: [
            { value: "", label: "Prefer not to say" },
            { value: "<250", label: "Under £250" },
            { value: "250-500", label: "£250 - £500" },
            { value: "500-1k", label: "£500 - £1,000" },
            { value: "1k-2k", label: "£1,000 - £2,000" },
            { value: "2k-5k", label: "£2,000 - £5,000" },
            { value: "5k-10k", label: "£5,000 - £10,000" },
            { value: "10k-25k", label: "£10,000 - £25,000" },
            { value: "25k-50k", label: "£25,000 - £50,000" },
            { value: "50k+", label: "Over £50,000" }
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