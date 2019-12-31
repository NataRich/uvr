import {
    EllipticalButtonProps,
    EllipticalButtonStyle,
} from '../../../../components/button/elliptical/interface';

export type LocalEButtonAttributes = {
    style: EllipticalButtonStyle;
    props: EllipticalButtonProps;
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
    defaultWatchButtonAttributes,
    defaultMoreButtonAttributes,
    defaultBackButtonAttributes,
};