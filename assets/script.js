let saldo = parseInt(localStorage.getItem("saldo")) || 1;
let historico = JSON.parse(localStorage.getItem("historico")) || [];
let estrelas = parseInt(localStorage.getItem("estrelas")) || 0;

localStorage.setItem("saldo", saldo);
localStorage.setItem("estrelas", estrelas);

document.getElementById("saldo").innerText = saldo;
document.getElementById("estrelas").innerText = estrelas;

function comprar(preco, item) {
  if (saldo >= preco) {
    saldo -= preco;
    localStorage.setItem("saldo", saldo);
    document.getElementById("saldo").innerText = saldo;

    historico.push(item + " - " + preco + " moedas");
    localStorage.setItem("historico", JSON.stringify(historico));

    alert("🪙 Compra realizada: " + item);
  } else {
    alert("❌ Moedas insuficientes!");
  }
}

function addMoedas() {
  saldo += 1;
  localStorage.setItem("saldo", saldo);
  document.getElementById("saldo").innerText = saldo;
}

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function abrirHistorico() {
  const painel = document.getElementById("painelHistorico");
  const lista = document.getElementById("listaHistorico");

  lista.innerHTML = "";

  historico.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    lista.appendChild(li);
  });

  painel.style.display = "flex";
  toggleMenu();
}

function fecharHistorico() {
  document.getElementById("painelHistorico").style.display = "none";
}

function addEstrela() {
  estrelas++;
  localStorage.setItem("estrelas", estrelas);
  document.getElementById("estrelas").innerText = estrelas;
}

function limparHistorico() {
  if (confirm("Deseja apagar todo o histórico de compras?")) {
    historico = [];
    localStorage.removeItem("historico");

    document.getElementById("listaHistorico").innerHTML = "";
  }
}

function removerMoeda() {
  if (saldo > 0) {
    saldo--;
    localStorage.setItem("saldo", saldo);
    document.getElementById("saldo").innerText = saldo;
  } else {
    alert("❌ Não tem moedas para remover!");
  }
}
