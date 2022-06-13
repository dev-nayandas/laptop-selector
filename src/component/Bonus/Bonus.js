import React from 'react';
import './Bonus.css'

const Bonus = () => {
    return (
        <div>
           <h1>How React Works</h1>
           <h4>
            1. Reacts works by its virtual DOM.
            2. If any change reacts does not change its state but it change after virtual DOM..
            3.Reacts creats a tree by which it's  able to do efficient diff computations on the nodes.
            4.React works as unidirectionally 
            5. Similar in look and different in data known as component by which React work mostly 
            6. Reacts use a special syntax called JXS by which we can write 100% html in javascript.
           </h4>
           <h1>Props vs state</h1>
           <h4>
            1. Props are Immutable where states are mutable.
            2. Props can't be modified where states can be modified.
            3. Props can't be change in a component where state can be change in component.
            4. Props passed in from parent where state created in the component.
            5. Props mostly used in React than state
           </h4>
        </div>
    );
};

export default Bonus;