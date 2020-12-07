import React, {useState} from 'react';
import classnames from 'classnames';
import { Tabs } from 'antd';
import {CONFIG} from '../../utils/config'
import styles from './Contacts.module.scss'
import useFetch from '../../hooks/useFetch'
import ContactItem from '../ContactItem'

const { TabPane } = Tabs;

const Contacts = () => {

	const [userCard, setUserCard] = useState({});

	const URL = `${CONFIG.userUrl}/?results=${CONFIG.numberCards}`

	const {
		response,
		isLoading
	} = useFetch(URL, true)


	const handleContactItem = (id) => {
		const keys = Object.keys(userCard)
		if (keys[0] === id)
			return

		setUserCard(prevShownComments => ({
			[id]: !prevShownComments[id]
		}));
	}

	const closeUserCard = () => {
		setUserCard({});
	}


	const rootClass = classnames(
		{
			[styles.contacts]: true,
		},
	);

	return (
		<div className={rootClass}>
			<h4 className={styles.title}>
				{CONFIG.title}
			</h4>

			{!isLoading ? (
				<Tabs
					type="card" defaultActiveKey="1"
				>
					{response.map(pane => (
						<TabPane tab={
							<div className={styles.tabItem}>
								<span className={styles.tabItemChar}>{pane.key}</span> <span className={styles.tabItemLength}> {pane.results.length}</span>
							</div>
						} disabled={pane.results.length === 0} key={pane.key}>
							<ul className={styles.listWrapper}>
								{pane.results.map((item, index) => {
									return (
										<li key={index} onClick={() => handleContactItem(item.login.uuid)}>
											<span>{item.name.last}, {item.name.first}</span>

											{userCard[item.login.uuid] ?
												<ContactItem
												userInfo={item}
												closeUserCard={closeUserCard}
												/> : null}
										</li>
									)
								})}
							</ul>
						</TabPane>
					))}
				</Tabs>
			) : (
				<p>Loading ...</p>
			)}

		</div>
	);
};

export default Contacts;
