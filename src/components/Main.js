import React from 'react'

export default function Main() {

    const [data, setData] = React.useState([])

    React.useEffect(() => { 

        fetch('https://trustoncloudtest.s3.ap-southeast-1.amazonaws.com/data.json')
        .then(response => response.json())
        .then(data => {
            setData(data)
        })
    }, [])

    return (
        
        <div className = "content">
            
            <h1>Top 5 Security Services On The Cloud</h1>
            
            <div className = "data">
                {data.map((item,index) => (
                    <div className = "item" key = {index}>
                        {console.log("item",item)}
                        <div className = "item-name">{index+1}. {item[index+1].name}</div>
                        <div className = "item-description">{item[index+1].content}</div>
                        <h4>Pros:</h4>
                        <div className = "item-pros">{item[index+1].pros}</div>
                        <h4>Cons:</h4>
                        <div className = "item-cons">{item[index+1].cons}</div>
                        
                    </div>))}
            </div>
                    
                



        </div>
    )
}
