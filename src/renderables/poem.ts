import { getAssetByUrl } from '@/asset-manager';
import getConstants from '@/constants';
import { RenderContext } from '@/renderer/renderer-context';
import { TextRenderer } from '@/renderer/text-renderer/text-renderer';
import { IPoem } from '@/store/object-types/poem';
import { ScalingRenderable } from './scaling-renderable';

const consolePadding = -2;
const consoleTopPadding = 26;
const consoleLineWrapPadding = 10;
const poemTopMargin = 10;

export class Poem extends ScalingRenderable<IPoem> {
	private _height: number = 0;
	public get height(): number {
		return this._height;
	}

	private _width: number = 0;
	public get width(): number {
		return this._width;
	}
	protected get centeredVertically(): boolean {
		return true;
	}

	public getRotationAnchor(): DOMPointReadOnly {
		return new DOMPointReadOnly(0, 0);
	}

	public getZoomAnchor(): DOMPointReadOnly {
		return new DOMPointReadOnly(0, 0);
	}

	protected async draw(rx: RenderContext): Promise<void> {
		const constants = getConstants();
		const paper = constants.Poem.poemBackgrounds[this.obj.background];
		const flippedX = this.flip
			? constants.Base.screenWidth - this.obj.x
			: this.obj.x;
		let y = this.obj.y;
		let x = flippedX + poemTopMargin;
		let padding = constants.Poem.poemPadding;
		let topPadding = constants.Poem.poemTopPadding;
		let lineWrapPadding = padding * 2;

		if (paper.file === 'internal:console') {
			const h = (this._height = this.obj.height);
			const w = (this._width = this.obj.width);

			rx.drawRect({
				x: flippedX - w / 2,
				y: this.obj.y - h / 2,
				h,
				w,
				fill: {
					style: this.obj.consoleColor || constants.Poem.consoleBackgroundColor,
				},
			});
			padding = consolePadding;
			topPadding = consoleTopPadding;
			lineWrapPadding = consoleLineWrapPadding;
		} else if (paper.file === 'internal:transparent') {
			this._height = this.obj.height;
			this._width = this.obj.width;
		} else {
			const asset = await getAssetByUrl(`assets/poemBackgrounds/${paper.file}`);
			const h = asset.height * constants.Poem.backgroundScale;
			const w = asset.width * constants.Poem.backgroundScale;
			rx.drawImage({
				image: asset,
				x: flippedX - w / 2,
				y: this.obj.y - h / 2,
				h,
				w,
			});
			this._height = h;
			this._width = w;
		}
		y -= this.height / 2;
		x -= this.width / 2;

		const style = constants.Poem.poemTextStyles[this.obj.font];
		const render = new TextRenderer(this.obj.text, style);
		await render.loadFonts();

		render.fixAlignment(
			'left',
			x + padding,
			x + padding,
			y + topPadding + padding,
			this.obj.autoWrap ? this.width - lineWrapPadding : 0
		);

		render.render(rx.fsCtx);
	}
}
