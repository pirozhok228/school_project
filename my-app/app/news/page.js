import Styles from './page.module.css'
import { CardsList } from '../components/CardsList/CardsList'
import { data } from '../data/data'

export default function NewsPage() {
    return (
        <main className={Styles['main']}>
            <h1>Новости</h1>
            <CardsList data={data} />
        </main>
    )
}