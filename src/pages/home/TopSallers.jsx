import Carousel from 'react-elastic-carousel'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'

const breakPoints = [
    {
      width:0,
      itemsToShow:2,
      itemsToScroll:2
    },
    {
      width:500,
      itemsToShow:3,
      itemsToScroll:1
    },
]


export default function TopSallers(){
    return(
        <div className="sidebar-content top-sallers-content">
            <div className='d-flex align-items-center justify-content-between mb-2'>
                <h4>Top Sallers</h4>
                <div className='d-flex align-items-center'>
                    <FaChevronLeft className='chevron-icon' />
                    <FaChevronRight className='chevron-icon' />
                </div>
            </div>
            <div className="top-saler-content sm-hide">
                {topSallersData.map(saler => (
                    <div className='saler-card' key={saler._id}>
                        <div className="logo rounded-circle">
                            <img className="logo rounded-circle" src={saler.logo} alt='' />
                        </div>
                        <div className="flex-grow-1">
                            <h5 className='m-0'>{saler.name}</h5>
                            <p className='m-0'>{saler.about}</p>
                            <div className="d-flex">
                                {saler.categories.map(category => (
                                    <span className='' key={category}>{category}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='top-saler-content lg-hide'>
                <Carousel 
                    breakPoints={breakPoints} 
                    initialFirstItem={0}
                    className='carousel-wraper'
                >
                    {topSallersData.map(saler => (
                        <div className='saler-card' key={saler._id}>
                            <div className="logo rounded-circle">
                                <img className="logo rounded-circle" src={saler.logo} alt='' />
                            </div>
                            <div className="flex-grow-1">
                                <h5 className='m-0'>{saler.name}</h5>
                                <p className='elips-text m-0'>{saler.about}</p>
                                <div className="d-flex mt-2">
                                    <span className=' bg-info text-white'>{saler.categories[0]}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}


const topSallersData = [
    {
        _id:'1',
        name:'SKA Shopping',
        logo:process.env.PUBLIC_URL+'/images/cars.jpg',
        about:'Look through our large inventory of products.',
        categories:[
            'electronics', 'Skin care'
        ]
    },
    {
        _id:'2',
        name:'Marlin Salon',
        logo:process.env.PUBLIC_URL+'/images/fashion.jpg',
        about:'Look through our large inventory of products.',
        categories:[
            'Beauty'
        ]
    },
    {
        _id:'1e3',
        name:'SKA Shopping',
        logo:process.env.PUBLIC_URL+'/images/jewelary.jpg',
        about:'Look through our large inventory of products.',
        categories:[
            'electronics', 'Skin care'
        ]
    },
    {
        _id:'24d',
        name:'Amjad Store',
        logo:process.env.PUBLIC_URL+'/images/laptop.jpg',
        about:'Look through our large inventory of products.',
        categories:[
            'Auto & spare'
        ]
    },
]