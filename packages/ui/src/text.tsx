import React, { type HtmlHTMLAttributes, type ReactNode } from "react";

interface IText extends HtmlHTMLAttributes<HTMLElement> {
	p?: boolean;
	span?: boolean;
	h1?: boolean;
	h2?: boolean;
	h3?: boolean;
	h4?: boolean;
	h5?: boolean;
	h6?: boolean;
	div?: boolean;
	children: ReactNode;
}
export const Text = (props: IText) => {
	const { span, p, h1, h2, h3, h4, h5, h6, children, ...rest } = props;
	if (span) {
		return <span {...rest}>{children}</span>;
	}
	if (p) {
		return <p {...rest}>{children}</p>;
	}
	if (h1) {
		return <h1 {...rest}>{children}</h1>;
	}
	if (h2) {
		return <h2 {...rest}>{children}</h2>;
	}
	if (h3) {
		return <h3 {...rest}>{children}</h3>;
	}
	if (h4) {
		return <h4 {...rest}>{children}</h4>;
	}
	if (h5) {
		return <h5 {...rest}>{children}</h5>;
	}
	if (h6) {
		return <h6 {...rest}>{children}</h6>;
	}
	return <div {...rest}>{children}</div>;
};
