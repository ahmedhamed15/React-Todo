import "./style.scss";

const Index = () => {

    // All Qoutes
    const quotes = [
        'Organize your time 🤯',
        'Time is precious 🕐',
        'Why you are waiting!, Do it now 🙂',
        'Plans are nothing, Planning is everything 👌',
        'All time management begins with planning 💯',
        'Focus on being productive instead of busy 🧐'
    ];

    return (
        <section className="qoute">
            <blockquote> { quotes[Math.floor(Math.random()*quotes.length)] } </blockquote>
        </section>
    )
}

export default Index
