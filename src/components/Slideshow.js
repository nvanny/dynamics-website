import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';

 import '../css/DynamicStyle.css';
 class Slideshow extends Component {
     render() {
 		// component will render JSX (react's version of html) inside return statement
 		const properties = {
 			duration: 3000,
 			transitionDuration: 500,
 			infinite: true,
 			indicators: true,
 			arrows: true,
 			onChange: (oldIndex, newIndex) => {
 			  console.log(`slide transition from ${oldIndex} to ${newIndex}`);
 			}
 		  }
 		  const Slideshow = () => {
            var pictures = this.props.slideImages.map((item, i) => 
				<div className={i == (this.props.special - 1) ? "each-slide-special":"each-slide"}> 
					<img src = {item} alt="Loading Error"/> 
				</div>);
 			return (
 				<div className="danceimg" onContextMenu={(e)=> {e.preventDefault(); return false;}}>
                    <Slide {...properties}>
						{pictures}
                    </Slide>
            </div>
 			)
         }
         return (
             <div>
                 <Slideshow />
             </div>
         );
     }
 }

 export default Slideshow;