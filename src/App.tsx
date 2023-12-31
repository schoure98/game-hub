import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";

const App = () => {
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
		>
			<GridItem area={"nav"}>
				<Navbar></Navbar>
			</GridItem>
			<Show above="lg">
				<GridItem area={"aside"}>Aside</GridItem>
			</Show>
			<GridItem area={"main"}>
				<GameGrid></GameGrid>
			</GridItem>
		</Grid>
	);
};

export default App;
