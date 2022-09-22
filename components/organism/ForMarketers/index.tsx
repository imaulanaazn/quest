import React from 'react';
import ForRole from '../../molecules/ForRole';

const leftText = [
  {
    title: 'Custom Domain',
    description: 'Launch fast with your own custom domain.',
  },
  {
    title: 'A/B testing',
    description: 'Creating a variant of a page is as easy as importing a new design document.',
  },
  {
    title: 'Custom Forms',
    description: 'Easily set up custom designed forms for customers to provide input or contact you.',
  },
];

const rightText = [
  {
    title: 'Connect to CRM',
    description: 'Save customer data to CRM tools like HubSpot, Mailchimp, Salesforce, etc.',
  },
  {
    title: 'SEO Friendly',
    description: 'Score high on SEO with easy setup and detailed controls.',
  },
  {
    title: 'Fast Page Loads',
    description: 'Optimized pages that load fast for best customer experience and high page ranking.',
  },
];

export default function ForMarketers() {
  return (
    <ForRole leftText={leftText} rightText={rightText} image="images/pic3.png" />
  );
}
