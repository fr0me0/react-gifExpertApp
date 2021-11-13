import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GixExpertApp = () => {
 
    const [ categories, setCategories ] = useState([ 'Cyberpunk 2077' ]);

    return (

        <>
            <h2>GifExpertApp</h2>   
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>

    );
}
