
let counter = 1;

function neuerAuftrag() {
    document.body.style.backgroudColor = "red";
    console.log('works')
    // let auftragsTitle = document.querySelector('#title-input').value;
    // console.log(auftragsTitle);


    // let newCounterTd = `<td>${counter}</td>`;
    // let newObjectTd = `<td>${prompt('Gib die Object Nummer ein')}</td>`;
    // let issueTd = `<td>${auftragsTitle}</td>`;
    // let zuweisungTd = `<td><img src="/Users/rimlight/Documents/GHV PVT APP/ghv-app/library/Memojis/IMG_4655.PNG" style="height: 30px;"></td><td>…</td><td>…</td>`;
    // let removeBtn = '<td onclick="deleteRow()" class="rowBtn deleteRowBtn">…</td>'
    // let inspectBtn = '<td onclick="inspectRow()" class="rowBtn inspectRowBtn">…</td>'
    // let prioTd = '<td class="rowBtn inspectRowBtn">…</td>'



    // let newRow = document.createElement('tr');
    // newRow.classList.add('auftrags-row');
    // newRow.innerHTML = newCounterTd + newObjectTd + issueTd + zuweisungTd + removeBtn + inspectBtn;
    
    // document.querySelector('.usertable-body').appendChild(newRow)
    // console.log(newRow)
    
    // counter++;

    return false;
};








function addIssue() {


let date = new Date().toLocaleDateString("de-DE");



let issueTitle = document.getElementById('title-input');
let issueObjekt = document.getElementById('objektInput');



let newRowElement = document.createElement('div');
    newRowElement.classList.add('listItem');
    newRowElement.innerHTML = `
    <div class="itemSelector">
      <input type="checkbox" name="itemSelector" id="itemSelector">
    </div>
    <div class="listIssueSection">
      <a href="" class="listLink">${issueTitle.value}</a>
      <div class="issueSubText">
          <span class="issueLocation"> ${issueObjekt.value} dies das Annanas str.</span>
          <span class="issueOpendBy">Andreas Sanchez Paetzmann</span>
          <span class="lastTimeEdited">${date}</span>
      </div>
    </div>  

    <div class="issueAssignment">
         <img src="/Users/rimlight/Documents/GHV PVT APP/ghv-app/library/Memojis/IMG_4655.PNG">
    </div>

    <div class="prioSet">
         <img src="/Users/rimlight/Documents/GHV PVT APP/ghv-app/library/person.circle@2x.png" alt="">
    </div>

    <div class="auftragsNummer">
          <h4>${counter}</h4>
    </div>
    <div class="deleteRow"><span><img src="library/Icons/delete.left@2x.png"></span></div>
`;

document.querySelector('.auftragsListe').appendChild(newRowElement);

closeAuftragsModal()

counter++;

issueTitle.value = '';
issueObjekt.value = '';


}


function setPrio() = {
    
}


function showAuftragsModal() {
    
    let auftragsModal = document.querySelector('.neuerAuftragModal');
    auftragsModal.style.visibility = 'visible';

    let backgroundBlur = document.querySelector('.auftragsListe');
    backgroundBlur.style.filter = 'blur(5px)';
}

function closeAuftragsModal() {

    let auftragsModal = document.querySelector('.neuerAuftragModal');
    auftragsModal.style.visibility = 'hidden';

    let backgroundBlur = document.querySelector('.auftragsListe');
    backgroundBlur.style.filter = 'blur(0px)';
}


