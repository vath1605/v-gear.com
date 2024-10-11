const slider = document.getElementById("slider");
const imagesData = [
	{ imageName: "pro11.PNG", alt: "slider-item-1" },
	{ imageName: "pro2.PNG", alt: "slider-item-2" },
	{ imageName: "pro3.PNG", alt: "slider-item-3" },
	{ imageName: "pro4.PNG", alt: "slider-item-4" },
	{ imageName: "pro5.PNG", alt: "slider-item-5" },
	{ imageName: "pro6.PNG", alt: "slider-item-6" },
	{ imageName: "pro7.PNG", alt: "slider-item-7" },
	{ imageName: "pro8.PNG", alt: "slider-item-8" },
	{ imageName: "pro9.PNG", alt: "slider-item-9" },
	{ imageName: "pro10.PNG", alt: "slider-item-10" }
];
const imagesCount = imagesData.length;
const animationTimePerImage = 3;
imagesData.forEach((img, index) => {
	const liElm = document.createElement("li");
	const animationIndex = index - imagesCount;
	liElm.style.animationName = dynamicAnimationHandler(imagesCount);
	liElm.style.animationDuration = `${animationTimePerImage * imagesCount}s`;
	liElm.style.animationDelay = `${animationTimePerImage * animationIndex}s`;
	if (index === 1) {
		liElm.style.transform = "translateX(240px) translateZ(-240px) rotateY(-45deg)";
	} else if (index === imagesCount - 1) {
		liElm.style.transform = "translateX(-240px) translateZ(-240px) rotateY(45deg)";
	} else {
		liElm.style.transform = "translateZ(-500px)";
	}
	const imageElement = document.createElement("img");
	imageElement.src = `./${img.imageName}`;
	imageElement.alt = img.alt;
	liElm.appendChild(imageElement);

	if(slider){
		slider.appendChild(liElm);
	}
});

function dynamicAnimationHandler(imagesCount) {
	const freezeTime = 100 / imagesCount;
	const movementRange = freezeTime * 0.2;

	const animationName = `animationFor${imagesCount}Images`;
	const animationBody = `0%,
		${freezeTime - movementRange}% {
			transform: translateX(0);
		}
		${freezeTime}%,
		${2 * freezeTime - movementRange}% {
			transform: translateX(-240px) translateZ(-240px) rotateY(45deg);
		}
		${2 * freezeTime}%,
		${100 - freezeTime - movementRange}% {
			transform: translateZ(-500px);
		}
		${100 - freezeTime}%,
		${100 - movementRange}% {
			transform: translateX(240px) translateZ(-240px) rotateY(-45deg);
		}
		${100 - movementRange / 2}% {
			transform: translateX(240px) translateZ(-240px) rotateY(-45deg) translateX(160px);
		}
		100% {
			transform: translateX(0);
	}`;
	const styleElement = document.createElement("style");
	document.head.appendChild(styleElement);
	styleElement.sheet.insertRule(`@keyframes ${animationName} {${animationBody}}`, styleElement.length);

	return animationName;
}
window.onscroll = function() {
	scroll()
};

function scroll() {
	if (document.body.scrollTop > 20 || 
			document.documentElement.scrollTop > 20)
	{
		document.querySelector('#header').style.top
					= "0";
		document.querySelector('#header').style.backgroundColor
					= "#0074d9";

	}
	if(document.body.scrollTop > 100 || 
	document.documentElement.scrollTop > 100){
		document.querySelector('#header').style.top
		= "0";
		document.querySelector('#header').style.backgroundColor
					= "#294e70";
	}
	else {
		document.querySelector('#header').style.top
					= "0";
		document.querySelector('#header').style.backgroundColor
					= "#0074d900";
	}
}

	
		
