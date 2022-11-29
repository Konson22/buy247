import { FaWallet, FaHandshake, FaUnity } from 'react-icons/fa'

export default function Features(){
    return(
        <div className='home-section feature-container d-flex'>
            <div className="feature-sidebar">
                <img src={process.env.PUBLIC_URL+'/images/shopping-bg.jpg'} alt='' />
            </div>
            <div className="feature-content">
                <div className="home-section-heading">
                    <h1>why to shop at Buy247</h1>
                </div>
                <div className="home-section-content">
                    <div className="mt-3">
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
            </div>
        </div>
    )
}

export const featuresData = [
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
        title:`Present your product`,
        discription:`In a website store, you can write detailed product descriptions, provide details such.`,
        icon:<FaUnity className='icon' />
    },
    {
        title:`Save Money`,
        discription:`At the Mission Store, you can find quality products at affordable prices, even on a limited budget.`,
        icon:<FaWallet className='icon' />
    },
]