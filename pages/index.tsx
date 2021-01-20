import { Fragment, useState } from 'react'
import Head from '../components/Head'
import { Button } from '../components/atoms/Button'
import { Footer, NavigationBar } from '../components/organisms'
import { PageTemplate } from '../components/templates'

const Home = () => {
	const [count, setCount] = useState(10)
	const add = () => {
		let prev = count
		setCount(++prev)
	}

	const dec = () => {
		let prev = count
		setCount(--prev)
	}
	return (
		<Fragment>
			<Head title={'Home'} />
			<PageTemplate navigation={<NavigationBar />} footer={<Footer />}>
				<p>Doc</p>
				<p>{count}</p>
				<Button onClick={() => add()} />
				<Button onClick={() => dec()} />
			</PageTemplate>
		</Fragment>
	)
}

export default Home
