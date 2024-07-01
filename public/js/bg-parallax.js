let animateFlag = false;

document.addEventListener("DOMContentLoaded", () => {
    const image1 = document.getElementById("heero");    

    let panels = [image1];

    let backgroundY = 100 / window.innerHeight
    let backgroundX = 100 / window.innerWidth

    document.addEventListener("mousemove", (e) => {
        if(!animateFlag) {
            panels.forEach(panel => {
                gsap.to(panel, {
                    backgroundPosition: `${((backgroundX * e.clientX) / 10) + 50}% ${((backgroundY * e.clientY) / 10) + 50}%`,
                    overwrite: true,
                    ease: "power4.out",
                    duration: 0.5
                })
            })
        }
    });
})

const parallax = document.getElementById("one");
if (parallax) {
	let speed = 0.5;
	parallax.style = "position:relative;z-index:1";
	parallax.nextElementSibling.style = "position:relative;z-index:10";
	window.addEventListener("scroll", function () {
		let offsetY = window.pageYOffset;
		parallax.style.top = offsetY * speed + "px";
	});
}