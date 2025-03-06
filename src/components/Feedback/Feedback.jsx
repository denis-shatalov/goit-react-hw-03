export default function Feedback({ clicks, totalFeedback }) {

    const positive = Math.round((clicks.good / totalFeedback) * 100);

    
    return (
        <div>
            <p>Good:{clicks.good}</p>
            <p>Neutral:{clicks.neutral}</p>
            <p>Bad:{clicks.bad}</p>
            <p>Total:{ totalFeedback }</p>
            <p>Positive:{ positive }%</p>
        </div>
    )
}