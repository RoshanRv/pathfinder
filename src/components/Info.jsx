import React from 'react';
import matrix from '../img/matrix.gif'
import path from '../img/pathgif.gif'
import dij from '../img/dij.gif'
import graph from '../img/graph.gif'
import graph2 from '../img/graph2.gif'
import greedy from '../img/greedy.gif'
import end from '../img/end.gif'
import truegif from '../img/true.gif'
import seek from '../img/seek.gif'
import queue from '../img/queue.gif'
import pathgif from '../img/path.gif'
import shortpath from '../img/shortpath.png'
import google from '../img/google.gif'
import social from '../img/social.gif'
import social2 from '../img/social2.gif'
import social3 from '../img/social3.gif'
import drone from '../img/drone.gif'
import dijimg from '../img/dijimg.webp'

const Info = () => {
  return <section className='txt-sha  '>
      <div className="md:flex justify-around items-center bg-black/90 text-white md:p-10 border-b-2">
          <div >
              <h1 className='text-center md:text-5xl py-4 pb-6'>What is Pathfinder?</h1>
              <div className='bg-s'>
                <div className='md:flex justify-around py-4 text-center'>
                    <img src={matrix} alt="" className='w-32 mx-auto py-2'/>
                    <img src={path} alt="" className='w-32 mx-auto py-2'/>
                    <img src={dij} alt="" className=' w-44 mx-auto py-2'/>
                </div>
              <p className='text-center'>It's Uses Greedy Algorithm to find Shortest Path between 2 points using Mathematical Concepts like Dijkstra Algorithm from Graph Theory and Matrix.</p>
              </div>
          </div>
      </div>
      <div className="md:flex justify-around items-center bg-black text-white md:p-10 md:py-8 p-4 border-b-2">
          <div >
              <h1 className='text-center md:text-5xl py-6'>Graph Theory</h1>
              <div className='md:flex justify-around items-center py-4'>
                    <img src={graph} alt="" className='py-2'/>
                    <img src={graph2} alt="" className='h-60 '/>
                    
                </div>
              <p className='py-3  text-center'>In mathematics, graph theory is the study of graphs, which are mathematical structures used to model pairwise relations between objects.</p>
              <p className='py-3 text-center'>Graphs can be used to model many types of relations and processes in physical, biological,social and information systems.Many practical problems can be represented by graphs.</p>
              <p className='py-3 text-center'>Emphasizing their application to real-world systems, the term network is sometimes defined to mean a graph in which attributes (e.g. names) are associated with the vertices and edges, and the subject that expresses and understands the real-world systems as a network is called network science.</p>
          </div>
      </div>
      <div className="md:flex justify-around items-center bg-black/90 text-white md:p-10 p-4 border-b-2">
          <div >
              <h1 className='text-center md:text-5xl py-6'>Greedy Algorithm</h1>
              <div className='flex justify-around text-center'>
                    <img src={greedy} alt="" className=' ' className='pb-6'/> 
                </div>
              <p className='text-center'>A greedy algorithm is an approach for solving a problem by selecting the best option available at the moment. It doesn't worry whether the current best result will bring the overall optimal result.</p>
          </div>
      </div>
      <div className="md:flex justify-around items-center bg-black text-white md:p-10 p-4 border-b-2">
          <div >
              <h1 className='text-center md:text-5xl py-4 pb-6'>Dijkstra Algorithm</h1>
              <img src={dijimg} alt=""  className='bg-white w-[50rem] mx-auto rounded mb-8'/>
              <p className='py-1 text-center'>Dijkstra's algorithm allows us to find the shortest path between any two nodes of a graph, we can also find the longest path between any 2 nodes but the result won't be the most optimal.</p>
          </div>
      </div>
      <div className="md:flex justify-around items-center bg-black/90 text-white md:p-10 p-4 border-b-2">
          <div >
              <h1 className='text-center md:text-5xl py-4 pb-8'>How Does It Works?</h1>
              <div className="md:flex justify-around items-center pb-6">
                  <img src={seek} alt="" className='py-2 mx-auto'/>
                  <img src={queue} alt="" className='md:w-60 py-2 mx-auto'/>
                  <img src={pathgif} alt="" className='md:w-60 py-2 mx-auto'/>
              </div>
              <p className='py-1 text-center pb-4'>The Pathfinder Looks for its Nearby node and it will check whether its the ending point. If it's not the end point, then it's near by node will be added in an array, and when we add them in array we also add a path of its previous node so that we can trackback to the shortest path when we find the end point.</p>
              <div className="md:flex justify-around items-center">
                  <img src={end} alt=""  className="mx-auto py-2" />
                  <img src={truegif} alt="" className='md:w-60 py-2 mx-auto'/>
                  <img src={shortpath} alt="" className='md:w-60 py-2 mx-auto'/>
              </div>
              <p className='py-1 text-center pt-3' >When the node looking ending pt. finds the ending pt. the final node which found the end pt. will have the shortest path from start to end using that path we can visualise the shortest path from start to end.</p>
          </div>
      </div>
      <div className="md:flex justify-around items-center bg-black text-white md:p-10 p-4 border-b-2">
          <div >
              <h1 className='text-center md:text-5xl py-4'>Applications</h1>
              <h1 className='text-center md:text-4xl py-4'>Google Maps</h1>
              <img src={google} alt="" className='mx-auto py-6' />
              <p className='py-1 text-center pb-4'>Many times we have tried to find the distance in G-Maps, from one city to another, or from your location to the nearest desired location. There encounters the Shortest Path Algorithm, as there are various routes/paths connecting them but it has to show the minimum distance, so Dijkstra's Algorithm is used to find the minimum distance between two locations along the path.</p>

              <h1 className='text-center md:text-4xl py-4'>Social Networking</h1>
                <div className="md:flex justify-around items-center">
                    <img src={social} alt="" className='w-60 mx-auto py-2'/>
                    <img src={social2} alt=""  className='w-60  mx-auto py-2' />
                    <img src={social3} alt="" className='w-60  mx-auto py-2'/>
                </div>
                <p className='text-center py-6'>In many applications you might have seen the app suggests the list of friends that a particular user may know. How do you think many social media companies implement this feature efficiently, especially when the system has over a billion users. The standard Dijkstra algorithm can be applied using the shortest path between users measured through handshakes or connections among them</p>

                <h1 className='text-center md:text-4xl py-4'>Robotic Path</h1>
              <img src={drone} alt="" className='mx-auto w-96 py-4 ' />
              <p className='py-1 text-center '>Nowadays, drones and robots have come into existence, some of which are manual, some automated. The drones/robots which are automated and are used to deliver the packages to a specific location or used for a task are loaded with this algorithm module so that when the source and destination is known, the robot/drone moves in the ordered direction by following the shortest path to keep delivering the package in a minimum amount of time.</p>
            
          </div>
      </div>
  </section>;
};

export default Info;
