import { Eye, Cloud, BrainCircuit, Database, Layers, Monitor, Activity, Server, Cpu } from 'lucide-react';

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  domain: 'Healthcare AI' | 'Enterprise CRM' | 'Computer Vision' | 'Cloud Infrastructure' | 'Data Analytics' | 'Full Stack';
  status: 'Production-Ready' | 'Research Prototype' | 'Deployed' | 'In Development' | 'Academic Capstone';
  problem: string;
  solution: string;
  role: string;
  techStack: string[];
  results: { label: string; value: string; }[];
  links: {
    github?: string;
    demo?: string;
    caseStudy?: string;
    paper?: string;
  };
  featured: boolean;
  gradient: string;
  icon: any;
  architectureLayers?: {
    dataFlow: string[];
    mlFlow: string[];
    cloudInfra: string[];
  };
  methodology?: {
    dataEngineering: string[];
    modeling: string[];
    softwareEngineering: string[];
    cloudScalability: string[];
  };
}

export const flagshipProjects: ProjectData[] = [
  {
    id: 'glaucoma-detection',
    title: 'Glaucoma Detection System',
    subtitle: 'Deep Learning for Early Disease Detection',
    domain: 'Healthcare AI',
    status: 'Academic Capstone',
    problem: 'Glaucoma affects 80M+ people globally, with 50% undiagnosed until irreversible vision loss occurs. Current screening relies on expensive specialist equipment and expertise.',
    solution: 'Ensemble CNN architecture achieving 96% sensitivity on fundus images, with explainable AI overlays showing decision regions for clinician trust.',
    role: 'ML Engineer & Architect',
    techStack: ['PyTorch', 'OpenCV', 'Python', 'Flask', 'Docker', 'AWS'],
    results: [
      { label: 'Sensitivity', value: '96%' },
      { label: 'Specificity', value: '94%' },
      { label: 'Inference Time', value: '<100ms' },
      { label: 'Dataset Size', value: '4,500+' }
    ],
    links: {
      github: 'https://github.com/sagarsahore/glaucoma-detection',
      caseStudy: '#'
    },
    featured: true,
    gradient: 'from-[#EF4444]/40 via-[#DC2626]/30 to-[#B91C1C]/20',
    icon: Eye,
    architectureLayers: {
      dataFlow: ['Fundus Images', 'ORIGA Dataset', 'Preprocessing Pipeline', 'Augmentation'],
      mlFlow: ['ResNet-50 Backbone', 'Ensemble Voting', 'Grad-CAM Explainability', 'Confidence Scoring'],
      cloudInfra: ['Docker Container', 'Flask API', 'AWS EC2', 'S3 Storage']
    },
    methodology: {
      dataEngineering: ['ORIGA & DRISHTI-GS datasets', 'CLAHE enhancement', 'Vessel segmentation', 'Data augmentation (rotation, flip, zoom)'],
      modeling: ['Transfer learning from ImageNet', 'ResNet-50 + EfficientNet ensemble', 'Focal loss for class imbalance', '5-fold cross-validation'],
      softwareEngineering: ['REST API with Flask', 'Docker containerization', 'CI/CD with GitHub Actions', 'Unit + integration tests'],
      cloudScalability: ['AWS EC2 (GPU instances)', 'S3 for model artifacts', 'Auto-scaling group', 'Cost: ~$50/month']
    }
  },
  {
    id: 'salesforce-realestate',
    title: 'Salesforce Real Estate CRM',
    subtitle: 'Enterprise CRM Optimization',
    domain: 'Enterprise CRM',
    status: 'Deployed',
    problem: 'Real estate agency managing 500+ properties with fragmented client data, manual follow-ups, and zero visibility into sales pipeline health.',
    solution: 'Custom Salesforce implementation with automated lead scoring, property matching algorithm, and real-time performance dashboards.',
    role: 'Salesforce Architect',
    techStack: ['Sales Cloud', 'Service Cloud', 'Apex', 'LWC', 'Flow Builder', 'Reports'],
    results: [
      { label: 'Lead Conversion', value: '+35%' },
      { label: 'Response Time', value: '-60%' },
      { label: 'Pipeline Visibility', value: '100%' },
      { label: 'Manual Tasks', value: '-40%' }
    ],
    links: {
      github: 'https://github.com/sagarsahore/Salesforce_Projects',
      caseStudy: 'https://github.com/sagarsahore/Salesforce_Projects/blob/main/Real%20Estate%20Optimization%20for%20Caine%20Statham.md'
    },
    featured: true,
    gradient: 'from-[#0066FF]/40 via-[#00A3FF]/30 to-[#0052CC]/20',
    icon: Cloud,
    architectureLayers: {
      dataFlow: ['Property Listings', 'Client Profiles', 'Interaction History', 'Market Data'],
      mlFlow: ['Lead Scoring Model', 'Property Matching', 'Churn Prediction', 'Price Optimization'],
      cloudInfra: ['Salesforce Platform', 'Apex Backend', 'LWC Frontend', 'External APIs']
    }
  },
  {
    id: 'mern-ecommerce',
    title: 'MERN E-Commerce Platform',
    subtitle: 'Full-Stack Marketplace',
    domain: 'Full Stack',
    status: 'Production-Ready',
    problem: 'Small businesses need affordable, customizable e-commerce without the overhead of enterprise solutions like Shopify Plus.',
    solution: 'Complete MERN stack platform with authentication, product management, cart, Stripe payments, and admin dashboard.',
    role: 'Full Stack Engineer',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux', 'Stripe', 'JWT'],
    results: [
      { label: 'Load Time', value: '<2s' },
      { label: 'Mobile Score', value: '95/100' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Transactions', value: '10K+' }
    ],
    links: {
      github: 'https://github.com/sagarsahore/Full_Stack_Project'
    },
    featured: true,
    gradient: 'from-[#10B981]/40 via-[#059669]/30 to-[#047857]/20',
    icon: Monitor,
    architectureLayers: {
      dataFlow: ['User Actions', 'API Gateway', 'Business Logic', 'Database'],
      mlFlow: ['Recommendation Engine', 'Search Ranking', 'Fraud Detection'],
      cloudInfra: ['Heroku/Vercel', 'MongoDB Atlas', 'Cloudinary CDN', 'Stripe Webhooks']
    }
  },
  {
    id: 'aws-serverless',
    title: 'Serverless Data Pipeline',
    subtitle: 'Event-Driven Cloud Architecture',
    domain: 'Cloud Infrastructure',
    status: 'Deployed',
    problem: 'Legacy batch processing system with 6-hour delays, high EC2 costs, and zero elasticity during traffic spikes.',
    solution: 'Event-driven serverless architecture using Lambda, SQS, and DynamoDB with automatic scaling and 25% cost reduction.',
    role: 'Cloud Architect',
    techStack: ['AWS Lambda', 'SQS', 'DynamoDB', 'S3', 'CloudWatch', 'Terraform'],
    results: [
      { label: 'Latency', value: '<500ms' },
      { label: 'Cost Reduction', value: '25%' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'Auto-Scale', value: '∞' }
    ],
    links: {
      github: '#'
    },
    featured: false,
    gradient: 'from-[#F97316]/40 via-[#EA580C]/30 to-[#C2410C]/20',
    icon: Server,
    architectureLayers: {
      dataFlow: ['Event Source', 'SQS Queue', 'Lambda Processing', 'DynamoDB'],
      mlFlow: ['Not Applicable'],
      cloudInfra: ['API Gateway', 'Lambda Functions', 'SQS Queues', 'DynamoDB Tables', 'S3 Buckets', 'CloudWatch']
    }
  },
  {
    id: 'ipl-dashboard',
    title: 'IPL Analytics Dashboard',
    subtitle: 'Real-Time Sports Analytics',
    domain: 'Data Analytics',
    status: 'Production-Ready',
    problem: 'Cricket fans and analysts lack real-time, interactive tools to explore match statistics, player performance, and season trends.',
    solution: 'Interactive Salesforce-powered dashboard with Apex backend, LWC components, and real-time data visualization.',
    role: 'Salesforce Developer',
    techStack: ['Apex', 'LWC', 'SOQL', 'Chart.js', 'Salesforce DX'],
    results: [
      { label: 'Data Points', value: '50K+' },
      { label: 'Load Time', value: '<1s' },
      { label: 'Active Users', value: '200+' },
      { label: 'Refresh Rate', value: 'Real-time' }
    ],
    links: {
      github: 'https://github.com/sagarsahore/Salesforce-Cricket-IPL-Dashboard'
    },
    featured: false,
    gradient: 'from-[#A855F7]/40 via-[#8B5CF6]/30 to-[#7C3AED]/20',
    icon: Activity,
    architectureLayers: {
      dataFlow: ['Cricket API', 'Data Parser', 'Salesforce Objects', 'LWC Charts'],
      mlFlow: ['Player Rating Model', 'Win Probability', 'Performance Trends'],
      cloudInfra: ['Salesforce Platform', 'Scheduled Apex', 'Platform Events']
    }
  },
  {
    id: 'cv-detection',
    title: 'Computer Vision System',
    subtitle: 'Object Detection Pipeline',
    domain: 'Computer Vision',
    status: 'Research Prototype',
    problem: 'Manual quality inspection in manufacturing is slow, inconsistent, and expensive at scale.',
    solution: 'Custom YOLO-based detection system with real-time inference, defect classification, and alerting pipeline.',
    role: 'AI Engineer',
    techStack: ['PyTorch', 'YOLOv8', 'OpenCV', 'FastAPI', 'Redis', 'Docker'],
    results: [
      { label: 'mAP@50', value: '92%' },
      { label: 'FPS', value: '30+' },
      { label: 'Defect Types', value: '12' },
      { label: 'False Positives', value: '<3%' }
    ],
    links: {
      github: '#'
    },
    featured: false,
    gradient: 'from-[#06B6D4]/40 via-[#0891B2]/30 to-[#0E7490]/20',
    icon: Cpu,
    architectureLayers: {
      dataFlow: ['Camera Feed', 'Frame Buffer', 'Inference Engine', 'Alert System'],
      mlFlow: ['YOLOv8 Backbone', 'Custom Head', 'NMS', 'Classification'],
      cloudInfra: ['Edge Device', 'Redis Queue', 'Cloud Backup', 'Dashboard']
    }
  }
];

export const methodologySteps = [
  {
    step: 1,
    title: 'Problem Framing',
    description: 'Define the problem space, stakeholders, constraints, and success metrics before writing any code.',
    tools: ['Notion', 'Miro', 'Stakeholder Interviews'],
    output: 'Problem Definition Document'
  },
  {
    step: 2,
    title: 'Requirements & Hypothesis',
    description: 'Translate business needs into technical requirements. Form testable hypotheses for ML projects.',
    tools: ['User Stories', 'Technical Specs', 'Hypothesis Templates'],
    output: 'Technical Requirements Spec'
  },
  {
    step: 3,
    title: 'Architecture Design',
    description: 'Design system architecture before implementation. Consider scalability, maintainability, and cost.',
    tools: ['Draw.io', 'Lucidchart', 'C4 Model'],
    output: 'Architecture Diagrams'
  },
  {
    step: 4,
    title: 'Prototyping',
    description: 'Build minimal viable version to validate core assumptions. Fail fast, learn faster.',
    tools: ['Jupyter', 'Streamlit', 'Postman'],
    output: 'Working Prototype'
  },
  {
    step: 5,
    title: 'Evaluation & Testing',
    description: 'Rigorous testing with defined metrics. Unit tests, integration tests, A/B tests for ML.',
    tools: ['PyTest', 'Jest', 'MLflow', 'Weights & Biases'],
    output: 'Test Reports & Metrics'
  },
  {
    step: 6,
    title: 'Production Hardening',
    description: 'Containerization, CI/CD, monitoring, logging, and documentation for production readiness.',
    tools: ['Docker', 'GitHub Actions', 'Terraform', 'Datadog'],
    output: 'Deployed System'
  }
];

export const skillMatrix = [
  { skill: 'Machine Learning', level: 4, projects: ['glaucoma-detection', 'cv-detection'] },
  { skill: 'Computer Vision', level: 4, projects: ['glaucoma-detection', 'cv-detection'] },
  { skill: 'Deep Learning', level: 4, projects: ['glaucoma-detection', 'cv-detection'] },
  { skill: 'Cloud Architecture', level: 3, projects: ['aws-serverless', 'mern-ecommerce'] },
  { skill: 'Salesforce', level: 5, projects: ['salesforce-realestate', 'ipl-dashboard'] },
  { skill: 'Full Stack', level: 4, projects: ['mern-ecommerce'] },
  { skill: 'Data Engineering', level: 3, projects: ['aws-serverless', 'ipl-dashboard'] },
  { skill: 'DevOps', level: 3, projects: ['aws-serverless', 'mern-ecommerce'] },
  { skill: 'Research Methods', level: 4, projects: ['glaucoma-detection'] }
];

export const projectCategories = [
  'All',
  'AI / ML',
  'Computer Vision', 
  'Cloud & DevOps',
  'Salesforce & Enterprise',
  'Full Stack',
  'Academic Capstone'
] as const;

export type ProjectCategory = typeof projectCategories[number];
