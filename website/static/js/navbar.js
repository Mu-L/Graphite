const NAV_BUTTON_INITIAL_FONT_SIZE = 32;
const RIPPLE_ANIMATION_MILLISECONDS = 100;
const RIPPLE_WIDTH = 120;
const HANDLE_STRETCH = 0.4;

let ripplesInitialized;
let navButtons;
let rippleSvg;
let ripplePath;
let fullRippleHeight;
let ripples;
let activeRippleIndex;

window.addEventListener("DOMContentLoaded", initializeRipples);
window.addEventListener("resize", () => animate(true));

function initializeRipples() {
	ripplesInitialized = true;

	navButtons = document.querySelectorAll("header nav a");
	rippleSvg = document.querySelector("header .ripple");
	ripplePath = rippleSvg.querySelector("path");
	fullRippleHeight = Number.parseInt(window.getComputedStyle(rippleSvg).height, 10) - 4;

	ripples = Array.from(navButtons).map((button) => ({
		element: button,
		animationStartTime: 0,
		animationEndTime: 0,
		goingUp: false,
	}));

	activeRippleIndex = ripples.findIndex((ripple) => {
		let link = ripple.element.getAttribute("href");
		if (!link.endsWith("/")) link += "/";
		let location = window.location.pathname;
		if (!location.endsWith("/")) location += "/";

		// Special case for the root, which will otherwise match as the starting prefix of all pages
		if (link === "/" && location === "/") return true;
		if (link === "/") return false;

		return location.startsWith(link);
	});

	ripples.forEach((ripple) => {
		const updateTimings = (goingUp) => {
			const start = ripple.animationStartTime;
			const now = Date.now();
			const stop = ripple.animationStartTime + RIPPLE_ANIMATION_MILLISECONDS;

			const elapsed = now - start;
			const remaining = stop - now;

			ripple.animationStartTime = now < stop ? now - remaining : now;
			ripple.animationEndTime = now < stop ? now + elapsed : now + RIPPLE_ANIMATION_MILLISECONDS;

			ripple.goingUp = goingUp;
			animate(false);
		};

		ripple.element.addEventListener("pointerenter", () => updateTimings(true));
		ripple.element.addEventListener("pointerleave", () => updateTimings(false));
	});

	if (activeRippleIndex >= 0) ripples[activeRippleIndex] = {
		...ripples[activeRippleIndex],
		animationStartTime: 1,
		animationEndTime: 1 + RIPPLE_ANIMATION_MILLISECONDS,
		goingUp: true,
	};

	setRipples();
}

function animate(forceRefresh) {
	if (!ripplesInitialized) return;

	const animateThisFrame = ripples.some((ripple) => ripple.animationStartTime && ripple.animationEndTime && Date.now() <= ripple.animationEndTime);

	if (animateThisFrame || forceRefresh) {
		setRipples();
		window.requestAnimationFrame(() => animate(false));
	}
}

function setRipples() {
	const navButtonFontSize = Number.parseInt(window.getComputedStyle(navButtons[0]).fontSize, 10) || NAV_BUTTON_INITIAL_FONT_SIZE;
	const mediaQueryScaleFactor = navButtonFontSize / NAV_BUTTON_INITIAL_FONT_SIZE;

	const rippleHeight = fullRippleHeight * (mediaQueryScaleFactor * 0.5 + 0.5);
	const rippleSvgRect = rippleSvg.getBoundingClientRect();
	const rippleSvgLeft = rippleSvgRect.left;
	const rippleSvgWidth = rippleSvgRect.width;

	let path = `M 0,${rippleHeight + 3} `;

	ripples.forEach((ripple) => {
		if (!ripple.animationStartTime || !ripple.animationEndTime) return;

		const t = Math.min((Date.now() - ripple.animationStartTime) / (ripple.animationEndTime - ripple.animationStartTime), 1);
		const height = rippleHeight * (ripple.goingUp ? ease(t) : 1 - ease(t));

		const buttonRect = ripple.element.getBoundingClientRect();

		const buttonCenter = buttonRect.width / 2;
		const rippleCenter = (RIPPLE_WIDTH / 2) * mediaQueryScaleFactor;
		const rippleOffset = rippleCenter - buttonCenter;

		const rippleStartX = buttonRect.left - rippleSvgLeft - rippleOffset;

		const rippleRadius = (RIPPLE_WIDTH / 2) * mediaQueryScaleFactor;
		const handleRadius = rippleRadius * HANDLE_STRETCH;

		path += `L ${rippleStartX},${rippleHeight + 3} `;
		path += `c ${handleRadius},0 ${rippleRadius - handleRadius},${-height} ${rippleRadius},${-height} `;
		path += `s ${rippleRadius - handleRadius},${height} ${rippleRadius},${height} `;
	});

	path += `l ${rippleSvgWidth},0`;

	ripplePath.setAttribute("d", path);
}

function ease(x) {
	return 1 - (1 - x) * (1 - x);
}
