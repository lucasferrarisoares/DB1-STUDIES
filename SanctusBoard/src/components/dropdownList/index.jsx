import './drop-Down.css'

export function DropDownList( { itens, ...rest }) {
  return (
    <select {... rest} className='dropdown-list' defaultValue=''>
        <option value='' disabled>
            Selecione um país
        </option>
        {itens.map(function (item) {
          return <option key={item.id} value={item.id}>
              {item.name}
          </option>
        })}
    </select>
  )
}