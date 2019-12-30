import {
    IconInFrontInputProps,
    IconInFrontInputStyle,
} from '../../../components/input/iconInFront/interface';
import Magnifier from '../../../assets/icons/magnifier.svg';
import {
    EllipticalButtonProps,
    EllipticalButtonStyle,
} from '../../../components/button/elliptical/interface';

export type LocalInputAttributes = {
    style: IconInFrontInputStyle,
    props: IconInFrontInputProps,
};

export type LocalButtonAttributes = {
    style: EllipticalButtonStyle,
    props: EllipticalButtonProps,
}

const defaultInputAttributes: LocalInputAttributes = {
    style: {
        borderColor: '#149E9A',
        borderRadius: 5,
        fontSize: 16,
        hasBorder: true,
        inputWidth: 300,
        imgWidth: 35,
    },
    props: {
        image: Magnifier,
        placeholder: 'Looking for ...',
        type: 'text',
        value: '',
    },
};

const defaultGroupButtonStyle: EllipticalButtonStyle = {
    backgroundColor: '#FFF',
    fontColor: '#149E9A',
};

const defaultSortGroupButtonAttributes: LocalButtonAttributes[] = [
    {
        style: defaultGroupButtonStyle,
        props: {
            defaultId: '1',
            defaultValue: 'Date',
            isSelected: true
        },
    },
];

const defaultOrderGroupButtonAttributes: LocalButtonAttributes[] = [
    {
        style: defaultGroupButtonStyle,
        props: {
            defaultId: '1',
            defaultValue: 'ASC',
            isSelected: true
        },
    },
    {
        style: defaultGroupButtonStyle,
        props: {
            defaultId: '2',
            defaultValue: 'DESC',
            isSelected: false,
        },
    },
];

export {
    defaultInputAttributes,
    defaultSortGroupButtonAttributes,
    defaultOrderGroupButtonAttributes,
};