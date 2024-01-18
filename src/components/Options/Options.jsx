export const Options = ({onUpdate, isHidden, onReset}) => {
    return (
        <div>
            <button onClick={onUpdate}>Good</button>
            <button onClick={onUpdate}>Neutral</button>
            <button onClick={onUpdate}>Bad</button>
            {!isHidden && <button onClick={onReset}>Reset</button>}
        </div>
    )
}