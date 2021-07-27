import React, {useState} from "react";
import "./style.scss";

const Index = () => {

    const [quotes, setQuotes] = useState([
        'Organize your time',
        'Time is precious',
        'Why you are waiting!, Do it now',
        'Plans are nothing, Planning is everything'
    ]);


    return (
        <section className="qoute">
            <blockquote> { quotes[Math.floor(Math.random()*quotes.length)] } </blockquote>
        </section>
    )
}

export default Index
