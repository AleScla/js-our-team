console.log('js funziona');

let row = document.querySelector('.row');
const members = [
    {
        names: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        names: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg'
    },
    {
        names: 'Walter Gordon',
        role: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg'
    },
    {
        names: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg'
    },
    {
        names: 'Scott Estrada',
        role: 'Developer',
        img: 'scott-estrada-developer.jpg'
    },
    {
        names: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg'
    }
]
console.log(members);

for (let i = 0; i < members.length; i++){
    console.log(members[i]);
    for (let key in members[i]){
        console.log(members[i][key]);
    }
}

for (let i = 0; i < members.length; i++){
    row.innerHTML += 
    `<div class="col-4 mb-3">
        <div class="card text-center">
            <img src="img/${members[i]['img']}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${members[i]['names']}</h5>
                <p class="card-text">${members[i]['role']}</p>
            </div>
        </div>        
    </div>
    `       
}
