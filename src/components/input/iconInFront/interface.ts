export interface InputAttributes {
    style: {
        borderColor: string;
        borderRadius?: number;
        fontSize: number;
        hasBorder: boolean;
        inputWidth: number;
        imgWidth: number;
    },
    props: {
        image: string;
        onChangeHandler: React.EventHandler<React.ChangeEvent<HTMLInputElement>>;
        placeholder: string;
        value: string;
    }
};