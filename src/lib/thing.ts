const ThingLength = 3;
type Thing = [number, number, number];
type ThingComparator = (cond_i: number, cond_v: number, sol_i: number, sol_v: number) => boolean;

const checkCond = (condition: Thing, solution: Thing, cmp: ThingComparator) => {
	let count = 0;
	for (let [cond_i, cond_v] of condition.entries())
		for (let [sol_i, sol_v] of solution.entries()) if (cmp(cond_i, cond_v, sol_i, sol_v)) count++;
	return count;
};

const correctButWronglyPlaced: ThingComparator = (cond_i, cond_v, sol_i, sol_v) =>
	cond_v == sol_v && cond_i != sol_i;

const correctAndWellPlaced: ThingComparator = (cond_i, cond_v, sol_i, sol_v) =>
	cond_v == sol_v && cond_i == sol_i;

const anythingCorrect: ThingComparator = (_cond_i, cond_v, _sol_i, sol_v) => cond_v == sol_v;

const trySolution = (
	solution: Thing,
	cond1: Thing,
	cond2: Thing,
	cond3: Thing,
	cond4: Thing,
	cond5: Thing,
) => {
	// One Number Is Correct But Wrongly Placed
	const cond1_count = checkCond(cond1, solution, correctButWronglyPlaced);
	if (cond1_count != 1) {
		console.log(
			`'One Number Is Correct But Wrongly Placed' with ${cond1.join()} failed for ${solution.join()}`,
		);
		return false;
	}

	// Two Numbers Are Correct But Wrongly Placed
	const cond2_count = checkCond(cond2, solution, correctButWronglyPlaced);
	if (cond2_count != 2) {
		console.log(
			`'Two Numbers Are Correct But Wrongly Placed' with ${cond2.join()} failed for ${solution.join()}`,
		);
		return false;
	}

	// One Number Is Correct And Well Placed
	const cond3_count = checkCond(cond3, solution, correctAndWellPlaced);
	if (cond3_count != 1) {
		console.log(
			`'One Number Is Correct And Well Placed' with ${cond3.join()} failed for ${solution.join()}`,
		);
		return false;
	}

	// One Number is Correct But Wrongly Placed
	const cond4_count = checkCond(cond4, solution, correctButWronglyPlaced);
	if (cond4_count != 1) {
		console.log(
			`'One Number Is Correct But Wrongly Placed' with ${cond4.join()} failed for ${solution.join()}`,
		);
		return false;
	}

	// Nothing Is Correct
	const cond5_count = checkCond(cond5, solution, anythingCorrect);
	if (cond5_count != 0) {
		console.log(`'Nothing Is Correct' with ${cond5.join()} failed for ${solution.join()}`);
		return false;
	}

	console.log(`${solution.join()} passed`);
	return true;
};

const findSolutions = (cond1: Thing, cond2: Thing, cond3: Thing, cond4: Thing, cond5: Thing) => {
	let solutions: Thing[] = [];

	for (let x = 0; x < 10; x++) {
		for (let y = 0; y < 10; y++) {
			for (let z = 0; z < 10; z++) {
				if (trySolution([x, y, z], cond1, cond2, cond3, cond4, cond5)) solutions.push([x, y, z]);
			}
		}
	}
	return solutions;
};

export { ThingLength, findSolutions };
export type { Thing };
