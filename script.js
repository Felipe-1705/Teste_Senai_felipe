// Função para filtrar a tabela
document.getElementById('filterInput').addEventListener('keyup', function() {
    const filter = this.value.toLowerCase();
    const tableRows = document.querySelectorAll('#serviceTable tbody tr');

    tableRows.forEach(row => {
        const component = row.cells[0].querySelector('input').value.toLowerCase();
        if (component.includes(filter)) {
            row.style.display = ''; // Mostra a linha
        } else {
            row.style.display = 'none'; // Esconde a linha
        }
    });
});

// Função para adicionar serviços
document.getElementById('addRowBtn').addEventListener('click', function() {
    const table = document.getElementById('serviceTable').getElementsByTagName('tbody')[0];
    
    // Cria uma nova linha
    const newRow = table.insertRow();
    
    // Cria e adiciona células à nova linha
    const componentCell = newRow.insertCell(0);
    const quantityCell = newRow.insertCell(1);
    const valueCell = newRow.insertCell(2);
    const statusCell = newRow.insertCell(3);
    const actionCell = newRow.insertCell(4);

    // Popula as células com campos de input
    componentCell.innerHTML = `<input type="text" placeholder="Componente" class="componente-input">`;
    quantityCell.innerHTML = `<input type="text" placeholder="Quantidade">`;
    valueCell.innerHTML = `<input type="text" placeholder="Valor">`;
    statusCell.innerHTML = `<input type="text" placeholder="Status">`;
    actionCell.innerHTML = `<button class="edit-btn">Editar</button> <button class="delete-btn">Excluir</button>`;

    // Adiciona funcionalidade de exclusão à nova linha
    const deleteBtn = actionCell.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
        table.deleteRow(newRow.rowIndex - 1); // Remove a linha quando o botão "Excluir" for clicado
    });

    // Adiciona funcionalidade de edição à nova linha
    const editBtn = actionCell.querySelector('.edit-btn');
    editBtn.addEventListener('click', function() {
        const inputs = newRow.querySelectorAll('input');
        inputs.forEach(input => {
            input.disabled = !input.disabled; // Habilita ou desabilita os inputs
        });
        editBtn.textContent = inputs[0].disabled ? 'Editar' : 'Salvar'; // Troca o texto do botão
    });
});
