export default function LoginForm() {
    return (
        <div>
            <h1>Вход</h1>
            <form>
                <input type='text' placeholder='Логин'/>
                <input type='password' placeholder='Пароль'/>
                <button type='submit'>Войти</button>
            </form>
        </div>
    )
}