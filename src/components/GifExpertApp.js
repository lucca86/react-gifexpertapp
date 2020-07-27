import React, {useState} from 'react';
import { CategoryAdd } from './CategoryAdd';
import { GifGrid } from './GifGrid';

const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () =>{
    //     setCategories([...categories, 'Spiderman'])
    // }

    return ( 
        <>
            <h2>GifExpertApp</h2>

            <CategoryAdd setCategories={ setCategories }/>
            <hr />


            <ol>
                { categories.map(category => (
                    <GifGrid 
                        key={category}
                        category={ category }/>
                ))
                    
                }
            </ol>
        </> 
     )
     ;
}
 
export default GifExpertApp;