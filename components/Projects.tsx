import React, { useState } from 'react';
import { GlassCard } from './GlassCard';
import { 
  Github, ExternalLink, Code2, Database, Cloud, BrainCircuit, Layers, Monitor, ArrowUpRight, Sparkles,
  X, Target, CheckCircle2, Server, Activity, Eye, Cpu
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Enhanced Project Data Structure
interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  domain: string;
  status: 'Production-Ready' | 'Research Prototype' | 'Deployed' | 'In Development' | 'Academic Capstone';
  problem: string;
  solution: string;
  description: string;
  tags: string[];
  techStack: string[];
  category: string;
  link?: string;
  github?: string;
  featured: boolean;
  imageGradient: string;
  results: { label: string; value: string }[];
  architectureLayers?: {
    dataLayer: string[];
    processingLayer: string[];
    outputLayer: string[];
  };
  methodology?: {
    dataEngineering: string[];
    modeling: string[];
    softwareEngineering: string[];
    cloudScalability: string[];
  };
}

const projects: ProjectData[] = [
    // AI/ML Projects
    {
        id: '1',
        title: 'Glaucoma Detection System',
        subtitle: 'Deep Learning for Early Disease Detection',
        role: 'ML Engineer & Architect',
        domain: 'Healthcare AI',
        status: 'Academic Capstone',
        problem: 'Glaucoma affects 80M+ people globally, with 50% undiagnosed until irreversible vision loss occurs. Current screening relies on expensive specialist equipment and expertise.',
        solution: 'Ensemble CNN architecture achieving 96% sensitivity on fundus images, with explainable AI overlays showing decision regions for clinician trust.',
        description: 'Deep learning pipeline for early glaucoma detection using fundus images. Achieved 96% sensitivity using ensemble CNN architectures with Grad-CAM explainability.',
        tags: ['PyTorch', 'OpenCV', 'Medical AI'],
        techStack: ['PyTorch', 'OpenCV', 'Python', 'Flask', 'Docker', 'AWS'],
        category: 'AI',
        github: 'https://github.com/sagarsahore/glaucoma-detection',
        featured: true,
        imageGradient: 'from-[#EF4444]/30 via-[#DC2626]/20 to-[#B91C1C]/10',
        results: [
          { label: 'Sensitivity', value: '96%' },
          { label: 'Specificity', value: '94%' },
          { label: 'Inference', value: '<100ms' },
          { label: 'Dataset', value: '4,500+' }
        ],
        architectureLayers: {
          dataLayer: ['Fundus Images', 'ORIGA Dataset', 'DRISHTI-GS', 'Preprocessing'],
          processingLayer: ['ResNet-50', 'EfficientNet', 'Ensemble Voting', 'Grad-CAM'],
          outputLayer: ['Flask API', 'Docker', 'AWS EC2', 'S3 Storage']
        },
        methodology: {
          dataEngineering: ['ORIGA & DRISHTI-GS datasets', 'CLAHE enhancement', 'Vessel segmentation', 'Data augmentation (rotation, flip, zoom)'],
          modeling: ['Transfer learning from ImageNet', 'ResNet-50 + EfficientNet ensemble', 'Focal loss for class imbalance', '5-fold cross-validation'],
          softwareEngineering: ['REST API with Flask', 'Docker containerization', 'CI/CD with GitHub Actions', 'Unit + integration tests'],
          cloudScalability: ['AWS EC2 (GPU instances)', 'S3 for model artifacts', 'Auto-scaling group', 'Cost: ~$50/month']
        }
    },
    {
        id: '2',
        title: 'Computer Vision System',
        subtitle: 'Object Detection Pipeline',
        role: 'AI Engineer',
        domain: 'Computer Vision',
        status: 'Research Prototype',
        problem: 'Manual quality inspection in manufacturing is slow, inconsistent, and expensive at scale.',
        solution: 'Custom YOLO-based detection system with real-time inference, defect classification, and alerting pipeline.',
        description: 'Image recognition and object detection system using OpenCV and PyTorch. Trained custom models for real-world detection scenarios.',
        tags: ['OpenCV', 'PyTorch', 'Python'],
        techStack: ['PyTorch', 'YOLOv8', 'OpenCV', 'FastAPI', 'Redis', 'Docker'],
        category: 'AI',
        featured: false,
        imageGradient: 'from-[#F59E0B]/30 via-[#D97706]/20 to-[#B45309]/10',
        results: [
          { label: 'mAP@50', value: '92%' },
          { label: 'FPS', value: '30+' },
          { label: 'Defects', value: '12 types' },
          { label: 'False +', value: '<3%' }
        ],
        architectureLayers: {
          dataLayer: ['Camera Feed', 'Frame Buffer', 'Labeled Dataset', 'Augmentation'],
          processingLayer: ['YOLOv8', 'Detection Head', 'NMS', 'Classification'],
          outputLayer: ['FastAPI', 'Redis Queue', 'WebSocket', 'Dashboard']
        },
        methodology: {
          dataEngineering: ['Custom labeled dataset', 'Synthetic augmentation', 'Edge case mining', 'Version control with DVC'],
          modeling: ['YOLOv8 backbone', 'Custom detection head', 'Multi-scale training', 'Hard negative mining'],
          softwareEngineering: ['FastAPI inference server', 'Redis queue', 'WebSocket alerts', 'Prometheus metrics'],
          cloudScalability: ['Edge deployment', 'Cloud backup', 'Auto-failover', 'Cost-optimized']
        }
    },
    // Salesforce Projects
    {
        id: '3',
        title: 'Salesforce Real Estate CRM',
        subtitle: 'Enterprise CRM Optimization',
        role: 'Salesforce Architect',
        domain: 'Enterprise CRM',
        status: 'Deployed',
        problem: 'Real estate agency managing 500+ properties with fragmented client data, manual follow-ups, and zero visibility into sales pipeline health.',
        solution: 'Custom Salesforce implementation with automated lead scoring, property matching algorithm, and real-time performance dashboards.',
        description: 'CRM solution for real estate optimization at Caine Statham. Implemented Sales Cloud and Service Cloud for streamlined property management.',
        tags: ['Sales Cloud', 'Service Cloud', 'CRM'],
        techStack: ['Sales Cloud', 'Service Cloud', 'Apex', 'LWC', 'Flow Builder', 'Reports'],
        category: 'Salesforce',
        link: 'https://github.com/sagarsahore/Salesforce_Projects/blob/main/Real%20Estate%20Optimization%20for%20Caine%20Statham.md',
        github: 'https://github.com/sagarsahore/Salesforce_Projects',
        featured: true,
        imageGradient: 'from-[#0066FF]/30 via-[#00A3FF]/20 to-[#0066FF]/10',
        results: [
          { label: 'Conversion', value: '+35%' },
          { label: 'Response', value: '-60%' },
          { label: 'Visibility', value: '100%' },
          { label: 'Manual', value: '-40%' }
        ],
        architectureLayers: {
          dataLayer: ['Property Listings', 'Client Profiles', 'Market Data', 'History'],
          processingLayer: ['Lead Scoring', 'Property Match', 'Flow Builder', 'Triggers'],
          outputLayer: ['LWC UI', 'Reports', 'Dashboards', 'Mobile App']
        },
        methodology: {
          dataEngineering: ['Property data migration', 'Client history import', 'Data deduplication', 'Validation rules'],
          modeling: ['Lead scoring formula', 'Property matching', 'Churn prediction triggers', 'Revenue forecasting'],
          softwareEngineering: ['Apex controllers', 'LWC UI components', 'Flow automation', 'Test coverage 95%'],
          cloudScalability: ['Multi-org ready', 'Bulk API support', 'Governor limit aware', 'Sandbox strategy']
        }
    },
    {
        id: '4',
        title: 'Salesforce IMDB Clone',
        subtitle: 'Custom Platform Application',
        role: 'Salesforce Administrator',
        domain: 'Enterprise CRM',
        status: 'Production-Ready',
        problem: 'Need for a custom movie database management system with complex relationships and reporting capabilities.',
        solution: 'Built an IMDB-like application using Salesforce platform with custom objects, relationships, and Lightning components.',
        description: 'Built an IMDB-like application using Salesforce platform. Custom objects, relationships, and Lightning components for movie database management.',
        tags: ['Sales Cloud', 'Service Cloud', 'CRM'],
        techStack: ['Sales Cloud', 'Custom Objects', 'LWC', 'Reports', 'Dashboards'],
        category: 'Salesforce',
        link: 'https://github.com/sagarsahore/Salesforce_Projects/blob/main/Salesforce-imdb-project.md',
        github: 'https://github.com/sagarsahore/Salesforce_Projects',
        featured: false,
        imageGradient: 'from-[#00A3FF]/30 via-[#0066FF]/20 to-[#0052CC]/10',
        results: [
          { label: 'Objects', value: '8 custom' },
          { label: 'Relations', value: '15+' },
          { label: 'Reports', value: '10' },
          { label: 'Users', value: '50+' }
        ],
        architectureLayers: {
          dataLayer: ['Movies', 'Actors', 'Directors', 'Reviews'],
          processingLayer: ['Custom Objects', 'Relationships', 'Validation', 'Triggers'],
          outputLayer: ['LWC UI', 'Reports', 'Dashboards', 'Search']
        }
    },
    {
        id: '5',
        title: 'IPL Analytics Dashboard',
        subtitle: 'Real-Time Sports Analytics',
        role: 'Salesforce Developer',
        domain: 'Data Analytics',
        status: 'Production-Ready',
        problem: 'Cricket fans and analysts lack real-time, interactive tools to explore match statistics, player performance, and season trends.',
        solution: 'Interactive Salesforce-powered dashboard with Apex backend, LWC components, and real-time data visualization.',
        description: 'Interactive cricket analytics dashboard built with Apex and LWC. Real-time IPL statistics, player tracking, and match analysis.',
        tags: ['Apex', 'LWC', 'Development'],
        techStack: ['Apex', 'LWC', 'SOQL', 'Chart.js', 'Salesforce DX'],
        category: 'Salesforce',
        link: 'https://github.com/sagarsahore/Salesforce-Cricket-IPL-Dashboard',
        github: 'https://github.com/sagarsahore/Salesforce-Cricket-IPL-Dashboard',
        featured: false,
        imageGradient: 'from-[#A855F7]/30 via-[#8B5CF6]/20 to-[#7C3AED]/10',
        results: [
          { label: 'Data Points', value: '50K+' },
          { label: 'Load Time', value: '<1s' },
          { label: 'Users', value: '200+' },
          { label: 'Refresh', value: 'Real-time' }
        ],
        architectureLayers: {
          dataLayer: ['Cricket API', 'Match Data', 'Player Stats', 'Season History'],
          processingLayer: ['Apex Parser', 'Scheduled Jobs', 'Analytics', 'Chart.js'],
          outputLayer: ['LWC Dashboard', 'Real-time Feed', 'Reports', 'Mobile']
        }
    },
    // Full Stack Projects
    {
        id: '6',
        title: 'MERN E-Commerce Platform',
        subtitle: 'Full-Stack Marketplace',
        role: 'Full Stack Engineer',
        domain: 'Full Stack',
        status: 'Production-Ready',
        problem: 'Small businesses need affordable, customizable e-commerce without the overhead of enterprise solutions like Shopify Plus.',
        solution: 'Complete MERN stack platform with authentication, product management, cart, Stripe payments, and admin dashboard.',
        description: 'Complete e-commerce platform built with MongoDB, Express, React, and Node.js. Features include authentication, cart, and payment integration.',
        tags: ['MongoDB', 'Express', 'React', 'Node.js'],
        techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux', 'Stripe', 'JWT'],
        category: 'FullStack',
        link: 'https://github.com/sagarsahore/Full_Stack_Project',
        github: 'https://github.com/sagarsahore/Full_Stack_Project',
        featured: true,
        imageGradient: 'from-[#10B981]/30 via-[#059669]/20 to-[#047857]/10',
        results: [
          { label: 'Load Time', value: '<2s' },
          { label: 'Mobile', value: '95/100' },
          { label: 'Uptime', value: '99.9%' },
          { label: 'Orders', value: '10K+' }
        ],
        methodology: {
          dataEngineering: ['MongoDB schema design', 'Index optimization', 'Aggregation pipelines', 'Backup strategy'],
          modeling: ['Product recommendation', 'Search ranking', 'Inventory prediction', 'Fraud detection'],
          softwareEngineering: ['RESTful API design', 'Redux state management', 'JWT authentication', 'Jest testing'],
          cloudScalability: ['Heroku deployment', 'MongoDB Atlas', 'Cloudinary CDN', 'Stripe webhooks']
        },
        architectureLayers: {
          dataLayer: ['MongoDB', 'User Auth', 'Products', 'Orders'],
          processingLayer: ['Express API', 'Redux', 'JWT Auth', 'Stripe'],
          outputLayer: ['React UI', 'Admin Panel', 'Cart', 'Checkout']
        }
    },
    // Cloud Projects
    {
        id: '7',
        title: 'AWS Serverless Pipeline',
        subtitle: 'Event-Driven Architecture',
        role: 'Cloud Architect',
        domain: 'Cloud Infrastructure',
        status: 'Deployed',
        problem: 'Legacy batch processing system with 6-hour delays, high EC2 costs, and zero elasticity during traffic spikes.',
        solution: 'Event-driven serverless architecture using Lambda, SQS, and DynamoDB with automatic scaling and 25% cost reduction.',
        description: 'Designed secure, cost-optimized serverless environments with Lambda, S3, and DynamoDB. Reduced infrastructure costs by 25%.',
        tags: ['AWS Lambda', 'S3', 'DynamoDB'],
        techStack: ['AWS Lambda', 'SQS', 'DynamoDB', 'S3', 'CloudWatch', 'Terraform'],
        category: 'Cloud',
        featured: false,
        imageGradient: 'from-[#F97316]/30 via-[#EA580C]/20 to-[#C2410C]/10',
        results: [
          { label: 'Latency', value: '<500ms' },
          { label: 'Cost', value: '-25%' },
          { label: 'Uptime', value: '99.99%' },
          { label: 'Scale', value: '∞' }
        ],
        methodology: {
          dataEngineering: ['Event sourcing', 'SQS queues', 'DynamoDB streams', 'S3 data lake'],
          modeling: ['Not applicable'],
          softwareEngineering: ['Lambda functions', 'API Gateway', 'IAM policies', 'CloudFormation'],
          cloudScalability: ['Auto-scaling', 'Multi-region', 'Disaster recovery', 'Cost monitoring']
        },
        architectureLayers: {
          dataLayer: ['Event Source', 'SQS Queue', 'S3 Bucket', 'DynamoDB'],
          processingLayer: ['Lambda Functions', 'API Gateway', 'IAM', 'CloudWatch'],
          outputLayer: ['REST API', 'Dashboard', 'Alerts', 'Logs']
        }
    }
];

