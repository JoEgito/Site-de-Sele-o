$(document).ready(function() {
    // Carregar estados ao carregar a página
    $.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome", function(data) {
        let estados = $("#estado");
        estados.append('<option value="">Selecione o Estado</option>');
        data.forEach(function(estado) {
            estados.append('<option value="' + estado.id + '">' + estado.nome + '</option>');
        });
    });

    // Carregar cidades ao selecionar um estado
    $("#estado").change(function() {
        let estadoId = $(this).val();
        let cidades = $("#cidade");
        cidades.empty();
        cidades.append('<option value="">Selecione a Cidade</option>');
        if (estadoId) {
            $.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + estadoId + "/municipios", function(data) {
                data.forEach(function(cidade) {
                    cidades.append('<option value="' + cidade.id + '">' + cidade.nome + '</option>');
                });
            });
        }
    });
});