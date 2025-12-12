import { Loader } from "@/shared/ui"
import dynamic from "next/dynamic"

const Home = dynamic(() => import('@/screens/Home/Home').then(mod => mod.Home), {
	loading: () => <Loader/>,
})

export default function Page() {
	return (
		<Home/>
	)
}