type Category = 'All' | 'Salesforce' | 'AI' | 'FullStack' | 'Cloud' | 'Analytics' | 'Other';

const categoryMeta: Record<string, { icon: React.ReactNode; color: string }> = {
    Salesforce: { icon: <Cloud size={16} />, color: '#0066FF' },
    AI: { icon: <BrainCircuit size={16} />, color: '#EF4444' },
    FullStack: { icon: <Monitor size={16} />, color: '#10B981' },
    Cloud: { icon: <Database size={16} />, color: '#F97316' },
    Analytics: { icon: <Layers size={16} />, color: '#22C55E' },
    Other: { icon: <Code2 size={16} />, color: '#8B5CF6' }
};

const statusColors: Record<string, string> = {
  'Production-Ready': 'bg-[#10B981]/20 text-[#10B981] border-[#10B981]/30',
  'Research Prototype': 'bg-[#F59E0B]/20 text-[#F59E0B] border-[#F59E0B]/30',
  'Deployed': 'bg-[#0066FF]/20 text-[#0066FF] border-[#0066FF]/30',
  'In Development': 'bg-[#8B5CF6]/20 text-[#8B5CF6] border-[#8B5CF6]/30',
  'Academic Capstone': 'bg-[#EF4444]/20 text-[#EF4444] border-[#EF4444]/30'
};

