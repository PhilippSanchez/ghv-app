

const testFunc = () => console.log('Test Running');

let counter = 1;

function neuerAuftrag() {
    


    let newCounterTd = `<td>${counter}</td>`;
    let newObjectTd = `<td>${prompt('Gib die Object Nummer ein')}</td>`;
    let issueTd = `<td>${prompt('Informationen zum Problem')}</td>`;
    let zuweisungTd = `<td><img src="/Users/rimlight/Documents/GHV PVT APP/ghv-app/library/Memojis/IMG_4655.PNG" style="height: 30px;"></td>`;


    let newRow = document.createElement('tr');
    newRow.classList.add('auftrags-row');
    newRow.innerHTML = newCounterTd + newObjectTd + issueTd + zuweisungTd;
    
    document.querySelector('.usertable-body').appendChild(newRow)
    console.log(newRow)

    counter++;


}

function deleteRow(){
    
}
