import React from 'react'
import SectionHead from '../Components/SectionHead'
import SpotlightFlex from '../Components/SpotlightFlex';

function SpotLight() {
  const head = "SPOTLIGHT";
  const body =
    "This article dives into the common money traps that many college students fall into, and offers practical advice on how to avoid them. From overspending to getting caught up in credit card offers and Crypto scams, we’ll show you how to make wise financial choices that will set you up for success during and after college.";

  return (
    <div>
      <SectionHead head={head} body={body}/>
      <div className='bg-slate-500 h-screen'>
        <SpotlightFlex />

      </div>
    </div>
  )
}

export default SpotLight