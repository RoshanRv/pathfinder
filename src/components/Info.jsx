import React from 'react';

const Info = () => {
  return <section className='txt-sha  '>
      <div className="md:flex justify-around items-center bg-black text-white md:p-10">
          <div >
              <h1 className='text-center md:text-5xl py-4'>What is Pathfinder?</h1>
              <p>It's a Greedy Algorithm to find Shortest Path between 2 points using Mathematical Concepts like Dijkstra Algorithm from Graph Theory and Matrix.</p>
          </div>
      </div>
      <div className="md:flex justify-around items-center bg-black text-white md:p-10 p-4">
          <div >
              <h1 className='text-center md:text-5xl py-4'>Graph Theory</h1>
              <p className='py-1 '>In mathematics, graph theory is the study of graphs, which are mathematical structures used to model pairwise relations between objects.</p>
              <p className='py-1 '>Graphs can be used to model many types of relations and processes in physical, biological,social and information systems.Many practical problems can be represented by graphs.</p>
              <p className='py-1 '>Emphasizing their application to real-world systems, the term network is sometimes defined to mean a graph in which attributes (e.g. names) are associated with the vertices and edges, and the subject that expresses and understands the real-world systems as a network is called network science.</p>
          </div>
      </div>
      <div className="md:flex justify-around items-center bg-black text-white md:p-10 p-4">
          <div >
              <h1 className='text-center md:text-5xl py-4'>Greedy Algorithm</h1>
              <p>A greedy algorithm is an approach for solving a problem by selecting the best option available at the moment. It doesn't worry whether the current best result will bring the overall optimal result.</p>
          </div>
      </div>
      <div className="md:flex justify-around items-center bg-black text-white md:p-10 p-4">
          <div >
              <h1 className='text-center md:text-5xl py-4'>Dijkstra Algorithm</h1>
              <p className='py-1 '>Dijkstra's algorithm allows us to find the shortest path between any two nodes of a graph, we can also find the longest path between any 2 nodes but the result won't be the most optimal.</p>
          </div>
      </div>
      <div className="md:flex justify-around items-center bg-black text-white md:p-10 p-4">
          <div >
              <h1 className='text-center md:text-5xl py-4'>HOW DOES IT WORKS?</h1>
              <p className='py-1'>The Pathfinder Looks for its Nearby node and it will check whether its the ending pt. if its not the end point ,then its near by node will be added in an array , and when we add them in array we also add a path of its previous node so that we can trackback the shortest path when we find the end pt.</p>
              <p className='py-1'>When the node looking ending pt. finds the ending pt. the final node which found the end pt. will have the shortest path from start to end using that path we can visualise the shortest path from start to end.</p>
          </div>
      </div>
      <div className="md:flex justify-around items-center bg-black text-white md:p-10 p-4">
          <div >
              <h1 className='text-center md:text-5xl py-4'>Applications</h1>
              <p className='py-1 '>Its used in Google Maps to find the Shortest path between 2 places.</p>
            <p>Social Networking Applications.</p>
            <p>Robotic Path</p>
          </div>
      </div>
  </section>;
};

export default Info;
