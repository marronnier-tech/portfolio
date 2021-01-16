import React from 'react'
import './style/Works.css'
import Abs from './Abs.js'

class Works extends React.Component {
    render() {
        return (
            < div className="works" >
                <Abs name="Works" />
                <div>
                    <div className="product">
                        <h2><a href="https://todot-com.herokuapp.com/" target="_blank">ToDotCom(トゥドットコム）</a>
                        </h2>
                        <img src={`${window.location.origin}/todot-com.png`} />
                        <p>Discordの勉強サーバーで「日課が続かない」という声を聞いて共感し、<br />
                        日課を共有することで持続力がアップするのではないかと考えて
                        日課共有専用のSNSを作ることにした。<br />
                        バックエンドではGoを採用。こちらは奮わなかったインターンの内容を自学で習得するために選定した。<br />
                        ※現在メンテナンス中のためログイン以降の機能が使えません。<br />
                            <ul>
                                <li> <a href="https://github.com/tocchy-tocchy/todot-com-api" target="_blank">バックエンドGithub</a> <br /></li>
                                <li><a href="https://github.com/tocchy-tocchy/todot-com-front" target="_blank">フロントエンドgithub</a> <br /></li>
                            </ul>

                        </p>

                    </div>
                    <div className="product">
                        <h2>
                            <a href="#">猫が階段を登るCG</a>
                        </h2>
                        <p>Three.jsでCGを作れると聞いたので試しに作った。<br />
                        猫が階段を登るところを工夫した。</p>
                    </div>
                    <div className="product">
                        <h2>
                            近日公開
                        </h2>
                        <p></p>

                    </div>
                </div>

            </div >
        )
    }
}

export default Works;