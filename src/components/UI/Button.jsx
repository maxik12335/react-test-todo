export default function Button({ children, addClass, ...props }) {

    return (
        <button
            {...props}
            className={addClass ? `button ${addClass}` : 'button'}
        >
            {children}
        </button>
    )
}