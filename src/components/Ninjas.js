import React from 'react';


const Ninjas = ({ ninjas, deleteNinja }) => {

        const ninjaList = ninjas.map( (ninja, index) => {
           return ninja.age > 20 ? (
               <div className="ninja" key={ninja.id = index}>
                   <div>Name: {ninja.name}</div>
                   <div>Age: {ninja.age}</div>
                   <div>Belt: {ninja.rank}</div>
                   <button onClick={() => {deleteNinja(ninja.id)}} > deleteNinja</button>
               </div>
           ) : null;
            
            
        })
        return (
            <div className="ninja-list">
                { ninjaList }

            </div>
        )
}

export default Ninjas;
