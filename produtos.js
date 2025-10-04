
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  this.reset();
});

document.getElementById('orcamento-whatsapp').href =
  'https://wa.me/258868781688?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20dos%20vossos%20serviços.';

function calcularPrecoIndividual(idInput, precoBase) {
  const metros = parseFloat(document.getElementById(idInput).value);
  if (!metros || metros <= 0) return alert("Digite uma área válida em m²");
  const precoFinal = (precoBase * metros).toFixed(2);
  alert(`Preço calculado: ${precoFinal} MZN para ${metros} m².`);
}

function calcularProjetoPorDimensoes(compInputId, largInputId, precoBase) {
  const comprimento = parseFloat(document.getElementById(compInputId).value);
  const largura = parseFloat(document.getElementById(largInputId).value);function calcularVigas() {
  const area = parseFloat(document.getElementById('area-vigotas').value);
  const radios = document.getElementsByName('opcao');
  let opcao = 1;
  radios.forEach(r => { if (r.checked) opcao = parseFloat(r.value); });

  if (!area || area <= 0) {
    document.getElementById('resultado-vigas').innerHTML = '';
    return;
  }

  const precoBase = 200; // pode mudar conforme quiser
  const total = (area * precoBase * opcao).toFixed(2);
  document.getElementById('resultado-vigas').innerHTML = 
    `Preço: <strong>${total} MZN</strong> para ${area} m²`;
}
<script>
  let indexSlide = 0;
  const slides = document.querySelectorAll('.slide');

  function mostrarProximoSlide() {
    slides.forEach(slide => slide.classList.remove('ativo'));
    indexSlide = (indexSlide + 1) % slides.length;
    slides[indexSlide].classList.add('ativo');
  }

  setInterval(mostrarProximoSlide, 3000); // Troca a cada 3 segundos
</script>


  if (!comprimento || !largura || comprimento <= 0 || largura <= 0) {
    return alert("Digite comprimento e largura válidos");
  }

  const area = comprimento * largura;
  const precoFinal = (precoBase * area).toFixed(2);

  // ID da div de resultado (baseado no compInputId)
  const baseId = compInputId.replace('comp-', '');
  const resultadoDiv = document.getElementById(`resultado-${baseId}`);
  resultadoDiv.innerHTML = `Área: <strong>${area} m²</strong> | Preço: <strong>${precoFinal} MZN</strong>`;
}

function renderProduto(containerId, produto) {
  const container = document.getElementById(containerId);
  const div = document.createElement('div');
  div.className = 'produto';
  div.setAttribute('data-preco-base', produto.preco);
  if (produto.precoPorMetro) {
    div.setAttribute('data-preco-m2', 'true');
  }

  const baseId = produto.nome.replace(/\s+/g, '-');
  const idInput = `input-${baseId}`;
  const compId = `comp-${baseId}`;
  const largId = `larg-${baseId}`;

  div.innerHTML = `
    <h4>${produto.nome}</h4>
    <p class="categoria">Categoria: ${produto.categoria}</p>
    <img src="${produto.imagem || 'placeholder.jpg'}" alt="Imagem de ${produto.nome}" width="200"><br>
    <p class="preco">Preço: ${produto.preco} MZN${produto.precoPorMetro ? ' (por m²)' : ''}</p>
    ${produto.tipoProjeto ? `
      <label>Comprimento (m): <input type="number" id="${compId}" min="1" style="width: 80px;">
      <label>Largura (m): <input type="number" id="${largId}" min="1" style="width: 80px;">
      <button onclick="calcularProjetoPorDimensoes('${compId}', '${largId}', ${produto.preco})">Calcular</button>
    ` : produto.precoPorMetro ? `
      <label>Área (m²): <input type="number" id="${idInput}" min="1" style="width: 80px;">
      <button onclick="calcularPrecoIndividual('${idInput}', ${produto.preco})">Calcular</button>
    ` : ''}
  `;

  container.appendChild(div);
}

const projetos = [
  { nome: "PROJECTOS ARQUITETONICOS", preco: 300, categoria: "Projeto", imagem: "PANFLETE.jpg", tipoProjeto: true }
];
const materiais = [
  { nome: "Bloco Cimento", preco: 15, categoria: "Material", imagem: "bloco.jpg" }
];
const servicos = [
  { nome: "Pint", preco: 100, categoria: "Serviço", imagem: "pintura.jpg", precoPorMetro: true }
];
const construcao = [
  { nome: "CONSTRUCAO DE EDIFICIOS", preco: 12000, categoria: "Construção", imagem: "predio.jpg", precoPorMetro: true }
];

projetos.forEach(p => renderProduto('projetos-container', p));
materiais.forEach(p => renderProduto('materiais-container', p));
servicos.forEach(p => renderProduto('servicos-container', p));
construcao.forEach(p => renderProduto('construcao-container', p));
{produto.tipoProjeto ? `
  <label>Comprimento (m): <input type="number" id="${compId}" min="1" style="width: 80px;"></label>
  <label>Largura (m): <input type="number" id="${largId}" min="1" style="width: 80px;"></label>
  <button onclick="calcularProjetoPorDimensoes('${compId}', '${largId}', ${produto.preco})">Calcular</button>
  <div id="resultado-${baseId}" class="resultado-calculo"></div>
` : produto.precoPorMetro ?
  <label>Área(m²): <input type="number" id="${idInput}" min="1" style="width: 80px;"></label>
  <button onclick= "calcularPrecoIndividual('${idInput}', ${produto.preco})">Calcular</button>
  <div id="resultado-${idInput}" class="resultado-calculo"></div>}