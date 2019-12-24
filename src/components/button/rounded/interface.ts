export interface RoundedButtonAttributes {
    defaultValue:       string;
    onClickHandler:     React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
    width?:             string;
    height?:            string;
    borderRadius?:      string;
    backgroundColor:    string;
    fontColor:          string;
};

export interface Partial {
    defaultValue:       string;
    width?:             string;
    height?:            string;
    borderRadius?:      string;
    backgroundColor:    string;
    fontColor:          string;
};

export interface GroupButtonAttributes {
    category?:      string;
    attributes:     Partial[];
    onClickHandler:     React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
};