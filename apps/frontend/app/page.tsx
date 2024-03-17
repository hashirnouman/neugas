import Button from "@/components/atoms/button";
import Text from "@/components/atoms/text";
import Image from "next/image";

export default function Home() {
	return (
		<main>
			<Text p>helo</Text>
			<Button isDisabled={false} variant="primary">
				hello
			</Button>

			<h1>hello</h1>
		</main>
	);
}
