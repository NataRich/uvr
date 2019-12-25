export interface InputAttributes {
    style: {
        borderColor:        string;
        borderRadius:       number;
        fontSize:           number;
        helperColor?:       string;
        width:              number;
    },
    props: {
        helperText?:        string;
        isRequired:         boolean;
        placeholder:        string;
        value:              string;
    },
    onChangeHandler:    React.EventHandler<React.ChangeEvent<HTMLInputElement>>;
};