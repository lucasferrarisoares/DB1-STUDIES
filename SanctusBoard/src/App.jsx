import { Children, useState } from 'react'
import { SaintForm } from './components/saintForm'
import { Country } from './components/country'
import './App.css'
import { Banner } from './components/banner'
import { SaintCard } from './components/saintCard'

function App() {

  const countrys = [
    { name: 'Brasil', id: 'br' },
    { name: 'Polônia', id: 'pl' },
    { name: 'França', id: 'fr' },
    { name: 'Itália', id: 'it' },
    { name: 'Espanha', id: 'es' }
  ]

  const [saints, setSaints] = useState([
    { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Guido_sch%C3%A4ffer.png/250px-Guido_sch%C3%A4ffer.png',
      country: countrys[0],
      date: new Date(),
      name: 'Venerável Guido Schaffer'
    },
    {
      img: 'https://i.imgur.com/VE7fLSH.jpeg',
      country: countrys[3],
      date: new Date('2025-09-08'),
      name: 'São Carlo Acutis'
    }, 
    {
      img: 'https://i.imgur.com/lIGZCkZ.jpeg',
      country: countrys[4],
      date: new Date('1622-04-13'),
      name: 'Santa Teresa de Ávila'
    }, 
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Teresa-de-Lisieux.jpg/330px-Teresa-de-Lisieux.jpg',
      country: countrys[2],
      date: new Date('1925-05-18'),
      name: 'Santa Teresinha do Menino Jesus'
    }, 
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Oscar_Luigi_Scalfaro_con_Giovanni_Paolo_II_%28cropped%29.jpg/250px-Oscar_Luigi_Scalfaro_con_Giovanni_Paolo_II_%28cropped%29.jpg',
      country:  countrys[1],
      date: new Date('2014-04-27'),
      name: 'Papa São João Paulo II'
    }
  ])

  function addSaintCard(saintData) {
    setSaints([...saints, saintData])
  }

  return (
    <main>
        <header> 
          <img src='src\assets\logo.png' alt='Logo' className='logoImg'/>
        </header>
        <Banner />
        <SaintForm 
          countrys={countrys}
          addSaintCard={addSaintCard}
        />
        <section className='container'>
          {countrys.map(function (country) {
            if (!saints.some(function (saint) {
              return saint.country.id == country.id
            })) {
              return null
            }
            return (
              <section key={country.id}>
                <Country country={country} />
                <div className='countrys'> 
                  {saints
                  .filter(function (saint) {
                    return saint.country.name === country.name
                  })
                  .map(function (saint, index) {
                    return <SaintCard key={index} saintCard={saint}/>
                  })}
                </div>
              </section>
            )
          })}
        </section>
    </main>
  )
}

export default App
