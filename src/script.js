let auftragsCounter = 0;



let neuerAuftrag = document.createElement('tr');
neuerAuftrag.innerHTML =  `<td class="objNr.">${auftragsCounter}<td><td>601-TFK<td>`;


document.getElementsByClassName('usertable-body').appendChild(neuerAuftrag);