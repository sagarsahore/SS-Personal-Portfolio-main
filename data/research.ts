import { Brain, Eye, Layers, Database, Server, Code, GitBranch, Terminal, Cpu, Activity, Search, Microscope, Target, Scan, BarChart3 } from 'lucide-react';

// --- Types ---

export interface ResearchDomain {
  id: string;
  title: string;
  icon: any;
  color: string;
  metrics: { label: string; value: string }[];
  description: string;
  focus: string[];
  approaches: string[];
}

export interface PipelineStep {
  id: string;
  title: string;
  description: string;
  tools: string[];
  icon: any;
}

export interface TechStackLayer {
  layer: string;
  items: { name: string; icon?: any; description?: string }[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: 'journal' | 'conference' | 'workshop' | 'thesis' | 'preprint';
  abstract: string;
  tags: string[];
  links: {
    pdf?: string;
    code?: string;
    doi?: string;
    demo?: string;
  };
  stats?: {
    citations?: number;
    stars?: number;
    impactFactor?: string;
  };
}

// --- Research Domains (Focused on Optometry & Vision) ---

export const researchDomains: ResearchDomain[] = [
  {
    id: 'ophthalmology',
    title: 'Computational Ophthalmology',
    icon: Eye,
    color: 'border-blue-500/30',
    metrics: [{ label: 'Sensitivity', value: '96%' }, { label: 'Datasets', value: '4+' }],
    description: 'Developing AI systems for early detection of retinal pathologies using high-resolution fundus imaging and OCT scans.',
    focus: ['Glaucoma Detection', 'Diabetic Retinopathy', 'Age-related Macular Degeneration'],
    approaches: ['Ensemble CNNs', 'Feature Pyramids', 'Vessel Segmentation']
  },
  {
    id: 'multimodal',
    title: 'Multimodal Medical Imaging',
    icon: Layers,
    color: 'border-purple-500/30',
    metrics: [{ label: 'Modalities', value: '3+' }, { label: 'Fusion Type', value: 'Late' }],
    description: 'Fusing fundus images, OCT scans, and clinical metadata to construct comprehensive diagnostic profiles for ophthalmic conditions.',
    focus: ['Image-Clinical Data Fusion', 'Cross-Modal Learning', 'Risk Stratification'],
    approaches: ['Transformer Encoders', 'Attention Mechanisms', 'Contrastive Learning']
  },
  {
    id: 'retinal-analysis',
    title: 'Retinal Image Analysis',
    icon: Scan,
    color: 'border-cyan-500/30',
    metrics: [{ label: 'Accuracy', value: '94%' }, { label: 'Processing', value: '<2s' }],
    description: 'Advanced image processing techniques for optic disc segmentation, cup-to-disc ratio calculation, and RNFL thickness estimation.',
    focus: ['Optic Disc Segmentation', 'Cup-to-Disc Ratio', 'RNFL Analysis'],
    approaches: ['U-Net Variants', 'Semantic Segmentation', 'Morphological Analysis']
  },
  {
    id: 'clinical-validation',
    title: 'Clinical AI Validation',
    icon: BarChart3,
    color: 'border-emerald-500/30',
    metrics: [{ label: 'Datasets', value: 'Multi-center' }, { label: 'Validation', value: 'External' }],
    description: 'Rigorous validation methodologies ensuring AI models generalize across diverse patient populations and imaging equipment.',
    focus: ['Cross-Dataset Validation', 'Bias Analysis', 'Performance Benchmarking'],
    approaches: ['Statistical Testing', 'Ablation Studies', 'Sensitivity Analysis']
  }
];

// --- Research Pipeline ---

export const researchPipeline: PipelineStep[] = [
  {
    id: 'problem',
    title: 'Clinical Problem Formulation',
    description: 'Collaborating with ophthalmologists to translate clinical needs into tractable ML research questions.',
    tools: ['Literature Review', 'Clinical Interviews', 'Dataset Analysis'],
    icon: Search
  },
  {
    id: 'data',
    title: 'Ophthalmic Data Curation',
    description: 'Preparing and augmenting retinal imaging datasets with standardized preprocessing pipelines.',
    tools: ['CLAHE', 'OpenCV', 'DICOM', 'Albumentations'],
    icon: Database
  },
  {
    id: 'model',
    title: 'Neural Architecture Design',
    description: 'Developing custom CNN architectures optimized for retinal feature extraction and classification.',
    tools: ['PyTorch', 'EfficientNet', 'ResNet', 'Vision Transformers'],
    icon: GitBranch
  },
  {
    id: 'eval',
    title: 'Clinical Evaluation',
    description: 'Comprehensive evaluation using sensitivity, specificity, AUC-ROC, and clinical relevance metrics.',
    tools: ['Scikit-learn', 'Grad-CAM', 'Cross-validation', 'External Testing'],
    icon: Activity
  },
  {
    id: 'deploy',
    title: 'Research Dissemination',
    description: 'Publishing findings in peer-reviewed venues and making code/models available for reproducibility.',
    tools: ['LaTeX', 'GitHub', 'arXiv', 'Conference Submissions'],
    icon: Server
  }
];

// --- Tech Stack ---

export const techStack: TechStackLayer[] = [
  {
    layer: 'Compute Infrastructure',
    items: [
      { name: 'NVIDIA GPU Cluster', icon: Cpu, description: 'A100/V100 for training' },
      { name: 'Google Colab Pro', icon: Server, description: 'Cloud compute' },
      { name: 'Docker Containers', icon: Server, description: 'Reproducible environments' },
    ]
  },
  {
    layer: 'Deep Learning Frameworks',
    items: [
      { name: 'PyTorch', icon: Code, description: 'Primary framework' },
      { name: 'TensorFlow/Keras', icon: Code, description: 'Secondary framework' },
      { name: 'Hugging Face', icon: Terminal, description: 'Pretrained models' },
    ]
  },
  {
    layer: 'Medical Imaging Tools',
    items: [
      { name: 'OpenCV', icon: Eye, description: 'Image processing' },
      { name: 'MONAI', icon: Microscope, description: 'Medical AI toolkit' },
      { name: 'SimpleITK', icon: Scan, description: 'Medical image I/O' },
    ]
  }
];

// --- Publications (Focused on Vision Research) ---

export const publications: Publication[] = [
  {
    id: 'glaucoma-cnn-2025',
    title: 'Deep Learning Approaches for Early Glaucoma Detection: A Comparative Study of CNN Architectures',
    authors: ['Sagar Sahore', 'Supervisor Name'],
    venue: 'IEEE International Conference on Healthcare Informatics (ICHI)',
    year: 2025,
    type: 'conference',
    abstract: 'This paper presents a comprehensive comparative study of CNN architectures for early-stage glaucoma detection from fundus images. We evaluate ResNet50, EfficientNet-B0, and custom ensemble models, achieving 96% sensitivity on multiple benchmark datasets. Our novel preprocessing pipeline incorporating CLAHE and vessel segmentation significantly improves feature robustness.',
    tags: ['Glaucoma', 'Deep Learning', 'Fundus Imaging', 'Medical AI'],
    links: {
      pdf: '#',
      code: 'https://github.com/sagarsahore',
    },
    stats: {
      citations: 0,
      impactFactor: '3.4'
    }
  },
  {
    id: 'multimodal-retina-2025',
    title: 'Multimodal Fusion of Fundus Images and Clinical Data for Enhanced Diabetic Retinopathy Staging',
    authors: ['Sagar Sahore', 'Supervisor Name'],
    venue: 'Medical Image Analysis (Under Review)',
    year: 2025,
    type: 'preprint',
    abstract: 'We propose a multimodal deep learning framework that fuses retinal fundus images with structured clinical metadata (HbA1c levels, disease duration) for improved diabetic retinopathy grading. Late fusion with attention mechanisms yields 8% improvement over image-only baselines.',
    tags: ['Diabetic Retinopathy', 'Multimodal Learning', 'Data Fusion'],
    links: {
      pdf: '#',
    }
  },
  {
    id: 'thesis-2026',
    title: 'AI-Powered Early Detection of Ophthalmic Diseases: A Deep Learning Approach to Fundus Image Analysis',
    authors: ['Sagar Sahore'],
    venue: 'Ph.D. Thesis - University of Auckland',
    year: 2026,
    type: 'thesis',
    abstract: 'This doctoral thesis investigates the application of deep learning for early detection of sight-threatening eye diseases from fundus photography. The research addresses key challenges in medical AI including dataset bias, model interpretability, and clinical validation across diverse populations.',
    tags: ['Ophthalmology', 'Deep Learning', 'Medical Imaging', 'Clinical AI'],
    links: {
      pdf: '#',
    }
  }
];

// --- Research Metrics for PhD Profile ---

export const researchMetrics = {
  publications: { value: '3+', label: 'Publications', description: 'Conference & journal papers' },
  datasets: { value: '4+', label: 'Datasets', description: 'Benchmark datasets analyzed' },
  sensitivity: { value: '96%', label: 'Model Sensitivity', description: 'Best-in-class detection' },
  collaboration: { value: '2', label: 'Clinical Partners', description: 'Hospital collaborations' }
};

// --- PhD Research Progress ---

export const phdProgress = {
  phase: 'Year 1',
  milestones: [
    { name: 'Literature Review', status: 'completed', percentage: 100 },
    { name: 'Dataset Collection', status: 'completed', percentage: 100 },
    { name: 'Baseline Models', status: 'completed', percentage: 100 },
    { name: 'Novel Architecture', status: 'in-progress', percentage: 60 },
    { name: 'Clinical Validation', status: 'upcoming', percentage: 0 },
    { name: 'Thesis Writing', status: 'upcoming', percentage: 0 }
  ],
  nextDeadline: 'Confirmation Seminar - March 2026'
};
