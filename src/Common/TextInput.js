import React from 'react';
import * as PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles({
    input: {
        width: '100%',
        margin: 10
    }
});

const TextInput = (props) => {
    const classes = useStyles();
    const {t} = useTranslation();
    return (
        <TextField
            type={props.type}
            multiline={!!props.multiline}
            rows={props.multiline}
            error={props.error !== ''}
            helperText={t(props.error)}
            className={classes.input}
            onChange={props.onChange}
            name={props.name}
            value={props.value}
            id={props.id}
            label={props.label}/>
    );
};

TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    // label: custom.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    error: PropTypes.string,
    label(props, propName, component) {
        if (!(propName in props)) {
            return new Error('missing PropName');
        }
    }
};

TextInput.defaultProps = {
    error: ''
};

export default TextInput;