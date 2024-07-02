import "./Button.scss"

function Button(props) {
    return(
        <>
            <button onChange={props.addClickFn}>{props.name}</button>
        </>
    )
}

export default Button