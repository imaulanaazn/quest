import React from 'react';
import ForRole from '../../molecules/ForRole';

const leftText = [
  {
    title: 'Bring in your designs',
    description: 'Design like you do today using frames in Figma.',
  },
  {
    title: 'Design responsively',
    description: 'Quest creates break-points automatically so your experience works as expected on any screen size.',
  },
  {
    title: 'Interactions',
    description: 'Set up click, tap, mouse-over, mouse-out, etc. to build anything you want.',
  },
  {
    title: 'Animations',
    description: 'Create animations easily to build a delightful experience for your users.',
  },
];

const rightText = [
  {
    title: 'Custom Fonts',
    description: 'Add your custom fonts to create something unique.',
  },
  {
    title: 'Components',
    description: 'Reusable components to help you build fast across the team.',
  },
  {
    title: 'SFX & Music',
    description: 'Build an immersive experience for your audience.',
  },
  {
    title: 'Video',
    description: 'Embed video easily to create an engaging experience.',
  },
  {
    title: 'Scroll Effects',
    description: 'Set up parallax scrolling and trigger special effects on scroll.',
  },
];

export default function ForDesigners() {
  return (
    <ForRole leftText={leftText} rightText={rightText} image="images/pic2.png" />
  );
}
