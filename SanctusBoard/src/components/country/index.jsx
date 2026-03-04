import './country.css'

export function Country({ country }) {
    return (
        <h3 className='countryName'>{country.name}</h3>
    )
}