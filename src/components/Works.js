import React from 'react'
import './style/Works.css'

class Works extends React.Component {
    render() {
        return (
            < div className="works" >
                <h1>Works</h1>
                <div>
                    <div className="product">
                        <h2><a href="https://todot-com.herokuapp.com/" target="_blank">ToDotCom(トゥドットコム）</a>
                        </h2>
                        <img src={`${window.location.origin}/todot-com.png`} />
                        <p>Discordの勉強サーバーで「日課が続かない」という声を聞いて共感し、<br />
                        日課を共有することで持続力がアップするのではないかと考えて
                        日課共有専用のSNSを作ることにした。<br />
                        バックエンドではGoを採用。こちらは奮わなかったインターンの内容を自学で習得するために選定した。<br />
                        ※現在メンテナンス中のためログイン以降の機能が使えません
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
                            Djangoによる制作
                        </h2>
                        <p></p>
                    </div>
                </div>

            </div >
        )
    }
}

export default Works;