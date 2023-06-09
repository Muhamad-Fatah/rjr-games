const Button = ({ children, disabled, ...other }) => {
    return (
        <button
            className={`p-2 ${disabled ? "bg-white text-red-500" : "bg-red-500"}`}
            disabled={disabled}
            {...other}
        >
            {children}
        </button>
    )
}

export default Button