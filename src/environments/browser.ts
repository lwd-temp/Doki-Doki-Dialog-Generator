import { IEnvironment } from './environment';

export class Browser implements IEnvironment {
	public readonly allowLQ = true;

	public async saveToFile(
		downloadCanvas: HTMLCanvasElement,
		filename: string
	): Promise<string> {
		const a = document.createElement('a');
		a.setAttribute('download', filename);
		const url = await this.createObjectURL(downloadCanvas);
		a.setAttribute('href', url);
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		return url;
	}

	protected createObjectURL(canvas: HTMLCanvasElement): Promise<string> {
		return new Promise((resolve, reject) => {
			if (canvas.toBlob && window.URL && window.URL.createObjectURL) {
				canvas.toBlob(blob => {
					if (!blob) {
						reject();
						return;
					}
					resolve(URL.createObjectURL(blob));
				}, 'image/png');
			} else if (window.URL && window.URL.createObjectURL) {
				const url = canvas.toDataURL();
				const blob = this.dataURItoBlob(url);
				resolve(URL.createObjectURL(blob));
			} else {
				resolve(canvas.toDataURL());
			}
		});
	}

	protected dataURItoBlob(dataURI: string) {
		const binStr = atob(dataURI.split(',')[1]);
		const len = binStr.length;
		const arr = new Uint8Array(len);

		for (let i = 0; i < len; i++) {
			arr[i] = binStr.charCodeAt(i);
		}

		return new Blob([arr], { type: 'image/png' });
	}
}