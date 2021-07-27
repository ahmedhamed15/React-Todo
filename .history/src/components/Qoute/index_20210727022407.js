import React, {useState} from "react";
import "./style.scss";

const Index = () => {

    const [quote, setQuote] = useState([
        'Organize your time',
        'Time is precious',
        'Why you are waiting!, Do it now',
    ]);

    return (
        <section className="qoute">
            <blockquote> This Is a Test Qoute </blockquote>
        </section>
    )
}

export default Index
