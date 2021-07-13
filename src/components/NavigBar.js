import React from "react";
import { Link } from "react-router-dom";

function NavigBar({ ...otherProps }) {
  return (
    <div
      {...otherProps}
     class=" px-16 py-7 self-center grid grid-flow-col auto-cols-max gap-4"
     >
    
      <nav>
        <ul class="grid grid-flow-col gap-8">
          <li>
            <Link to="/"><b>Overview</b></Link>
          </li>
          <li>
            <Link to="/Pricing"><b>Pricing</b></Link>
          </li>
          <li>
            <Link to="/CaseStudies"><b>Case Studies</b></Link>
          </li>
          <li>
            <Link to="/CaseStudiesInner"><b>FAQ</b></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigBar;
