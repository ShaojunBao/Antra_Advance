export default function Condition() {
    const age = 18;
    // const isGreen = false;
    const isGreen = true;

    return (
        <div>
            {age > 20 ? <h1>Over Age</h1> : <h1>Under or Exactly 20</h1>}
            {/* since is a object so we need another {} for style */}
            <h1 style={{color: isGreen ? "green" : "red"} }>This has color</h1>
        </div>
    )
}   