let gui = {};

function main() {
    gui = {
        "lab_disciplina": document.querySelector("#lab_disciplina"),
        "lab_data": document.querySelector("#lab_data"),
        "barra_aulas": document.querySelector("#barra_aulas"),
        "tab_bar": document.querySelector("#tab_bar")
    };

    //gui.lab_disciplina.innerHTML = "";
    //gui.lab_data.innerHTML = "";
}

function on_btn_add_baloes_click() {
    alert("on_btn_add_baloes_click");
}


function on_btn_add_leitura_click() {
    alert("on_btn_add_leitura_click");
}


function on_btn_add_quadro_click() {
    alert("on_btn_add_quadro_click");
}


function on_btn_add_caderno_click() {
    alert("on_btn_add_caderno_click");
}


function on_btn_add_site_click() {
    alert("on_btn_add_site_click");
}


function on_btn_projetar_click() {
    //alert("on_btn_projetar_click");
    window.open("/projecao", 'PROJEÇÃO', 'width=800,height=600,directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no');
    //'location=no,toolbar=no,width=800,height=600,scrollbars=yes,status=yes');                                         
    //$.post( "/projetar", { src: $("#codigo").val() } );
}


function on_btn_abrir_click() {
    alert("on_btn_abrir_click");
}


function on_btn_salvar_click() {
    alert("on_btn_salvar_click");
}


function on_btn_salvar_nuvens_click() {
    alert("on_btn_salvar_nuvens_click");
}


function on_btn_frequencia_click() {
    alert("on_btn_frequencia_click");
}

function on_aula_click(i) {
    alert("Aula: " + i);
}

function on_tab_click(i) {
    alert("Tab: " + i);
}