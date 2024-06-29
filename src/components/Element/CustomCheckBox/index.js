import './index.css'
const CustomCheckBox = (props) =>{
    return(
        <>
            <div className="check-bd">
                <input 
                type="checkbox" 
                className={props.className?props.className:"checkbox-container"}
                value={props.value}
                onClick={props.onClick}
                onChange={props.onChange}
                checked={props.checked}
                />
                <span className={props.className?props.className:"carType-text"}>{props.children}</span>
            </div>
        </>
    )
}

export default CustomCheckBox;