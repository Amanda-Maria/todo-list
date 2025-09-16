const input = document.getElementById("taskInput");
const botao = document.getElementById("addTaskBtn");
const lista = document.getElementById("taskList");

botao.addEventListener("click", function () {
    const valor = input.value.trim();

    if (valor !== "") {
        const container = document.createElement("li");

        const btnConcluido = document.createElement("button");
        btnConcluido.className = "btn-complete";

        const item = document.createElement("span");
        item.textContent = valor;
        item.className = "task-text";

        const btnExcluir = document.createElement("button");
        btnExcluir.className = "btn-delete";
        btnExcluir.innerHTML = '<i class="fas fa-trash"></i>'; 

        const btnEditar = document.createElement("button");
        btnEditar.className = "btn-edit";
        btnEditar.innerHTML = '<i class="fas fa-pen-to-square"></i>'; 

        btnExcluir.addEventListener("click", () => {
            lista.removeChild(container);
        });

        btnConcluido.addEventListener("click", () => {
            btnConcluido.classList.toggle("checked");
            item.classList.toggle("completed");
            btnConcluido.textContent = btnConcluido.classList.contains("checked") ? "✓" : "";
        });

        btnEditar.addEventListener("click", () => {
            const inputEdit = document.createElement("input");
            inputEdit.type = "text";
            inputEdit.value = item.textContent;
            inputEdit.className = "task-edit";

            container.replaceChild(inputEdit, item);
            inputEdit.focus();

            const salvar = () => {
                item.textContent = inputEdit.value.trim() || item.textContent;
                container.replaceChild(item, inputEdit);
            };

            inputEdit.addEventListener("blur", salvar);
            inputEdit.addEventListener("keypress", (e) => {
                if (e.key === "Enter") salvar();
            });
        });

        container.appendChild(btnConcluido);
        container.appendChild(item);
        container.appendChild(btnEditar);
        container.appendChild(btnExcluir);

        lista.insertBefore(container, lista.firstChild);

        input.value = "";
    }
});

