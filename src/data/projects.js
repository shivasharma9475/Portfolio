
// ─────────────────────────────────────────────────────────
// PROJECTS — Featured Projects
// ─────────────────────────────────────────────────────────

export const projects = [
 {
  id: "proj-01",
  poster: "projects/inventory-pro.png",
  title: "Inventory Pro – Multi-Tenant Inventory Management System",
  category: "Full Stack Development",
  description:
    "A production-ready MERN stack inventory management system with multi-tenant architecture, JWT authentication, role-based access control, real-time inventory updates using Socket.IO, billing management, analytics dashboard, barcode scanning, image uploads, activity logs, export functionality, Stripe payments, and AI-powered inventory assistant.",
  stack: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Socket.IO",
    "JWT",
    "Stripe",
    "Cloudinary",
    "Tailwind CSS",
  ],
  gradient: "from-nebula-deep via-nebula-mid to-ion-dim",
  metrics: [
    { label: "Modules", value: "15+" },
    { label: "Architecture", value: "Multi-Tenant" },
    { label: "Deployment", value: "Vercel + Render" },
  ],
  href: "https://github.com/shivasharma9475/inventory-pro.git",
  demo: "https://inventory-pro-cyan.vercel.app",
},
  {
    id: "proj-02",
    poster: "/projects/fraud-prediction.png",
    title: "Fraud Prediction Analyzer",
    category: "Machine Learning",
    description:
      "Developed a machine learning web application for fraud prediction using supervised learning techniques. Built an end-to-end prediction pipeline including data preprocessing, feature engineering, model training, evaluation, and real-time predictions through a Flask-based web interface.",
    stack: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Flask",
      "HTML",
      "CSS",
    ],
    gradient: "from-amber-dim via-nebula-mid to-nebula-deep",
    metrics: [
      { label: "ML Models", value: "2+" },
      { label: "Prediction", value: "Real-Time" },
      { label: "Framework", value: "Flask" },
    ],
    href: "https://github.com/shivasharma9475/Fraud_Prediction_Analyzer",
  },

  {
    id: "proj-03",
    poster: "/projects/energy-analyzer.png",
    title: "Global Energy Analytics & CO₂ Emission Prediction",
    category: "Data Science",
    description:
      "Built a data science solution to analyze global energy consumption and predict CO₂ emissions using regression models. Performed data preprocessing, feature engineering, normalization, model evaluation, and generated actionable recommendations to support sustainable energy planning.",
    stack: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Jupyter Notebook",
    ],
    gradient: "from-ion-dim via-nebula-deep to-void-soft",
    metrics: [
      { label: "Model", value: "Regression" },
      { label: "Dataset", value: "Global Energy" },
      { label: "Evaluation", value: "R² Score" },
    ],
    href: "https://github.com/shivasharma9475/Global_Energy_analyzer",
  },

  {
    id: "proj-04",
    poster: "/projects/retail-dashboard.png",
    title: "Retail Sales Analytics Dashboard",
    category: "Data Analytics",
    description:
      "Designed an end-to-end retail sales analytics solution by integrating Python, MySQL, Excel, and Power BI to transform transactional sales data into interactive business dashboards. Implemented data cleaning, SQL analysis, KPI reporting, and visualization to generate actionable business insights.",
    stack: [
      "Power BI",
      "Python",
      "MySQL",
      "Excel",
      "Pandas",
      "Matplotlib",
    ],
    gradient: "from-nebula-mid via-ion-dim to-nebula-deep",
    metrics: [
      { label: "Dashboards", value: "Interactive" },
      { label: "Database", value: "MySQL" },
      { label: "Visualizations", value: "10+" },
    ],
    href: "https://github.com/shivasharma9475/retail_sales_data",
  },
];

