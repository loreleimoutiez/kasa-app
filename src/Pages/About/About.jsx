import React from 'react';
import Banner from '../../Components/Banner/Banner';
import { Collapse } from '../../Components/Collapse/Collapse';

export function About() {
    return (
      <main className='App'>
        <Banner showTitle={false} bannerImage="about-banner" />
        <Collapse />
      </main>
    );
}