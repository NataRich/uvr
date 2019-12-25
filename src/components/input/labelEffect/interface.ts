export interface InputAttributes {
    style: labelEffectInputStyle;
    props: labelEffectInputProps;
    onChangeHandler: React.EventHandler<React.ChangeEvent<HTMLInputElement>>;
};

export interface labelEffectInputStyle {
    borderColor:        string;
    borderRadius:       number;
    fontSize:           number;
    helperColor?:       string;
    width:              number;
};

export interface labelEffectInputProps {
    helperText?:        string;
    isRequired:         boolean;
    placeholder:        string;
    value:              string;
};