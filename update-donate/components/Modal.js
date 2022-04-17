export const ReplyModal = () => {
    return (
        <div className="modal">
            <div className="modal_conteudo">
                <div className="modal_conteudo-titulo">
                    <h2>
                        Adicionar resposta
                    </h2>
                    <button className="modal_btn-fechar" onClick={() => setModal(false)}>
                        <img src="../assets/img/fechar.png" alt=""/>
                    </button>
                </div>  
                <div className="modal_conteudo-texto">
                    <textarea className="modal_textarea" placeholder="Digite sua resposta aqui..."></textarea>
                </div>
                <div className="modal_conteudo-botoes">
                    <button className="modal_btn-cancelar">Cancelar</button>
                    <button className="modal_btn-enviar">Enviar</button>
                </div>
            </div>
        </div>
    )
}