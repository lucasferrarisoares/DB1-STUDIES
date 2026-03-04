import './form-button.css'

export function FormButton({ children }) {
    return (
        <button className='form-button'>
            {children}
        </button>
    )
}