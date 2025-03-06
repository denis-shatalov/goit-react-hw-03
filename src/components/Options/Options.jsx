export default function Options({ handleClick, totalFeedback }) {

    

    return (
        <div>
            <button onClick={() => handleClick("good")}>Good</button>
            <button onClick={() => handleClick("neutral")}>Neutral</button>
            <button onClick={() => handleClick("bad")}>Bad</button>
            { totalFeedback > 0 && <button onClick={() => handleClick("reset")}>Reset</button> }

            
        </div>
    )
}