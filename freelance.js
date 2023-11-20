const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
];

const displayFreelancer = [
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
];

const maxFreelancers = freelancers.length;
const addShapeIntervalId = setInterval(addFreelancer, 1000);

// render();

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
        frPrice.innerText = freelancer.price;

        row.appendChild(frName);
        row.appendChild(frOccupation);
        row.appendChild(frPrice);

        console.log(row);
        return row;
    })
    table.replaceChildren(...tableElmements);
}

function addFreelancer() {
    const nextFreelance = freelancers[Math.floor(Math.random() * freelancers.length)];
    if (!displayFreelancer.includes(nextFreelance)) {
        displayFreelancer.push(nextFreelance);
    }
    render();
    averagePrice();
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
    const averageParagraph = document.getElementById("average")
    const average = document.createElement('p');
    average.textContent = `The average starting price is $${mean}`;
    averageParagraph.replaceChildren(average);
}

// const priceTest = averagePrice();

// const averageParagraph = document.getElementById("average")
// const average = document.createElement('p');
// average.textContent = `The average starting price is $${priceTest}`
// averageParagraph.replaceWith(average);

