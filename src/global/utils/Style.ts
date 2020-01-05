import {
    IEllipticalButtonProps,
    IEllipticalButtonStyle,
} from '../../components/button/elliptical/interface';
import {
    IRoundedButtonProps,
    IRoundedButtonStyle,
} from '../../components/button/rounded/interface';
import {
    IIconInFrontInputProps,
    IIconInFrontInputStyle,
} from '../../components/input/iconInFront/interface';
import {
    ILabelEffectInputProps,
    ILabelEffectInputStyle,
} from '../../components/input/labelEffect/interface';

export interface IPreEllipticalButtonAttributes {
    props: IEllipticalButtonProps;
    style: IEllipticalButtonStyle;
};

export interface IPreRoundedButtonAttributes {
    props: IRoundedButtonProps;
    style: IRoundedButtonStyle;
};

export interface IPreIconInFrontInputAttributes {
    props: IIconInFrontInputProps;
    style: IIconInFrontInputStyle;
};

export interface IPreLabelEffectInputAttributes {
    props: ILabelEffectInputProps;
    style: ILabelEffectInputStyle;
};