import {
    IconInFrontInputProps,
    IconInFrontInputStyle,
} from '../../../components/input/iconInFront/interface';
import Magnifier from '../../../assets/icons/magnifier.svg';
import {
    EllipticalButtonProps,
    EllipticalButtonStyle,
} from '../../../components/button/elliptical/interface';
import {
    RoundedButtonProps,
    RoundedButtonStyle,
} from '../../../components/button/rounded/interface';
import { VideoClassType } from '../../../global/videos/class';

export type SearchProps = {
    page:                number;
    setVideos:           React.Dispatch<React.SetStateAction<VideoClassType[] | null>>;
    setIsFetchingVideos: React.Dispatch<React.SetStateAction<boolean>>;
};

export type LocalInputAttributes = {
    style: IconInFrontInputStyle,
    props: IconInFrontInputProps,
};

export type LocalEButtonAttributes = {
    style: EllipticalButtonStyle,
    props: EllipticalButtonProps,
};

export type LocalRButtonAttributes = {
    style: RoundedButtonStyle,
    props: RoundedButtonProps,
};

const defaultInputAttributes: LocalInputAttributes = {
    style: {
        borderColor: '#149E9A',
        borderRadius: 5,
        fontSize: 16,
        hasBorder: true,
        inputWidth: 310,
        imgWidth: 35,
    },
    props: {
        image: Magnifier,
        placeholder: 'Looking for ...',
        type: 'text',
        value: '',
    },
};

const defaultButtonGroupStyle: EllipticalButtonStyle = {
    backgroundColor: '#FFF',
    fontColor: '#149E9A',
};

const defaultSortButtonGroupAttributes: LocalEButtonAttributes[] = [
    {
        style: defaultButtonGroupStyle,
        props: {
            defaultId: '1',
            defaultValue: 'Date',
            isSelected: true
        },
    },
];

const defaultOrderButtonGroupAttributes: LocalEButtonAttributes[] = [
    {
        style: defaultButtonGroupStyle,
        props: {
            defaultId: '1',
            defaultValue: 'ASC',
            isSelected: true
        },
    },
    {
        style: defaultButtonGroupStyle,
        props: {
            defaultId: '2',
            defaultValue: 'DESC',
            isSelected: false,
        },
    },
];

const defaultFindButtonAttributes: LocalRButtonAttributes = {
    style: {
        width: 70,
        height: 44,
        borderColor: 'transparent',
        borderRadius: 5,
        borderWidth: 5,
        backgroundColor: '#149E9A',
        fontColor: '#FFF',
        fontSize: 18,
        invertColorH: false,
        loadingBorderColor: '#18626B',
    },
    props: {
        defaultValue: 'Find',
        disabled: false,
        isLoading: false,
    },
};

export {
    defaultInputAttributes,
    defaultSortButtonGroupAttributes,
    defaultOrderButtonGroupAttributes,
    defaultFindButtonAttributes,
};