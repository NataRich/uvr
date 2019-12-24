export interface ButtonAttributes {
    backgroundColor:        string;
    defaultId?:             string;
    defaultValue:           string;
    fontColor:              string;
    isLoading?:             boolean;
    isSelected?:            boolean;
    onClickHandler:         React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
};

export interface Partial {
    backgroundColor:        string;
    defaultId?:             string;
    defaultValue:           string;
    fontColor:              string;
    isLoading?:             boolean;
    isSelected?:            boolean;
};

export interface GroupButtonAttributes {
    category?:      string;
    attributes:     Partial[];
    setAttributes:  React.Dispatch<React.SetStateAction<Partial[]>>;
};