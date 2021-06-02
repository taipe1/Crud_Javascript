
/* Javascript */
var selectedRow = null


function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}
/* leer los datos */
function readFormData() {
    var formData = {};
    formData["fullNombre"] = document.getElementById("fullNombre").value;
    formData["emCodigo"] = document.getElementById("emCodigo").value;
    formData["salario"] = document.getElementById("salario").value;
    formData["ciudad"] = document.getElementById("ciudad").value;
    return formData;
}
/* insert daros */
function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullNombre;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.emCodigo;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salario;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.ciudad;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEditar(this)">Editar</a>
                       <a onClick="onEliminar(this)">Eliminar</a>`;
}
/* actualizar datos */
function resetForm() {
    document.getElementById("fullNombre").value = "";
    document.getElementById("emCodigo").value = "";
    document.getElementById("salario").value = "";
    document.getElementById("ciudad").value = "";
    selectedRow = null;
}
/* editar datos */
function onEditar(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullNombre").value = selectedRow.cells[0].innerHTML;
    document.getElementById("emCodigo").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salario").value = selectedRow.cells[2].innerHTML;
    document.getElementById("ciudad").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullNombre;
    selectedRow.cells[1].innerHTML = formData.emCodigo;
    selectedRow.cells[2].innerHTML = formData.salario;
    selectedRow.cells[3].innerHTML = formData.ciudad;
}
/* eliminar datos */
function onEliminar(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
/* validar */
function validate() {
    isValid = true;
    if (document.getElementById("fullNombre").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}


