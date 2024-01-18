export const Options = ({onUpdate, isHidden, onReset}) => {
    return (
        <div>
            <button onClick={() => onUpdate("good")}>Good</button>
            <button onClick={() => onUpdate("neutral")}>Neutral</button>
            <button onClick={() => onUpdate("bad")}>Bad</button>
            {!isHidden && <button onClick={onReset}>Reset</button>}
        </div>
    )
}