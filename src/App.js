import React  from 'react'
import Food from './components/Food';
import HeadlineCards from './components/HeadlineCards';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Category from './components/Category'
function App() {
  return (
    <>
    <Navbar />
    <Hero/>
    <HeadlineCards/>
    <Food/>
    <Category/>
    </>
  );
}

export default App;
