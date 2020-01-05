import {
    EllipticalButtonProps,
    EllipticalButtonStyle,
} from '../../../components/button/elliptical/interface';
import {
    RoundedButtonProps,
    RoundedButtonStyle,
} from '../../../components/button/rounded/interface';

export type LocalEButtonAttributes = {
    style: EllipticalButtonStyle;
    props: EllipticalButtonProps;
};

export type LocalRButtonAttributes = {
    style: RoundedButtonStyle;
    props: RoundedButtonProps;
};

const defaultDelButtonAttributes: LocalRButtonAttributes = {
    style: {
        width: 50,
        height: 25,
        borderColor: '#931621',
        borderRadius: 3,
        borderWidth: 3,
        backgroundColor: '#931621',
        loadingBorderColor: '#931621',
        fontColor: '#FFF',
        fontSize: 12,
        invertColorH: true,
    },
    props: {
        defaultValue: 'Delete',
        isLoading: false,
        disabled: false,
    },
};

const defaultWatchButtonAttributes: LocalEButtonAttributes = {
    style: {
        backgroundColor: '#0165A3',
        fontColor: '#FFF',
    },
    props: {
        defaultId: '1',
        defaultValue: 'Watch',
    },
};

const defaultMoreButtonAttributes: LocalEButtonAttributes = {
    style: {
        backgroundColor: '#931621',
        fontColor: '#FFF',
    },
    props: {
        defaultId: '2',
        defaultValue: 'More',
    },
};

const defaultBackButtonAttributes: LocalEButtonAttributes = {
    style: {
        backgroundColor: '#149E9A',
        fontColor: '#FFF',
    },
    props: {
        defaultValue: 'Back',
    },
};

export {
    defaultDelButtonAttributes,
    defaultWatchButtonAttributes,
    defaultMoreButtonAttributes,
    defaultBackButtonAttributes,
};