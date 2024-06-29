import './index.mudel.css'
const InputElm = (props) => {
    return (
        <input
            type={props.type ? props.type : "text"}
            className={props.className ? props.className : "inputElment"}
        />
    )
}
export default InputElm; 