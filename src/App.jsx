import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
    alert("Регистрация прошла успешно!");
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="App">
      <form onSubmit={submit}>
        <h1>Регистрация</h1>
        <input type="text" placeholder="Имя" value={name} onChange={e => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default App;