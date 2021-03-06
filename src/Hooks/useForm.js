import React from 'react'

const types = {
    email: {
        regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: 'Preencha com um e-mail válido.'
    },
    password: {
        regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        message: 'A senha precisa ter no mínimo 8 caracteres, com pelo menos uma letra e um número'
    },
    number: {
        regex: /^\d+$/,
        message: "Utilize somente números"
    }
}

const useForm = (type) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(null)

    function validate(value) {
        if(type === false) return true;
        if(value.length === 0) {
            setError('Preencha um valor');
            return false
        } else if (types[type] && !types[type].regex.test(value)){
            setError(types[type].message);
            return false;
        } else {
            setError(null)
            return true;
        }
    }

    function onChange({target}) {
        if(error) validate(target.value)
        setValue(target.value)
    }

  return {
      value, setValue, onChange, validate: () => validate(value), onBlur: () => validate(value), error
  }
}

export default useForm