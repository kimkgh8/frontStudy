let currentTarget;
const review = document.querySelector(".review");
const content = review.querySelectorAll('*');
// local reviews data
const reviews = [
	{
		author: 'susan smith',
		job: 'web developer',
		img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
		info: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
	},
	{
		author: 'anna johnson',
		job: 'web designer',
		img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
		info: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
	},
	{
		author: 'peter jones',
		job: 'intern',
		img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
		info: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
	},
	{
		author: 'bill anderson',
		job: 'the boss',
		img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
		info: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
	},
];

const randomReviews = () => {
	let randomNum = Math.floor(Math.random() * reviews.length);
	currentTarget = randomNum;
	renderReviews(randomNum)
};

const moveReviews = (option) => {
	currentTarget = option === "prev" ? getCurrentTargetNumber(currentTarget - 1) : getCurrentTargetNumber(currentTarget + 1);
	renderReviews(currentTarget)
};

const renderReviews = (target) => {
	Array.from(content).filter((item) => item.id).forEach(item => {
		if (item.id === "person-img") {
			item.src = reviews[target].img;
		} else {
			item.textContent = reviews[target][item.id];
		}
	});
}

const getCurrentTargetNumber = (number) => {
	if (number === -1) {
		return reviews.length - 1;
	} else if (number === reviews.length){
		return 0;
	} else {
		return number;
	}
}

document.addEventListener("DOMContentLoaded", function() {
	randomReviews();
});