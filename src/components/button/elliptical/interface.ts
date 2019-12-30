export interface ButtonAttributes {
    style:          EllipticalButtonStyle;
    props:          EllipticalButtonProps;
    onClickHandler: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
};

export interface EllipticalButtonStyle {
    backgroundColor:        string;
    fontColor:              string;
};

export interface EllipticalButtonProps {
    defaultId?:             string;
    defaultValue:           string;
    isLoading?:             boolean;
    isSelected?:            boolean;
}

export interface GroupButtonAttributes {
    category?:      string;
    attributes:     {
        style: EllipticalButtonStyle,
        props: EllipticalButtonProps,
    }[];
    onClickHandler: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
};