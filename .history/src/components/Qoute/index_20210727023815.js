import React, {useState} from "react";
import "./style.scss";

const Index = () => {

    const quotes = [
        'Organize your time 🤯',
        'Time is precious 🕐',
        'Why you are waiting!, Do it now 🙂',
        'Plans are nothing, Planning is everything 👌',
        'All time management begins with planning 💯',
        'Focus on being productive instead of busy 🧐'
    ];
    const [singleQoute, setSingleQoute] = useState(quotes[Math.floor(Math.random()*quotes.length)]);


    return (
        <section className="qoute">
            <blockquote> { singleQoute } </blockquote>
        </section>
    )
}

export default Index
