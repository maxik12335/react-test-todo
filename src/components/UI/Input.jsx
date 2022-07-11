export default function Input({ input, setInput, ...props }) {
    return (
        <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            {...props}
        />
    )
}