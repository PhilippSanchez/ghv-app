
let counter = 1;

function neuerAuftrag() {
    
    let auftragsTitle = document.querySelector('#auftrags-title').innerText;
    console.log(auftragsTitle);
    let newCounterTd = `<td>${counter}</td>`;
    let newObjectTd = `<td>${prompt('Gib die Object Nummer ein')}</td>`;
    let issueTd = `<td>${auftragsTitle}</td>`;
    let zuweisungTd = `<td><img src="/Users/rimlight/Documents/GHV PVT APP/ghv-app/library/Memojis/IMG_4655.PNG" style="height: 30px;"></td><td>…</td><td>…</td>`;
    let removeBtn = '<td onclick="deleteRow()" class="rowBtn deleteRowBtn">…</td>'
    let inspectBtn = '<td onclick="inspectRow()" class="rowBtn inspectRowBtn">…</td>'
    let prioTd = '<td class="rowBtn inspectRowBtn">…</td>'



    let newRow = document.createElement('tr');
    newRow.classList.add('auftrags-row');
    newRow.innerHTML = newCounterTd + newObjectTd + issueTd + zuweisungTd + removeBtn + inspectBtn;
    
    document.querySelector('.usertable-body').appendChild(newRow)
    console.log(newRow)
    
    counter++;


};



function deleteRow(){
    console.log('removed');
};


function inspectRow(){

    let infoModal = document.createElement('div');

    infoModal.id = 'infoModal';
    infoModal.innerHTML = '<h1>helloooooo</h1>';

    document.body.appendChild(infoModal);
   
};





function showAuftragsModal() {
    
    let auftragsModal = document.querySelector('.neuerAuftragModal');
    auftragsModal.style.visibility = 'visible';

    let backgroundBlur = document.querySelector('.app-container');
    backgroundBlur.style.filter = 'blur(5px)';
}

function closeAuftragsModal() {

    let auftragsModal = document.querySelector('.neuerAuftragModal');
    auftragsModal.style.visibility = 'hidden';
}