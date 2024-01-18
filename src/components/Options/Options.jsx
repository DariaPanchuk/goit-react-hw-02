export const Options = ({onUpdate, isHidden, onReset}) => {
    return (
        <div>
            <button onClick={onUpdate} name="good">Good</button>
            <button onClick={onUpdate} name="neutral">Neutral</button>
            <button onClick={onUpdate} name="bad">Bad</button>
            {!isHidden && <button onClick={onReset}>Reset</button>}
        </div>
    )
}