import { FaWallet, FaHandshake, FaUnity } from 'react-icons/fa'

export default function Features(){
    return(
        <div className='home-section featur-wraper'>
            <div className="home-section__heading text-center">
                <h1>why to shop at our online store</h1>
            </div>
            <div className="featur-wraper__content">
                {featuresData.map((feature, index) => (
                    <div className='featur-card d-flex' key={index}>
                        {feature.icon}
                        <div className="featur-card-text">
                            <h4>{feature.title}</h4>
                            <p>{feature.discription}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const featuresData = [
    {
        title:`Save Money`,
        discription:`At the Mission Store, you can find quality products at affordable prices, even on a limited budget.`,
        icon:<FaWallet className='icon' />
    },
    {
        title:`Find Something Unique`,
        discription:`Look through our large inventory of products and find something unique and useful.`,
        icon:<FaHandshake className='icon' />
    },
    {
        title:`Present your product for salling`,
        discription:`In a website store, you can write detailed product descriptions, provide details such as fabric, size, color, condition, etc. You can also mention what kind of care fabric is required.`,
        icon:<FaUnity className='icon' />
    },
    {
        title:`Present your product for salling`,
        discription:`In a website store, you can write detailed product descriptions, provide details such as fabric, size, color, condition, etc. You can also mention what kind of care fabric is required.`,
        icon:<FaUnity className='icon' />
    },
]