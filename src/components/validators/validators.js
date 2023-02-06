import React from "react";

export const required = value => (value ? undefined : 'Required')

export const maxLengthCreator = maxLength => (value) => ( value.length <= maxLength ? undefined : `Max length is ${maxLength}`)

export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)

