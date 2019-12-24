export interface InputAttributes {
    fontSize:           number;
    isRequired:         boolean;
    onChangeHandler:    React.EventHandler<React.ChangeEvent<HTMLInputElement>>;
    placeholder:        string;
    value:              string;
    width:              number;
    borderColor:        string;
    borderRadius:       number;
};