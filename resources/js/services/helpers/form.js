const FormHelpersServices = {
    is_invalid(errors) {
        return { 'is-invalid': !_.isEmpty(errors) };
    }
}

export default FormHelpersServices