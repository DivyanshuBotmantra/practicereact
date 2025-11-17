import React from 'react'
import Image1 from '../assets/download (1).jpg'
import Image2 from '../assets/download.jpg'

const user = {
    name: "divyanshu",
    age: 23,
    imageUrl: Image1
}

const user2 = {
    name: "checkmadi",
    age: 50,
    imageUrl: Image2
}

let content;
if (user.age > 50) {
    content = user
}
else { 
    content = user2
}


const avatarStyle = {
    width: 120,
    height: 120
}

const Display = () => {

    return (
        <div>
            <h1>{content.name}</h1>
            <span>{content.age}</span>
            <div>
                <img src={ content.imageUrl} alt={'photo of ' + content.name} />
            </div>
        </div>
    )
}

export default Display
