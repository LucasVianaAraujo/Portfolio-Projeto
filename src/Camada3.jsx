import html from './img/html.png'
import css from './img/css.png'
import js from './img/scriptjava.png'
import reacao from './img/react.png'
import scss from './img/sass.png'
import node from './img/nodejs.png'
import mysql from './img/mysql.png'
import catu from './img/github_reut.png'

function Camada3() {
    return (
        <div className="fundo_todo1">
            <div className="texto_topo">
                <h1>TECNOLOGIAS</h1>
            </div>

            <div className="justificador_quadrado">
                <div className="quadrado">
                    <img src={html} alt="" />
                    <h1>HTML</h1>
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                </div>

                <div className="quadrado">
                    <img src={css} alt="" />
                    <h1>CSS3</h1>
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                </div>

                <div className="quadrado">
                    <img src={js} alt="" />
                    <h1>JAVASCRIPT</h1>
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                </div>

                <div className="quadrado">
                    <img src={reacao} alt="" />
                    <h1>REACT</h1>
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                </div>
            </div>

            <div className="justificador_quadrado">
                <div className="quadrado">
                    <img src={scss} alt="" />
                    <h1>SASS</h1>
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                </div>

                <div className="quadrado">
                    <img src={node} alt="" />
                    <h1>NODEJS</h1>
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                </div>

                <div className="quadrado">
                    <img src={mysql} alt="" />
                    <h1>MYSQL</h1>
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                </div>

                <div className="quadrado">
                    <img src={catu} alt="" />
                    <h1>GITHUB</h1>
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                </div>
            </div>
        </div>
    )
}

export default Camada3