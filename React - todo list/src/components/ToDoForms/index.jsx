import { Button } from "../Button";
import { TextInput } from "../TextInput";
import "./todo-forms.style.css"

export function ToDoForms({ onSubmit, defaultValue }) {
    return (
        <form action={onSubmit} className="todo-form">
            <TextInput 
                placeholder="Digite o item que deseja adicionar" 
                required
                name='description'
                defaultValue={defaultValue}
            />
            <Button>
                Salvar Item
            </Button>
        </form>
    )
}