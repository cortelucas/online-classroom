import { NextPage } from 'next';
import Nav from '../components/nav';
import Head from 'next/head';

const Home: NextPage = () => {
  return (   
    <div>
    <Nav />
      <div className="py-10">
        <h1 className="text-5xl text-center text-accent-1">Next.JS + TailWind CSS</h1>
      </div>
    </div>
    
  )
}
export default Home;

