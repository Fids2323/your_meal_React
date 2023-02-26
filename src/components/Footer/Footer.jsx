import classNames from "classnames";
import {Container} from "../Container/Container";
import style from "./Footer.module.css";
import logo from "../../assets/img/logo-o.svg";
import PhoneSvg from "../../assets/img/phone.svg";
import VkSvg from "../../assets/img/vk.svg";
import TelegramSvg from "../../assets/img/telegram.svg";

export const Footer = () => (
	<footer className={style.footer}>
		<Container>
			<div className={style.content}>
				<img className={style.logo} src={logo} alt="Логотип YourMeal" />
				<address className={style.address}>
					<div className={style.contact}>
						<h2 className={style.title}>Номер для заказа</h2>
						<a className={style.phone} href="tel:+79999999999">
							<img src={PhoneSvg} alt="" />
							<span>+7(979)999-99-99</span>
						</a>
					</div>
					<div className={style.contact}>
						<h2 className={classNames(style.title, style.title_sn)}>Мы в соцсетях</h2>
						<ul className={style.list}>
							<li className={style.item}>
								<a href="#" className={style.sn} aria-label="группа в вк">
									<img src={VkSvg} alt="" />
								</a>
							</li>
							<li className={style.item}>
								<a href="#" className={style.sn} aria-label="канал в telegram">
									<img src={TelegramSvg} alt="" />
								</a>
							</li>
						</ul>
					</div>
				</address>
				<div className={style.development}>
					<p>&copy; YouMeal, 2023</p>
					<p>
						Design: <a href="#">Anastasia Ilina</a>
					</p>
					<p>
						Developer: <a href="mailto:workfids23@gmail.com">Dmitry Fids</a>
					</p>
				</div>
			</div>
		</Container>
	</footer>
);
