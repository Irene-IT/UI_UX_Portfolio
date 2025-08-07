import { useState, useEffect } from 'react'

function useValidateForm(initialValues) {
    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState({})

    const validate = (values) => {

        const regexName = /^[\p{Letter}\s\-.']+$/u;
        const regexEmail = /^(?!.*[.-]{2})(?!.*[.-]@)(?!.*@[.-])(?![.-])(?!.*[.-]$)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~\-.]+@[a-z]+\.[a-z]{2,}$/g;

        let errors = {}

        if (!values.name) {
            errors.name = 'Name is required'
        } else if (!regexName.test(values.name)) {
            errors.name = 'Name is invalid'
        }


        if (!values.email) {
            errors.email = 'Email is required'
        } else if (!regexEmail.test(values.email)) {
            errors.email = 'Email addres is invalid'
        }
        return errors
    }

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const resetValues = () => setValues(initialValues);

    useEffect(() => {
        setErrors(validate(values))
    }, [values])
    return [values, handleChange, errors, resetValues]
}
export default useValidateForm



