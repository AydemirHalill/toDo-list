const input = document.getElementById('input');
const add = document.getElementById('add');
const del = document.getElementById('delete');
const edit = document.getElementById('edit');
const lists = document.getElementById('lists');
const empty = document.getElementById('empty')
let count = 0;
let arr = []

function listEdit(button) {
    const newText = prompt('Editing active')
    if (newText !== null) {
        const td = button.parentNode.previousElementSibling
        td.textContent = newText
    }
}

function listDel(button) {
    const del = confirm('Are you sure you want to delete?')
    if(del) {
        const tr = button.parentNode.parentNode
        lists.removeChild(tr)
    }
}

add.addEventListener('click' , ()=> {
    if (input.value === '') {
        alert('You must write some of the boxes');
    } else {
        if (lists) {
            const trCounts = lists.getElementsByTagName('tr')
        
            for (let i=0; i<trCounts.length; i++) {
                arr.push(trCounts[i].textContent.trim())
            }
        }
        count++
        const tr = document.createElement('tr')
        tr.innerHTML = 
        `
            <th>${count}</th>
            <td class="lisText">${input.value}</td>
            <td><div class="btn btn-sm btn-warning text-uppercase" id="edit" onclick="listEdit(this)">EDIT </div></td>
            <td><div class="btn btn-sm btn-danger text-uppercase" id="delete" onclick="listDel(this)">DELETE</div></td>
        `
        lists.appendChild(tr)
        input.value = ''
        empty.style.display="none"
    }
})
