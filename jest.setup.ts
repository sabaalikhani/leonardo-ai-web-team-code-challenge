import '@testing-library/jest-dom';

if (typeof global.structuredClone !== 'function') {
	global.structuredClone = (obj: any) => {
		if (typeof obj === 'object' && obj !== null) {
			return JSON.parse(JSON.stringify(obj));
		}
		return obj;
	};
}
