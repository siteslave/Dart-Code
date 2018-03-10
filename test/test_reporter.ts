import * as mocha from "mocha";

export class ConsoleAndJsonReporter {
	constructor(runner: any, config: any) {
		const specReporter = new (mocha.reporters.Spec as any)(runner, config);
		mocha.reporters.Base.call(this, runner);
		let passes = 0;
		let failures = 0;

		runner.on("pass", (test: mocha.ITest) => {
			passes++;
			// console.log("pass: %s", test.fullTitle());
		});

		runner.on("fail", (test: any, err: any) => {
			failures++;
			// console.log("fail: %s -- error: %s", test.fullTitle(), err.message);
		});

		runner.on("end", () => {
			console.log("Custom Reporter: %d/%d", passes, passes + failures);
			// process.exit(failures);
		});
	}
}
