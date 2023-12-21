import './About.css';
import About_1 from './About_1';
const About = () => {
  return (
    <div className='about_wrapper'>
    <button className='about_button'>
     Why Should Choose us?
    </button>
    <div className='about_texts'>
     <div className='about_texts_1'>
      <span style={{color:'#f19100'}}>  Grow </span>, expand and automate
     </div>
     <div className='about_texts_2'>
        your time and surveillance.
     </div>
    </div>
    <div>
       <About_1/>
    </div>
 </div>
  )
}

export default About