import './form-Label.css'

export function FormLabel({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className="form-label">
      {children}
    </label>
  )
}