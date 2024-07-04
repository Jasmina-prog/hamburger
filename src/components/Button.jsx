import "./Button.scss"

function Button(props) {
    return(
        <>
            <button onClick={() => {
                 props.addClickFn(); 
                 props.removeClickFn();
            }
                }>{props.name}</button>
        </>
    )
}

export default Button