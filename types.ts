import { ReactNode } from 'react';

export interface SectionProps {
  className?: string;
  id?: string;
}

export interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
  delay?: number;
}

export enum AnimationPhase {
  SPEED = 'speed',
  TRUST = 'trust',
  SLOW = 'slow'
}