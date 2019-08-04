class FormHelpersServices {
    constructor(form) {
        this.form = form;
    }

    initialize_form_data() {
        this.form.data = _.cloneDeep(this.form.init);
        return this.form;
    }

    initialize_form_errors() {
        for (var field in this.form.errors) {
            this.form.errors[field] = [];
        }
        return this.form;
    }

    is_invalid(errors) {
        return { 'is-invalid': !_.isEmpty(errors) };
    }

    update_error_fields(error_data) {
        for (var field in this.form.errors) {
            this.form.errors[field] = _.isEmpty(error_data[field]) ? [] : error_data[field];
        }
        return this.form;
    }

    display_error(error_field) {
        if (error_field.length > 0) {
            return error_field[0];
        }
        return false;
    }
}

export default FormHelpersServices