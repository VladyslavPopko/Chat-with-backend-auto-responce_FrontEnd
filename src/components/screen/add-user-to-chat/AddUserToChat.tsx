import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { UseFindUsers } from '../../../api/user/UseFindUsers'
import { IFormSearch } from '../../../types/form.types'
import { IUser } from '../../../types/user.types'
import Button from '../../ui/button/Button'
import Input from '../../ui/input/Input'
import styles from './AddUserToChat.module.scss'
import UserList from './user-list/UserList'

const AddUserToChat = () => {
	const [isSearchValue, setIsSearchValue] = useState<boolean>(false)
	const [searchValue, setSearchValue] = useState<IUser[]>()
	const { mutate } = UseFindUsers()

	const { register, handleSubmit, watch } = useForm<IFormSearch>()
	const [users, setUsers] = useState<IUser[]>()

	const searchValueForm = watch('name')

	useEffect(() => {
		if (searchValueForm?.length) {
			mutate(
				{ name: searchValueForm },
				{
					onSuccess: responseData => {
						setIsSearchValue(true)
						setSearchValue(responseData)
					},
				}
			)
		} else {
			setIsSearchValue(false)
		}
	}, [searchValueForm])

	const onSubmit = () => {}

	const addtoChat = () => {
		const data = {}
	}

	return (
		<div className={styles.section}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Input<IFormSearch>
					required={true}
					register={register}
					registerName='name'
					name='name'
					placeholder='Search or start new chat'
					imgLeft='/images/search.svg'
				/>
				{isSearchValue && (
					<UserList
						setUsers={setUsers}
						users={users}
						setIsSearchValue={setIsSearchValue}
						searchValue={searchValue}
					/>
				)}
			</form>
			<div className={styles.section_list}>
				{users?.map(user => (
					<div className={styles.profile} key={user.id}>
						<img
							src={user?.avatar ? user.avatar : '/images/avatar.svg'}
							draggable={false}
							className={styles.img}
						/>
						<h3>
							{user.name} {user.surname}
						</h3>
					</div>
				))}
			</div>
			<Button text='Add to chat' onClick={addtoChat} />
		</div>
	)
}

export default AddUserToChat
