import React from 'react'
import './../styling/Packages.css'

function Packages() {
  return (
    <div className='packages-container'>
      <div className='full-package'>
        <div className="book">
          <div className='peckage-style' id='basic-package'>
            <p> <u>Hall:</u> A versatile event space that can be decorated according to your preferences.</p>
            <p> <u>Food:</u> A simple but delicious buffet-style meal with a selection of appetizers, main courses and desserts. Customizable menu options are available</p>
            <p>This deal focuses on providing a suitable venue and catering services while giving you the flexibility to organize your entertainment options. If you decide to add a DJ, photographer and alcohol later, you can do it separately according to your preferences and budget.</p>
            <div className='price'>price: $20,000 </div>
          </div>
          <div className="cover">
            <h1>Basic Package</h1>
            <div className='icons'>
            <img width="64" height="64" src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/external-hall-wedding-xnimrodx-lineal-xnimrodx.png" alt="external-hall-wedding-xnimrodx-lineal-xnimrodx"/>
            <img width="64" height="64" src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/external-plate-wedding-kmg-design-detailed-outline-kmg-design.png" alt="external-plate-wedding-kmg-design-detailed-outline-kmg-design"/>
            </div>
          </div>
        </div>
      </div>
      <div className='full-package'>
        <div className="book" id='Young-Pack1'>
          <div className='peckage-style' id='Young-Pack'>
            <p> <u>Hall:</u> A versatile event space that can be decorated according to your preferences.</p>
            <p> <u>Food:</u> A simple but delicious buffet-style meal with a selection of appetizers, main courses and desserts. Customizable menu options are available</p>
            <p> <u>Alcohol:</u> open bar service with a selection of premium spirits, wines and beers for the entire event.</p>
            <p>This deal is similar to the basic package but includes alcohol in addition.</p>
            <div className='price'>price: $25,000</div>
          </div>
          <div className="cover">
            <h1>Young Pack</h1>
            <div className='icons'>
            <img width="64" height="64" src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/external-hall-wedding-xnimrodx-lineal-xnimrodx.png" alt="external-hall-wedding-xnimrodx-lineal-xnimrodx"/>
            <img width="64" height="64" src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/external-plate-wedding-kmg-design-detailed-outline-kmg-design.png" alt="external-plate-wedding-kmg-design-detailed-outline-kmg-design"/>
            <img width="64" height="64" src="https://img.icons8.com/laces/64/bar.png" alt="bar"/>
            </div>
          </div>
        </div>
      </div>
      <div className='full-package'>
        <div className="book">
          <div className='peckage-style' id='all-inclusive'>
            <p> <u>Hall:</u> A beautiful banquet hall in a premium hotel or designated event venue.</p>
            <p> <u>Food:</u> a three-course gourmet meal with a variety of options for starters, main courses and desserts. Customizable menu to accommodate dietary restrictions.</p>
            <p> <u>Alcohol:</u> open bar service with a selection of premium spirits, wines and beers for the entire event.</p>
            <p> <u>DJ: </u> Professional DJ services with a wide variety of musical genres and a quality sound system.</p>
            <p> <u>Photographer:</u> an experienced wedding photographer throughout the event, taking candid moments and official photos.</p>
            <div className='price'>price: $40,000</div>
          </div>
          <div className="cover">
            <h1>All Inclusive</h1>
            <div className='icons'>
            <img width="64" height="64" src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/external-hall-wedding-xnimrodx-lineal-xnimrodx.png" alt="external-hall-wedding-xnimrodx-lineal-xnimrodx"/>
            <img width="64" height="64" src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/external-plate-wedding-kmg-design-detailed-outline-kmg-design.png" alt="external-plate-wedding-kmg-design-detailed-outline-kmg-design"/>
            <img width="64" height="64" src="https://img.icons8.com/laces/64/bar.png" alt="bar"/>
            <img width="50" height="50" src="https://img.icons8.com/ios/50/dj.png" alt="dj"/>
            <img width="50" height="50" src="https://img.icons8.com/ios/50/camera--v3.png" alt="camera--v3"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Packages