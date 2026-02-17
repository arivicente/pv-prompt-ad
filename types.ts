// Import React to resolve the 'React' namespace when using React.ReactNode
import React from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}