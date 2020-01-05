export interface IEllipticalButtonAttributes {
    style:          IEllipticalButtonStyle;
    props:          IEllipticalButtonProps;
    onClickHandler: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
};

export interface IEllipticalButtonStyle {
    backgroundColor:        string;
    fontColor:              string;
};

export interface IEllipticalButtonProps {
    defaultId?:             string;
    defaultValue:           string;
    isLoading?:             boolean;
    isSelected?:            boolean;
}

export interface IGroupButtonAttributes {
    category?:      string;
    attributes:     {
        style: IEllipticalButtonStyle,
        props: IEllipticalButtonProps,
    }[];
    onClickHandler: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
};