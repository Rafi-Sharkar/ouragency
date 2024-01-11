import style from './Services.module.css'
import {icons} from './data'
import img1 from './images/bg_01.jpg'

export default function Services() {
  return (
    <>
  <div className="border-[1rem] bg-[img1]">
    <h3>Perfection of work</h3>
    <h1>Our purpose is improved your business experience</h1>
    <button>Start Now</button>
  </div>
  
  <div className={`${style.infinite} ${style.highway_slider}`}>
		<div className={`${style.container} ${style.highway_barrier}`}>
			<ul className={style.highway_lane}>
				{icons.map((icon,i)=> {<li className={style.highway_car}><img className={style.image} src={icon.img} key={i}/></li>})}
							
			</ul>
		</div>
	</div>

  </>
    
  )
}

