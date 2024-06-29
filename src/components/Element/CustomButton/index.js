import styles from './index.mudel.css'
const CustomButton = (props) => {
    return (
        <>
            <button
                
                className={props.className ? props.className:"btn-click"}
                onClick={props.onClick}
            >{props.children}</button>
        </>

    )
}
export default CustomButton;
