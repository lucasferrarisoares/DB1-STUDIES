import { DropDownList } from '../dropdownList'
import { FormButton } from '../formButton'
import { FormField } from '../formField'
import { FormInput } from '../formInput'
import { FormLabel } from '../formLabel'
import { FormTitle } from '../formTitle'
import './saint-Form.css'

export function SaintForm({ countrys, addSaintCard }) {

  function handleSubmit(formData) {
    const saintCard = {
      img: formData.get('saintPicture'),
      country: countrys.find(function(item) {
        return item.id === formData.get('country')
      }),
      date: new Date(formData.get('saintCanonizationDate')),
      name: formData.get('saintName')
    }
    addSaintCard(saintCard)
  }



  return (
    <form className='saint-form' action={handleSubmit}>
      <FormTitle>
        Cadastro de Santo
      </FormTitle>
      <div className='Filds'>
        <FormField>
          <FormLabel htmlfor="saintName">
            Nome do Santo
          </FormLabel>
          <FormInput
            type="text"
            id="saintName"
            placeholder="Papa São João Paulo II"
            name="saintName"
          />
        </FormField>
        <FormField>
          <FormLabel htmlfor="saintPicture">
            Qual a URL da Imagem do Santo?
          </FormLabel>
          <FormInput
            type="text"
            id="saintPicture"
            placeholder="https://example.com/saint-image.jpg"
            name="saintPicture"
          />
        </FormField>
        <FormField>
          <FormLabel htmlfor="saintCanonizationDate">
            Data de Canonização
          </FormLabel>
          <FormInput
            type="date"
            id="saintCanonizationDate"
            placeholder="10/02/2014"
            name="saintCanonizationDate"
          />
        </FormField>
        <FormField>
          <FormLabel htmlfor="country">
            País Natal
          </FormLabel>
          <DropDownList id='country' name='country' itens={ countrys }/>
        </FormField>
      </div>
      <div className='actions'>
        <FormButton>
          Cadastrar Santo
        </FormButton>
      </div>
    </form>
  )
}