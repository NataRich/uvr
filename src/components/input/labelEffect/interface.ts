export interface ILabelEffectInputAttributes {
    style: ILabelEffectInputStyle;
    props: ILabelEffectInputProps;
    onChangeHandler: React.EventHandler<React.ChangeEvent<HTMLInputElement>>;
};

export interface ILabelEffectInputStyle {
    borderColor:        string;
    borderRadius:       number;
    fontSize:           number;
    helperColor?:       string;
    width:              number;
};

export interface ILabelEffectInputProps {
    helperText?:        string;
    isRequired:         boolean;
    placeholder:        string;
    type:               'password' | 'text';
    value:              string;
};

export interface IStyledBoxProps {
    borderColor:    string;
    borderRadius:   number;
    fontSize:       number;
    isFocused:      boolean;
    placeholder:    string;
    width:          number;
};

export interface IStyledInputProps {
    fontSize: number;
};

export interface IStyledHelperBoxProps {
    fontSize:       number;
    width:          number;
    helperColor:    string | undefined;
};