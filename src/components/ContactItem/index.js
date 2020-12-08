import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './ContactItem.module.scss'
import {CloseOutlined} from "@ant-design/icons";
import {makeStringtoUpperCase} from '../../utils/helper'

const ContactItem = props => {

	const {userInfo} = props;

	const handleCloseUserCard = () => {
		props.closeUserCard()
	}

	const rootClass = classnames(
		{
			[styles.contactCard]: true,
		},
	);

	return (
		<div className={rootClass}>
			<span className={styles.closeIcon} onClick={handleCloseUserCard}>
				<CloseOutlined />
			</span>
			<div className={styles.photo}>
				<img src={userInfo.picture.medium} alt={`${userInfo.name.first} ${userInfo.name.last}`}/>
			</div>
			<div className={styles.information}>

				<div className={styles.fullname}>
					{makeStringtoUpperCase(userInfo.name.first)}, {userInfo.name.last}
				</div>

				<div>
					<label>e-mail</label>
					<span>{userInfo.email}</span>
				</div>

				<div>
					<label>phone</label>
					<span>{userInfo.phone}</span>
				</div>

				<div>
					<label>street</label>
					<span>{userInfo.location.street.number} {userInfo.location.street.name}</span>
				</div>

				<div>
					<label>city</label>
					<span>{userInfo.location.city}</span>
				</div>

				<div>
					<label>state</label>
					<span>{userInfo.location.state}</span>
				</div>

				<div>
					<label>postcode</label>
					<span>{userInfo.location.postcode}</span>
				</div>

			</div>
			<div className={styles.username}>
				<label>
					username
				</label>
				{userInfo.login.username}
			</div>
		</div>
	);
};

ContactItem.propTypes = {
	userInfo : PropTypes.object.isRequired,
	closeUserCard : PropTypes.func.isRequired
};

export default ContactItem;

