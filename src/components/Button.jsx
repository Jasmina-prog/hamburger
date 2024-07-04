import "./Button.scss"

function Button(props) {
    return(
        <>
            <button onClick={props.clickFn}>
                {props.name}
                </button>
        </>
    )
}

export default Button