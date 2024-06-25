const PortfolioTitle = ({id, title} : {id: string, title: string}) => {
    const onClick = () => {
        const portfolio1 = document.getElementById(`portfolio${id}`);
        const portfolio1Toggle = document.getElementById(`portfolio${id}-toggle`);
        if (portfolio1.style.display === 'none') {
            portfolio1.style.display = 'block'
            portfolio1Toggle.innerText = '▼'
        } else {
            portfolio1.style.display = 'none'
            portfolio1Toggle.innerText = '▲'
        }
    }

    return (
        <div
            className="portfolio-title"
            onClick={onClick}
        >
            <h2 style={{margin: 0}}>{title}</h2>
            <span id={`portfolio${id}-toggle`}>▲</span>
        </div>
    );
}

export default PortfolioTitle;