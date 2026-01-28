import React from 'react';

export interface Publication {
  id: string;
  title: string;
  conference: string;
  year: number;
  authors: string[];
  impactFactor?: string;
  status?: 'Published' | 'Under Review' | 'Preprint';
  link: string;
  bibtex: string;
}

export interface ResearchPillar {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
  category: 'AI' | 'Salesforce' | 'Data' | 'FullStack' | 'Cloud' | 'Analytics' | 'Other';
  link?: string;
  github?: string;
  featured?: boolean;
  imageGradient: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  description?: string;
  honors?: string[];
}