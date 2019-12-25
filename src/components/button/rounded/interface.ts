export interface RoundedButtonAttributes {
    style:          RoundedButtonStyle;
    props:          RoundedButtonProps;
    onClickHandler: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
};

export interface RoundedButtonStyle {
    width:              number;
    height:             number;
    borderRadius:       number;
    backgroundColor:    string;
    fontColor:          string;
};

export interface RoundedButtonProps {
    defaultValue:   string;
};

export interface GroupButtonAttributes {
    category?:      string;
    attributes:     Array<RoundedButtonStyle & RoundedButtonProps>;
    onClickHandler: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
};