import { FaWallet, FaHandshake, FaUnity } from 'react-icons/fa'


export default function Benefits(){
    return(
        <div className='benefite-wraper'>
            {featuresData.map((feature, index) => (
                <div className='benefite-card d-flex align-items-center' key={index}>
                    {feature.icon}
                    <div className="benefite-card-text">
                        <h4>{feature.title}</h4>
                        <p>{feature.discription}</p>
                    </div>
                </div>
            ))}
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
        title:`Present your product`,
        discription:`In a website store, you can write detailed product descriptions, provide details such.`,
        icon:<FaUnity className='icon' />
    },
]