export interface RoundedButtonAttributes {
    style:          RoundedButtonStyle;
    props:          RoundedButtonProps;
    onClickHandler: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
};

export interface RoundedButtonStyle {
    width:              number;
    height:             number;
    borderColor:        string;
    borderRadius:       number;
    borderWidth:        number;
    backgroundColor:    string;
    fontColor:          string;
    fontSize:           number;
    invertColorH:       boolean;
    loadingBorderColor: string;
};

export interface RoundedButtonProps {
    defaultValue:   string;
    disabled:       boolean;
    isLoading:      boolean;
};

export interface GroupButtonAttributes {
    category?:      string;
    attributes:     Array<RoundedButtonStyle & RoundedButtonProps>;
    onClickHandler: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
};