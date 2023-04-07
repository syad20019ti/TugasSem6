import style from "./Hero.module.css";

function Hero(){
    return(
        <div className={style.container}>
            <div className={style.hero}>
                <div className={style.hero__left}>
                    <h3 className={style.hero__title}>Batman</h3>
                    <p className={style.hero__genre}>Action</p>
                    <p className={style.hero__description}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
                        cum accusamus quisquam earum velit ea nobis maiores exercitationem
                        nam temporibus.
                    </p>
                    <button className={style.hero__button}>Watch</button>
                </div>
                <div className={style.hero__right}>
                    <img className={style.hero__image}  
                        src="https://th.bing.com/th/id/OIP.lqznfPkCQ3uKn7cCVvWCeAHaEo?w=276&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                        alt="placeholder"
                     />
                </div>
            </div>
        </div>
    );
}

export default Hero;