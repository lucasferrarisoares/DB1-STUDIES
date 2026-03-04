import './saintCard.css'

export function SaintCard({ saintCard }) {
    return (
        <div className='saint-card'>
            <img src={saintCard.img} alt={saintCard.name} className='saint-card-img' />
            <div className='body'>
                <p className='country'>{saintCard.country.name}</p>
                <p className='date'>{saintCard.date.toLocaleDateString('pt-BR')}</p>
                <h4 className='name'>{saintCard.name}</h4>
            </div>
        </div>
    )
}