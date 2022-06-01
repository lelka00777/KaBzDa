import React from 'react';
import s from './ImgBorder.module.css';


export const ImgBorder = () => {
    return (<div className={s.content}>
        <h1 >SPORTS </h1>
        <div className={s.borderimg}>
            <a href={'https://www.nike.com/ru/'}>
                <img src={'https://www.pngplay.com/wp-content/uploads/9/Nike-Logo-PNG-Photo-Image.png'}/></a>
        </div>

        <p>
            Компания, основанная 25 января 1964 года под названием Blue Ribbon Sports, официально стала Nike, Inc. в
                1978 году[8][9]. Nike продаёт свою продукцию под собственным брендом, а также под марками Nike Golf,
                Nike
                Pro, Nike +, Air Jordan, Nike Blazers, Air Force 1, Nike Dunk, Air Max, Foamposite, Nike Skateboarding,
                Nike
                CR7, Hurley International, Converse[10]. Nike также принадлежала Bauer Hockey (позже переименована в
                Nike
                Bauer) в период между 1995 и 2008 годами[11]. Nike является спонсором многих спортсменов и спортивных
                команд
                по всему миру. Начиная с 1990-х годов компания регулярно подвергается критике за то, что её продукция
                производится на фабриках, где нарушается трудовое законодательство.
        </p>

        <div className={s.borderimg}><a href={'https://www.adidas.ru/'}>
            <img src={'https://cdn-icons-png.flaticon.com/512/731/731972.png'}/></a>
        </div>
        <p>
            Adidas AG (немецкий: [ˈʔadiˌdas]; стилизованно под adidas с 1949 года[3]) — немецкая транснациональная
                компания по производству спортивной одежды, обуви и аксессуаров. Это крупнейший производитель спортивной
                одежды в
                Европе и второй по величине в мире после Nike[4][5]. Это холдинговая компания Adidas Group, которая
                включает в себя
                Runtastic. «Бренд с тремя полосками» является одной из крупнейших спортивных компаний в истории. Выручка
                Adidas за 2018
                год составила 21,915 миллиарда евро[6].



        </p>
        <h2 >NFT</h2>
        <div className={s.flex_container}>
            <div>
                <img src={'https://coingenius.news/wp-content/uploads/2021/11/sportsicon-steps-into-the-future-of-sports-entertainment-with-nft-based-platform.png'}/>
            </div>
            <div> <img src={'https://img.tamindir.com/2021/12/470608/adidas-nft.jpg'}/></div>
            <div> <img src={'https://cryptoslate.com/wp-content/themes/cryptoslate-2020/imgresize/timthumb.php?src=https://cryptoslate.com/wp-content/uploads/2022/04/image_2022-04-26_182952407.png&w=600&h=315&q=75'}/></div>
        </div>

    </div>);
};

