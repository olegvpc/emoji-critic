import './Upload.css';
// import { useState } from 'react'
import useFormWithValidation from '../hooks/useFofmWithValidation';


function Upload ({ onSubmit }) {

  // const [uploadFile, setUploadFile] = useState()
  const {values, errors, isValid, handleChange} = useFormWithValidation();
  function handleSubmit(e) {
    e.preventDefault();

    const fileList = e.target[1].files // e.target[0] - это второй элемент input
    const fileData = fileList[0] // File {name: 'de-niro.jpg', lastModified: 1626546703643, lastModifiedDate: ....}
    onSubmit(fileData, values.name)
  }
  return (
    <div className="container">
      <p>Запись профайла с аватаром на сервер.</p>
      <form className='entrance__form'
            onSubmit={handleSubmit}>
        <label className='entrance__label'>Имя
          <input
            id='name'
            type='text'
            className='entrance__input'
            name='name'
            minLength='2'
            maxLength='30'
            required
            pattern='^[A-Za-zА-Яа-яЁё\s\-]+$'
            value={values.name || ''} // Чтобы Реакт не ругался в консоли на пустые поля
            onChange={handleChange}
          />
          <span id='name-error' className='entrance__error'>
            {errors.name ? `Поле должно быть заполнено и может содержать только латиницу,
              кириллицу, пробел или дефис` : ''}
          </span>
        </label>
        <input className='entrance__input'
               type="file"
               name="avatar"
               accept="image/*"/>
        <button className='entrance__submit-btn'
          type="submit"
          disabled={!isValid}
        >Отправить</button>
      </form>
    </div>
  )
}

export default Upload
