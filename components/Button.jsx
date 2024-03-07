export const Button = ({class: className, label, function: action, columns}) =>{
    return(
        <button
                type='button'
                className={className}
                onClick={action}
                >
                  {label}
                  </button>
    )
}