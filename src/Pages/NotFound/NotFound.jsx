import { Link } from 'react-router-dom';

export function NotFound() {
    return (
        <main className='App'>
            <h1 className='error_msg'>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <p><Link to="/">Retourner sur la page d’accueil</Link></p>
        </main>
    )
}