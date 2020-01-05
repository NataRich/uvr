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
};