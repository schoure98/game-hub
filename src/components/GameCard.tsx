import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";

interface Props {
	games: Games;
}
const GameCard = ({ games }: Props) => {
	return (
		<Card borderRadius={10} overflow='hidden'> 
			<Image src={games.background_image}></Image>
			<CardBody>
				<Heading fontSize={"2xl"}>{games.name}</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;