// Project Detail Modal Component
const ProjectDetailModal: React.FC<{ project: ProjectData | null; onClose: () => void }> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'data' | 'modeling' | 'engineering' | 'cloud'>('data');

  if (!project) return null;

  const methodology = project.methodology;

  const tabs = [
    { id: 'data', label: 'Data Engineering', icon: Database },
    { id: 'modeling', label: 'Modeling', icon: BrainCircuit },
    { id: 'engineering', label: 'Software', icon: Code2 },
    { id: 'cloud', label: 'Cloud', icon: Server }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0A0A0A] border border-white/[0.08] shadow-2xl"
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] transition-colors z-10"
        >
          <X size={20} className="text-white" />
        </button>

        {/* Header */}
        <div className={`p-8 bg-gradient-to-br ${project.imageGradient}`}>
          <div className="flex items-start gap-6">
            <div className="p-4 rounded-2xl bg-black/30 backdrop-blur-xl">
              {categoryMeta[project.category]?.icon || <Code2 size={32} className="text-white" />}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <span className="text-xs font-bold uppercase tracking-widest text-white/80">{project.domain}</span>
                <span className={`px-2.5 py-1 rounded-full text-[9px] font-semibold uppercase tracking-wider border ${statusColors[project.status]}`}>
                  {project.status}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-white/70 mb-3">{project.subtitle}</p>
              {/* Highlighted Role Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-xl border border-white/30">
                <span className="text-xs text-white/70">Role:</span>
                <span className="text-sm font-bold text-white">{project.role}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Executive Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <h3 className="flex items-center gap-2 text-sm font-bold text-white mb-3">
                <Target size={16} className="text-[#F59E0B]" />
                The Problem
              </h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">{project.problem}</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <h3 className="flex items-center gap-2 text-sm font-bold text-white mb-3">
                <CheckCircle2 size={16} className="text-[#10B981]" />
                The Solution
              </h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Results */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Key Results</h3>
            <div className="grid grid-cols-4 gap-4">
              {project.results.map((result, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-center">
                  <div className="text-2xl font-bold text-[#0066FF]">{result.value}</div>
                  <div className="text-xs text-[#6B7280] uppercase tracking-wider">{result.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Diagram */}
          {project.architectureLayers && (
            <div>
              <h3 className="text-lg font-bold text-white mb-4">System Architecture</h3>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Data Layer */}
                  <div className="p-4 rounded-xl bg-[#0066FF]/5 border border-[#0066FF]/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Database size={16} className="text-[#0066FF]" />
                      <span className="text-sm font-bold text-[#0066FF]">Data Layer</span>
                    </div>
                    <div className="space-y-2">
                      {project.architectureLayers.dataLayer.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#9CA3AF]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Processing Layer */}
                  <div className="p-4 rounded-xl bg-[#A855F7]/5 border border-[#A855F7]/20 relative">
                    {/* Arrow from left */}
                    <div className="hidden md:block absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 text-[#6B7280]">→</div>
                    <div className="flex items-center gap-2 mb-3">
                      <BrainCircuit size={16} className="text-[#A855F7]" />
                      <span className="text-sm font-bold text-[#A855F7]">Processing Layer</span>
                    </div>
                    <div className="space-y-2">
                      {project.architectureLayers.processingLayer.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#9CA3AF]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#A855F7]" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Output Layer */}
                  <div className="p-4 rounded-xl bg-[#10B981]/5 border border-[#10B981]/20 relative">
                    {/* Arrow from left */}
                    <div className="hidden md:block absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 text-[#6B7280]">→</div>
                    <div className="flex items-center gap-2 mb-3">
                      <Server size={16} className="text-[#10B981]" />
                      <span className="text-sm font-bold text-[#10B981]">Output Layer</span>
                    </div>
                    <div className="space-y-2">
                      {project.architectureLayers.outputLayer.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#9CA3AF]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Flow indicator */}
                <div className="mt-4 pt-4 border-t border-white/[0.05] flex items-center justify-center gap-2 text-[10px] text-[#6B7280] uppercase tracking-widest">
                  <span className="text-[#0066FF]">Input</span>
                  <span>→</span>
                  <span className="text-[#A855F7]">Process</span>
                  <span>→</span>
                  <span className="text-[#10B981]">Output</span>
                </div>
              </div>
            </div>
          )}

          {/* Technical Breakdown Tabs */}
          {methodology && (
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Technical Breakdown</h3>
              <div className="flex gap-2 mb-4 flex-wrap">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-[#0066FF] text-white'
                        : 'bg-white/[0.03] text-[#9CA3AF] hover:bg-white/[0.08]'
                    }`}
                  >
                    <tab.icon size={14} />
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                <ul className="space-y-2">
                  {(activeTab === 'data' ? methodology.dataEngineering :
                    activeTab === 'modeling' ? methodology.modeling :
                    activeTab === 'engineering' ? methodology.softwareEngineering :
                    methodology.cloudScalability
                  ).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#9CA3AF]">
                      <CheckCircle2 size={14} className="text-[#0066FF] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-xl bg-[#0066FF]/10 text-[#0066FF] text-sm font-medium border border-[#0066FF]/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4 flex-wrap">
            {project.github && (
              <a 
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.05] text-white hover:bg-white/[0.1] transition-all"
              >
                <Github size={18} />
                View on GitHub
              </a>
            )}
            {project.link && (
              <a 
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0066FF] text-white hover:bg-[#0052CC] transition-all"
              >
                <ExternalLink size={18} />
                Live Demo / Case Study
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    },
    exit: { 
        opacity: 0, 
        scale: 0.9,
        transition: { duration: 0.3 }
    }
};

export const Projects: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('All');
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

    const filteredProjects = activeCategory === 'All' 
        ? projects 
        : projects.filter(p => p.category === activeCategory);

    const categories: Category[] = ['All', 'Salesforce', 'AI', 'FullStack', 'Cloud'];

    return (
        <div className="space-y-12">
            {/* Header */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
            >
                <div>
                    <span className="text-[#0066FF] font-semibold text-xs tracking-[0.2em] uppercase mb-2 block">Portfolio</span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">My Projects</h2>
                    <p className="text-[#6B7280] max-w-md">Real-world solutions in Salesforce, Cloud, AI/ML and Full Stack development.</p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap p-1.5 bg-[#0A0A0A] backdrop-blur-xl rounded-2xl border border-white/[0.08] gap-1">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2.5 rounded-xl text-xs font-medium transition-all duration-300 relative ${
                                activeCategory === cat ? 'text-white' : 'text-[#6B7280] hover:text-white'
                            }`}
                        >
                            {activeCategory === cat && (
                                <motion.div
                                    layoutId="activeProjectTab"
                                    className="absolute inset-0 bg-[#0066FF] rounded-xl"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                {cat !== 'All' && categoryMeta[cat]?.icon}
                                {cat}
                            </span>
                        </button>
                    ))}
                </div>
            </motion.div>
            
            {/* Projects Grid */}
            <motion.div 
                layout
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            layout
                            onHoverStart={() => setHoveredId(project.id)}
                            onHoverEnd={() => setHoveredId(null)}
                            className="group"
                        >
                            <div className="relative h-full rounded-3xl bg-[#0A0A0A] border border-white/[0.08] overflow-hidden hover:border-[#0066FF]/40 transition-all duration-500">
                                
                                {/* Gradient Header */}
                                <div className={`h-44 w-full bg-gradient-to-br ${project.imageGradient} relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay" />
                                    
                                    {/* Status Badge */}
                                    <div className="absolute top-4 left-4">
                                      <span className={`px-2.5 py-1 rounded-full text-[9px] font-semibold uppercase tracking-wider border ${statusColors[project.status]}`}>
                                        {project.status}
                                      </span>
                                    </div>
                                    
                                    {/* Category Badge */}
                                    <div 
                                        className="absolute top-4 right-4 backdrop-blur-xl p-2.5 rounded-xl border border-white/10 transition-transform group-hover:scale-110"
                                        style={{ backgroundColor: `${categoryMeta[project.category]?.color}20` }}
                                    >
                                        <div style={{ color: categoryMeta[project.category]?.color }}>
                                            {categoryMeta[project.category]?.icon}
                                        </div>
                                    </div>

                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <motion.div 
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="absolute bottom-4 left-4 backdrop-blur-xl px-3 py-1.5 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/20 flex items-center gap-1.5"
                                        >
                                            <Sparkles size={10} className="text-[#0066FF]" />
                                            <span className="text-[#0066FF] text-[10px] font-semibold uppercase tracking-wider">Flagship</span>
                                        </motion.div>
                                    )}

                                    {/* Hover Icon */}
                                    <motion.div 
                                        className="absolute inset-0 flex items-center justify-center"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ 
                                            opacity: hoveredId === project.id ? 1 : 0,
                                            scale: hoveredId === project.id ? 1 : 0.8
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
                                            <Code2 className="text-white w-8 h-8" />
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col">
                                    {/* Domain */}
                                    <span 
                                        className="text-[10px] font-bold uppercase tracking-widest mb-2"
                                        style={{ color: categoryMeta[project.category]?.color }}
                                    >
                                        {project.domain}
                                    </span>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#0066FF] transition-colors leading-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-xs text-[#6B7280] mb-2">{project.subtitle}</p>
                                    
                                    {/* Role Badge - Highlighted */}
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/20 w-fit mb-3">
                                      <span className="text-[9px] text-[#6B7280]">Role:</span>
                                      <span className="text-[10px] font-bold text-[#0066FF]">{project.role}</span>
                                    </div>

                                    {/* Short Description */}
                                    <p className="text-xs text-[#9CA3AF] leading-relaxed mb-4 line-clamp-2">
                                        {project.description}
                                    </p>
                                    
                                    {/* Results Preview */}
                                    <div className="grid grid-cols-4 gap-1.5 mb-4">
                                      {project.results.slice(0, 4).map((result, idx) => (
                                        <div key={idx} className="text-center p-1.5 rounded-lg bg-white/[0.02]">
                                          <div className="text-xs font-bold text-white">{result.value}</div>
                                          <div className="text-[7px] text-[#6B7280] uppercase">{result.label}</div>
                                        </div>
                                      ))}
                                    </div>
                                    
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {project.tags.slice(0, 3).map(tag => (
                                            <span 
                                                key={tag} 
                                                className="text-[9px] uppercase tracking-wider px-2 py-1 rounded-lg bg-white/[0.03] text-[#6B7280] border border-white/[0.05]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center gap-3 pt-4 border-t border-white/[0.05] mt-auto">
                                        {project.github && (
                                            <a 
                                                href={project.github} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] text-[#9CA3AF] hover:text-white hover:bg-white/[0.08] transition-all text-xs"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <Github size={12} />
                                                Code
                                            </a>
                                        )}
                                        <button 
                                            onClick={() => setSelectedProject(project)}
                                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0066FF] text-white text-xs font-medium hover:bg-[#0052CC] transition-all group/btn"
                                        >
                                            View Project
                                            <ArrowUpRight size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20"
                >
                    <Code2 size={48} className="mx-auto text-[#374151] mb-4" />
                    <p className="text-[#6B7280]">No projects in this category yet.</p>
                </motion.div>
            )}

            {/* Project Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectDetailModal 
                        project={selectedProject} 
                        onClose={() => setSelectedProject(null)} 
                    />
                )}
            </AnimatePresence>
        </div>
    );
};