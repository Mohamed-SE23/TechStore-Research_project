import React, { useState } from 'react'
import GadgetsMenu from './GadgetsMenu';
import { RenderGadgets } from './RenderGadgets';

const Products = () => {
    const [isActive, setIsActive] = useState('Computers');

    return (
     <div>
        <GadgetsMenu 
                  setIsActive={setIsActive}
                  isActive={isActive} />
        <RenderGadgets isActive={isActive} />
      </div>
  )
}

export default Products;
