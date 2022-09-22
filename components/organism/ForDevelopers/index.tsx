import React from 'react';
import ForRole from '../../molecules/ForRole';

const leftText = [
  {
    title: 'Custom Code & APIs',
    description: 'Use custom libraries or write your own code to build exactly what you want.',
  },
  {
    title: 'Custom CSS',
    description: 'Add custom CSS for more control on your customer experience.',
  },
  {
    title: 'HTML Snippets',
    description: 'Build custom elements and interactions using HTML snippets.',
  },
];

const rightText = [
  {
    title: 'iFrames',
    description: 'Build custom elements and interactions using HTML snippets into an iFrame.',
  },
  {
    title: 'Team Version Control',
    description: 'Automatic versioning and roll-back means worry-free team collaboration.',
  },
  {
    title: 'SSL',
    description: 'Easily secure your site and data with SSL.',
  },
];

export default function ForDevelopers() {
  return (
    <ForRole leftText={leftText} rightText={rightText} image="images/pic4.png" />
  );
}
