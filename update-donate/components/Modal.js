import { useState } from "react";

export const ReplyModal = ({setModal, sendReply}) => {
    const [replyText, setReplyText] = useState('');

    return (
        <div className="modal">
            <div className="modal_conteudo">
                <div className="modal_conteudo-titulo">
                    <h2>
                        Adicionar resposta
                    </h2>
                </div>  
                <div className="modal_conteudo-texto">
                    <textarea className="modal_textarea" placeholder="Digite sua resposta aqui..." value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}></textarea>
                </div>
                <div className="modal_conteudo-botoes">
                    <button className="modal_btn-cancelar" onClick={setModal}>Cancelar</button>
                    <button className="modal_btn-enviar" onClick={() => sendReply(replyText)}>Enviar</button>
                </div>
            </div>
        </div>
    )
}