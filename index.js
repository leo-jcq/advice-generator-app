const App = () => {
    const [advice, setAdvice] = React.useState([]);

    React.useEffect(() => {
        getAdvice();
    }, []);

    const getAdvice = async () => {
        const response = await fetch('https://api.adviceslip.com/advice');
        const responseData = await response.json();
        if (response.ok) {
            setAdvice(responseData.slip);
        } else {
            alert(JSON.stringify(responseData));
        }
    };

    return (
        <React.Fragment>
            <span id="advice-number">Advice #{advice.id}</span>
            <p id="advice-text">{advice.advice}</p>

            <img src="images/pattern-divider-desktop.svg" alt="Divider" id="divider"></img>

            <button id="dice" onClick={getAdvice}>
                <img src="images/icon-dice.svg" alt="Dice" />
            </button>
        </React.Fragment>
    );
};

ReactDOM.render(
    <React.Fragment>
        <App />
    </React.Fragment>,
    document.querySelector('main')
);
