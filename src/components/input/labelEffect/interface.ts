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
        onChangeHandler:    React.EventHandler<React.ChangeEvent<HTMLInputElement>>;
        placeholder:        string;
        value:              string;
    },
};