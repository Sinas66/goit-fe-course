import React, { lazy, Suspense } from 'react';

const AsyncHome = lazy(() => import('./Home/Home'));
const AsyncAbout = lazy(() => import('./About/About'));
const AsyncPets = lazy(() => import('./Pets/Pets'));
const AsyncPet = lazy(() => import('./Pet/Pet.js'));

export const Home = props => (
  <Suspense fallback={<div>Loading...</div>}>
    <AsyncHome {...props} />
  </Suspense>
);

export const About = props => (
  <Suspense fallback={<div>Loading...</div>}>
    <AsyncAbout {...props} />
  </Suspense>
);
export const Pets = props => (
  <Suspense fallback={<div>Loading...</div>}>
    <AsyncPets {...props} />
  </Suspense>
);
export const Pet = props => (
  <Suspense fallback={<div>Loading...</div>}>
    <AsyncPet {...props} />
  </Suspense>
);
