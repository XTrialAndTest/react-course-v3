import { useState } from 'react';
// import people from './data';
import './index.scss';
const UseEffectBasics = () => {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [singlePerson, setSinglePerson] = useState([]);

  let submitBtn = (e) => {
    e.preventDefault();

    if (name && email && password) {
      let onePerson = { name, email, password };
      setSinglePerson((prsn) => [...prsn, onePerson]);
    }
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <div className='container'>
        <form action='' onSubmit={submitBtn} className='form'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div></div>
          <button type='submit'>Submit</button>
        </form>
        <div className='display'>
          <div className='header'>
            <h3>Name</h3>
            <h3>Email</h3>
            <h3>Password</h3>
          </div>

          {singlePerson.map(({ name, email, password }, index) => {
            return (
              <>
                <div className='personCard' key={index}>
                  <div className='name'>
                    <h4>{name}</h4>
                  </div>
                  <div className='email'>
                    <h4>{email}</h4>
                  </div>
                  <div className='password'>
                    <h4>{password}</h4>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default UseEffectBasics;
