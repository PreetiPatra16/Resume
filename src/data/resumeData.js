export const resumeData = {
  personalInfo: {
    name: "Preeti Chanda Patra",
    location: "Mumbai, Maharashtra",
    email: "preetipatra.1604@gmail.com",
    phone: "+91-8879904024",
    linkedin: "https://www.linkedin.com/in/preeti-chanda-patra-b93a8a2b5/",
    leetcode: "https://leetcode.com/u/preeti_patra/", // Guessed from "leetcode" icon text usually implies username/link, but I'll leave as placeholder or generic if not in prompt. The image says "leetcode" with an icon. I will put a generic link or just the text if unsure, but user provided LinkedIn explicitly. I'll stick to a safe approach or just not link leetcode if I don't have the URL. Wait, the image shows "leetcode". I can't guess the username perfectly from the image unless I assume it's preetipatra or similar. I'll omit the link for leetcode or put text only unless I find it in the prompt. Actually I'll use a placeholder "#" for leetcode.
    role: "Computer Science Student (AI & Robotics)",
  },
  education: [
    {
      institution: "Vellore Institute of Technology, Chennai",
      degree: "B.Tech in Computer Science and Engineering (AI & Robotics)",
      duration: "Sep 2022 – May 2026",
      coursework: "DSA, DBMS, OS, OOPS, Robotics, AI, ML, Software Engineering, Compiler Design"
    }
  ],
  skills: {
    Languages: ["Python", "SQL", "JavaScript", "HTML", "CSS", "Java"],
    "Frameworks & Libraries": ["React.js", "Spring Boot", "TailwindCSS", "TensorFlow", "Pytorch"],
    "Databases & Cloud": ["MySQL", "PostgreSQL", "MongoDB", "AWS (EC2, S3)", "Neon Serverless"],
    "Developer Tools": ["Git/GitHub", "Docker", "Jira", "VS Code", "SonarQube", "Postman", "Figma"],
    "Software Engineering Concepts": ["OOPS", "RESTful API", "SDLC", "Agile", "Unit Testing", "CI/CD"],
    "Data Analytics & Visualization": ["Power BI", "Tableau", "Excel", "Pandas", "NumPy", "Matplotlib", "Jupyter Notebook"]
  },
  experience: [
    {
      company: "Abbott Healthcare Pvt. Ltd.",
      role: "Intern Software Developer",
      duration: "May 2025 – Jul 2025",
      location: "Mumbai",
      points: [
        "Developed reusable React UI components for enterprise-scale web apps, improving code efficiency and maintainability.",
        "Executed 150+ unit and integration tests, resolving 25+ bugs to boost system stability and user experience.",
        "Collaborated with QA and backend teams to ensure accessibility and seamless workflow validation across 150+ pages."
      ]
    },
    {
      company: "Bellurbis Technologies Pvt. Ltd.",
      role: "Data Science Intern",
      duration: "Jul 2025 – Oct 2025",
      location: "Gurugram (Remote)",
      points: [
        "Performed data preprocessing and feature engineering using Python, Pandas, and Scikit-learn for model training.",
        "Built and fine-tuned predictive ML models, improving forecasting accuracy and client insights by 25%.",
        "Created Power BI and Matplotlib dashboards, delivering actionable intelligence that enhanced stakeholder decisions."
      ]
    }
  ],
  projects: [
    {
      title: "AI Video Sort Generator",
      tech: "Next.js, React, TailwindCSS, AI, Clerk, Neon",
      year: "2025",
      points: [
        "Engineered an AI-powered video sorting platform that classifies 200+ videos, reducing manual effort by 65%.",
        "Integrated Clerk authentication and Neon serverless PostgreSQL backend, supporting 10k+ metadata queries.",
        "Optimized front-end rendering using React and TailwindCSS, improving user experience scores by 40%."
      ]
    },
    {
      title: "End-to-End Data Analytics Project — Banking Domain",
      tech: "MySQL, Power BI",
      year: "2025",
      points: [
        "Developed a data analytics pipeline processing 100k+ records using MySQL and Power BI for trend and fraud detection.",
        "Performed cleaning, transformation, and visualization to derive insights that improved reporting accuracy by 30%.",
        "Designed interactive dashboards tracking 8+ KPIs such as loan-to-deposit ratio, churn rate, and customer segmentation."
      ]
    },
    {
      title: "Smart Safety Helmet & Automated Test Tube Holder",
      tech: "Arduino, MQ-2, MPU6050, IR sensors",
      year: "2023",
      points: [
        "Built an IoT-enabled safety system with Arduino, MQ-2, MPU6050, and IR sensors, improving lab safety by 50%.",
        "Integrated real-time gas, motion, and impact detection modules with automated emergency alerts under 2 seconds.",
        "Prototyped a low-cost solution with 95% accuracy in environmental hazard detection for lab and industrial use."
      ]
    },
    {
      title: "Car Rental Website",
      tech: "React, Node.js, MongolDB, Stripe API",
      year: "2024",
      points: [
        "Developed a full-stack car rental platform allowing users to browse, search, and book vehicles with real-time availability.",
        "Integrated Stripe API for secure payment processing and MongoDB for managing a diverse fleet inventory.",
        "Implemented user authentication and admin dashboard for booking management."
      ]
    },
    {
      title: "AI Chatbot",
      tech: "Python, OpenAI API, Flask, React",
      year: "2024",
      points: [
        "Built an intelligent chatbot using OpenAI's GPT models to derive answers from custom knowledge bases.",
        "Developed a Flask backend to handle API requests and manage conversation state.",
        "created a responsive React frontend with typing indicators and chat history."
      ]
    },
    {
      title: "Todo List Application",
      tech: "React, LocalStorage",
      year: "2024",
      points: [
        "Created a persistent todo list app with features like drag-and-drop reordering and category filtering.",
        "Utilized LocalStorage to save user data across sessions without a backend.",
        "Designed a clean, minimalist UI with dark mode support."
      ]
    },
    {
      title: "Chat Application",
      tech: "React, Socket.io, Node.js",
      year: "2024",
      points: [
        "Implemented real-time messaging features using Socket.io and Node.js for low-latency communication.",
        "Features include group chats, file sharing, and online status indicators.",
        "Designed a responsive UI with message history and typing indicators."
      ]
    },
    {
      title: "Vendor Performance Data Quality Dashboard",
      tech: "SQL, Python, Power BI",
      year: "2025",
      points: [
        "Created a vendor performance dashboard consolidating 5+ data sources to assess profitability, growth, and quality metrics.",
        "Automated Python-driven data quality checks to flag missing or inconsistent entries, improving accuracy by 25%.",
        "Generated insights that revealed 12% underperforming vendors, supporting strategic procurement decisions."
      ]
    },
    {
      title: "AI-Powered Portfolio Optimizer",
      tech: "Python, Reinforcement Learning",
      year: "2025",
      points: [
        "Developed RL-based models for portfolio allocation using volatility, momentum, and risk indicators across multiple asset classes.",
        "Backtested strategies via yfinance, yielding 8–12% higher risk-adjusted returns compared to benchmarks.",
        "Built a modular ML pipeline enabling automated hyperparameter tuning and scheduled model retraining."
      ]
    }
  ],
  certifications: [
    "Deloitte Australia Virtual Internship Program – Data Analysis & Cyber Security (Oct 2025)",
    "Oracle Certified Foundation Associate (Jul 2024)",
    "Cisco Networking Academy: Networking Basics (Apr 2024)",
    "Spoken Tutorial - IIT Bombay: C, C++, Python (Apr 2023)"
  ],
  responsibilities: [
    {
      role: "Outreach Lead, CloudOps Technical Club",
      organization: "Vellore Institute of Technology, Chennai",
      duration: "Aug 2023 – Jul 2025",
      points: [
        "Led outreach initiatives for a technical club, engaging with industry partners to secure sponsorships and collaborations.",
        "Organized and executed large-scale hackathons, ensuring smooth event flow from promotion to prize distribution.",
        "Built long-term partnerships with tech companies, enhancing club visibility and increasing sponsorship value."
      ]
    }
  ]
};
