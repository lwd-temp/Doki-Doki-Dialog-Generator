import { ITextStyle } from '@/renderer/textRenderer/textRenderer';
import { screenWidth } from '@/constants/base';
import { nameboxStrokeDefaultColor } from './textBoxCustom';

// tslint:disable: no-magic-numbers
export const TextBoxWidth = 816;
export const TextBoxCorruptedWidth = 900;
export const TextBoxHeight = 146;
export const TextBoxY = 568;
export const TextBoxKerning = 0;
export const TextBoxLineHeight = 29;
export const TextBoxCorruptedKerning = 8;
export const TextBoxTextXOffset = 38;
export const TextBoxTextYOffset = 50;

export const TextBoxTextCorruptedXOffset = 9;
export const TextBoxTextCorruptedYOffset = 9;

export const NameboxHeight = 39;
export const NameboxWidth = 168;
export const NameboxXOffset = 34;
export const NameboxTextYOffset = 29;

export const ControlsYBottomOffset = 12;
export const ControlsXHistoryOffset = -126;
export const ControlsXSkipOffset = -72;
export const ControlsXStuffOffset = -38;

export const ArrowXRightOffset = 30.75;
export const ArrowYBottomOffset = 26;

export const GlowRX = 426;
export const GlowRY = 58;

export const BaseTextStyle: ITextStyle = {
	alpha: 1,
	color: 'black',
	fontName: 'aller',
	fontSize: 24,
	isBold: false,
	isItalic: false,
	isStrikethrough: false,
	isUnderlined: false,
	letterSpacing: 0,
	lineSpacing: 1,
	strokeColor: '',
	strokeWidth: 0,
};

export const NameboxTextStyle: ITextStyle = {
	...BaseTextStyle,
	fontName: 'riffic',
	fontSize: 24,
	strokeColor: nameboxStrokeDefaultColor,
	strokeWidth: 6,
	color: 'white',
	letterSpacing: 1,
};

export const ControlsTextStyle = {
	align: 'left' as CanvasTextAlign,
	font: '13px aller',
	fill: {
		style: '#522',
	},
};

export const ControlsTextDisabledStyle = {
	...ControlsTextStyle,
	fill: {
		style: '#a66',
	},
};

export const TextBoxStyle = {
	align: 'left' as CanvasTextAlign,
	font: '24px aller',
	outline: {
		style: '#523140',
		width: 4,
	},
	fill: {
		style: '#fff',
	},
};

export const TextBoxCorruptedStyle = {
	align: 'left' as CanvasTextAlign,
	font: '24px verily',
	outline: {
		style: '#000',
		width: 20,
	},
	fill: {
		style: '#fff',
	},
};

export const TextBoxX = screenWidth / 2 - TextBoxWidth / 2; // 232
export const TextBoxCorruptedX = screenWidth / 2 - TextBoxCorruptedWidth / 2;
export const TextBoxTextX = TextBoxX + TextBoxTextXOffset;
export const TextBoxTextY = TextBoxY + TextBoxTextYOffset;

export const NameboxY = TextBoxY - NameboxHeight;
export const NameboxX = TextBoxX + NameboxXOffset;
export const NameboxTextX = NameboxX + NameboxWidth / 2;
export const NameboxTextY = NameboxY + NameboxTextYOffset;

export const ControlsXHistory = TextBoxX + ControlsXHistoryOffset;
export const ControlsXSkip = TextBoxX + ControlsXSkipOffset;
export const ControlsXStuff = TextBoxX + ControlsXStuffOffset;
