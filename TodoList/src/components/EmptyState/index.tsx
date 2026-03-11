import './empty-State.style.css'

export function EmptyState() {
    return ( <section className='empty-state'>
        <p>Ainda não tem tarefas cadastrar, adicione para começar!</p>
        <img src='/empty.png' alt='' />
    </section>)
}