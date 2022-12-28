

export default function TopSallers(){
    return(
        <div className="sidebar-content top-sallers-content border">
            <h4>Top Sallers</h4>
            <div className="top-saler-content">
                {topSallersData.map(saler => (
                    <div className='saler-card d-flex' key={saler._id}>
                        <div className="logo rounded-circle">
                            <img className="logo rounded-circle" src={saler.logo} alt='' />
                        </div>
                        <div className="flex-grow-1">
                            <h5 className='m-0'>{saler.name}</h5>
                            <p className='m-0'>{saler.about}</p>
                            <div className="d-flex">
                                {saler.categories.map(category => (
                                    <span className='bg-secondary p-1 mx-2' key={category}>{category}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


const topSallersData = [
    {
        _id:'1',
        name:'SKA Shopping',
        logo:process.env.PUBLIC_URL+'/images/cars.jpg',
        about:'Look through our large inventory of products and find something unique and useful.',
        categories:[
            'electronics', 'Skin care'
        ]
    },
    {
        _id:'2',
        name:'Marlin Salon',
        logo:process.env.PUBLIC_URL+'/images/fashion.jpg',
        about:'Look through our large inventory of products and find something unique and useful.',
        categories:[
            'Beauty'
        ]
    },
    {
        _id:'1e3',
        name:'SKA Shopping',
        logo:process.env.PUBLIC_URL+'/images/jewelary.jpg',
        about:'Look through our large inventory of products and find something unique and useful.',
        categories:[
            'electronics', 'Skin care'
        ]
    },
    {
        _id:'24d',
        name:'Amjad Store',
        logo:process.env.PUBLIC_URL+'/images/laptop.jpg',
        about:'Look through our large inventory of products and find something unique and useful.',
        categories:[
            'Auto & spare'
        ]
    },
]