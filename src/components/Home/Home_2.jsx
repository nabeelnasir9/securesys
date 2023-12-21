import '../Home/Home_2.css';
import img1 from '../../assets/Home/img1.png';
import img2 from '../../assets/Home/img2.png';
import img3 from '../../assets/Home/img3.png';
const Home_2 = () => {
  return (
    <div className='Home2_wrapper'>
       <button className='home_2_button'>
        LEADING CUTTING EDGE SOLUTION FOR INDUSTRY
       </button>
       <div className='home_2_texts'>
        <div className='home_2_texts_1'>
         <span style={{color:'#f19100'}}>  3 Steps </span> Solution for you to grow and
        </div>
        <div className='home_2_texts_2'>
           expand your business with help of us.
        </div>
       </div>
       <div className='home_2_imgs'>
        <img src={img1} alt="" className='home_2_img-1'/>
        <img src={img2} alt="" className='home_2_img-2'/>
        <img src={img3} alt="" className='home_2_img-3'/>
       </div>
    </div>
  )
}

export default Home_2