import {
    IconInFrontInputProps,
    IconInFrontInputStyle,
} from '../../../components/input/iconInFront/interface';
import Magnifier from '../../../assets/icons/magnifier.svg';

export type LocalInputAttributes = {
    style: IconInFrontInputStyle,
    props: IconInFrontInputProps,
};

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

export {
    defaultInputAttributes,
};