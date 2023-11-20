const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
    { name: "James Bond", price: 120, occupation: "MI-6" },
    { name: "John Daily", price: 72, occupation: "Golfer" },
    { name: "Gandolth the Grey", price: 120, occupation: "Wizard" },
    { name: "Frodo Baggins", price: 55, occupation: "Adventurer" },
    { name: "Harry Potter", price: 59, occupation: "Wizard" },
    { name: "Merry Poppins", price: 65, occupation: "Nanny" },
    { name: "John Smith", price: 47, occupation: "Designer" },
    { name: "Prof. Dumblore", price: 77, occupation: "Wizard/Professor" },
    { name: "Prof. Snape", price: 47, occupation: "Wizard/Potions Professor" },
    { name: "Sam Wise Gamgee", price: 88, occupation: "Hero" },
    { name: "Merry Brandybuck", price: 74, occupation: "Professional Pipe Smoker" },
];

const displayFreelancer = [
    { name: "Prof. Possum", price: 81, occupation: "teacher" },
    { name: "Dr. Doolittle", price: 47, occupation: "teacher" },
];

const maxFreelancers = freelancers.length;
const addShapeIntervalId = setInterval(addFreelancer, 3000);

render();

function render() {
    // Render the squares
    const table = document.getElementById('table_top');
    const tableElmements = displayFreelancer.map((freelancer) => {
        const row = document.createElement('tr');
        const frName = document.createElement('td');
        const frOccupation = document.createElement('td');
        const frPrice = document.createElement('td');

        frName.innerText = freelancer.name;
        frOccupation.innerText = freelancer.occupation;
        frPrice.innerText = '$' + freelancer.price;

        row.appendChild(frName);
        row.appendChild(frOccupation);
        row.appendChild(frPrice);

        return row;
    })
    table.replaceChildren(...tableElmements);
    averagePrice();
}

function addFreelancer() {
    const nextFreelance = freelancers[Math.floor(Math.random() * freelancers.length)];
    if (!displayFreelancer.includes(nextFreelance)) {
        displayFreelancer.push(nextFreelance);
    }
    render();

    if (displayFreelancer.length >= maxFreelancers) {
        clearInterval(addShapeIntervalId)
    }

}

function averagePrice() {
    let sum = 0;
    for (let i = 0; i < displayFreelancer.length; i++) {
        let currentNum = displayFreelancer[i].price;
        sum += currentNum;
    }
    const mean = Math.round(sum / displayFreelancer.length);
    const averageParagraph = document.querySelector("#average");
    const average = document.createElement('p');
    average.textContent = `The average starting price is $${mean}`;
    averageParagraph.replaceChildren(average);
}
