export interface IRoundedButtonAttributes {
    style:          IRoundedButtonStyle;
    props:          IRoundedButtonProps;
    onClickHandler: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
};

export interface IRoundedButtonStyle {
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

export interface IRoundedButtonProps {
    defaultValue:   string;
    disabled:       boolean;
    isLoading:      boolean;
};

export interface IGroupButtonAttributes {
    category?:      string;
    attributes:     {
        style: IRoundedButtonStyle;
        props: IRoundedButtonProps;
    }[];
    onClickHandler: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
};