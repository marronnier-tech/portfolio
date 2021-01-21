import React from 'react'
import './style/Profile.css'
import Abs from './Abs.js'

class Profile extends React.Component {
    render() {
        return (
            < div className="profile" >
                <Abs name="Profile" />
                <div className="story">
                    <div className="name-zone">
                        <h2>杤木 澪南</h2>
                        <p class="eng-name">Tochigi Reina</p>
                    </div>
                    <div className="intro">
                        <p>お茶の水女子大学理学部生物学科卒業、東京大学大学院総合文化研究科修士課程在学中。<br />
                        細胞生物学の研究室で、マウス初期胚（2細胞期）の研究を行い、手先の不器用さと闘う日々を過ごしている。</p >
                        <p>
                            私立豊島岡女子学園中学・高等学校の部活見学の際にHTMLに出会い、コンピュータ部に入部。<br />
                        その後学内の環境でのゲーム制作を試みようと、中学時代はRPGツクールで素材を用いつつRPGを初めて制作。<br />
                        高校時代は本格的なゲーム制作を目指し、完全オリジナルのノベルゲーム制作のリーダー的立場で企画を先導した。</p>
                        <p>高校の科目の中で生物が最も得意であったことから、生物学科へ進学。<br />
                        生物学の勉強をしつつ、情報科学への興味も持続していたため副専攻を履修し、教養科目でプログラミング演習を履修。<br />
                        現在も研究の傍ら、週末のアルバイトで画面を作成したり、隙間時間で個人開発を行っている。
                        </p>
                    </div >

                    <div className="tech">
                        <h4>学んできた言語や技術（フレームワーク）</h4>
                        <ul>
                            <li>Go（gin、gorm）</li>
                            <li>HTML、CSS（Bootstrap）</li>
                            <li>JavaScript（Node.js（Vue CLI、React）、jQuery、Three.js）</li>
                            <li>C++</li>
                            <li>Python（Django）</li>
                            <li>Java</li>
                        </ul>
                        <p>本ページはReactで制作しています。</p>
                    </div>
                    <div className="tech">
                        <h4>展望</h4>
                        <p>バックエンドを中心に、なるべく広い領域と関わって仕事をしたい。<br />
                        将来的にはバックエンドを専門とし、他の領域のことも熟知したフルスタックエンジニアになりたい。</p>
                    </div>
                    <div className="tech">
                        <h4>性格</h4>
                        <p>好奇心旺盛（理系・文系・クリエイティブ系など分野問わず）。高校時代は三つの部活に所属していた。<br />
                        調べ始めたことはとことん調べる派で、Google検索で何十ページも見ていることがある。<br />
                        良くも悪くも負けず嫌いで、負けず嫌いが高じて東大に入学した。<br />
                        また、せっかち。自分の歩くスピードを遅いと感じてハイヒールのまま走り出すこともしばしばある。<br />
                        </p>
                    </div>
                </div>

            </div >
        )
    }
}

export default Profile;