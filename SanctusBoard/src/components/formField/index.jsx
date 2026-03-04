import './form-Field.css'
export function FormField({children}) {
  return (
    <fieldset className="form-Field">
      {children}
    </fieldset>
  )
}