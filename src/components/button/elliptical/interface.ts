export interface ButtonAttributes {
    backgroundColor:        string;
    defaultId?:             string;
    defaultValue:           string;
    fontColor:              string;
    isLoading?:             boolean;
    isSelected?:            boolean;
    onClickHandler:         React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
};