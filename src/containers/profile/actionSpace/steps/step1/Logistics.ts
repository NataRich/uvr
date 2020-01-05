import {
    RoundedButtonProps,
    RoundedButtonStyle,
} from '../../../../../components/button/rounded/interface';
import {
    LabelEffectInputProps,
    LabelEffectInputStyle,
} from '../../../../../components/input/labelEffect/interface';

export type LocalRButtonAttributes = {
    style: RoundedButtonStyle;
    props: RoundedButtonProps;
};

export type LocalInputAttributes = {
    style: LabelEffectInputStyle;
    props: LabelEffectInputProps;
};

const generateTrackId = (): string => {
    const LENGTH: number = 24;
    let str: string = '';
    let arr: any[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 
                    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 
                    'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 
                    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for (let i = 0; i < LENGTH; i++) {
        let p: number = Math.round(Math.random() * (arr.length - 1));
        str += arr[p];
    }
    return str;
};

const defaultTrackIdInputAttributes: LocalInputAttributes = {
    style: {
        width: 200,
        borderColor: '#1C3144',
        borderRadius: 5,
        fontSize: 14,
    },
    props: {
        value: '',
        isRequired: true,
        placeholder: '',
        type: 'text',
    },
};

const defaultAcquireTrackIdBtnAttributes: LocalRButtonAttributes = {
    style: {
        width: 150,
        height: 40,
        borderColor: 'transparent',
        borderRadius: 5,
        borderWidth: 5,
        backgroundColor: '#1C3144',
        fontColor: '#FFF',
        fontSize: 16,
        invertColorH: false,
        loadingBorderColor: '#18626B'
    },
    props: {
        defaultValue: 'Acquire Track ID',
        disabled: false,
        isLoading: false,
    },
};

export {
    defaultTrackIdInputAttributes,
    defaultAcquireTrackIdBtnAttributes,
    generateTrackId,
};